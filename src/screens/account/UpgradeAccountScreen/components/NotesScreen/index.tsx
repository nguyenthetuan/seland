import React from 'react';
import { View } from 'react-native';
import ListNote from '../listNote/listNote';
import styles from './styles';
import { noteList } from './model';

const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <ListNote data={noteList} />
    </View>
  );
};

export default NotesScreen;
