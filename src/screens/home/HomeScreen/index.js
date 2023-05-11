import { useNavigation } from '@react-navigation/native';
import { Icon, Image, Input, Text } from '@rneui/base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

import { COLOR_BLUE_1, COLOR_GRAY_2 } from '../../../constants';
import Category from '../components/Category';
import HeaderHome from '../components/HeaderHome';
import HottestRealEstate from '../components/HottestRealEstate';
import RealEstateByLocation from '../components/RealEstateByLocation';
import RealEstateNews from '../components/RealEstateNews';
import SuggestMenu from '../components/SuggestMenu';
import styles from './styles';

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const goToAllListPost = () => navigate('ListPostsScreen');

  return (
    <View style={styles.containerScreen}>
      <HeaderHome />
      <ScrollView style={styles.scroll}>
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
            placeholder={t('input.projectSunriseCity')}
          />
          <View style={styles.boxLocation}>
            <Icon name="my-location" />
          </View>
        </View>
        <SuggestMenu />
        <Category
          label={t('common.hottestRealEstate')}
          onSeeAll={goToAllListPost}
        >
          <HottestRealEstate />
        </Category>
        <Category
          label={t('common.realEstateByLocation')}
          isSeeAll={false}
        >
          <RealEstateByLocation />
        </Category>
        <Category
          label={t('common.realEstateNews')}
          isSeeAll={false}
        >
          <RealEstateNews />
        </Category>
        <Category
          label={t('common.featuredBusiness')}
          isSeeAll={false}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carousel}
          >
            <View style={styles.row}>
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
                  <View style={styles.boxNameBusiness}>
                    <Icon name="location-city" />
                    <Text>{t('common.project')}</Text>
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
