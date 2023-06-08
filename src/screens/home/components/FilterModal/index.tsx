import { Icon } from '@rneui/themed';
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useMemo,
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
  clearWards,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';
import REAL_ESTATE from '../../../../constants/realEstate';
import styles from './styles';

const { width } = Dimensions.get('screen');

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

const optionsBedroom = [
  { title: '1', value: 1 },
  { title: '2', value: 2 },
  { title: '3', value: 3 },
  { title: '4', value: 4 },
  { title: '5+', value: 5 },
];

interface TOptions {
  title: string;
  value: number | string;
}

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
  province_id: 'HNI',
  ward_id: null,
  district_id: null,
};

const Filter = forwardRef((props: any, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [showFilter, setShowFilter] = useState(false);

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: initValues,
  });

  const { basicInformation, realEstateType, information } = useSelector(selectPosts);
  const { provinces, districts, wards } = useSelector(selectCommon);

  const optionsData = useMemo(() => {
    let compassOptions:TOptions[] = [];
    let legalDocumentOptions:TOptions[] = [];
    let locationOptions:TOptions[] = [];

    information.forEach((item: any) => {
      if (item?.value === REAL_ESTATE.COMPASS) {
        compassOptions = item?.children?.map((compassItem: any) => ({
          title: compassItem?.value,
          value: compassItem?.id
        }))
      } else if (item?.value === REAL_ESTATE.LEGAL_DOCUMENT) {
        legalDocumentOptions = item?.children?.map((compassItem: any) => ({
          title: compassItem?.value,
          value: compassItem?.id
        }))
      } else if (item?.value === REAL_ESTATE.LOCATION) {
        locationOptions = item?.children?.map((compassItem: any) => ({
          title: compassItem?.value,
          value: compassItem?.id
        }))
      }
    });

    return {
      compassOptions,
      legalDocumentOptions,
      locationOptions
    }
  }, [information]);

  const emptyDistrictOption = {
    label: t('select.district'),
    value: null,
  };
   const emptyWardOption = {
    label: t('select.ward'),
    value: null
  }
  const districtOptions = [emptyDistrictOption, ...districts];
  const wardOptions = [emptyWardOption, ...wards];

  const typeHousingOptions = realEstateType.map((type: {value: string, id: string | number}) => ({title: type.value, value: type.id}));


  const onSelect = (value: any) => {
    console.log('🚀 ~ file: index.js:51 ~ onSelect ~ value:', value);
  };

  const onSubmit = (data: any) => {
    props?.onSubmit && props?.onSubmit(data);
  };

  const clearForm = () => {
    Object.entries(initValues).forEach(
      ([key, value]: any) => value && setValue(key, value)
    );
    setValue('address', '');
    props?.onSubmit && props?.onSubmit({...initValues, priceRange: [], acreage: []});
  };

  const onOpen = () => setShowFilter(true);

  const onClose = () => setShowFilter(false);

  useImperativeHandle(ref, () => ({ onOpen, onClose }));

  const fetchDistricts = (params: any, callback?: () => void) =>{
    dispatchThunk(dispatch, getDistricts(params), callback);
  }

  const fetchWards = (params: any) => dispatchThunk(dispatch, getWards(params));

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
    const { district_id } = basicInformation;
    const province_id = "HNI";
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
            />
            <Button
              buttonStyle={styles.btnSelect}
              titleStyle={styles.txtSelect}
              onPress={() => {}}
              title={t('button.lease')}
              outline={Boolean(true)}
              radius={4}
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
                    defaultButtonText={t('select.district') || ""}
                    name="district_id"
                    onSelect={handleSelectDistrict}
                  />
                </View>
                <View style={styles.ward}>
                  <Select
                    buttonStyle={styles.buttonSelect}
                    buttonTextStyle={styles.textButtonSelect}
                    rowStyle={styles.buttonSelect}
                    rowTextStyle={styles.rowTextStyle}
                    control={control}
                    data={wardOptions}
                    defaultButtonText={t('select.ward') || ""}
                    name="ward_id"
                    onSelect={handleSubmit(onSelect)}
                  />
                </View>
              </View>

              <View>
                <Input
                  control={control}
                  name="address"
                  required
                  placeholder={t('input.addressPlaceHolder') || ""}
                />
              </View>
            </View>
          </View>

          <View style={styles.wrapTypeHousing}>
            <Text>{t('select.typeHousing')}</Text>
            <TypeHousing
              options={typeHousingOptions}
              type={'typeHousing'}
              control={control}
              name="typeHousing"
            />
          </View>

          <SliderComponent
            title={t('common.priceRange') || ""}
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
            title={t('common.acreage') || ""}
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
            <Text>{t('select.compass')}</Text>
            <TypeHousing
              options={optionsData.compassOptions}
              type={'compass'}
              control={control}
              name="compass"
            />
          </View>

          <SelectComponent
            title={t('common.legalDocuments') || ''}
            options={optionsData.legalDocumentOptions}
            name="legalDocuments"
            control={control}
          />

          <SelectComponent
            title={t('common.location') || ''}
            options={optionsData.locationOptions}
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
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
});

Filter.displayName = 'Filter';

export default Filter;
