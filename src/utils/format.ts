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
  return selectAll.concat(dataSelectConvert);
};
