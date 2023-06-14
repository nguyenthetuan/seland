import React from 'react';
import { ScrollView, View } from 'react-native';
import AboutPost from './components/AboutPost';
import Contact from './components/Contact';
import DetailPost from './components/DetailPost';
import ImagePost from './components/ImagePost';
import RealEstate from './components/RealEstate';
import styles from './styles';
import CallAndChat from './components/CallAndChat';

const DetailPostScreen = () => {
  return (
    <View>
      <View style={styles.detailPostWrapper}>
        <ScrollView>
          <View style={styles.detailPost}>
            <ImagePost />
            <AboutPost />
            <DetailPost />
            <Contact />
            <RealEstate />
          </View>
        </ScrollView>
        <View style={styles.callAndChat}>
          <CallAndChat />
        </View>
      </View>
    </View>
  );
};

export default DetailPostScreen;
