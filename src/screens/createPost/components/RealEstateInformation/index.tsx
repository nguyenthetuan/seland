import React, { useEffect, useMemo, useState } from 'react';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TickButton } from '../../../../assets';
import { Button, Input, Select, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import { selectPosts } from '../../../../features';
import { formatDataValueId } from '../../CreatePostScreen';
import styles from './styles';
import { Icon } from '@rneui/base';
import {
  validateNumberBedroom,
  validateArea,
  validatePrice,
  validateLength,
  validateWidth,
  validateLaneWidth,
} from '../../../../utils/validates';

interface RealEstateInformationProps {
  control?: Control;
  setValue?: Function;
  getValues?: Function;
}

const RealEstateInformation: React.FC<RealEstateInformationProps> = ({
  control,
  setValue,
  getValues,
}) => {
  const { t } = useTranslation();
  const { information, unitPrices, utilities, demands } =
    useSelector(selectPosts);
  const {
    utilities_id,
    demand_id,
    furniture_id,
    security_id,
    road_type_id,
    legal_documents_id,
    house_status_id,
    usage_condition_id,
    location_type_id,
    price_unit,
  } = getValues && getValues();
  const [average, setAverage] = useState('');
  const ONE_THOUSAND = 1000;
  const ONE_MIL = ONE_THOUSAND * 1000;
  const ONE_BIL = ONE_MIL * 1000;
  const [utilitiesId, setUtilitiesId] = useState(
    utilities_id ? utilities_id.split(',').map(Number) : []
  );

  const [furnitureId, setFurnitureId] = useState<any[]>(
    furniture_id ? furniture_id.split(',').map(Number) : []
  );
  const [securityId, setSecurityId] = useState<any[]>(
    security_id ? security_id.split(',').map(Number) : []
  );
  const [roadTypeId, setRoadTypeId] = useState<any[]>(
    road_type_id ? road_type_id.split(',').map(Number) : []
  );
  const [state, setState] = useState({
    legalDocumentsId: legal_documents_id || information[2]?.children[0].id,
    houseStatusId: house_status_id || information[3]?.children[0].id,
    usageConditionId: usage_condition_id || information[4]?.children[0].id,
    location: location_type_id || information[5]?.children[0].id,
    priceUnit: price_unit === 1 ? true : false || true,
  });
  const [show, setShow] = useState<{
    nearbyAmenities: boolean;
    furniture: boolean;
  }>({
    nearbyAmenities: false,
    furniture: false,
  });

  const emptyStructure = {
    label: t('select.structure'),
    value: null,
  };
  const emptyCompass = {
    label: t('select.compass'),
    value: null,
  };

  const compassOptions = [
    emptyCompass,
    ...formatDataValueId(information[0]?.children),
  ];
  const structureOptions = [
    emptyStructure,
    ...formatDataValueId(information[1]?.children),
  ];

  useEffect(() => {
    setValue && setValue('legal_documents_id', information[2]?.children[0].id);
    setValue && setValue('location_type_id', information[5]?.children[0].id);
    setValue && setValue('house_status_id', information[3]?.children[0].id);
    setValue && setValue('usage_condition_id', information[4]?.children[0].id);
  }, []);

  useEffect(() => {
    onBlurPrice();
  }, [state.priceUnit]);

  const onBlurPrice = () => {
    const value = getValues && getValues();
    if (value?.area && value?.price) {
      const priceInDong = state.priceUnit
        ? Number(value?.price) * ONE_BIL
        : Number(value?.price) * ONE_MIL;
      const result = formatPricePerUnit(priceInDong, Number(value?.area));
      setAverage(result ?? '');
    } else {
      setAverage('');
    }
  };

  const formatPricePerUnit = (price: number, area: number) => {
    const pricePerUnit = price / area;
    if (pricePerUnit >= ONE_BIL) {
      return (pricePerUnit / ONE_BIL).toFixed(2) + ' Tỷ/m2';
    }
    if (pricePerUnit >= ONE_MIL) {
      return (pricePerUnit / ONE_MIL).toFixed(2) + ' Triệu/m2';
    }
    if (pricePerUnit >= ONE_THOUSAND) {
      return (pricePerUnit / ONE_THOUSAND).toFixed(2) + ' Nghìn/m2';
    }
  };
  const handleSelectUtils = (value: any) => {
    if (utilitiesId.includes(value)) {
      const array = utilitiesId?.filter(
        (item: any, index: number) => item !== value
      );
      setUtilitiesId(array);
      setValue && setValue('utilities_id', array.toString());
    } else {
      setUtilitiesId([...utilitiesId, value]);
      setValue && setValue('utilities_id', [...utilitiesId, value].toString());
    }
  };

  const handleFurniture = (value: any) => {
    if (furnitureId.includes(value)) {
      const array = furnitureId?.filter(
        (item: any, index: number) => item !== value
      );
      setFurnitureId(array);
      setValue && setValue('furniture_id', array.toString());
    } else {
      setFurnitureId([...furnitureId, value]);
      setValue && setValue('furniture_id', [...furnitureId, value].toString());
    }
  };

  const handleSecurity = (value: any) => {
    if (securityId.includes(value)) {
      const array = securityId?.filter(
        (item: any, index: number) => item !== value
      );
      setSecurityId(array);
      setValue && setValue('security_id', array.toString());
    } else {
      setSecurityId([...securityId, value]);
      setValue && setValue('security_id', [...securityId, value].toString());
    }
  };

  const handleRoadType = (value: any) => {
    if (roadTypeId.includes(value)) {
      const array = roadTypeId?.filter(
        (item: any, index: number) => item !== value
      );
      setRoadTypeId(array);
      setValue && setValue('road_type_id', array.toString());
    } else {
      setRoadTypeId([...roadTypeId, value]);
      setValue && setValue('road_type_id', [...roadTypeId, value].toString());
    }
  };

  const listNearByAmenities = useMemo(() => {
    let array = [];
    if (show.nearbyAmenities) {
      array = utilities[0]?.children;
    } else {
      array = utilities[0]?.children?.slice(0, 10);
    }
    return array;
  }, [show]);

  const listFurniture = useMemo(() => {
    let array = [];
    if (show.furniture) {
      array = utilities[1]?.children;
    } else {
      array = utilities[1]?.children?.slice(0, 10);
    }
    return array;
  }, [show]);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>{t('common.realEstateInformation')}</Text>
        </View>
        <View style={styles.boxSelectAddress}>
          <Input
            control={control}
            inputMode="decimal"
            keyboardType="decimal-pad"
            rules={{
              required: 'Vui lòng nhập Diện tích',
              validate: validateArea,
            }}
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.acreage')}
            labelStyle={styles.inputLabel}
            name="area"
            required
            maxLength={32}
            rightIcon={<Text>m²</Text>}
            renderErrorMessage={false}
            onBlur={onBlurPrice}
          />
          <View>
            <Input
              control={control}
              inputMode="decimal"
              keyboardType="decimal-pad"
              rules={{ required: 'Vui lòng nhập giá', validate: validatePrice }}
              inputContainerStyle={styles.inputContainerStyle}
              label={
                demand_id === demands[0]?.id
                  ? t('input.price')
                  : t('input.leasePrice')
              }
              labelStyle={styles.inputLabel}
              name={'price'}
              required
              maxLength={64}
              onBlur={onBlurPrice}
              renderErrorMessage={false}
            />
            {average && <Text style={styles.m2}>{average}</Text>}
          </View>
        </View>
        <View style={styles.boxSelectAddress}>
          <Select
            buttonStyle={styles.select1}
            control={control}
            data={[...formatDataValueId(unitPrices)]}
            rules={{
              required: 'Vui lòng chọn Đơn vị',
            }}
            defaultButtonText="Please Select"
            label={t('select.unit')}
            labelStyle={styles.inputLabel}
            required
            onSelect={(value: { value: number }) =>
              setState({
                ...state,
                priceUnit: value?.value === 1 ? true : false,
              })
            }
            name="price_unit"
          />
          <Input
            control={control}
            isNumeric
            keyboardType="number-pad"
            inputContainerStyle={[
              styles.inputContainerStyle,
              { marginLeft: 10 },
            ]}
            label={t('input.numberBathrooms')}
            labelStyle={styles.inputLabel}
            rules={{
              validate: validateNumberBedroom,
            }}
            name="bathroom"
            renderErrorMessage={false}
          />
        </View>
        <View style={styles.boxSelectAddress}>
          <Input
            control={control}
            isNumeric
            keyboardType="number-pad"
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.numberBedrooms')}
            labelStyle={styles.inputLabel}
            rules={{
              validate: validateNumberBedroom,
            }}
            name="bedroom"
            renderErrorMessage={false}
          />
          <Input
            control={control}
            isNumeric
            keyboardType="number-pad"
            inputContainerStyle={[
              styles.inputContainerStyle,
              { marginLeft: 6 },
            ]}
            label={t('input.floor')}
            labelStyle={styles.inputLabel}
            rules={{
              validate: validateNumberBedroom,
            }}
            name="floor"
            renderErrorMessage={false}
          />
        </View>
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Select
            buttonStyle={[styles.select, { marginBottom: 16 }]}
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
            inputMode="decimal"
            inputContainerStyle={[
              styles.inputContainerStyle,
              { marginLeft: 12 },
            ]}
            keyboardType="decimal-pad"
            rules={{ validate: validateLength }}
            label={t('input.length')}
            labelStyle={styles.inputLabel}
            name="length"
            maxLength={12}
            renderErrorMessage={false}
            rightIcon={<Text>m</Text>}
          />
        </View>
        <View style={styles.boxSelectAddress}>
          <Input
            control={control}
            inputMode="decimal"
            keyboardType="decimal-pad"
            rules={{ validate: validateWidth }}
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.width')}
            labelStyle={styles.inputLabel}
            name="width"
            maxLength={12}
            renderErrorMessage={false}
            rightIcon={<Text>m</Text>}
          />

          <Input
            control={control}
            inputMode="decimal"
            keyboardType="decimal-pad"
            rules={{ validate: validateLaneWidth }}
            inputContainerStyle={[
              styles.inputContainerStyle,
              { marginLeft: 6 },
            ]}
            label={t('input.laneWidth')}
            labelStyle={styles.inputLabel}
            name="lane_width"
            maxLength={12}
            renderErrorMessage={false}
            rightIcon={<Text>m</Text>}
          />
        </View>
        <Text style={styles.realEstateType}>{t('common.legalDocuments')}</Text>
        <View style={styles.boxTypeRealEstate}>
          {information[2]?.children.map(
            (item: { id: any; value: string | null | undefined }) => (
              <View
                key={`buySell${item.id}`}
                style={styles.itemRealEstate}
              >
                <Button
                  buttonStyle={styles.btnTypeRealEstate(
                    item.id === state.legalDocumentsId
                  )}
                  onPress={() => {
                    setValue('legal_documents_id', item.id);
                    setState({ ...state, legalDocumentsId: item.id });
                  }}
                  title={item.value}
                  titleStyle={styles.txtType(
                    item.id === state.legalDocumentsId
                  )}
                  outline
                />
                {item?.id === state.legalDocumentsId && (
                  <View style={styles.checked}>
                    <TickButton />
                  </View>
                )}
              </View>
            )
          )}
        </View>
        <Text style={styles.label}>{t('common.currentStatusHouse')}</Text>
        <View style={styles.boxType}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {information[3]?.children.map(
              (item: { id?: number; value?: string }) => (
                <View
                  key={`buySell${item.id}`}
                  style={styles.buySell}
                >
                  <Button
                    buttonStyle={styles.isBuy(item.id === state.houseStatusId)}
                    onPress={() => {
                      setValue('house_status_id', item.id);
                      setState({ ...state, houseStatusId: item.id });
                    }}
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
              )
            )}
          </ScrollView>
        </View>
        <Text style={styles.label}>{t('common.usageStatus')}</Text>
        <View style={styles.boxType}>
          {information[4]?.children.map(
            (item: { id?: number; value?: string }) => (
              <View
                key={`buySell${item.id}`}
                style={styles.buySell}
              >
                <Button
                  buttonStyle={styles.isBuy(item.id === state.usageConditionId)}
                  onPress={() => {
                    setValue('usage_condition_id', item.id);
                    setState({ ...state, usageConditionId: item.id });
                  }}
                  title={item.value}
                  titleStyle={styles.txtType(
                    item.id === state.usageConditionId
                  )}
                  outline
                />
                {item?.id === state.usageConditionId && (
                  <View style={styles.checked}>
                    <TickButton />
                  </View>
                )}
              </View>
            )
          )}
        </View>
        <Text style={styles.label}>{t('common.location')}</Text>
        <View style={styles.boxType}>
          {information[5]?.children.map(
            (item: { id?: number; value?: string }) => (
              <View
                key={`buySell${item.id}`}
                style={styles.buySell}
              >
                <Button
                  buttonStyle={styles.isBuy(item.id === state.location)}
                  onPress={() => {
                    setValue('location_type_id', item.id);
                    setState({ ...state, location: item.id });
                  }}
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
            )
          )}
        </View>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>{t('common.utilsInformation')}</Text>
        </View>
        <Text style={styles.label}>{utilities[0]?.value}</Text>
        <View style={styles.boxUtils}>
          {listNearByAmenities.map((item: { id?: number; value?: string }) => (
            <Pressable
              key={`itemNearbyAmenities${item?.id}`}
              style={[
                styles.btnSelectUtils,
                utilitiesId.includes(item?.id)
                  ? { backgroundColor: COLORS.BLUE_3 }
                  : {},
              ]}
              onPress={() => handleSelectUtils(item?.id)}
            >
              <Text
                style={
                  utilitiesId.includes(item?.id)
                    ? {
                        color: COLORS.WHITE,
                      }
                    : {}
                }
              >
                {item?.value}
              </Text>
            </Pressable>
          ))}
        </View>
        <Pressable
          style={styles.btnExpand}
          onPress={() =>
            setShow({ ...show, nearbyAmenities: !show.nearbyAmenities })
          }
        >
          <Text style={styles.txtExpand}>
            {show.nearbyAmenities ? 'Thu gọn' : 'Hiển thị đầy đủ'}
          </Text>
          <Icon
            name={show.nearbyAmenities ? 'expand-less' : 'keyboard-arrow-down'}
            size={20}
            color={COLORS.ORANGE_5}
          />
        </Pressable>
        <Text style={styles.label}>{utilities[1]?.value}</Text>
        <View style={styles.boxUtils}>
          {listFurniture.map((item: { id?: number; value?: string }) => (
            <Pressable
              key={`itemFurniture${item?.id}`}
              style={[
                styles.btnSelectUtils,
                furnitureId.includes(item?.id)
                  ? { backgroundColor: COLORS.BLUE_3 }
                  : {},
              ]}
              onPress={() => handleFurniture(item?.id)}
            >
              <Text
                style={
                  furnitureId.includes(item?.id)
                    ? {
                        color: COLORS.WHITE,
                      }
                    : {}
                }
              >
                {item?.value}
              </Text>
            </Pressable>
          ))}
        </View>
        <Pressable
          style={styles.btnExpand}
          onPress={() => setShow({ ...show, furniture: !show.furniture })}
        >
          <Text style={styles.txtExpand}>
            {show.furniture ? 'Thu gọn' : 'Hiển thị đầy đủ'}
          </Text>
          <Icon
            name={show.furniture ? 'expand-less' : 'keyboard-arrow-down'}
            size={20}
            color={COLORS.ORANGE_5}
          />
        </Pressable>
        <Text style={styles.label}>{utilities[2]?.value}</Text>
        <View style={styles.boxUtils}>
          {utilities[2]?.children?.map(
            (item: { id?: number; value?: string }) => (
              <Pressable
                key={`itemSecurity${item?.id}`}
                style={[
                  styles.btnSelectUtils,
                  securityId.includes(item?.id)
                    ? { backgroundColor: COLORS.BLUE_3 }
                    : {},
                ]}
                onPress={() => handleSecurity(item?.id)}
              >
                <Text
                  style={
                    securityId.includes(item?.id)
                      ? {
                          color: COLORS.WHITE,
                        }
                      : {}
                  }
                >
                  {item?.value}
                </Text>
              </Pressable>
            )
          )}
        </View>
        <Text style={styles.label}>{utilities[3]?.value}</Text>
        <View style={styles.boxUtils}>
          {utilities[3]?.children?.map(
            (item: { id?: number; value?: string }) => (
              <Pressable
                key={`itemRoadType${item?.id}`}
                style={[
                  styles.btnSelectUtils,
                  roadTypeId.includes(item?.id)
                    ? { backgroundColor: COLORS.BLUE_3 }
                    : {},
                ]}
                onPress={() => handleRoadType(item?.id)}
              >
                <Text
                  style={
                    roadTypeId.includes(item?.id)
                      ? {
                          color: COLORS.WHITE,
                        }
                      : {}
                  }
                >
                  {item?.value}
                </Text>
              </Pressable>
            )
          )}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RealEstateInformation;
