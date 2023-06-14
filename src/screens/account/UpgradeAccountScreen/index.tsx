import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from '../../../components';
import { COLORS } from '../../../constants';
import PackageInformation from './components/PackageComponent';
import styles from './styles';
import { Free } from '../../../assets';

const dataMock = [
  {
    title: 'Miễn phí',
    price: 'XX VND',
    listFeature: [
      'Xem quy hoạch',
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
    ],
    avatar: <Free />,
  },
  {
    title: 'Chuyên nghiệp',
    price: 'XX VND',
    listFeature: [
      'Xem quy hoạch',
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
    ],
  },
  {
    title: 'Cho thuê chuyên nghiệp',
    price: 'XX VND',
    listFeature: [
      'Xem quy hoạch',
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
    ],
    avatar:
      'https://assets-global.website-files.com/6171adb6a942ed69f5e6b5ee/638dfe7bdfce23da20cc0be5_lucid-nft.png',
  },
  {
    title: 'Nhà Đầu Tư Chuyên Nghiệp',
    price: 'XX VND',
    listFeature: [
      'Xem quy hoạch',
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
    ],
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrW7NEA4RsNNxWPoKr4UbAAnawwyr0mdDIg&usqp=CAU',
  },
  {
    title: 'Đại lý',
    price: 'XX VND',
    listFeature: [
      'Xem quy hoạch',
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
    ],
  },
  {
    title: 'Đặc biệt',
    price: 'XX VND',
    listFeature: [
      'Xem quy hoạch',
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
    ],
  },
];

const { width } = Dimensions.get('screen');

const UpgradeAccountScreen = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <PackageInformation
      key={index}
      title={item?.title}
      price={item?.price}
      listFeature={item?.listFeature}
      avatar={item?.avatar}
    />
  );

  const pagination = () => {
    return (
      <Pagination
        dotsLength={dataMock.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotScale={1}
      />
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Carousel
          data={dataMock}
          renderItem={renderItem}
          onSnapToItem={(idx: any) => setActiveSlide(idx)}
          windowSize={1}
          sliderWidth={width - 20}
          itemWidth={width - 20}
        />
        {pagination()}

        <Button
          title="Mua gói ngay"
          color={COLORS.ORANGE_6}
        />
      </View>
    </ScrollView>
  );
};

export default UpgradeAccountScreen;
