import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { FC, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import { LogoZoning } from '../../../../assets';
import { Input, Text } from '../../../../components';
import { COLORS, SCREENS } from '../../../../constants';
import styles from './styles';

interface Iprops {
  control?: Control<any>;
  handleSubmit?: any;
  onChangeSearch?: Function;
  getValues?: any;
}

const HeaderListPosts: FC<Iprops> = props => {
  const { t } = useTranslation();
  const { goBack, navigate } = useNavigation();
  const { handleSubmit, onChangeSearch, getValues } = props;
  const control = props?.control;
  const {
    field: { onChange, value },
  } = useController({ control, name: 'title' });

  const navigateMapScreen = () => {
    navigate(SCREENS.MAPS);
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.WHITE }}>
      <View style={styles.headerListPosts}>
        <Icon
          name="arrow-back"
          onPress={goBack}
        />
        <View style={styles.inputContainer}>
          <Input
            name="title"
            control={control}
            returnKeyType="search"
            // onSubmitEditing={value => onChange(value)}
            onEndEditing={value => onChange(value)}
            // onChangeText={value => onChange(value)}
            placeholder={
              (t('placeholder.searchTitle').length <= 21
                ? t('placeholder.searchTitle')
                : t('placeholder.searchTitle').slice(0, 21) + '...' ||
                  '') as string
            }
            rightIcon={
              <TouchableOpacity onPress={handleSubmit(onChangeSearch)}>
                <Icon name="search" />
              </TouchableOpacity>
            }
          />
        </View>

        <Icon name="my-location" />
        <TouchableOpacity
          style={styles.boxZoning}
          onPress={navigateMapScreen}
        >
          <LogoZoning />
          <Text style={styles.checkZoning}>{t('heading.checkZoning')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderListPosts;
