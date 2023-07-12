import { BUY_ACCOUNT_PACKAGE, CREATE_TRANSACTION, GET_VNPAY_URL } from "../constants";
import { get, post } from "../utils";

export const requestCreateTransaction = (params) => post(CREATE_TRANSACTION, params);

export const requestGetVNPayURL = amount => get(`${GET_VNPAY_URL}?amount=${amount}`);

export const requestBuyPackage = param => post(BUY_ACCOUNT_PACKAGE, param);

