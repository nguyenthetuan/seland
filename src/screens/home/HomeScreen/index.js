import { useNavigation } from '@react-navigation/native';
import { Icon, Image, Input, Text } from '@rneui/base';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { useDispatch } from 'react-redux';

import { COLOR_BLUE_1, COLOR_GRAY_2, COLOR_WHITE } from '../../../constants';
import { logout } from '../../../features';
import { dispatchThunk } from '../../../utils';
import Category from '../components/Category';
import HeaderHome from '../components/HeaderHome';
import RealEstateByLocation from '../components/RealEstateByLocation';
import SuggestMenu from '../components/SuggestMenu';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const navigateToChangePassword = () => navigate('ChangePassword');

  const handleLogout = () => dispatchThunk(dispatch, logout());

  return (
    <View style={{ flex: 1 }}>
      <HeaderHome />
      <ScrollView style={{ backgroundColor: COLOR_WHITE }}>
        <SliderBox
          autoplay
          circleLoop
          dotColor={COLOR_BLUE_1}
          dotStyle={styles.dot}
          images={[
            'https://source.unsplash.com/1024x768/?nature',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree',
          ]}
          resizeMethod="resize"
          resizeMode="cover"
          inactiveDotColor={COLOR_GRAY_2}
        />
        <View style={styles.viewSearch}>
          <Input
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputSearch}
            rightIcon={<Icon name="search" />}
            placeholder="Dự án Sunrise City"
          />
          <View style={styles.boxLocation}>
            <Icon name="my-location" />
          </View>
        </View>
        <SuggestMenu />
        <Category label="Bất động sản hot nhất" />
        <Category
          label="Bất động sản theo địa điểm"
          isSeeAll={false}
        >
          <RealEstateByLocation />
        </Category>
        <Category
          label="Tin nhà đất"
          isSeeAll={false}
        />
        <Category
          label="Doanh nghiệp nổi bật"
          isSeeAll={false}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingHorizontal: 5, marginTop: 10 }}
          >
            <View style={{ flexDirection: 'row' }}>
              {[...Array(4)].map((_, index) => (
                <View
                  key={`itemFeaturedBusiness${index}`}
                  style={styles.boxItem}
                >
                  <Image
                    style={styles.igBusiness}
                    source={{
                      uri: 'https://ledinhphong.vn/wp-content/uploads/2020/04/logo-dat-xanh-group.jpg',
                    }}
                  />
                  <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                    <Icon name="location-city" />
                    <Text>11 Dự án</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </Category>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
