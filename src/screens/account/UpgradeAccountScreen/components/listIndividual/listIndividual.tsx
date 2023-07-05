import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../../components';
import styles from './listIndividualStyles';

interface IListIndividual {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  price: string | number;
}

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
        <View style={styles.wrapImageContainer}>{item.icon}</View>
        <Text style={styles.title}>{item.title.toUpperCase()}</Text>
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
