import { isMobilePhone } from 'validator';
import * as yup from 'yup';

yup.addMethod(
  yup.string,
  'isValidPhoneNumber',
  function validatePhoneNumber(message) {
    return this.trim()
      .required('Vui lòng nhập số điện thoại')
      .test(
        'isValidPhoneNumber',
        message,
        (value, context) =>
          (/^\d{10}$/.test(value) && isMobilePhone(value, 'vi-VN')) ||
          context.createError({
            message: message || 'Số điện thoại không đúng định dạng',
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
          .required('Vui lòng nhập mật khẩu')
          .min(8, 'Độ dài mật khẩu: 8-64 kí tự')
          .max(64, 'Độ dài mật khẩu: 8-64 kí tự')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*`]).{8,64}$/,
            'Mật khẩu không đúng định dạng'
          )
      : this.trim().required('Vui lòng nhập mật khẩu');
  }
);

export default yup;
