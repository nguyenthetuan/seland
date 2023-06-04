import { Icon } from '@rneui/themed';
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Button, Input, Select, Text } from '../../../../components';
import {
  COLOR_BLACK_1,
  COLOR_BLUE_1,
  COLOR_GRAY_2,
  COLOR_GRAY_7,
  COLOR_GRAY_8,
  COLOR_WHITE,
} from '../../../../constants';
import TypeHousing from './components/TypeHousing';
import { SliderComponent } from './components/SliderComponent';
import { SelectComponent } from './components/SelectComponent';
import { Reload } from '../../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCommon,
  getDistricts,
  getProvinces,
  selectPosts,
  getWards,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxRealEstate: {
    flexDirection: 'row',
    flex: 1,
  },
  btnSelect: {
    height: 30,
    marginRight: 8,
    maxWidth: 96,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  buttonClose: {
    backgroundColor: COLOR_BLUE_1,
    borderRadius: 5,
    padding: 6,
  },
  buttonSelect: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 2,
    height: 36,
  },
  district: {
    paddingRight: 4,
    width: '50%',
  },
  filterPost: {
    color: COLOR_GRAY_8,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowTextStyle: {
    fontSize: 12,
    lineHeight: 15,
  },
  scroll: {
    paddingHorizontal: 10,
  },
  textButtonSelect: {
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 2,
  },
  txtFilter: {
    marginBottom: 4,
  },
  txtSelect: {
    fontSize: 14,
    lineHeight: 18,
  },
  ward: {
    paddingLeft: 4,
    width: '50%',
  },
  wrapArea: {
    flexDirection: 'row',
  },
  wrapButton: {
    flexDirection: 'row',
    paddingVertical: 0,
    marginVertical: 0,
  },
  wrapInput: {
    marginVertical: 0,
    paddingVertical: 0,
  },
  wrapFilter: {
    marginTop: 8,
  },
  wrapTypeHousing: {
    marginBottom: 12,
  },
  wrapIcon: {
    marginRight: 12,
  },
});

const optionsPriceRange = [
  { title: 'Dưới 500 triệu', value: '500000000' },
  { title: '500 - 800 triệu', value: '500000000-800000000' },
  { title: '800 triệu - 1 tỷ', value: '800000000-1000000000' },
];

const optionsAcreage = [
  { title: 'Dưới 30m²', value: '30' },
  { title: '30 - 50m²', value: '30-50' },
  { title: '50 - 80m²', value: '50-80' },
];

const optionsLegalDocuments = [
  { title: 'Tất cả', value: 'Tất cả' },
  { title: 'Sổ hồng', value: 'Sổ hồng' },
  { title: 'Sổ đỏ', value: 'Sổ đỏ' },
  { title: 'Tất cả', value: 'Tất cả' },
  { title: 'Sổ hồng', value: 'Sổ hồng' },
  { title: 'Sổ đỏ', value: 'Sổ đỏ' },
];

const optionsLocation = [
  { title: 'Tất cả', value: 'Tất cả' },
  { title: 'Hẻm', value: 'Hẻm' },
  { title: 'Mặt tiền', value: 'Mặt tiền' },
  { title: 'Tất cả', value: 'Tất cả' },
  { title: 'Hẻm', value: 'Hẻm' },
  { title: 'Mặt tiền', value: 'Mặt tiền' },
];

const optionsBedroom = [
  { title: 'Tất cả', value: 'Tất cả' },
  { title: '1', value: '1' },
  { title: '2', value: '2' },
  { title: '3', value: '3' },
  { title: '4', value: '4' },
  { title: '5', value: '5' },
];

const listTypeHousing = [
  'ALL',
  'HOME',
  'STREET_HOUSE',
  'APARTMENT',
  'VILLA',
  'SHOP_HOUSE',
  'PENT_HOUSE',
  'LAND',
  'PROJECT_LAND',
  'OFFICE',
  'FLOOR_PLAN_STORE',
  'WAREHOUSE_FACTORY',
  'HOSTELS_ROOMS',
  'RESORTS_FARMS',
  'OTHER',
];

const listCompass = [
  'SOUTHEAST',
  'NORTHEAST',
  'NORTHWEST',
  'SOUTHWEST',
  'NORTH',
  'SOUTH',
  'EAST',
  'WEST',
];

const initValues = {
  district: '',
  ward: '',
  address: '',
  typeHousing: [],
  priceRange: [0, 500000000],
  acreage: [0, 30],
  compass: [],
  legalDocuments: [],
  location: [],
  bedroom: [],
  bathroom: [],
  numberFloors: [],
}

const Filter = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [showFilter, setShowFilter] = useState(false);

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: initValues,
  });

  const { basicInformation, projects, demands } = useSelector(selectPosts);
  const { provinces, districts, wards } = useSelector(selectCommon);
  const emptyDistrictOption = {
    label: t('select.district'),
    value: null,
  };
  const districtOptions = [emptyDistrictOption, ...districts];

  const realEstateType = [{ label: 'Mua', value: 1 }];

  const onSelect = (value: any) => {
    console.log('🚀 ~ file: index.js:51 ~ onSelect ~ value:', value);
  };

  const onSubmit = (data: any) => {
    console.log("dataFilter ====", data);
  }

  const clearForm = () => {
    Object.entries(initValues).forEach(
      ([key, value]: any) => value && setValue(key, value)
    );
    setValue('address', '');
  }

  const onOpen = () => setShowFilter(true);

  const onClose = () => setShowFilter(false);

  useImperativeHandle(ref, () => ({ onOpen }));

  const fetchDistricts = (params: any, callback: () => void) =>
    dispatchThunk(dispatch, getDistricts(params), callback);

  const fetchWards = (params: any) => dispatchThunk(dispatch, getWards(params));

  const refresh = async () => {
    const { province_id, district_id } = basicInformation;
    await Promise.all([
      dispatchThunk(dispatch, getProvinces()),
      province_id &&
        fetchDistricts({
          province_code: province_id,
        }),

      province_id &&
        district_id &&
        fetchWards({
          province_code: province_id,
          district_code: district_id,
        }),
    ]);
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    Object.entries(basicInformation).forEach(
      ([key, value]) => value && setValue(key, value)
    );
  }, [basicInformation, setValue]);

  return (
    <Modal visible={showFilter}>
      <SafeAreaView>
        <ScrollView style={styles.scroll}>
          <View style={styles.header}>
            <Text style={styles.filterPost}>{t('heading.filterPost')}</Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={onClose}
            >
              <Icon
                name="close"
                color={COLOR_WHITE}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.txtFilter}>{t('select.type')}</Text>

          <View style={styles.wrapButton}>
            <Button
              buttonStyle={styles.btnSelect}
              titleStyle={styles.txtSelect}
              onPress={() => {}}
              title={t('button.buySell')}
              radius={4}
              color={undefined}
              loading={undefined}
              outline={undefined}
            />
            <Button
              buttonStyle={styles.btnSelect}
              titleStyle={styles.txtSelect}
              onPress={() => {}}
              title={t('button.lease')}
              outline={Boolean(true)}
              radius={4}
              color={undefined}
              loading={false}
            />
          </View>

          <View style={styles.wrapArea}>
            <View style={styles.wrapFilter}>
              <Text style={styles.txtFilter}>{t('select.area')}</Text>
              <View style={styles.boxRealEstate}>
                <View style={styles.district}>
                  <Select
                    buttonStyle={styles.buttonSelect}
                    buttonTextStyle={styles.textButtonSelect}
                    rowStyle={styles.buttonSelect}
                    rowTextStyle={styles.rowTextStyle}
                    control={control}
                    data={districtOptions}
                    defaultButtonText={t('select.district')}
                    name="real_estate_type_id"
                    onSelect={handleSubmit(onSelect)}
                    label={undefined}
                    labelStyle={undefined}
                    required={undefined}
                    errors={undefined}
                    containerSelect={undefined}
                  />
                </View>
                <View style={styles.ward}>
                  <Select
                    buttonStyle={styles.buttonSelect}
                    buttonTextStyle={styles.textButtonSelect}
                    rowStyle={styles.buttonSelect}
                    rowTextStyle={styles.rowTextStyle}
                    control={control}
                    data={realEstateType}
                    defaultButtonText={t('select.ward')}
                    name="real_estate_type_id"
                    onSelect={handleSubmit(onSelect)}
                    label={undefined}
                    labelStyle={undefined}
                    required={undefined}
                    errors={undefined}
                    containerSelect={undefined}
                  />
                </View>
              </View>

              <View>
                <Input
                  autoComplete="address"
                  control={control}
                  name="address"
                  required
                  placeholder={t('input.addressPlaceHolder')}
                  inputContainerStyle={undefined}
                  isEmail={undefined}
                  isNumeric={undefined}
                  isPassword={undefined}
                  isWebsite={undefined}
                  label={undefined}
                  labelStyle={undefined}
                  onChangeText={undefined}
                  onFocus={undefined}
                  rightLabel={undefined}
                  showPasswordPolicy={undefined}
                  renderErrorMessage={false}
                />
              </View>
            </View>
          </View>

          <View style={styles.wrapTypeHousing}>
            <Text style={null}>{t('select.typeHousing')}</Text>
            <TypeHousing
              options={listTypeHousing}
              type={'typeHousing'}
              control={control}
              name="typeHousing"
            />
          </View>

          <SliderComponent
            title={t('common.priceRange') || undefined}
            options={optionsPriceRange}
            defaultValues={initValues.priceRange}
            minimumValue={0}
            maximumValue={1000000000}
            step={10000000}
            control={control}
            name="priceRange"
            convertDisplay={(val: string) =>
              (val || '0').toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') +
              ' VND'
            }
          />

          <SliderComponent
            title={t('common.acreage') || undefined}
            options={optionsAcreage}
            defaultValues={initValues.acreage}
            minimumValue={0}
            maximumValue={100}
            step={5}
            control={control}
            name="acreage"
            convertDisplay={(val: string) => (val || '0').toString() + 'm²'}
          />

          <View style={styles.wrapTypeHousing}>
            <Text style={null}>{t('select.compass')}</Text>
            <TypeHousing
              options={listCompass}
              type={'compass'}
              control={control}
              name="compass"
            />
          </View>

          <SelectComponent
            title={t('common.legalDocuments') || ''}
            options={optionsLegalDocuments}
            name="legalDocuments"
            control={control}
          />

          <SelectComponent
            title={t('common.location') || ''}
            options={optionsLocation}
            name="location"
            control={control}
          />

          <SelectComponent
            title={t('common.bedroom') || ''}
            options={optionsBedroom}
            name="bedroom"
            control={control}
          />

          <SelectComponent
            title={t('common.bathroom') || ''}
            options={optionsBedroom}
            name="bathroom"
            control={control}
          />

          <SelectComponent
            title={t('common.numberFloors') || ''}
            options={optionsBedroom}
            name="numberFloors"
            control={control}
          />

          <View style={styles.footer}>
            <Button
              buttonStyle={{
                width: width * 0.45,
                borderColor: COLOR_GRAY_2,
              }}
              titleStyle={{
                color: COLOR_BLACK_1,
                fontSize: 14,
                lineHeight: 22,
              }}
              radius={5}
              title={t('button.reset')}
              outline
              color={undefined}
              loading={undefined}
              onPress={clearForm}
              icon={
                <View style={styles.wrapIcon}>
                  <Reload />
                </View>
              }
            />
            <Button
              buttonStyle={{
                width: width * 0.45,
                backgroundColor: COLOR_BLUE_1,
                borderColor: COLOR_BLUE_1,
              }}
              titleStyle={{ fontSize: 14, lineHeight: 22 }}
              radius={5}
              onPress={handleSubmit(onSubmit)}
              title={t('button.apply')}
              color={undefined}
              loading={undefined}
              outline={undefined}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
});

Filter.displayName = 'Filter';

export default Filter;
