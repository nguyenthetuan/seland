import {
  ForgotPasswordScreen1,
  ForgotPasswordScreen2,
  ForgotPasswordScreen3,
  LoginScreen,
  OtpScreen,
  SignupScreen,
} from '../../screens';

const routes = [
  {
    component: SignupScreen,
    name: 'Signup',
  },
  {
    component: OtpScreen,
    name: 'Otp',
  },
  {
    component: LoginScreen,
    name: 'Login',
  },
  {
    component: ForgotPasswordScreen1,
    name: 'ForgotPassword1',
  },
  {
    component: ForgotPasswordScreen2,
    name: 'ForgotPassword2',
  },
  {
    component: ForgotPasswordScreen3,
    name: 'ForgotPassword3',
  },
];

export default routes;
