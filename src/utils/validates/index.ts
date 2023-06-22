export const validateAddress = (value: string) => {
  console.log('🚀 ~ file: index.ts:2 ~ validateAddress ~ value:', value.length);
  if (value) {
    if (value.length < 100) {
      return 'Bạn cần nhập địa chỉ lớn hơn 100 ký tự';
    }
  }
  return undefined;
};
