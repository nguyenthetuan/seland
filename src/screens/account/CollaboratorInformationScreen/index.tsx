import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { ArrowLeft } from '../../../assets/icons';
import { DateTimePicker, Input, Text } from '../../../components';
import COLORS from '../../../constants/colors';
import styles from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import yup from '../../../utils/yup';
import UploadImage from './components/UploadImage';

const CollaboratorInformationScreen = () => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();

  const schema = yup.object({
    name: yup.string().nullable(),
    phoneNumber: yup.string().nullable(),
    dob: yup.string().nullable(),
    email: yup.string().nullable(),
    job: yup.string().nullable(),
    yoe: yup.string().nullable(),
    workZone: yup.string().nullable(),
    workingYear: yup.string().nullable(),
    frontIdCard: yup.string().nullable(),
    backIdCard: yup.string().nullable(),
    certificateCard: yup.string().nullable(),
  });

  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      dob: '',
      email: '',
      job: '',
      yoe: '',
      workZone: '',
      workingYear: '',
      frontIdCard: '',
      backIdCard: '',
      certificateCard: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('data: ', data);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE_1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapHeader}>
          <View style={styles.wrapHeaderIcon}>
            <ArrowLeft onPress={goBack} />
          </View>
          <Text style={styles.title}>
            {t('collaboratorInformation.header')}
          </Text>
        </View>

        <View style={{ paddingBottom: 120 }}>
          <Text style={styles.description}>
            {t('collaboratorInformation.collaboratorInformationAmater')}
          </Text>
          <View>
            <Input
              labelStyle={styles.labelStyle}
              control={control}
              errorMessage={errors.name?.message}
              label={t('collaboratorInformation.name')}
              name="name"
              onFocus={() => clearErrors('name')}
              rightIcon={undefined}
              renderErrorMessage={false}
              placeholder={t('placeholder.name')}
            />
          </View>
          <View>
            <Input
              labelStyle={styles.labelStyle}
              control={control}
              errorMessage={errors.phoneNumber?.message}
              label={t('collaboratorInformation.phoneNumber')}
              name="phoneNumber"
              onFocus={() => clearErrors('phoneNumber')}
              rightIcon={undefined}
              renderErrorMessage={false}
              placeholder={t('placeholder.phoneNumber')}
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <DateTimePicker
              labelStyle={styles.labelStyle}
              label={t('collaboratorInformation.dob')}
              control={control}
              name="dob"
            />
          </View>
          <View>
            <Input
              labelStyle={styles.labelStyle}
              control={control}
              errorMessage={errors.email?.message}
              label={t('collaboratorInformation.email')}
              name="email"
              onFocus={() => clearErrors('email')}
              rightIcon={undefined}
              renderErrorMessage={false}
              placeholder={t('placeholder.email')}
            />
          </View>
          <View>
            <Input
              labelStyle={styles.labelStyle}
              control={control}
              errorMessage={errors.job?.message}
              label={t('collaboratorInformation.job')}
              name="job"
              onFocus={() => clearErrors('job')}
              rightIcon={undefined}
              renderErrorMessage={false}
              placeholder={t('placeholder.job')}
            />
          </View>
          <View>
            <Input
              labelStyle={styles.labelStyle}
              control={control}
              errorMessage={errors.yoe?.message}
              label={t('collaboratorInformation.yoe')}
              name="yoe"
              onFocus={() => clearErrors('yoe')}
              rightIcon={undefined}
              renderErrorMessage={false}
              placeholder={t('placeholder.yoe')}
            />
          </View>

          <View>
            <Input
              labelStyle={styles.labelStyle}
              control={control}
              errorMessage={errors.workZone?.message}
              label={t('collaboratorInformation.workZone')}
              name="workZone"
              onFocus={() => clearErrors('workZone')}
              rightIcon={undefined}
              renderErrorMessage={false}
              placeholder={t('placeholder.workZone')}
            />
          </View>
          <View>
            <DateTimePicker
              labelStyle={styles.labelStyle}
              label={t('collaboratorInformation.workingYear')}
              control={control}
              name="workingYear"
            />
          </View>
          <UploadImage
            label={t('collaboratorInformation.frontIdCard')}
            required={true}
            control={control}
            name="frontIdCard"
          />
          <UploadImage
            label={t('collaboratorInformation.backIdCard')}
            required={true}
            control={control}
            name="backIdCard"
          />
        </View>
      </ScrollView>

      <View style={styles.wrapBottomContainer}>
        <TouchableOpacity
          style={styles.confirmPayContainer}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.selectedTitle}>
            {t('collaboratorInformation.save')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CollaboratorInformationScreen;
