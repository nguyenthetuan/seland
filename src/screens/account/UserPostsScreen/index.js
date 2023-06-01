import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import DateRangePicker from 'rn-select-date-range';

import {
  Button,
  Header,
  Input,
  NoResults,
  Screen,
  Select,
} from '../../../components';
import { COLOR_BLUE_1, COLOR_WHITE } from '../../../constants';
import {
  getListRealEstatesUser,
  selectUserRealEstates,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import { UserPost } from '../components';
import ModalFilter from './components/ModalFilter/index.js';
import styles from './styles';

const UserPostsScreen = () => {
  const route = useRoute();
  const { goBack, reset } = useNavigation();
  const filterRef = useRef();

  const dispatch = useDispatch();
  const { data: userRealEstates, loading } = useSelector(selectUserRealEstates);
  const { t } = useTranslation();
  const [status, setStatus] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [dateRange, setDateRange] = useState({
    dateStart: '',
    dateEnd: '',
  });
  const onOpenFilter = () => {
    filterRef.current.onOpen();
  };

  useEffect(() => {
    dispatchThunk(dispatch, getListRealEstatesUser());
  }, [dispatch]);

  const statuses = [
    {
      label: 'all',
      value: -1,
    },
    {
      label: 'pendingReview',
      value: 3,
    },
    {
      label: 'publicPosts',
      value: 1,
    },
    {
      label: 'hidden',
      value: 6,
    },
    {
      label: 'rejected',
      value: 5,
    },
    {
      label: 'expired',
      value: 0,
    },
    {
      label: 'privatePosts',
      value: 2,
    },
  ];

  const calendar = [
    {
      label: 'lastWeek',
      value: 'week',
    },
    {
      label: 'last30Days',
      value: 'month',
    },
    {
      label: 'dateRange',
      value: 'date_range',
    },
  ];

  const sortBy = [
    {
      label: 'newest',
      value: 'createdAt',
    },
    {
      label: 'priceAsc',
      value: 'price_asc',
    },
    {
      label: 'priceDesc',
      value: 'price_desc',
    },
    {
      label: 'areaAsc',
      value: 'area_asc',
    },
    {
      label: 'areaDesc',
      value: 'area_desc',
    },
    {
      label: 'hasVideos',
      value: 'videos',
    },
    {
      label: 'pricePerM2Asc',
      value: 'price_per_m_asc',
    },
    {
      label: 'pricePerM2Desc',
      value: 'price_per_m_desc',
    },
  ];

  const handleBack = () => {
    if (route?.params?.type === 'createPost') {
      reset({
        index: 0,
        routes: [{ name: 'AccountNavigator' }],
      });
    } else {
      goBack();
    }
  };

  const { control, getValues, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      date: 'week',
      sort_by: 'createdAt',
    },
  });

  const onSubmit = data =>
    dispatchThunk(dispatch, getListRealEstatesUser(data));

  const submit = handleSubmit(onSubmit);

  const handleSelectDate = selectedItem => {
    if (selectedItem.value === 'date_range') setModalVisible(true);
    else submit();
  };

  const hideDateRangePicker = () => setModalVisible(false);

  const handleConfirmDateRange = () => {
    dispatchThunk(
      dispatch,
      getListRealEstatesUser({
        title: getValues().title,
        sort_by: getValues().sort_by,
        dateRange,
      })
    );
    hideDateRangePicker();
  };

  const handleSelectDateRange = selectedDateRange => {
    setDateRange({
      dateStart: selectedDateRange.firstDate,
      dateEnd: selectedDateRange.secondDate,
    });
  };

  return (
    <>
      <Loading
        color={COLOR_BLUE_1}
        textContent={t('common.loading')}
        textStyle={styles.loadingText}
        visible={loading}
      />
      <Modal
        isVisible={modalVisible}
        onBackButtonPress={hideDateRangePicker}
        onBackdropPress={hideDateRangePicker}
      >
        <View style={styles.dateRangePicker}>
          <DateRangePicker
            blockSingleDateSelection
            clearBtnTitle={t('button.cancel')}
            confirmBtnTitle={t('button.confirm')}
            ld="vi"
            onClear={hideDateRangePicker}
            onConfirm={handleConfirmDateRange}
            onSelectDateRange={handleSelectDateRange}
            responseFormat="YYYY-MM-DD"
          />
        </View>
      </Modal>
      <View style={[styles.flex, styles.whiteBackground]}>
        <Header
          title={t('header.userPosts')}
          onPress={handleBack}
        />
        <FlatList
          style={styles.postButtons}
          data={statuses}
          horizontal
          renderItem={({ item: { label, value } }) => (
            <Button
              buttonStyle={[styles.marginHorizontal, styles.postButton]}
              onPress={() => {
                dispatchThunk(
                  dispatch,
                  value >= 0
                    ? getListRealEstatesUser({
                        'real_estate_type[]': value,
                      })
                    : getListRealEstatesUser()
                );
                setStatus(value);
              }}
              outline={value !== status}
              title={t(`button.${label}`)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Screen noSafeArea>
          <View style={styles.searchFilter}>
            <View style={styles.search}>
              <Input
                control={control}
                inputContainerStyle={styles.searchInput}
                name="title"
                onChangeText={submit}
                placeholder={t('input.searchByCodeTitle')}
                rightIcon={<Icon name="search" />}
              />
            </View>
            <View style={styles.flex}>
              <Select
                buttonStyle={styles.selectButton}
                control={control}
                data={calendar.map(item => ({
                  ...item,
                  label: t(`select.${item?.label}`),
                }))}
                name="date"
                onSelect={handleSelectDate}
                rowStyle={styles.selectButton}
              />
            </View>
            <Button
              buttonStyle={styles.filterButton}
              icon={
                <Icon
                  color={COLOR_WHITE}
                  name="filter-alt"
                  size={16}
                />
              }
              title={t('button.filter')}
              onPress={onOpenFilter}
            />
          </View>
          <View style={styles.sort}>
            <Select
              buttonStyle={styles.selectButton}
              control={control}
              data={sortBy.map(item => ({
                ...item,
                label: t(`select.${item?.label}`),
              }))}
              defaultButtonText={t('select.newest')}
              name="sort_by"
              onSelect={handleSubmit(onSubmit)}
              rowStyle={styles.selectButton}
            />
          </View>
          <FlatList
            style={[styles.list, styles.marginHorizontal]}
            data={userRealEstates}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <UserPost item={item} />}
            ListEmptyComponent={!loading && <NoResults />}
          />
        </Screen>
      </View>
      <ModalFilter ref={filterRef} />
    </>
  );
};

export default UserPostsScreen;
