import { Icon } from '@rneui/themed';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
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
import { SliderComponent } from './SliderComponent';

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
    paddingHorizontal: 0,
  },
  wrapFilter: {
    marginTop: 8,
  },
});

// const type = [
//   { label: 'Mua', value: '1' },
//   { label: 'Bán', value: '2' },
// ];

const Filter = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [showFilter, setShowFilter] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });

  const realEstateType = [{ label: 'Mua', value: 1 }];

  const onSelect = (value: any) => {
    console.log('🚀 ~ file: index.js:51 ~ onSelect ~ value:', value);
  };

  const onOpen = () => setShowFilter(true);

  const onClose = () => setShowFilter(false);

  useImperativeHandle(ref, () => ({ onOpen }));

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
                    data={realEstateType}
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
                />
              </View>
            </View>
          </View>

          <SliderComponent title={t('common.priceRange') || undefined} />

          <View>
            <Text style={null}>{t('select.typeHousing')}</Text>
            <TypeHousing />
          </View>
          <Text style={null}>{t('common.priceRange')}</Text>
          <Text style={null}>{t('common.acreage')}</Text>
          <Text style={null}>{t('common.compass')}</Text>
          <Text style={null}>{t('common.legalDocuments')}</Text>
          <Text style={null}>{t('common.location')}</Text>
          <Text style={null}>{t('common.bedroom')}</Text>
          <Text style={null}>{t('common.bathroom')}</Text>
          <Text style={null}>{t('common.numberFloors')}</Text>
          <View style={styles.footer}>
            <Button
              buttonStyle={{
                width: width * 0.45,
                borderColor: COLOR_GRAY_7,
              }}
              // eslint-disable-next-line react-native/no-inline-styles
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
            />
            <Button
              buttonStyle={{
                width: width * 0.45,
                backgroundColor: COLOR_BLUE_1,
                borderColor: COLOR_BLUE_1,
              }}
              // eslint-disable-next-line react-native/no-inline-styles
              titleStyle={{ fontSize: 14, lineHeight: 22 }}
              radius={5}
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
