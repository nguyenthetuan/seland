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

const ChangeStatusScreen = () => {
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
      status: '',
      verify: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onAddNewAccount = () => {
    navigate(SCREENS.STAFF_INFORMATION_SCREEN);
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

        <Text style={styles.description}>{t('changeStatus.header')}</Text>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.status?.message}
            label={t('changeStatus.status')}
            name="status"
            onFocus={() => clearErrors('status')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('changeStatus.status')}
          />
        </View>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.verify?.message}
            label={t('changeStatus.verify')}
            name="verify"
            onFocus={() => clearErrors('verify')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('changeStatus.verify')}
          />
        </View>
      </ScrollView>

      <View style={styles.wrapBottomContainer}>
        <TouchableOpacity
          style={styles.confirmPayContainer}
          onPress={onAddNewAccount}
        >
          <Text style={styles.selectedTitle}>{t('changeStatus.save')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelPayContainer}
          onPress={goBack}
        >
          <Text style={styles.cancelText}>{t('changeStatus.cancel')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangeStatusScreen;
