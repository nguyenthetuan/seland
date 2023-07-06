import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getListAccountPackage } from '../../../../../features';
import { dispatchThunk } from '../../../../../utils';
import ListIndividual from '../listIndividual/listIndividual';
import { IListIndividual } from './model';
import styles from './styles';

const IndividualFeatureScreen = () => {
  const dispatch = useDispatch();
  const [packages, setPackages] = useState<Array<IListIndividual>>([]);

  useEffect(() => {
    dispatchThunk(dispatch, getListAccountPackage(), (res: any) => {
      setPackages(res.extra_package as IListIndividual[]);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ListIndividual data={packages} />
    </View>
  );
};

export default IndividualFeatureScreen;
