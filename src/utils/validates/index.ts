export const isYear = (value: any) => {
  return /^(19|20)\d{2}$/.test(value);
};

export const check1To99 = (value: any) => {
  return /^(([1-8][0-9]?|9[0-8]?)\.\d+|[1-9][0-9]?)$/.test(value);
};

export const isPhoneNumber = (value: any) => {
  return /^(03[2-9]|05[2689]|07[06789]|08[1-9]|09[0-9])([0-9]{7})$/.test(
    value.toLowerCase()
  );
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
      return 'Vui lòng nhập giá trị từ 1-99';
    }
  }
  return undefined;
};

export const validatePhone = (value: string) => {
  if (value) {
    if (!isPhoneNumber(value)) {
      return 'Số điện thoại không đúng định dạng';
    }
  }
  return undefined;
};

export const validateName = (value: string) => {
  if (value) {
    if (value.length < 5 || value.length > 128) {
      return 'Độ dài họ và tên: 5-128 kí tự';
    }
  }
  return undefined;
};

export const validateTitle = (value: string) => {
  if (value) {
    if (value.trim().length < 40 || value.trim().length > 128) {
      return 'Độ dài tiêu đề: 40-128 kí tự';
    }
  }
  return undefined;
};

export const validateContent = (value: string) => {
  if (value) {
    if (value.length < 100 || value.length > 1024) {
      return 'Độ dài nội dung: 100-1024 kí tự';
    }
  }
  return undefined;
};

export const validateEmail = (value: string) => {
  if (value) {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!value.match(validRegex)) return 'Vui lòng nhập đúng địa chỉ email';
  }
  return undefined;
};

export const validateLatLog = (value: string) => {
  if (value) {
    const validRegex = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi;
    if (!value.match(validRegex)) return 'Vui lòng nhập đúng địa chỉ email';
  }
  return undefined;
};

export const validateUrlYoutube = (value: string) => {
  if (value) {
    // const validRegex = /^(https?\:\/\/)?(youtube\.com|youtu\.be)\/.+$/gi;
    const validRegex =
      /^(https?\:\/\/)?(www\.youtube\.com|youtube\.com|youtu\.be)\/.+$/gi;
    if (!value.match(validRegex)) return 'Vui lòng nhập đúng địa Youtube';
  }
  return undefined;
};
