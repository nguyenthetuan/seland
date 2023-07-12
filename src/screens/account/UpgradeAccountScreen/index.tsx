import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, ScrollView, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useSelector } from 'react-redux';
import { Button } from '../../../components';
import { COLORS } from '../../../constants';
import { selectUser } from '../../../features';
import { ScreenStackParamList } from '../../../navigation/ScreenStackParam';
import PackageInformation from './components/PackageComponent';
import { IconProfessionalLease } from './icon';
import {
  AccountPackage,
  Package,
  PackageFunction,
  generateListAccountPackage,
} from './model';
import styles from './styles';
import { appStyles } from '../../../constants/appStyles';

const { width } = Dimensions.get('screen');

const UpgradeAccountScreen = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [accountPackages, setAccountPackage] = useState<Array<Package>>([]);
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ScreenStackParamList>>();
  const { packages, loading } = useSelector(selectUser);
  const { t } = useTranslation();

  useEffect(() => {
    if (packages !== undefined) {
      setAccountPackage(
        generateListAccountPackage(
          packages.account_packages as AccountPackage[],
          packages.package_function as PackageFunction[]
        )
      );
    }
  }, [packages]);

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

  const navigateToBuyPackage = (item: Package) => {
    navigate('BuyPackage', {
      packageId: item.id,
      price: item.price,
      name: item.value,
    });
  };

  return (
    <View style={appStyles.background}>
      {loading ? (
        <Loading
          color={COLORS.BLUE_1}
          textContent={`${t('common.loading')}`}
          textStyle={styles.loadingText}
          visible={loading}
        />
      ) : (
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
      )}

      <View style={styles.bottomButton}>
        {pagination()}
        <Button
          onPress={() => navigateToBuyPackage(accountPackages[activeSlide])}
          title="Mua gói ngay"
          color={COLORS.ORANGE_6}
          disable={parseInt(accountPackages[activeSlide]?.price) <= 0 ?? false}
        />
      </View>
    </View>
  );
};

export default UpgradeAccountScreen;
