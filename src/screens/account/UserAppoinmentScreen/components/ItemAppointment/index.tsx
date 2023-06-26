import { Icon } from '@rneui/base';
import React, {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Input, Select } from '../../../components';
import { COLORS, SCREENS } from '../../../constants';
import {
  clearDistricts,
  getDistricts,
  getProvinces,
  selectCommon,
  selectPosts,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import styles from './styles';
import { Control, useController } from 'react-hook-form';
import { Header } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { IconFilter } from '../../../assets';
import { FlatList } from 'react-native-gesture-handler';

const ItemAppointment = props => {
  console.log('props', props.item.item.location);
  const { item } = props.item;
  return (
    <View style={styles.container}>
      <Text style={styles.txtLocation}>{item.location}</Text>
      <View style={styles.bacicInfor}>
        <View style={styles.Infor}>
          <View style={styles.leftInfor}>
            <View style={styles.avatar}>
              <Text style={styles.mainName}>{item.name[0]}</Text>
            </View>
            <View style={styles.contact}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
          </View>
          <View style={styles.contact}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.note}>Note: {item.note}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemAppointment;
