import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TickButton } from '../../../../assets';
import { Button, Input, Select, Text } from '../../../../components';
import { COLOR_BLUE_3, COLOR_WHITE } from '../../../../constants';
import { createRealEstateInformation, selectPosts } from '../../../../features';
import { dispatchThunk } from '../../../../utils';
import { formatDataValueId } from '../../CreatePostScreen';
import styles from './styles';

const RealEstateInformation = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const { realEstateInformation, information, unitPrices, utilities } =
    useSelector(selectPosts);
  const dispatch = useDispatch();
  const [average, setAverage] = useState(0);
  const [errors, setErrors] = useState();
  const [utilitiesId, setUtilitiesId] = useState([]);
  const [furnitureId, setFurnitureId] = useState([]);
  const [securityId, setSecurityId] = useState([]);
  const [roadTypeId, setRoadTypeId] = useState([]);

  const { control, getValues, reset, setValue } = useForm({
    defaultValues: {
      area: '',
      price: '',
      price_unit: 1,
      width: '',
      length: '',
      floor: '',
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
    if (!value.area || !value.price || !value.price_unit) {
      setErrors({
        area: !value.area ? 'Vui lòng nhập Diện tích' : null,
        price: !value.price ? 'Vui lòng nhập giá' : null,
        priceUnit: !value.price_unit ? 'Vui lòng chọn Đơn vị' : null,
      });
      return true;
    }
    setErrors();
    dispatchThunk(
      dispatch,
      createRealEstateInformation({
        ...value,
        legal_documents_id: state.legalDocumentsId,
        house_status_id: state.houseStatusId,
        usage_condition_id: state.usageConditionId,
        location_type_id: state.location,
        utilities_id: utilitiesId.toString(),
        furniture_id: furnitureId.toString(),
        security_id: securityId.toString(),
        road_type_id: roadTypeId.toString(),
      })
    );
  };

  const clearForm = () => {
    reset();
  };

  const onFocusAcreage = () => {
    if (errors?.area) delete errors.area;
    setErrors({
      ...errors,
    });
  };

  const onFocusPrice = () => {
    if (errors?.area) delete errors.area;
    setErrors({
      ...errors,
    });
  };

  const onBlurPrice = () => {
    if (errors?.price) delete errors.price;
    setErrors({
      ...errors,
    });
    const value = getValues();
    if (value?.area && value?.price) {
      setAverage(Number(value?.price) / Number(value?.area));
    }
  };

  const handleSelectUtils = value => {
    if (utilitiesId.includes(value)) {
      const array = utilitiesId?.filter(item => item !== value);
      setUtilitiesId(array);
    } else {
      setUtilitiesId([...utilitiesId, value]);
    }
  };

  const handleFurniture = value => {
    if (furnitureId.includes(value)) {
      const array = furnitureId?.filter(item => item !== value);
      setFurnitureId(array);
    } else {
      setFurnitureId([...furnitureId, value]);
    }
  };

  const handleSecurity = value => {
    if (securityId.includes(value)) {
      const array = securityId?.filter(item => item !== value);
      setSecurityId(array);
    } else {
      setSecurityId([...securityId, value]);
    }
  };

  const handleRoadType = value => {
    if (roadTypeId.includes(value)) {
      const array = roadTypeId?.filter(item => item !== value);
      setRoadTypeId(array);
    } else {
      setRoadTypeId([...roadTypeId, value]);
    }
  };

  useImperativeHandle(ref, () => ({ handleNext, clearForm }));

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>{t('common.realEstateInformation')}</Text>
      </View>
      <View style={styles.boxSelectAddress}>
        <Input
          control={control}
          inputMode="numeric"
          isNumeric
          errorMessage={errors?.area}
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.acreage')}
          labelStyle={styles.inputLabel}
          name="area"
          onFocus={onFocusAcreage}
          required
          rightIcon={<Text>m²</Text>}
          renderErrorMessage={false}
        />
        <View>
          <Input
            control={control}
            inputMode="numeric"
            isNumeric
            errorMessage={errors?.price}
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.price')}
            labelStyle={styles.inputLabel}
            name="price"
            required
            onFocus={onFocusPrice}
            onBlur={onBlurPrice}
            renderErrorMessage={false}
          />
          {average > 0 && (
            <Text style={styles.m2}>{`~ ${average.toFixed(0)} triệu/m2`}</Text>
          )}
        </View>
      </View>
      <View style={styles.boxSelectAddress}>
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={unitPricesOptions}
          errors={errors?.priceUnit}
          defaultButtonText="Please Select"
          label={t('select.unit')}
          labelStyle={styles.inputLabel}
          required
          name="price_unit"
        />
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
        <Input
          control={control}
          inputMode="numeric"
          isNumeric
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.floor')}
          labelStyle={styles.inputLabel}
          name="floor"
          renderErrorMessage={false}
        />
      </View>
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Select
          buttonStyle={styles.select}
          control={control}
          data={compassOptions}
          defaultButtonText="Please Select"
          label={t('select.compass')}
          labelStyle={styles.inputLabel}
          name="main_door_direction_id"
        />
      </View>
      <View style={styles.boxSelectAddress}>
        <View>
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
          label={t('input.length')}
          labelStyle={styles.inputLabel}
          name="length"
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
          label={t('input.width')}
          labelStyle={styles.inputLabel}
          name="width"
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
      <Text style={styles.label}>{t('common.currentStatusHouse')}</Text>
      <View style={styles.boxType}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
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
        </ScrollView>
      </View>
      <Text style={styles.label}>{t('common.usageStatus')}</Text>
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
      <Text style={styles.label}>{t('common.location')}</Text>
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
      <View style={styles.boxTitle}>
        <Text style={styles.title}>{t('common.utilsInformation')}</Text>
      </View>
      <Text style={styles.label}>{utilities[0]?.value}</Text>
      <View style={styles.boxUtils}>
        {utilities[0]?.children?.map(item => (
          <Pressable
            key={`itemNearbyAmenities${item?.id}`}
            style={[
              styles.btnSelectUtils,
              utilitiesId.includes(item?.id)
                ? { backgroundColor: COLOR_BLUE_3 }
                : {},
            ]}
            onPress={() => handleSelectUtils(item?.id)}
          >
            <Text
              style={
                utilitiesId.includes(item?.id)
                  ? {
                      color: COLOR_WHITE,
                    }
                  : {}
              }
            >
              {item?.value}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.label}>{utilities[1]?.value}</Text>
      <View style={styles.boxUtils}>
        {utilities[1]?.children?.map(item => (
          <Pressable
            key={`itemFurniture${item?.id}`}
            style={[
              styles.btnSelectUtils,
              furnitureId.includes(item?.id)
                ? { backgroundColor: COLOR_BLUE_3 }
                : {},
            ]}
            onPress={() => handleFurniture(item?.id)}
          >
            <Text
              style={
                furnitureId.includes(item?.id)
                  ? {
                      color: COLOR_WHITE,
                    }
                  : {}
              }
            >
              {item?.value}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.label}>{utilities[2]?.value}</Text>
      <View style={styles.boxUtils}>
        {utilities[2]?.children?.map(item => (
          <Pressable
            key={`itemSecurity${item?.id}`}
            style={[
              styles.btnSelectUtils,
              securityId.includes(item?.id)
                ? { backgroundColor: COLOR_BLUE_3 }
                : {},
            ]}
            onPress={() => handleSecurity(item?.id)}
          >
            <Text
              style={
                securityId.includes(item?.id)
                  ? {
                      color: COLOR_WHITE,
                    }
                  : {}
              }
            >
              {item?.value}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.label}>{utilities[3]?.value}</Text>
      <View style={styles.boxUtils}>
        {utilities[3]?.children?.map(item => (
          <Pressable
            key={`itemRoadType${item?.id}`}
            style={[
              styles.btnSelectUtils,
              roadTypeId.includes(item?.id)
                ? { backgroundColor: COLOR_BLUE_3 }
                : {},
            ]}
            onPress={() => handleRoadType(item?.id)}
          >
            <Text
              style={
                roadTypeId.includes(item?.id)
                  ? {
                      color: COLOR_WHITE,
                    }
                  : {}
              }
            >
              {item?.value}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
});

RealEstateInformation.displayName = 'RealEstateInformation';

export default RealEstateInformation;
