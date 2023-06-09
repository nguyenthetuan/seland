import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from '../../../../../components';
import styles from './listNoteStyles';

interface Note {
  id: number;
  title: string;
  description: string;
}

interface IProps {
  data: Note[];
}

const ListNote = (props: IProps) => {
  const { data } = props;

  const renderItem = ({ item }: { item: Note }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.wrapTitle}>
          <View style={styles.circle} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ListNote;
