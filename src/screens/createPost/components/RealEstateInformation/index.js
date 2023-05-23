import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TickButton } from '../../../../assets';
import { Button, Input, Select, Text } from '../../../../components';
import { createRealEstateInformation, selectPosts } from '../../../../features';
import { dispatchThunk } from '../../../../utils';
import { formatDataValueId } from '../../CreatePostScreen';
import styles from './styles';

const RealEstateInformation = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const { realEstateInformation, information, unitPrices } =
    useSelector(selectPosts);
  const dispatch = useDispatch();

  const {
    control,
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      area: '',
      price: '',
      price_unit: 1,
      width: '',
      length: '',
      lane_width: '',
      bathroom: null,
      bedroom: null,
      main_door_direction_id: null,
      structure_id: null,
    },
  });

  const [state, setState] = useState({
    legalDocumentsId:
      realEstateInformation?.legal_documents_id ||
      information[2]?.children[0].id,
    houseStatusId:
      realEstateInformation?.house_status_id || information[3]?.children[0].id,
    usageConditionId:
      realEstateInformation?.usage_condition_id ||
      information[4]?.children[0].id,
    location:
      realEstateInformation?.location_type_id || information[5]?.children[0].id,
  });

  const emptyUnitPrices = {
    label: t('select.structure'),
    value: null,
  };
  const emptyStructure = {
    label: t('select.structure'),
    value: null,
  };
  const emptyCompass = {
    label: t('select.compass'),
    value: null,
  };

  const unitPricesOptions = [emptyUnitPrices, ...formatDataValueId(unitPrices)];
  const compassOptions = [
    emptyCompass,
    ...formatDataValueId(information[0]?.children),
  ];
  const structureOptions = [
    emptyStructure,
    ...formatDataValueId(information[1]?.children),
  ];

  useEffect(() => {
    Object.entries(realEstateInformation).forEach(
      ([key, value]) => value && setValue(key, value)
    );
  }, [realEstateInformation, setValue]);

  const handleNext = () => {
    const value = getValues();
    dispatchThunk(
      dispatch,
      createRealEstateInformation({
        ...value,
        legal_documents_id: state.legalDocumentsId,
        house_status_id: state.houseStatusId,
        usage_condition_id: state.usageConditionId,
        location_type_id: state.location,
      })
    );
  };

  const clearForm = () => {
    reset();
  };

  useImperativeHandle(ref, () => ({ handleNext, clearForm }));

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
            data={unitPricesOptions}
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
            data={compassOptions}
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
            data={structureOptions}
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
        {information[2]?.children.map(item => (
          <View
            key={`buySell${item.id}`}
            style={styles.itemRealEstate}
          >
            <Button
              buttonStyle={styles.btnTypeRealEstate(
                item.id === state.legalDocumentsId
              )}
              onPress={() => setState({ ...state, legalDocumentsId: item.id })}
              title={item.value}
              titleStyle={styles.txtType(item.id === state.legalDocumentsId)}
              outline
            />
            {item?.id === state.legalDocumentsId && (
              <View style={styles.checked}>
                <TickButton />
              </View>
            )}
          </View>
        ))}
      </View>
      <Text style={styles.youWant}>{t('common.currentStatusHouse')}</Text>
      <View style={styles.boxType}>
        {information[3]?.children.map(item => (
          <View
            key={`buySell${item.id}`}
            style={styles.buySell}
          >
            <Button
              buttonStyle={styles.isBuy(item.id === state.houseStatusId)}
              onPress={() => setState({ ...state, houseStatusId: item.id })}
              title={item.value}
              titleStyle={styles.txtType(item.id === state.houseStatusId)}
              outline
            />
            {item?.id === state.houseStatusId && (
              <View style={styles.checked}>
                <TickButton />
              </View>
            )}
          </View>
        ))}
      </View>
      <Text style={styles.youWant}>{t('common.usageStatus')}</Text>
      <View style={styles.boxType}>
        {information[4]?.children.map(item => (
          <View
            key={`buySell${item.id}`}
            style={styles.buySell}
          >
            <Button
              buttonStyle={styles.isBuy(item.id === state.usageConditionId)}
              onPress={() => setState({ ...state, usageConditionId: item.id })}
              title={item.value}
              titleStyle={styles.txtType(item.id === state.usageConditionId)}
              outline
            />
            {item?.id === state.usageConditionId && (
              <View style={styles.checked}>
                <TickButton />
              </View>
            )}
          </View>
        ))}
      </View>
      <Text style={styles.youWant}>{t('common.location')}</Text>
      <View style={styles.boxType}>
        {information[5]?.children.map(item => (
          <View
            key={`buySell${item.id}`}
            style={styles.buySell}
          >
            <Button
              buttonStyle={styles.isBuy(item.id === state.location)}
              onPress={() => setState({ ...state, location: item.id })}
              title={item.value}
              titleStyle={styles.txtType(item.id === state.location)}
              outline
            />
            {item?.id === state.location && (
              <View style={styles.checked}>
                <TickButton />
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
});

RealEstateInformation.displayName = 'RealEstateInformation';

export default RealEstateInformation;
