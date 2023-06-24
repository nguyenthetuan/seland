import React from 'react';
import { View } from 'react-native';
import ListNote from '../listNote/listNote';
import styles from './styles';

interface INote {
  id: number;
  title: string;
  description: string;
}

const NotesScreen = () => {
  const data: Array<INote> = [
    {
      id: 1,
      title: 'Xem khu vực sốt BĐS trên bản đồ quy hoạch',
      description: 'Xem khu vực sốt BĐS trên bản đồ quy hoạch',
    },
    {
      id: 2,
      title: 'Xem khu vực sốt BĐS trên bản đồ quy hoạch',
      description: 'Xem khu vực sốt BĐS trên bản đồ quy hoạch',
    },
    {
      id: 3,
      title: 'Xem khu vực sốt BĐS trên bản đồ quy hoạch',
      description: 'Xem khu vực sốt BĐS trên bản đồ quy hoạch',
    },
  ];
  return (
    <View style={styles.container}>
      <ListNote data={data} />
    </View>
  );
};

export default NotesScreen;
