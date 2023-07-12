import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { Check, ProfessionalPackage } from '../../../../../assets';
import { Text } from '../../../../../components';
import { formatMoney } from '../../../../../utils/format';

interface IPackageInformationProps {
  title?: string;
  price?: string;
  listFeature?: string[];
  avatar?: JSX.Element | any;
}

const ItemFeature = ({ title }: { title: string }) => {
  return (
    <View style={styles.itemFeature}>
      <View style={styles.wrapImage}>
        <Check />
      </View>
      <Text style={styles.textItem}>{title}</Text>
    </View>
  );
};

const PackageInformation = ({
  title,
  price,
  listFeature = [],
  avatar,
}: IPackageInformationProps) => {
  const formatPrice = (price: string): string => {
    return formatMoney(price.split('.')[0]) + '';
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>{avatar}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{formatPrice(price ?? '0')} VND</Text>

      <View>
        {listFeature.map((item: string) => (
          <ItemFeature title={item} />
        ))}
      </View>
    </View>
  );
};

export default PackageInformation;
