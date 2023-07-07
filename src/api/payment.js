import { CREATE_TRANSACTION } from "../constants";
import { post } from "../utils";

export const requestCreateTransaction = (params) => post(CREATE_TRANSACTION, params);