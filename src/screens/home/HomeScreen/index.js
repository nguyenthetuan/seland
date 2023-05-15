import { useNavigation } from '@react-navigation/native';
import { Icon, Image, Input, Text } from '@rneui/base';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { useDispatch } from 'react-redux';

import { COLOR_BLUE_1, COLOR_GRAY_2 } from '../../../constants';
import {
  getListNews,
  getListProjects,
  getListRealEstateByLocation,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import Category from '../components/Category';
import HeaderHome from '../components/HeaderHome';
import HottestRealEstateCategory from '../components/HottestRealEstateCategory';
import ProjectCategory from '../components/ProjectCategory';
import RealEstateByLocation from '../components/RealEstateByLocation';
import RealEstateForYouCategory from '../components/RealEstateForYouCategory';
import RealEstateNews from '../components/RealEstateNews';
import SuggestMenu from '../components/SuggestMenu';
import styles from './styles';

const HomeScreen = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatchThunk(dispatch, getListRealEstateByLocation());
    dispatchThunk(dispatch, getListProjects());
    dispatchThunk(dispatch, getListNews());
  }, [dispatch]);

  const navigateToListPosts = () => navigate(SCREENS.LIST_POST);

  return (
    <View style={styles.containerScreen}>
      <HeaderHome />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
      >
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
          onSeeAll={navigateToListPosts}
        >
          <HottestRealEstateCategory />
        </Category>
        <Category
          label={t('common.realEstateForYou')}
          onSeeAll={navigateToListPosts}
        >
          <RealEstateForYouCategory />
        </Category>
        <Category
          label={t('common.project')}
          onSeeAll={navigateToListPosts}
        >
          <ProjectCategory />
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
            style={styles.carousel}
            horizontal
            showsHorizontalScrollIndicator={false}
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
                    <Text style={styles.txtProject}>{t('common.project')}</Text>
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
