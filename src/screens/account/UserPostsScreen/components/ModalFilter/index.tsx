import { Icon } from '@rneui/base';
import React, {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Select } from '../../../../../components';
import { COLORS } from '../../../../../constants';
import {
  clearDistricts,
  getDistricts,
  getProvinces,
  selectCommon,
  selectPosts,
} from '../../../../../features';
import { dispatchThunk } from '../../../../../utils';
import styles from './styles';
import { Control, useController } from 'react-hook-form';
import { formatDataValueId } from '../../../../createPost/CreatePostScreen';

const { width } = Dimensions.get('screen');

interface ModalFilter {
  control: Control<any>;
  setValueHookForm?: Function;
  onPressConfirm?: Function;
}
const ModalFilter: FC<ModalFilter> = forwardRef(
  ({ control, setValueHookForm, onPressConfirm }, ref) => {
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<any>();
    const [activeTab, setActiveTab] = useState<number>(1);

    const { provinces, districts } = useSelector(selectCommon);
    const { realEstateType } = useSelector(selectPosts);
    const {
      field: { onChange, value },
    } = useController({ control, name: 'status' });

    const emptyProvinceOption = {
      label: t('select.province'),
      value: null,
    };
    const emptyDistrictOption = {
      label: t('select.district'),
      value: null,
    };
    const emptyRealEstateType = {
      label: t('select.realEstateType'),
      value: null,
    };
    const provinceOptions = [emptyProvinceOption, ...provinces];
    const districtOptions = [emptyDistrictOption, ...districts];
    const realEstateTypeOptions = [
      emptyRealEstateType,
      ...formatDataValueId(realEstateType),
    ];

    const tabs = [
      {
        label: 'all',
        value: 1,
      },
      {
        label: 'buy',
        value: 2,
      },
      {
        label: 'lease',
        value: 3,
      },
    ];

    const onOpen = () => setShowFilter(true);

    const fetchDistricts = (params: any, callback?: Function) =>
      dispatchThunk(dispatch, getDistricts(params), callback);

    const handleSelectProvince = (selectedItem: any) => {
      setValueHookForm && setValueHookForm('district_id', null);
      const { value } = selectedItem;

      if (value) {
        if (errors?.province) delete errors.province;
        setErrors({
          ...errors,
        });
        fetchDistricts({
          province_code: selectedItem.value,
        });
      } else {
        dispatch(clearDistricts());
      }
    };

    const handleSelectDistrict = (selectedItem: any) => {
      const { value } = selectedItem;

      if (value) {
        if (errors?.district) delete errors.district;
        setErrors({
          ...errors,
        });
      }
    };

    const refresh = async () => {
      await Promise.all([dispatchThunk(dispatch, getProvinces())]);
    };

    useEffect(() => {
      setValueHookForm && setValueHookForm('status', 1);
      refresh();
    }, []);

    const handleReset = () => {
      setValueHookForm && setValueHookForm('status', 1);
      setValueHookForm && setValueHookForm('type', null);
      setValueHookForm && setValueHookForm('province_id', null);
      setValueHookForm && setValueHookForm('district_id', null);
    };

    const handleConfirm = () => {
      setShowFilter(false);
      onPressConfirm && onPressConfirm();
    };

    const handleSelectStatus = (item: number) => {
      onChange(item);
    };

    useImperativeHandle(ref, () => ({ onOpen }));

    return (
      <Modal visible={showFilter}>
        <SafeAreaView>
          <ScrollView style={styles.scroll}>
            <View style={styles.header}>
              <Text style={styles.filterPost}>{t('heading.filterPost')}</Text>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => setShowFilter(false)}
              >
                <Icon
                  name="close"
                  color={COLORS.WHITE}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.tabs}>
              {tabs?.map(tab => (
                <Button
                  key={tab.value}
                  title={t(`button.${tab.label}`)}
                  onPress={() => handleSelectStatus(tab?.value)}
                  outline={tab.value !== value}
                  buttonStyle={styles.tab}
                />
              ))}
            </View>
            <Select
              control={control}
              name="type"
              label={t('select.typeHousing')}
              data={realEstateTypeOptions}
              defaultButtonText={t('select.typeHousing')}
              buttonStyle={styles.buttonSelect}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
            />
            <Select
              control={control}
              name="province_id"
              label={t('select.province')}
              defaultButtonText={t('select.province')}
              buttonStyle={styles.buttonSelect}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              data={provinceOptions}
              onSelect={handleSelectProvince}
            />
            <Select
              control={control}
              name="district_id"
              label={t('select.district')}
              defaultButtonText={t('select.district')}
              buttonStyle={styles.buttonSelect}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              data={districtOptions}
              onSelect={handleSelectDistrict}
            />
          </ScrollView>
          <View style={styles.footer}>
            <Button
              buttonStyle={{
                width: width * 0.45,
                borderColor: COLORS.GRAY_7,
              }}
              titleStyle={{
                color: COLORS.BLACK_1,
                fontSize: 14,
                lineHeight: 22,
              }}
              radius={5}
              title={t('button.reset')}
              outline
              onPress={handleReset}
            />
            <Button
              buttonStyle={{
                width: width * 0.45,
                backgroundColor: COLORS.BLUE_1,
                borderColor: COLORS.BLUE_1,
              }}
              titleStyle={{ fontSize: 14, lineHeight: 22 }}
              radius={5}
              title={t('button.apply')}
              onPress={handleConfirm}
            />
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
);
ModalFilter.displayName = 'Filter';

export default ModalFilter;
