import { useNavigation } from '@react-navigation/native';
import { Icon, Image, Input, Text } from '@rneui/themed';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS, SCREENS } from '../../../constants';
import {
  getListNews,
  getListProjects,
  getListRealEstateByLocation,
  getListRealEstatesForYou,
  getListRealEstatesHots,
  selectHome,
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
  const { listRealEstatesForYou, listProject, listRealEstatesHots } =
    useSelector(selectHome);

  useEffect(() => {
    dispatchThunk(dispatch, getListRealEstatesHots());
    dispatchThunk(dispatch, getListRealEstatesForYou());
    dispatchThunk(dispatch, getListRealEstateByLocation());
    dispatchThunk(dispatch, getListProjects());
    dispatchThunk(dispatch, getListNews());
  }, [dispatch]);

  const navigateToListPostsHot = () =>
    navigate(SCREENS.LIST_POST, {
      is_hot: 1,
    });
  const navigateToListPostsForYou = () =>
    navigate(SCREENS.LIST_POST, {
      for_you: 1,
    });
  const navigateToListProject = () => navigate(SCREENS.LIST_PROJECT);

  const navigateToMaps = () => navigate(SCREENS.MAPS);

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
          dotColor={COLORS.BLUE_1}
          dotStyle={styles.dot}
          images={[
            'https://source.unsplash.com/1024x768/?nature',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree',
          ]}
          resizeMethod="resize"
          resizeMode="cover"
          inactiveDotColor={COLORS.GRAY_2}
        />
        <View style={styles.viewSearch}>
          <Input
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputSearch}
            rightIcon={<Icon name="search" />}
            placeholder={t('input.projectSunriseCity') || ''}
          />
          <Pressable
            style={styles.boxLocation}
            onPress={navigateToMaps}
          >
            <Icon name="my-location" />
          </Pressable>
        </View>
        <SuggestMenu />
        {listRealEstatesHots?.data?.length ? (
          <Category
            label={t('common.hottestRealEstate')}
            onSeeAll={navigateToListPostsHot}
          >
            <HottestRealEstateCategory />
          </Category>
        ) : null}
        {listRealEstatesForYou?.data?.length ? (
          <Category
            label={t('common.realEstateForYou')}
            onSeeAll={navigateToListPostsForYou}
          >
            <RealEstateForYouCategory />
          </Category>
        ) : null}
        {listProject?.data?.length ? (
          <Category
            label={t('common.project')}
            onSeeAll={navigateToListProject}
          >
            <ProjectCategory />
          </Category>
        ) : null}

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