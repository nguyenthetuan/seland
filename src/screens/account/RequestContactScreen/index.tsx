import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header, Text } from '../../../components';
import styles from './styles';
import { useTranslation } from 'react-i18next';

const RequestContactScreen = () => {
  const { t } = useTranslation();
  return (
    <ScrollView>
      <Header title={t('common.requestContact')} />
      <View style={styles.container}>
        <Text>{t('common.requestContact')}</Text>
      </View>
    </ScrollView>
  );
};

export default RequestContactScreen;
