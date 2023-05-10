import { Button, Icon } from '@rneui/base';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
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

import { Text } from '../../../../components';
import {
  COLOR_BLACK_1,
  COLOR_BLUE_1,
  COLOR_GRAY_7,
  COLOR_GRAY_8,
  COLOR_WHITE,
} from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonClose: {
    backgroundColor: COLOR_BLUE_1,
    borderRadius: 5,
    padding: 6,
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
  scroll: {
    paddingHorizontal: 10,
  },
});

const type = [
  { label: 'Mua', value: '1' },
  { label: 'Bán', value: '2' },
];

const Filter = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [showFilter, setShowFilter] = useState(false);

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
          <Text>{t('select.type')}</Text>
          {type.map(item => (
            <Button
              key={item?.value}
              title={item?.label}
              type="outline"
            />
          ))}
          <Text>{t('select.area')}</Text>
          <Text>{t('select.typeHousing')}</Text>
          <Text>{t('common.priceRange')}</Text>
          <Text>{t('common.acreage')}</Text>
          <Text>{t('common.compass')}</Text>
          <Text>{t('common.legalDocuments')}</Text>
          <Text>{t('common.location')}</Text>
          <Text>{t('common.bedroom')}</Text>
          <Text>{t('common.bathroom')}</Text>
          <Text>{t('common.numberFloors')}</Text>
          <View style={styles.footer}>
            <Button
              buttonStyle={{
                width: width * 0.45,
                borderColor: COLOR_GRAY_7,
              }}
              titleStyle={{
                color: COLOR_BLACK_1,
                fontSize: 14,
                lineHeight: 22,
              }}
              radius={5}
              title={t('button.reset')}
              type="outline"
            />
            <Button
              buttonStyle={{
                width: width * 0.45,
                backgroundColor: COLOR_BLUE_1,
                borderColor: COLOR_BLUE_1,
              }}
              titleStyle={{ fontSize: 14, lineHeight: 22 }}
              radius={5}
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
