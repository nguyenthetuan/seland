import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from '../../../components';
import { COLORS, SCREENS } from '../../../constants';
import PackageInformation from './components/PackageComponent';
import styles from './styles';
import { Free, ProfessionalPackage } from '../../../assets';
import { IconAgency, IconProfessionalLease, IconSpecial } from './icon';
import { useDispatch } from 'react-redux';
import { dispatchThunk } from '../../../utils';
import { getListAccountPackage } from '../../../features';
import {
  AccountPackage,
  Package,
  PackageFunction,
  generateListAccountPackage,
} from './model';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

const UpgradeAccountScreen = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const dispatch = useDispatch();
  const [accountPackages, setAccountPackage] = useState<Array<Package>>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    dispatchThunk(dispatch, getListAccountPackage(), (res: any) => {
      setAccountPackage(
        generateListAccountPackage(
          res.account_packages as AccountPackage[],
          res.package_function as PackageFunction[]
        )
      );
    });
  }, []);

  const renderItem = ({ item, index }: { item: Package; index: number }) => (
    <PackageInformation
      key={index}
      title={item?.value}
      price={item?.price}
      listFeature={item?.feature}
      avatar={<IconProfessionalLease />}
    />
  );

  const pagination = () => {
    return (
      <Pagination
        dotsLength={accountPackages.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotScale={1}
      />
    );
  };

  const navigateToBuyPackage = (item: Package) =>
    navigate(SCREENS.BUY_PACKAGE, {
      packageId: item.id,
      price: item.price,
      name: item.value,
    });

  return (
    <View style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Carousel
            data={accountPackages}
            renderItem={renderItem}
            onSnapToItem={(idx: any) => setActiveSlide(idx)}
            windowSize={1}
            sliderWidth={width - 20}
            itemWidth={width - 20}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomButton}>
        {pagination()}
        <Button
          onPress={() => navigateToBuyPackage(accountPackages[activeSlide])}
          title="Mua gói ngay"
          color={COLORS.ORANGE_6}
        />
      </View>
    </View>
  );
};

export default UpgradeAccountScreen;
