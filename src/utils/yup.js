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

export default yup;
