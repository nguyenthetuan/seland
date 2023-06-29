import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { Text } from '../../../../components';
import { COLORS, SCREENS } from '../../../../constants';
import styles from './styles';

const DrawerMenuHome = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const { navigate } = useNavigation();

  const openDrawerMenu = () => setVisible(true);

  const closeDrawerMenu = () => setVisible(false);

  const navigateToListPost = key => {
    const params = {
      dataFilters: {
        demand_id: key,
      },
      demand_id: key,
    };

    navigate(SCREENS.LIST_POST, params);
    closeDrawerMenu();
  };

  useImperativeHandle(ref, () => ({ openDrawerMenu }));

  const menuList = [
    {
      name: 'Mua bán nhà đất',
      key: 1,
      onPress: navigateToListPost,
    },
    {
      name: 'Cho thuê nhà đất',
      key: 2,
      onPress: navigateToListPost,
    },
    {
      name: 'Dự án',
      key: 3,
    },
    {
      name: 'Tin BĐS',
      key: 4,
    },
    {
      name: 'BĐS độc quyền',
      key: 5,
    },
    {
      name: 'Tra quy hoạch',
      key: 6,
    },
    {
      name: 'Tin tức',
      key: 7,
    },
    {
      name: 'Đào tạo',
      key: 8,
    },
    {
      name: 'Trở thành đại lý',
      key: 9,
    },
    {
      name: 'Quy hoạch',
      key: 10,
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.drawer}>
          {menuList.map(item => (
            <TouchableOpacity
              key={item?.key}
              style={styles.btnMenu}
              onPress={() => item?.onPress && item?.onPress(item?.key)}
            >
              <Text style={styles.textMenu}>{item?.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.boxClose}>
          <Icon
            color={COLORS.WHITE}
            name="close"
            onPress={closeDrawerMenu}
          />
        </View>
      </View>
    </Modal>
  );
});

DrawerMenuHome.displayName = 'DrawerMenuHome';

export default DrawerMenuHome;
