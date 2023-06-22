export const validateAddress = (value: string) => {
  if (value) {
    if (value.length < 100) {
      return 'Bạn cần nhập địa chỉ lớn hơn 100 ký tự';
    }
  }
  return undefined;
};
