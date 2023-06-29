import { useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, Pressable, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import DateRangePicker from 'rn-select-date-range';
import { useNavigation } from '@react-navigation/native';

import { Button, Header, Input, NoResults, Select } from '../../../components';
import { COLORS } from '../../../constants';
import {
  getListRealEstatesUser,
  selectUserRealEstates,
  deleteRealEstatesUser,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import { UserPost } from '../components';
import styles from './styles';
import ModalFilterScreen from './components/ModalFilter';
import PopupConfirm from '../../../components/common/PopupConfirm';

const UserPostsScreen = () => {
  const route = useRoute();
  const filterRef = useRef<any>();
  const [loadingList, setLoadingList] = useState(false);
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const { data: userRealEstates } = useSelector(selectUserRealEstates);
  const { t } = useTranslation();
  const [status, setStatus] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [dateRange, setDateRange] = useState({
    dateStart: '',
    dateEnd: '',
  });
  const [dataUserRealEstates, setDataUserRealEstates] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const confirmCancelPaymentRef = useRef();
  const [idItemDelete, setIdItemDelete] = useState('');
  const [total, setTotal] = useState();
  const onOpenFilter = () => {
    filterRef.current.onOpen();
  };

  const { control, getValues, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: '',
      date: 'week',
      sort_by: 'createdAt',
      real_estate_type_id: null,
      area_range_id: null,
      province_id: null,
      type: null,
      status: '',
      demand_id: null,
    },
  });

  const onGetListRealEstatesUser = () => {
    // setIsLoading(true);
    const callback = (res: any) => {
      // setIsLoading(false);
      // if (dataUserRealEstates.length > 0) {
      //   setDataUserRealEstates([...dataUserRealEstates, ...res]);
      // } else {
      //   setDataUserRealEstates(res);
      // }
    };

    dispatchThunk(
      dispatch,
      getListRealEstatesUser({
        sort_by: 'createdAt',
        page: page,
        setTotal: setTotal,
      }),
      callback
    );
  };

  const onGetReFresh = () => {
    setIsLoading(true);
    const { sort_by } = getValues();

    const callback = (res: any) => {
      setIsLoading(false);
      setDataUserRealEstates(res);
    };

    dispatchThunk(
      dispatch,
      getListRealEstatesUser({
        sort_by,
        page: page,
        status,
        setTotal: setTotal,
      }),
      callback
    );
  };

  const onLoadMore = () => {
    if (total === dataUserRealEstates.length) return;
    setPage(page + 1);
  };

  useEffect(() => {
    onGetListRealEstatesUser();
  }, []);

  const handleSelectStatus = (value: number) => {
    dispatchThunk(
      dispatch,
      value >= 0
        ? getListRealEstatesUser({
            status: value,
            setTotal: setTotal,
          })
        : getListRealEstatesUser({
            sort_by: 'createdAt',
            setTotal: setTotal,
          })
    );
    setStatus(value);
  };

  useEffect(() => {
    if (route?.params?.status) handleSelectStatus(route?.params?.status);
  }, [route?.params?.status]);

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

  const onSubmit = async (data: any) => {
    const parmas = { ...data, title: data?.title?.trim(), setTotal };
    setLoadingList(true);

    try {
      await dispatchThunk(dispatch, getListRealEstatesUser(parmas));
      setLoadingList(false);
    } catch (error) {
      setLoadingList(false);
    }
  };

  const submit = handleSubmit(onSubmit);

  const handleSelectDate = (selectedItem: { value?: string }) => {
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
        setTotal: setTotal,
      })
    );
    hideDateRangePicker();
  };

  const handleSelectDateRange = (selectedDateRange: {
    firstDate: string;
    secondDate: string;
  }) => {
    setDateRange({
      dateStart: selectedDateRange.firstDate,
      dateEnd: selectedDateRange.secondDate,
    });
  };

  const renderHeader = () => {
    return (
      <View>
        <View style={styles.searchFilter}>
          <View style={styles.search}>
            <Input
              control={control}
              inputContainerStyle={styles.searchInput}
              name="title"
              onSubmitEditing={submit}
              returnKeyType="search"
              placeholder={t('input.searchByCodeTitle')}
              rightIcon={
                <Pressable onPress={submit}>
                  <Icon name="search" />
                </Pressable>
              }
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
                color={COLORS.WHITE}
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
      </View>
    );
  };

  if (loadingList) {
    return (
      <Loading
        color={COLORS.BLUE_1}
        textContent={t('common.loading') || ''}
        textStyle={styles.loadingText}
        visible={loadingList}
      />
    );
  }

  const deleteSuccess = () => {
    onGetReFresh();
  };

  const handleConfirm = () => {
    try {
      if (idItemDelete) {
        dispatchThunk(
          dispatch,
          deleteRealEstatesUser(idItemDelete),
          deleteSuccess
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {};
  const deletePost = (id: any) => {
    setIdItemDelete(id);
    confirmCancelPaymentRef?.current.openPopup();
  };

  return (
    <>
      <View style={[styles.flex, styles.whiteBackground]}>
        <Header title={t('header.userPosts')} />
        <View>
          <FlatList
            style={styles.listButton}
            data={statuses}
            horizontal
            renderItem={({ item: { label, value } }) => (
              <Button
                buttonStyle={[styles.marginHorizontal, styles.postButton]}
                onPress={() => handleSelectStatus(value)}
                outline={value !== status}
                title={t(`button.${label}`)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `listButton-${index}`}
          />
        </View>
        <FlatList
          style={styles.list}
          data={userRealEstates}
          keyExtractor={(_, index) => `itemPost${index}`}
          renderItem={({ item }) => (
            <UserPost
              item={item}
              deletePost={deletePost}
            />
          )}
          ListHeaderComponent={renderHeader()}
          ListEmptyComponent={loadingList ? null : <NoResults />}
          ListFooterComponent={
            isLoading ? <ActivityIndicator size={'small'} /> : null
          }
          // onEndReached={dataUserRealEstates.length > 0 ? onLoadMore : null}
        />
      </View>
      <View>
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
        <ModalFilterScreen
          ref={filterRef}
          control={control}
          setValueHookForm={setValue}
          onPressConfirm={submit}
        />
        <PopupConfirm
          ref={confirmCancelPaymentRef}
          onPressButtonRight={handleConfirm}
          onPressButtonLeft={handleCancel}
          titleButtonLeft="Huỷ"
          titleButtonRight="Xác nhận"
          label="Bạn có muốn xoá tin không!"
        />
      </View>
    </>
  );
};

export default UserPostsScreen;
``;
