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
      area: '',
      price: '',
      price_unit: 1,
      width: '',
      length: '',
      lane_width: '',
      unit: null,
      bathroom: null,
      bedroom: null,
      main_door_direction_id: null,
      structure_id: null,
    },
  });
  const [state, setState] = useState({
    legalDocumentsId: 1,
    houseStatusId: 1,
    usageConditionId: 1,
    location: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.boxSelectAddress}>
        <Input
          control={control}
          inputMode="numeric"
          isNumeric
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.acreage')}
          labelStyle={styles.inputLabel}
          name="area"
          rightIcon={<Text>m²</Text>}
          renderErrorMessage={false}
        />
        <View>
          <Input
            control={control}
            inputMode="numeric"
            isNumeric
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.price')}
            labelStyle={styles.inputLabel}
            name="price"
            renderErrorMessage={false}
          />
          <Text style={styles.m2}>1,000,000/m2</Text>
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
            name="price_unit"
          />
        </View>
        <Input
          control={control}
          inputMode="numeric"
          isNumeric
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.numberBathrooms')}
          labelStyle={styles.inputLabel}
          name="bathroom"
          renderErrorMessage={false}
        />
      </View>
      <View style={styles.boxSelectAddress}>
        <Input
          control={control}
          inputMode="numeric"
          isNumeric
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.numberBedrooms')}
          labelStyle={styles.inputLabel}
          name="bedroom"
          renderErrorMessage={false}
        />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Select
            buttonStyle={styles.select1}
            control={control}
            data={[{ value: 'sex', label: 'sex' }]}
            defaultButtonText="Please Select"
            label={t('select.compass')}
            labelStyle={styles.inputLabel}
            name="main_door_direction_id"
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
            name="structure_id"
          />
        </View>
        <Input
          control={control}
          inputMode="numeric"
          isNumeric
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.width')}
          labelStyle={styles.inputLabel}
          name="width"
          renderErrorMessage={false}
          rightIcon={<Text>m</Text>}
        />
      </View>
      <View style={styles.boxSelectAddress}>
        <Input
          control={control}
          inputMode="numeric"
          isNumeric
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.length')}
          labelStyle={styles.inputLabel}
          name="length"
          renderErrorMessage={false}
          rightIcon={<Text>m</Text>}
        />
        <Input
          control={control}
          inputMode="numeric"
          isNumeric
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.laneWidth')}
          labelStyle={styles.inputLabel}
          name="lane_width"
          renderErrorMessage={false}
          rightIcon={<Text>m</Text>}
        />
      </View>
      <Text style={styles.realEstateType}>{t('common.legalDocuments')}</Text>
      <View style={styles.boxTypeRealEstate}>
        {TypeRealEstate.map(item => (
          <View
            key={`buySell${item.key}`}
            style={styles.itemRealEstate}
          >
            <Button
              buttonStyle={styles.btnTypeRealEstate(
                item.key === state.legalDocumentsId
              )}
              onPress={() => setState({ ...state, legalDocumentsId: item.key })}
              title={t(`${item.name}`)}
              titleStyle={styles.txtType(item.key === state.legalDocumentsId)}
              outline
            />
            {item?.key === state.legalDocumentsId && (
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
              buttonStyle={styles.isBuy(item.key === state.houseStatusId)}
              onPress={() => setState({ ...state, houseStatusId: item.key })}
              title={t(`${item.name}`)}
              titleStyle={styles.txtType(item.key === state.houseStatusId)}
              outline
            />
            {item?.key === state.houseStatusId && (
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
              buttonStyle={styles.isBuy(item.key === state.usageConditionId)}
              onPress={() => setState({ ...state, usageConditionId: item.key })}
              title={t(`${item.name}`)}
              titleStyle={styles.txtType(item.key === state.usageConditionId)}
              outline
            />
            {item?.key === state.usageConditionId && (
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
              buttonStyle={styles.isBuy(item.key === state.location)}
              onPress={() => setState({ ...state, location: item.key })}
              title={t(`${item.name}`)}
              titleStyle={styles.txtType(item.key === state.location)}
              outline
            />
            {item?.key === state.location && (
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
