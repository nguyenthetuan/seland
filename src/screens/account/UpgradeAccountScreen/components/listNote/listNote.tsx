import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from '../../../../../components';
import styles from './listNoteStyles';
import { IconNoteDot } from '../../icon';
import { INote } from '../NotesScreen/model';

interface IProps {
  data: INote[];
}

const ListNote = (props: IProps) => {
  const { data } = props;

  const renderItem = ({ item }: { item: INote }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.wrapTitle}>
          <IconNoteDot />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ListNote;
