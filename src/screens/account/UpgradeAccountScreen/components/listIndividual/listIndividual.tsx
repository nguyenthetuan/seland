import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../../components';
import { ScreenStackParamList } from '../../../../../navigation/ScreenStackParam';
import { formatPriceBuyPackage } from '../../../../../utils/format';
import { IndividualIcon } from '../../icon';
import { Package } from '../../model';
import styles from './listIndividualStyles';

interface IProps {
  data: Package[];
}

const ListIndividual = (props: IProps) => {
  const { data } = props;
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ScreenStackParamList>>();

  const navigateToBuyPackage = (item: Package) => {
    navigate('BuyPackage', {
      packageId: item.id,
      price: item.price,
      name: item.value,
    });
  };
  const renderItem = ({ item }: { item: Package }) => {
    return (
      <View
        id={item.id.toString()}
        style={styles.container}
      >
        <View style={styles.wrapImageContainer}>
          <IndividualIcon />
        </View>
        <Text style={styles.title}>{item.value.toUpperCase()}</Text>
        <Text style={styles.description}>{item.feature}</Text>
        <TouchableOpacity
          onPress={() => navigateToBuyPackage(item)}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>
            {formatPriceBuyPackage(item.price)} VND
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const EmptyIndividualList = () => {
    return (
      <View style={styles.emptyList}>
        <Text>Không có tính năng lẻ khả dụng</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={EmptyIndividualList}
    />
  );
};

export default ListIndividual;
