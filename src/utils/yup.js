import { isMobilePhone } from 'validator';
import * as yup from 'yup';

import i18n from './i18n';

const { t } = i18n;

yup.addMethod(
  yup.string,
  'isValidPhoneNumber',
  function validatePhoneNumber(message) {
    return this.trim()
      .required(t('error.phoneNumber.required'))
      .test(
        'isValidPhoneNumber',
        message,
        (value, context) =>
          (/^\d{10}$/.test(value) && isMobilePhone(value, 'vi-VN')) ||
          context.createError({
            message: message || t('error.phoneNumber.format'),
          })
      );
  }
);

yup.addMethod(
  yup.string,
  'isValidPassword',
  function validatePassword(strict = false) {
    return strict
      ? this.trim()
          .required(t('error.password.required'))
          .min(8, t('error.password.length'))
          .max(64, t('error.password.length'))
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*`]).{8,64}$/,
            t('error.password.format')
          )
      : this.trim().required(t('error.password.required'));
  }
);

yup.addMethod(
  yup.string,
  'isValidPasswordConfirmation',
  function validatePasswordConfirmation() {
    return this.trim().oneOf(
      [yup.ref('password')],
      t('error.passwordConfirmation')
    );
  }
);

yup.addMethod(yup.string, 'isValidName', function validateName() {
  return this.trim()
    .required(t('error.name.required'))
    .min(5, t('error.name.length'))
    .max(128, t('error.name.length'));
});

yup.addMethod(yup.string, 'isValidEmail', function validateEmail(message) {
  return this.trim()
    .max(255, t('error.email.maxLength'))
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, t('error.email.format'))
    .test('isValidEmail', message, (value, context) => {
      if (!value) return true;
      const localPart = value.split('@')[0];
      return (
        (/^[^A-Z]*$/.test(value) &&
          localPart.length >= 4 &&
          localPart.length <= 64) ||
        context.createError({
          message: message || t('error.email.format'),
        })
      );
    });
});

yup.addMethod(yup.string, 'isValidAddress', function validateAddress() {
  return this.trim().max(255, t('error.address.maxLength'));
});

yup.addMethod(
  yup.string,
  'isValidCompanyName',
  function validateCompanyName(message) {
    return this.trim().test(
      'isValidCompanyName',
      message,
      (value, context) =>
        !value ||
        (value.length >= 3 && value.length <= 128) ||
        context.createError({
          message: message || t('error.companyName.length'),
        })
    );
  }
);

yup.addMethod(yup.string, 'isValidTaxCode', function validateTaxCode() {
  return this.trim()
    .max(13, t('error.taxCode.maxLength'))
    .matches(/^\d*$/, t('error.taxCode.format'));
});

yup.addMethod(yup.string, 'isValidWebsite', function validateWebsite() {
  return this.trim()
    .max(255, t('error.website.maxLength'))
    .url(t('error.website.format'));
});

export default yup;
