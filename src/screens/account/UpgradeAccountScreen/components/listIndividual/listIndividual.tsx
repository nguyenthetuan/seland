import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../../components';
import styles from './listIndividualStyles';
import { IListIndividual } from '../IndividualFeatureScreen/model';
import { IndividualIcon } from '../../icon';

interface IProps {
  data: IListIndividual[];
}

const ListIndividual = (props: IProps) => {
  const { data } = props;
  const renderItem = ({ item }: { item: IListIndividual }) => {
    return (
      <View
        id={item.id.toString()}
        style={styles.container}
      >
        <View style={styles.wrapImageContainer}>
          <IndividualIcon />
        </View>
        <Text style={styles.title}>{item.value.toUpperCase()}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{item.price} VND</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListIndividual;
