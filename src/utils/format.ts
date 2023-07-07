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

export const formatMoney = (
  value: any = '',
  decimalCount = 0,
  decimal = '.',
  thousands = ','
) => {
  try {
    let amount = value.toString().replace(/,/g, '');
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    const i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    const j = i.length > 3 ? i.length % 3 : 0;

    const result =
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          // @ts-ignore
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '');
    return result;
  } catch (e) {
    console.log(e);
  }
};
