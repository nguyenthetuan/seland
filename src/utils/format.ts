import { useTranslation } from 'react-i18next';

interface IFormatSelect {
  name: string;
  id: string | number | null;
}

export const formatSelect = (data: IFormatSelect[]) => {
  const { t } = useTranslation();

  const selectAll = [
    {
      label: `${t('button.all')}`,
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
