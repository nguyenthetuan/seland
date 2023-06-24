import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from '../../../../../components';
import styles from './styles';
import { TouchableOpacity } from 'react-native';

interface Iprops {}

const Tabs: FC<Iprops> = props => {
  const { t } = useTranslation();
  const [tabActive, setTabActive] = useState('1');

  const tabs = [
    {
      label: t('button.buySell'),
      value: '1',
    },
    {
      label: t('common.lease'),
      value: '2',
    },
  ];

  return (
    <View style={styles.tab}>
      {tabs.map(tab => {
        return (
          <TouchableOpacity
            style={
              tabActive === tab.value ? styles.tabItemActive : styles.tabItem
            }
            key={tab.value}
            onPress={() => setTabActive(tab.value)}
          >
            <Text
              style={
                tabActive === tab.value ? styles.tabTextActive : styles.tabText
              }
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabs;
