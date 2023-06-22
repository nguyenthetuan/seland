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
  const { realEstateInformation, information, unitPrices, utilities } =
    useSelector(selectPosts);
  const [average, setAverage] = useState(0);
  const [utilitiesId, setUtilitiesId] = useState([]);
  const [furnitureId, setFurnitureId] = useState([]);
  const [securityId, setSecurityId] = useState([]);
  const [roadTypeId, setRoadTypeId] = useState([]);
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
  const [show, setShow] = useState<{
    nearbyAmenities: boolean;
    furniture: boolean;
  }>({
    nearbyAmenities: false,
    furniture: false,
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
      ([key, value]) => value && setValue && setValue(key, value)
    );
  }, [realEstateInformation, setValue]);

  const onBlurPrice = () => {
    const value = getValues && getValues();
    if (value?.area && value?.price) {
      setAverage(Number(value?.price) / Number(value?.area));
    }
  };
  const handleSelectUtils = (value: any) => {
    if (utilitiesId.includes(value)) {
      const array = utilitiesId?.filter((item: any) => item !== value);
      setUtilitiesId(array);
    } else {
      setUtilitiesId([...utilitiesId, value]);
    }
  };

  const handleFurniture = (value: any) => {
    if (furnitureId.includes(value)) {
      const array = furnitureId?.filter((item: any) => item !== value);
      setFurnitureId(array);
    } else {
      setFurnitureId([...furnitureId, value]);
    }
  };

  const handleSecurity = (value: any) => {
    if (securityId.includes(value)) {
      const array = securityId?.filter((item: any) => item !== value);
      setSecurityId(array);
    } else {
      setSecurityId([...securityId, value]);
    }
  };

  const handleRoadType = (value: any) => {
    if (roadTypeId.includes(value)) {
      const array = roadTypeId?.filter((item: any) => item !== value);
      setRoadTypeId(array);
    } else {
      setRoadTypeId([...roadTypeId, value]);
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
            inputMode="numeric"
            isNumeric
            rules={{ required: 'Vui lòng nhập Diện tích' }}
            inputContainerStyle={styles.inputContainerStyle}
            label={t('input.acreage')}
            labelStyle={styles.inputLabel}
            name="area"
            required
            rightIcon={<Text>m²</Text>}
            renderErrorMessage={false}
          />
          <View>
            <Input
              control={control}
              inputMode="numeric"
              isNumeric
              rules={{ required: 'Vui lòng nhập giá' }}
              inputContainerStyle={styles.inputContainerStyle}
              label={t('input.price')}
              labelStyle={styles.inputLabel}
              name="price"
              required
              onBlur={onBlurPrice}
              renderErrorMessage={false}
            />
            {average > 0 && (
              <Text style={styles.m2}>{`~ ${average.toFixed(
                0
              )} triệu/m2`}</Text>
            )}
          </View>
        </View>
        <View style={styles.boxSelectAddress}>
          <Select
            buttonStyle={styles.select1}
            control={control}
            data={unitPricesOptions}
            rules={{ required: 'Vui lòng chọn Đơn vị' }}
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
                onPress={() =>
                  setState({ ...state, legalDocumentsId: item.id })
                }
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
            {information[3]?.children.map(
              (item: { id?: number; value?: string }) => (
                <View
                  key={`buySell${item.id}`}
                  style={styles.buySell}
                >
                  <Button
                    buttonStyle={styles.isBuy(item.id === state.houseStatusId)}
                    onPress={() =>
                      setState({ ...state, houseStatusId: item.id })
                    }
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
                  onPress={() =>
                    setState({ ...state, usageConditionId: item.id })
                  }
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
