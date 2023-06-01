import { Icon } from '@rneui/base';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Select } from '../../../../../components';
import { COLOR_WHITE } from '../../../../../constants';
import {
  clearDistricts,
  getDistricts,
  getProvinces,
  selectCommon,
} from '../../../../../features';
import { dispatchThunk } from '../../../../../utils';
import styles from './styles';

// interface PopupProps {}
// interface PopUpRef {
//   onOpen: () => void;
// }

const ModalFilter = forwardRef((props, ref) => {
  const [showFilter, setShowFilter] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState();

  const { control, setValue } = useForm({
    defaultValues: {
      real_estate_type_id: '',
      area_range_id: '',
      status: '',
      sort_by: '',
    },
  });
  const { provinces, districts } = useSelector(selectCommon);
  const emptyProvinceOption = {
    label: t('select.province'),
    value: null,
  };
  const emptyDistrictOption = {
    label: t('select.district'),
    value: null,
  };
  const provinceOptions = [emptyProvinceOption, ...provinces];
  const districtOptions = [emptyDistrictOption, ...districts];
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
  const realEstateType = [
    { label: 'Mua', value: 1 },
    {
      label: 'all',
      value: 2,
    },
  ];

  const onOpen = () => setShowFilter(true);
  const fetchDistricts = (params, callback) =>
    dispatchThunk(dispatch, getDistricts(params), callback);

  const handleSelectProvince = selectedItem => {
    setValue('district_id', null);
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

  const handleSelectDistrict = selectedItem => {
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
    refresh();
  }, []);
  useImperativeHandle(ref, () => ({ onOpen }));
  const [activeTab, setActiveTab] = useState(1);

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
                color={COLOR_WHITE}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tabs}>
            {tabs?.map(tab => (
              <View key={tab.value}>
                <Button
                  title={t(`button.${tab.label}`)}
                  onPress={() => setActiveTab(tab.value)}
                  outline={tab.value !== activeTab}
                  buttonStyle={styles.tab}
                />
              </View>
            ))}
          </View>
          <View>
            <Select
              control={control}
              name="type"
              label={t('select.typeHousing')}
              data={realEstateType}
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
});
ModalFilter.displayName = 'Filter';

export default ModalFilter;
