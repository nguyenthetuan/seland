import { useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import DateRangePicker from 'rn-select-date-range';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Button, Header, Input, NoResults, Select } from '../../../components';
import {
  calendar,
  COLORS,
  SCREENS,
  sortBy,
  statuses,
} from '../../../constants';
import {
  getListRealEstatesUser,
  selectUserRealEstates,
  deleteRealEstatesUser,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import styles from './styles';
import ModalFilterScreen from './components/ModalFilter';
import PopupConfirm from '../../../components/common/PopupConfirm';
import ItemWarehouseLand from '../components/ItemWarehouseLand';

const UserPostsScreen = () => {
  const route = useRoute();
  const filterRef = useRef<any>();
  const [loadingList, setLoadingList] = useState(false);
  const { navigate, goBack, reset }: NavigationProp<any, any> = useNavigation();
  const dispatch = useDispatch();
  const { data: userRealEstates, page_size } = useSelector(
    selectUserRealEstates
  );
  const { t } = useTranslation();
  const [status, setStatus] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [dateRange, setDateRange] = useState({
    dateStart: '',
    dateEnd: '',
  });
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const confirmCancelPaymentRef = useRef();
  const [idItemDelete, setIdItemDelete] = useState('');
  const [total, setTotal] = useState();
  const onOpenFilter = () => {
    filterRef.current.onOpen();
  };
  const emptyProject = {
    label: 'default',
    value: null,
  };
  const calendarOptions = [emptyProject, ...calendar];

  const {
    control,
    getValues,
    handleSubmit,
    setValue,
    reset: resetValues,
  } = useForm({
    defaultValues: {
      title: '',
      date: null,
      sort_by: 'createdAt',
      real_estate_type_id: null,
      area_range_id: null,
      province_id: null,
      type: null,
      status: null,
      demand_id: null,
    },
  });

  const onGetListRealEstatesUser = () => {
    const obj = getValues();
    obj.status = status;
    obj.page = page;
    if (status === -1) {
      delete obj?.status;
    }

    setIsLoading(true);

    const getListSuccess = () => {
      setIsLoading(false);
      resetValues();
    };

    dispatchThunk(
      dispatch,
      getListRealEstatesUser({
        ...obj,
      }),
      getListSuccess
    );
  };

  const onLoadMore = () => {
    if (total === page_size) return;
    setPage(page + 1);
  };

  useEffect(() => {
    onGetListRealEstatesUser();
  }, []);

  const handleSelectStatus = (value: number) => {
    const obj = getValues();
    setValue && setValue('status', value);
    obj.status = value;
    obj.page = page;
    if (value === -1) {
      delete obj?.status;
    }
    dispatchThunk(
      dispatch,
      getListRealEstatesUser({
        ...obj,
      })
    );
    setStatus(value);
  };

  useEffect(() => {
    if (route?.params?.status) handleSelectStatus(route?.params?.status);
  }, [route?.params?.status]);

  const onSubmit = async () => {
    const data = getValues();
    if (data.status === -1) {
      delete data?.status;
    }
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
              data={calendarOptions.map(item => ({
                ...item,
                label: t(`select.${item?.label}`),
              }))}
              name="date"
              defaultButtonText={'Mặc định'}
              onSelect={handleSelectDate}
              rowStyle={styles.selectButton}
            />
          </View>
          <TouchableOpacity
            style={styles.btnFilter}
            onPress={onOpenFilter}
          >
            <Icon name="filter-list" />
          </TouchableOpacity>
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

  // if (loadingList) {
  //   return (
  //     <Loading
  //       color={COLORS.BLUE_1}
  //       textContent={t('common.loading') || ''}
  //       textStyle={styles.loadingText}
  //       visible={loadingList}
  //     />
  //   );
  // }

  const deleteSuccess = () => {
    onGetListRealEstatesUser();
    setIdItemDelete('');
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
    confirmCancelPaymentRef.current &&
      confirmCancelPaymentRef?.current?.openPopup();
  };

  const navigateToEdit = (item: { id: number | string }) => {
    navigate(SCREENS.CREATE_POST, { edit: true, id: item.id });
  };

  const handleBack = () => {
    if (route?.params?.type === 'createPost') {
      reset({
        index: 0,
        routes: [{ name: 'BottomTabNavigator' }],
      });
    } else {
      goBack();
    }
  };

  return (
    <>
      <View style={[styles.flex, styles.whiteBackground]}>
        <Header
          title={t('header.userPosts')}
          onPress={handleBack}
        />
        <View>
          <FlatList
            style={styles.listButton}
            data={statuses}
            horizontal
            renderItem={({ item: { label, value } }) => (
              <Button
                buttonStyle={styles.postButton}
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
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(_, index) => `itemPost${index}`}
          renderItem={({ item }) => (
            <ItemWarehouseLand
              item={item}
              onDelete={deletePost}
              onEdit={() => navigateToEdit(item)}
            />
          )}
          ListHeaderComponent={renderHeader()}
          ListEmptyComponent={loadingList ? null : <NoResults />}
          ListFooterComponent={
            isLoading ? <ActivityIndicator size={'small'} /> : null
          }
          onRefresh={onGetListRealEstatesUser}
          onEndReached={
            userRealEstates.length > 3 &&
            page < page_size &&
            isLoading === false
              ? onLoadMore
              : null
          }
          refreshing={isLoading}
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
