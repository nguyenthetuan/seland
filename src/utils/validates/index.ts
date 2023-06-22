export const isYear = (value: any) => {
  return /^(19|20)\d{2}$/.test(value);
};

export const check1To99 = (value: any) => {
  return /^(([1-8][0-9]?|9[0-8]?)\.\d+|[1-9][0-9]?)$/.test(value);
};

export const validateAddress = (value: string) => {
  if (value) {
    if (value.length < 100) {
      return 'Bạn cần nhập địa chỉ lớn hơn 100 ký tự';
    }
  }
  return undefined;
};

export const validateApartmentCode = (value: string) => {
  if (value) {
    if (value.length < 2 || value.length > 64) {
      return 'Độ dài Mã căn hộ: 2 - 64 kí tự';
    }
  }
  return undefined;
};

export const validateFormatYear = (value: string) => {
  if (value) {
    if (!isYear(value)) {
      return 'Sai định dạng năm';
    }
  }
  return undefined;
};

export const validateNumberBedroom = (value: string) => {
  if (value) {
    if (!check1To99(value)) {
      return 'Chỉ được phép nhập từ 1 đến 99';
    }
  }
  return undefined;
};
