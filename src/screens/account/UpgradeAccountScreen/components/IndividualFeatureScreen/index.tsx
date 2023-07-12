import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../../../features';
import {
  AccountPackage,
  Package,
  PackageFunction,
  generateListAccountPackage,
} from '../../model';
import ListIndividual from '../listIndividual/listIndividual';
import styles from './styles';

const IndividualFeatureScreen = () => {
  const [individualPackages, setPackages] = useState<Array<Package>>([]);
  const { packages } = useSelector(selectUser);

  useEffect(() => {
    if (packages) {
      setPackages(
        generateListAccountPackage(
          packages.extra_package as AccountPackage[],
          packages.package_function as PackageFunction[]
        )
      );
    }
  }, [packages]);

  return (
    <View style={styles.container}>
      <ListIndividual data={individualPackages} />
    </View>
  );
};

export default IndividualFeatureScreen;
