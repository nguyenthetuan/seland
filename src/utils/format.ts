interface IFormatSelect {
  name: string;
  id: string | number | null;
}

export const formatSelect = (data: IFormatSelect[]) => {
  const selectAll = [
    {
      label: 'Tất cả',
      value: null,
    },
  ];
  const dataSelectConvert: any = data?.map(item => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });
  return [
    ...selectAll,
    ...dataSelectConvert,
    {
      label: 'Thêm',
      value: undefined,
    },
  ];
};

export const formatPrice = (price: string) => {
  if (!price) {
    return '0';
  } else {
    const round = Math.round(parseFloat(price));
    return round.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
