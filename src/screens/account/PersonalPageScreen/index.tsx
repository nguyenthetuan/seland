import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, SCREENS } from '../../../constants';
// import styles from './styles';
import { Text } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import {
  ArrowLeft,
  IconDropdown,
  IconMapView,
  IconMessage,
  IconPhone,
  IconPhoneGreen,
  IconShare,
  IconStar,
  StatusSuccess,
} from '../../../assets';
import {
  clearDistricts,
  clearWards,
  getAllFilter,
  getDistricts,
  getProvinces,
  getWards,
  selectCommon,
  selectPosts,
  selectRealEstates,
  selectUser,
} from '../../../features';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Icon } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { Button, DashedButton, NoResults, Select } from '../../../components';
import { useForm } from 'react-hook-form';
import { dispatchThunk } from '../../../utils';
import TypeHousing from '../../home/FilterScreen/screen/components/TypeHousing';
import ItemRealEstatesAccount from './components/ItemRealEstatesAccount';
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

const typeTrade = [
  {
    label: 'Mua',
    value: 'buy',
  },
  {
    label: 'Bán',
    value: 'sell',
  },
];

const initValues = {
  district: '',
  ward: '',
  address: '',
  typeHousing: [],
  priceRange: [0, 1],
  acreage: [0, 1],
  compass: [],
  legalDocuments: [],
  location: [],
  bedroom: [],
  bathroom: [],
  numberFloors: [],
  province_id: null,
  ward_id: null,
  district_id: null,
  demand_id: null,
};

const projectOptions = [
  {
    label: 'Dự án 1',
    value: 1,
  },
];

const PersonalPageScreen = () => {
  const { goBack, navigate } = useNavigation();

  const { data: user } = useSelector(selectUser);

  const { t } = useTranslation();

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: initValues,
  });

  const {
    data: listPosts,
    loading: loadingListPost,
    real_estate_type,
  } = useSelector(selectRealEstates);

  const onSelect = (value: any) => {
    console.log('🚀 dataFilter', value);
  };

  const submitFilter = (
    val: { label: string; value: string | number },
    fieldName: string
  ) => {
    const paramsFilter: any = { ...getValues(), [fieldName]: val.value };
    handleSubmit(onSelect(paramsFilter) as any);
  };

  const { provinces, districts, wards } = useSelector(selectCommon);

  const dispatch = useDispatch();

  const emptyProvinceOption = {
    label: t('select.province'),
    value: null,
  };
  const emptyDistrictOption = {
    label: t('select.district'),
    value: null,
  };
  const emptyWardOption = {
    label: t('select.ward'),
    value: null,
  };

  const provinceOptions = [emptyProvinceOption, ...provinces];
  const districtOptions = [emptyDistrictOption, ...districts];
  const wardOptions = [emptyWardOption, ...wards];

  const fetchDistricts = (params: any, callback?: undefined) =>
    dispatchThunk(dispatch, getDistricts(params), callback);

  const fetchWards = (params: { province_code: any; district_code: any }) =>
    dispatchThunk(dispatch, getWards(params));

  const handleSelectProvince = (selectedItem: any) => {
    setValue('district_id', null);
    setValue('ward_id', null);

    const { value } = selectedItem;

    if (value) {
      fetchDistricts({
        province_code: selectedItem.value,
      });
    } else {
      dispatch(clearDistricts());
      dispatch(clearWards());
    }
  };

  const handleSelectDistrict = (selectedItem: any) => {
    setValue('ward_id', null);
    const { value } = selectedItem;
    if (value) {
      fetchWards({
        province_code: getValues().province_id,
        district_code: selectedItem.value,
      });
    } else {
      dispatch(clearWards());
    }
  };

  const refresh = async () => {
    await Promise.all([dispatchThunk(dispatch, getProvinces())]);
  };

  useEffect(() => {
    refresh();
  }, []);

  const { demands } = useSelector(selectPosts);

  const demansOption = demands.map(
    (demandItem: { value: string; id: any }) => ({
      label: demandItem?.value,
      value: demandItem?.id,
    })
  );

  const onSubmit = (params: any) => {
    console.log('paramss====', params);
  };

  const typeHousingOptions = real_estate_type.map(
    (type: { value: string; id: string | number }) => ({
      title: type.value,
      value: type.id,
    })
  );

  useEffect(() => {
    dispatchThunk(dispatch, getAllFilter());
  }, [dispatch]);

  const onSelectTypeHousing = (val: any) => {
    const paramsFilter = { ...getValues(), typeHousing: val };
    handleSubmit(onSelect(paramsFilter) as any);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapHeader}>
          <TouchableOpacity
            style={[
              styles.wrapHeaderIcon,
              {
                height: 24,
                width: 24,
                justifyContent: 'center',
                marginRight: 0,
              },
            ]}
            onPress={goBack}
          >
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.title}>Trang cá nhân</Text>
        </View>

        <Image
          style={styles.image}
          source={{
            uri: 'https://images.autofun.vn/file1/23a87a09c5fa4ea0be9f85e2ccaade5c_560x372.jpg',
          }}
        />

        <View style={styles.header}>
          <View style={styles.boxHeaderLeft}>
            <Avatar
              containerStyle={styles.boxAvatar}
              renderPlaceholderContent={
                <Text style={styles.text}>{user?.name?.charAt(0) || 'Q'}</Text>
              }
              rounded
              size={112}
            >
              <Avatar.Accessory
                name="photo-camera"
                size={24}
                style={styles.camera}
              />
            </Avatar>
          </View>

          <View style={styles.boxInfo}>
            <View style={styles.wrapBoxName}>
              <View style={styles.boxName}>
                {/* <Text style={styles.name}>{user?.name}</Text> */}
                <Text style={styles.name}>Mr.ABC</Text>
                <Icon
                  name="border-color"
                  size={20}
                />
              </View>
              <IconShare />
            </View>

            <View style={styles.boxVerify}>
              <Text style={styles.verify}>Đã xác thực</Text>
              <View style={styles.wrapVerifyIcon}>
                <StatusSuccess
                  width={14}
                  height={14}
                />
              </View>
            </View>

            <Text style={styles.joinText}>Tham gia ngày 09/01/2023</Text>

            <View style={styles.boxButton}>
              <View style={styles.wrapButton}>
                <Button
                  outline
                  title={'Gọi điện'}
                  color={COLORS.GREEN_1}
                  buttonStyle={styles.buttonCall}
                  icon={<IconPhoneGreen />}
                />
              </View>

              <View style={styles.wrapButton}>
                <Button
                  outline
                  title={'Nhắn tin'}
                  color={COLORS.BLUE_3}
                  buttonStyle={styles.buttonMess}
                  icon={<IconMessage />}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.wrapFollow}>
            <Select
              data={[
                {
                  label: 'Test',
                  value: '1',
                },
              ]}
              name="follow"
              control={control}
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
              renderDropdownIcon={IconDropdown}
              defaultButtonText={'Theo dõi'}
            />
          </View>

          <View style={styles.wrapStar}>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </View>
        </View>

        <View style={[styles.row, styles.justifyBetween, styles.mb10]}>
          <Text>
            Có <Text style={styles.boldText}>1000</Text> người theo dõi
          </Text>
          <Text>
            <Text style={styles.boldText}>4.4</Text>/1200 đánh giá
          </Text>
        </View>

        <View style={[styles.row, styles.mb10]}>
          <Text>
            Hiện có <Text style={styles.boldText}>100</Text> tin đăng
          </Text>
        </View>

        <View style={styles.row}>
          <View style={styles.sortByWrap}>
            <Select
              buttonStyle={[styles.buttonSelect]}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={sortBy.map(item => ({
                ...item,
                label: t(`select.${item?.label}`),
              }))}
              defaultButtonText={
                t('select.sortBy', {
                  sortBy: t('select.newest'),
                }) || ''
              }
              name="sort_by"
              onSelect={(val: any) => submitFilter(val, 'sort_by')}
            />
          </View>
          <View style={styles.viewInMapWrap}>
            <DashedButton
              title={'Xem trên bản đồ'}
              icon={<IconMapView />}
            />
          </View>
        </View>

        <View>
          <View style={styles.filter}>
            <TouchableOpacity
              style={styles.btnFilter}
              onPress={() => {
                navigate(SCREENS.FILTER_SCREEN);
              }}
            >
              <Icon name="filter-list" />
            </TouchableOpacity>

            <View style={styles.boxRealEstate}>
              <Select
                buttonStyle={[styles.buttonSelect]}
                buttonTextStyle={styles.textButtonSelect}
                rowStyle={styles.buttonSelect}
                rowTextStyle={styles.rowTextStyle}
                control={control}
                data={typeTrade}
                defaultButtonText={'Loại giao dịch'}
                name="typeTrade"
                onSelect={(val: any) => submitFilter(val, 'typeTrade')}
              />
            </View>

            <View style={styles.areaRange}>
              <Select
                buttonStyle={[styles.buttonSelect]}
                buttonTextStyle={styles.textButtonSelect}
                rowStyle={styles.buttonSelect}
                rowTextStyle={styles.rowTextStyle}
                control={control}
                data={projectOptions}
                defaultButtonText={t('common.project') || ''}
                name="project_id"
                onSelect={(val: any) => submitFilter(val, 'project_id')}
              />
            </View>
            <View style={styles.boxStatus}>
              <Select
                buttonStyle={styles.buttonSelect}
                buttonTextStyle={styles.textButtonSelect}
                rowStyle={styles.buttonSelect}
                rowTextStyle={styles.rowTextStyle}
                control={control}
                data={demansOption}
                defaultButtonText={t('select.type') || ''}
                name="demand_id"
                onSelect={(val: any) => submitFilter(val, 'demand_id')}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.address}>
              <Select
                buttonStyle={styles.buttonAddress}
                buttonTextStyle={styles.textButtonSelect}
                rowStyle={styles.buttonSelect}
                rowTextStyle={styles.rowTextStyle}
                control={control}
                data={provinceOptions}
                defaultButtonText={t('select.province') || ''}
                name="province_id"
                onSelect={(val: any) => {
                  handleSelectProvince(val);
                  submitFilter(val, 'province_id');
                }}
              />
            </View>
            <View style={styles.address}>
              <Select
                buttonStyle={styles.buttonAddress}
                buttonTextStyle={styles.textButtonSelect}
                rowStyle={styles.buttonSelect}
                rowTextStyle={styles.rowTextStyle}
                control={control}
                data={districtOptions}
                defaultButtonText={t('select.province') || ''}
                name="district_id"
                onSelect={(val: any) => {
                  handleSelectDistrict(val);
                  submitFilter(val, 'district_id');
                }}
              />
            </View>
            <View style={styles.address}>
              <Select
                buttonStyle={styles.buttonAddress}
                buttonTextStyle={styles.textButtonSelect}
                rowStyle={styles.buttonSelect}
                rowTextStyle={styles.rowTextStyle}
                control={control}
                data={wardOptions}
                defaultButtonText={t('select.ward')}
                name="ward_id"
                onSelect={(val: any) => submitFilter(val, 'ward_id')}
              />
            </View>
          </View>

          {/* <View style={styles.row}>
          <View style={styles.wrapTypeHousing}>
            <Text style={styles.textTypeHousing}>
              {t('select.typeHousing')}
            </Text>
            <TypeHousing
              options={typeHousingOptions}
              type={'typeHousing'}
              control={control}
              name="typeHousing"
              multipleChoice
              onSelectTypeHousing={onSelectTypeHousing}
            />
          </View>
        </View> */}
        </View>

        <FlatList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={listPosts}
          renderItem={({ item }) => <ItemRealEstatesAccount item={item} />}
          keyExtractor={(_, index) => `itemPost${index}`}
          ListEmptyComponent={loadingListPost ? null : <NoResults />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalPageScreen;

const styles = StyleSheet.create({
  boldText: {
    fontWeight: '700',
  },
  boxAvatar: {
    backgroundColor: COLORS.ORANGE_4,
  },
  boxHeaderLeft: {
    flexDirection: 'row',
    width: 112,
  },
  boxInfo: {
    marginLeft: 15,
    flex: 1,
  },
  boxName: {
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    // width: '100%'
  },
  boxVerify: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonSelect: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 2,
    height: 40,
  },
  rowTextStyle: {
    fontSize: 12,
    lineHeight: 15,
  },
  textButtonSelect: {
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 2,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: 160,
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 20,
    marginTop: 12,
  },
  mb10: {
    marginBottom: 10,
  },
  phone: {
    color: COLORS.GRAY_3,
    fontSize: 14,
  },
  wrapHeader: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 24,
  },
  wrapHeaderIcon: {
    alignSelf: 'center',
    marginRight: 8,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.BLACK_1,
  },
  text: {
    color: COLORS.ORANGE_1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  myPage: {
    color: COLORS.BLUE_3,
    textDecorationLine: 'underline',
    width: 32,
  },
  name: {
    color: COLORS.BLACK_1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    marginRight: 7,
  },
  verify: {
    color: COLORS.GREEN_1,
    marginRight: 8,
    marginTop: 2,
    lineHeight: 24,
  },
  wrapVerifyIcon: {
    alignItems: 'center',
  },
  joinText: {
    color: COLORS.GRAY_3,
    marginTop: 4,
  },
  boxButton: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 6,
  },
  wrapButton: {
    flex: 1,
  },
  buttonCall: {
    marginRight: 8,
  },
  buttonMess: {
    // flex: 1
  },
  wrapBoxName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  camera: {
    right: 12,
  },
  row: {
    flexDirection: 'row',
  },
  wrapFollow: {
    flex: 1,
  },
  select: {
    backgroundColor: COLORS.BLUE_6,
    color: COLORS.WHITE,
    borderRadius: 4,
  },
  selectText: {
    color: COLORS.WHITE,
  },
  wrapStar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  sortByWrap: {
    flex: 1,
    paddingRight: 6,
  },
  viewInMapWrap: {
    flex: 1,
    paddingLeft: 6,
  },
  address: {
    width: '33%',
    marginRight: 4,
  },
  areaRange: {
    marginHorizontal: 5,
    width: '26%',
  },
  boxRealEstate: {
    width: '33%',
  },
  boxStatus: {
    width: '27%',
  },
  btnFilter: {
    alignItems: 'center',
    borderColor: COLORS.GRAY_2,
    borderRadius: 2,
    borderWidth: 1,
    height: 36,
    justifyContent: 'center',
    marginRight: 5,
    width: 36,
  },
  buttonSort: {
    width: '50%',
  },

  buttonAddress: {
    // width: '80%',
    justifyContent: 'center',
    height: 36,
  },

  filter: {
    flexDirection: 'row',
    marginTop: 10,
  },
  wrapTypeHousing: {
    marginBottom: 12,
    width: '100%',
  },
  textTypeHousing: {
    fontSize: 12,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  list: {
    backgroundColor: COLORS.WHITE,
    // paddingHorizontal: 10,
  },
});
