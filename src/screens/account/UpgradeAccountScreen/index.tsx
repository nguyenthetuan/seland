import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from '../../../components';
import { COLORS } from '../../../constants';
import PackageInformation from './components/PackageComponent';
import styles from './styles';
import { Free, ProfessionalPackage } from '../../../assets';
import { IconAgency, IconProfessionalLease, IconSpecial } from './icon';

const dataMock = [
  {
    title: 'Miễn phí',
    price: '0 VND',
    listFeature: [
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Tìm kiếm BĐS xung quanh',
      'Quản lý, so sánh bđs đã lưu (thêm, sửa, xóa)',
    ],
    avatar: <Free />,
  },
  {
    title: 'Chuyên nghiệp',
    price: 'XX VND',
    listFeature: [
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Tìm kiếm BĐS xung quanh',
      'Xem giá trên bản đồ quỹ mua bán',
      'Nhận thông tin quỹ bđs hot 10',
      'Dẫn đường',
      'Lọc trên bản đồ',
      'Lọc trên kho hàng',
      'Quản lý, so sánh bđs đã lưu (thêm, sửa, xóa)',
    ],
    avatar: <ProfessionalPackage />,
  },
  {
    title: 'Cho thuê chuyên nghiệp',
    price: 'XX VND',
    listFeature: [
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Tìm kiếm BĐS xung quanh',
      'Xem giá trên bản đồ quỹ cho thuê',
      'Nhận thông tin quỹ thuê hot 20',
      'Dẫn đường',
      'Lọc trên kho hàng',
      'Quản lý, so sánh bđs đã lưu (thêm, sửa, xóa)',
    ],
    avatar: <IconProfessionalLease />,
  },
  {
    title: 'Đại lý',
    price: 'XX VND',
    listFeature: [
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Tìm kiếm BĐS xung quanh',
      'Xem giá trên bản đồ quỹ mua bán',
      'Tạo tài khoản cấp dưới',
      'Quản lý tài khoản cấp dưới',
      'Phân quyền tài khoản cấp dưới',
      'Nhận thông tin quỹ bđs hot 20',
      'Dẫn đường',
      'Lọc trên bản đồ',
      'Lọc trên kho hàng',
      'Xem chính sách phí môi giới',
      'Quản lý, so sánh bđs đã lưu (thêm, sửa, xóa)',
    ],
    avatar: <IconAgency />,
  },
  {
    title: 'Đặc biệt',
    price: 'XX VND',
    listFeature: [
      'Đăng tin rao vặt',
      'Tìm kiếm BĐS trên bản đồ quy hoạch',
      'Vẽ ranh trên bản đồ quy hoạch',
      'Tìm kiếm BĐS xung quanh',
      'Xem giá trên bản đồ quỹ mua bán',
      'Tạo tài khoản cấp dưới',
      'Quản lý tài khoản cấp dưới',
      'Phân quyền tài khoản cấp dưới',
      'Nhận thông tin quỹ bđs hot 20',
      'Dẫn đường',
      'Lọc trên bản đồ',
      'Lọc trên kho hàng',
      'Quản lý, so sánh bđs đã lưu (thêm, sửa, xóa)',
    ],
    avatar: <IconSpecial />,
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
    <View>
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
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingHorizontal: 10,
        }}
      >
        {pagination()}
        <Button
          title="Mua gói ngay"
          color={COLORS.ORANGE_6}
        />
      </View>
    </View>
  );
};

export default UpgradeAccountScreen;
