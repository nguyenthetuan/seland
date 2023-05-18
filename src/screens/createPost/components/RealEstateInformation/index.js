import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { TickButton } from '../../../../assets';
import { Button, Input, Select, Text } from '../../../../components';
import styles from './styles';

const Location = [
  {
    key: 1,
    name: 'Mặt đường',
  },
  {
    key: 2,
    name: 'Nhà hẻm',
  },
];
const UsageStatus = [
  {
    key: 1,
    name: 'Đã sử dụng',
  },
  {
    key: 2,
    name: 'Đang sử dụng',
  },
];

const CurrentStatusHouse = [
  {
    key: 1,
    name: 'Đang ở',
  },
  {
    key: 2,
    name: 'Nhà trống',
  },
  {
    key: 3,
    name: 'Đủ nội thất',
  },
];

const TypeRealEstate = [
  {
    key: 1,
    name: 'Sổ đỏ',
  },
  {
    key: 2,
    name: 'Sổ hồng',
  },
  {
    key: 3,
    name: 'Đang chờ sổ',
  },
  {
    key: 4,
    name: 'Hợp đồng mua bán',
  },
];

const RealEstateInformation = () => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      acreage: '',
      price: '',
      width: '',
      length: '',
      lane_width: '',
      unit: null,
      bathroom: null,
      bedroom: null,
      compass: null,
      structure: null,
    },
  });
  const [typeRealEstate, setTypeRealEstate] = useState(1);
  const [currentStatusHouse, setCurrentStatusHouse] = useState(1);
  const [usageStatus, setUsageStatus] = useState(1);
  const [location, setLocation] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.boxSelectAddress}>
        <View>
          <Input
            control={control}
            inputMode="numeric"
            isNumeric
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.acreage')}
            labelStyle={styles.inputLabel}
            name="acreage"
            rightIcon={<Text>m²</Text>}
          />
        </View>
        <View>
          <Input
            control={control}
            inputMode="numeric"
            isNumeric
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.price')}
            labelStyle={styles.inputLabel}
            name="price"
          />
        </View>
      </View>
      <View style={styles.boxSelectAddress}>
        <View style={{ marginLeft: 10 }}>
          <Select
            buttonStyle={styles.select1}
            control={control}
            data={[{ value: 'sex', label: 'sex' }]}
            defaultButtonText="Please Select"
            label={t('select.unit')}
            labelStyle={styles.inputLabel}
            name="unit"
          />
        </View>
        <View>
          <Input
            control={control}
            inputMode="numeric"
            isNumeric
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.numberBathrooms')}
            labelStyle={styles.inputLabel}
            name="bathroom"
          />
        </View>
      </View>
      <View style={styles.boxSelectAddress}>
        <View>
          <Input
            control={control}
            inputMode="numeric"
            isNumeric
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.numberBedrooms')}
            labelStyle={styles.inputLabel}
            name="bedroom"
          />
        </View>
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Select
            buttonStyle={styles.select1}
            control={control}
            data={[{ value: 'sex', label: 'sex' }]}
            defaultButtonText="Please Select"
            label={t('select.compass')}
            labelStyle={styles.inputLabel}
            name="compass"
          />
        </View>
      </View>
      <View style={styles.boxSelectAddress}>
        <View style={{ marginLeft: 10 }}>
          <Select
            buttonStyle={styles.select1}
            control={control}
            data={[{ value: 'sex', label: 'sex' }]}
            defaultButtonText="Please Select"
            label={t('select.structure')}
            labelStyle={styles.inputLabel}
            name="structure"
          />
        </View>
        <View>
          <Input
            control={control}
            inputMode="numeric"
            isNumeric
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.width')}
            labelStyle={styles.inputLabel}
            name="width"
            rightIcon={<Text>m</Text>}
          />
        </View>
      </View>
      <View style={styles.boxSelectAddress}>
        <View>
          <Input
            control={control}
            inputMode="numeric"
            isNumeric
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.length')}
            labelStyle={styles.inputLabel}
            name="length"
            rightIcon={<Text>m</Text>}
          />
        </View>
        <View>
          <Input
            control={control}
            inputMode="numeric"
            isNumeric
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.laneWidth')}
            labelStyle={styles.inputLabel}
            name="lane_width"
            rightIcon={<Text>m</Text>}
          />
        </View>
      </View>
      <Text style={styles.youWant}>{t('common.realEstateType')}</Text>
      <View style={styles.boxTypeRealEstate}>
        {TypeRealEstate.map(item => (
          <View
            key={`buySell${item.key}`}
            style={styles.itemRealEstate}
          >
            <Button
              buttonStyle={styles.btnTypeRealEstate(
                item.key === typeRealEstate
              )}
              onPress={() => setTypeRealEstate(item.key)}
              title={t(`${item.name}`)}
              titleStyle={styles.txtType(item.key === typeRealEstate)}
              type="outline"
            />
            {item?.key === typeRealEstate && (
              <View style={styles.checked}>
                <TickButton />
              </View>
            )}
          </View>
        ))}
      </View>
      <Text style={styles.youWant}>{t('common.currentStatusHouse')}</Text>
      <View style={styles.boxType}>
        {CurrentStatusHouse.map(item => (
          <View
            key={`buySell${item.key}`}
            style={styles.buySell}
          >
            <Button
              buttonStyle={styles.isBuy(item.key === currentStatusHouse)}
              onPress={() => setCurrentStatusHouse(item.key)}
              title={t(`${item.name}`)}
              titleStyle={styles.txtType(item.key === currentStatusHouse)}
              type="outline"
            />
            {item?.key === currentStatusHouse && (
              <View style={styles.checked}>
                <TickButton />
              </View>
            )}
          </View>
        ))}
      </View>
      <Text style={styles.youWant}>{t('common.usageStatus')}</Text>
      <View style={styles.boxType}>
        {UsageStatus.map(item => (
          <View
            key={`buySell${item.key}`}
            style={styles.buySell}
          >
            <Button
              buttonStyle={styles.isBuy(item.key === usageStatus)}
              onPress={() => setUsageStatus(item.key)}
              title={t(`${item.name}`)}
              titleStyle={styles.txtType(item.key === usageStatus)}
              type="outline"
            />
            {item?.key === usageStatus && (
              <View style={styles.checked}>
                <TickButton />
              </View>
            )}
          </View>
        ))}
      </View>
      <Text style={styles.youWant}>{t('common.location')}</Text>
      <View style={styles.boxType}>
        {Location.map(item => (
          <View
            key={`buySell${item.key}`}
            style={styles.buySell}
          >
            <Button
              buttonStyle={styles.isBuy(item.key === location)}
              onPress={() => setLocation(item.key)}
              title={t(`${item.name}`)}
              titleStyle={styles.txtType(item.key === location)}
              type="outline"
            />
            {item?.key === location && (
              <View style={styles.checked}>
                <TickButton />
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default RealEstateInformation;
