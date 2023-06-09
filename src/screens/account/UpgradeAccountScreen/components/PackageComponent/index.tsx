import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { Check, ProfessionalPackage } from '../../../../../assets';
import { Text } from '../../../../../components';

interface IPackageInformationProps {
  title?: string;
  price?: string;
  listFeature?: string[];
  avatar?: any;
}

const ItemFeature = ({title} : {title: string}) => {
  return (
    <View style={styles.itemFeature}>
      <View style={styles.wrapImage}>
        <Check />
      </View>
      <Text style={styles.textItem}>{title}</Text>
    </View>
  )
}

const PackageInformation = ({title, price, listFeature = [], avatar}: IPackageInformationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>
        {
          typeof(avatar) === 'string' 
          ? 
            <Image
              style={styles.avatar}
              source={{
                uri: avatar,
              }}
            /> 
          :
          (avatar || <ProfessionalPackage />)
        }
        
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>

      <View>
        {listFeature.map((item: string) => <ItemFeature title={item} />)}
      </View>
    </View>
  );
};

export default PackageInformation;
