import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { NoResultsImage } from '../../../assets';
import Text from '../Text';
import styles from './styles';

const NoResults = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image source={NoResultsImage} />
      <Text style={styles.noResults}>{t('common.noResults')}</Text>
    </View>
  );
};

NoResults.propTypes = {};

export default NoResults;
