import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../../../components';
import ListIndividual from '../listIndividual/listIndividual';
import styles from './styles';
import { IndividualIcon } from '../../icon';

interface IListIndividual {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  price: string | number;
}

const IndividualFeatureScreen = () => {
  const listIndividual: Array<IListIndividual> = [
    {
      id: 1,
      icon: <IndividualIcon />,
      title: 'Xem khu vực sốt bđs trên BĐQH',
      description:
        'Seland sẽ tổng hợp và thống kê những khu vực sốt đất nhằm cung cấp cho người dùng biết những khu vực sắp và đang sảy ra sôt đất ( thể hiện bằng các loại màu sắc trên bản đồ ).',
      price: 'XX',
    },
    {
      id: 2,
      icon: <IndividualIcon />,
      title: 'Xem tiến độ phát triển của dự án',
      description:
        'Nhà đầu tư dễ dàng nắm bắt được tiến độ pháp lý từng giai đoạn của một dự án, mục đích hỗ trợ tốt nhất cho nhà đầu tư nắm bắt cơ hội đầu tư và giảm thiểu rủi do pháp lý của dự án',
      price: 'XX',
    },
    {
      id: 3,
      icon: <IndividualIcon />,
      title: 'Tính dòng tiền, tỉ suất sinh lời',
      description:
        'Nhà đầu tư có thể cân đối dòng tiền và tính được tỉ suất sinh lời hàng năm của một bđs',
      price: 'XX',
    },
  ];
  return (
    <View style={styles.container}>
      <ListIndividual data={listIndividual} />
    </View>
  );
};

export default IndividualFeatureScreen;
