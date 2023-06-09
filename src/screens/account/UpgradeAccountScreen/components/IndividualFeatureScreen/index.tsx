import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../../../components';
import ListIndividual from '../listIndividual/listIndividual';
import styles from './styles';

interface IListIndividual {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  price: string | number;
}

const IndividualFeatureScreen = () => {
  const listIndividual: Array<IListIndividual> = [
    {
      id: 1,
      imagePath:
        'https://znews-photo.zingcdn.me/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg',
      title: 'XEM KHU VỰC SỐT BĐS TRÊN BẢN ĐỒ QUY HOẠCH',
      description: 'Xem khu vực sốt BĐS trên bản đồ quy hoạch',
      price: 'xx',
    },
    {
      id: 2,
      imagePath:
        'https://znews-photo.zingcdn.me/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg',
      title: 'XEM KHU VỰC SỐT BĐS TRÊN BẢN ĐỒ QUY HOẠCH',
      description: 'Xem khu vực sốt BĐS trên bản đồ quy hoạch',
      price: 'xx',
    },
    {
      id: 3,
      imagePath:
        'https://znews-photo.zingcdn.me/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg',
      title: 'XEM KHU VỰC SỐT BĐS TRÊN BẢN ĐỒ QUY HOẠCH',
      description: 'Xem khu vực sốt BĐS trên bản đồ quy hoạch',
      price: 'xx',
    },
  ];
  return (
    <View style={styles.container}>
      <ListIndividual data={listIndividual} />
    </View>
  );
};

export default IndividualFeatureScreen;
