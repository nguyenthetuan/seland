import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { ArrowLeft } from '../../../../../assets/icons';
import { Input, Text } from '../../../../../components';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import yup from '../../../../../utils/yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { COLORS, SCREENS } from '../../../../../constants';

const AddAccountScreen = () => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const schema = yup.object({
    name: yup.string().nullable(),
  });

  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      name: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onAddNewAccount = () => {
    navigate(SCREENS.CHANGE_STATUS_SCREEN);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapHeader}>
          <TouchableOpacity
            style={styles.wrapHeaderIcon}
            onPress={goBack}
          >
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.title}>
            {t('collaboratorInformation.header')}
          </Text>
        </View>

        <Text style={styles.description}>{t('addAccount.header')}</Text>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.name?.message}
            label={t('addAccount.name')}
            name="name"
            onFocus={() => clearErrors('name')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('addAccount.name')}
          />
        </View>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.phoneNumber?.message}
            label={t('addAccount.phoneNumber')}
            name="phoneNumber"
            onFocus={() => clearErrors('phoneNumber')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('addAccount.phoneNumber')}
          />
        </View>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.password?.message}
            label={t('addAccount.password')}
            name="password"
            onFocus={() => clearErrors('password')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('addAccount.password')}
          />
        </View>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.confirmPassword?.message}
            label={t('addAccount.confirmPassword')}
            name="confirmPassword"
            onFocus={() => clearErrors('confirmPassword')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('addAccount.confirmPassword')}
          />
        </View>
      </ScrollView>

      <View style={styles.wrapBottomContainer}>
        <TouchableOpacity
          style={styles.confirmPayContainer}
          onPress={onAddNewAccount}
        >
          <Text style={styles.selectedTitle}>{t('addAccount.addNew')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelPayContainer}
          onPress={goBack}
        >
          <Text style={styles.cancelText}>{t('addAccount.cancel')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddAccountScreen;
