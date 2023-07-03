import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { Text } from '../../../../components';
import { COLORS, SCREENS } from '../../../../constants';
import { IDemandId } from '../../../../utils/interface/home';
import styles from './styles';

const DrawerMenuHome = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const { navigate } = useNavigation();

  const openDrawerMenu = () => setVisible(true);

  const closeDrawerMenu = () => setVisible(false);

  const handleNavigation = (key) => {
    if (key === 1 || key === 2) {
      const params = {
        dataFilters: {
          demand_id: key,
        },
        demand_id: key,
      };
      navigate(SCREENS.LIST_POST, params);
    }
    if (key === 3) {
      navigate(SCREENS.LIST_PROJECT);
    }
    if (key === 6) {
      navigate(SCREENS.MAPS);
    }
    if (key === 5) {
      navigate(SCREENS.LIST_POST, {
        is_hot: 1,
        demand_id: IDemandId.BUY,
        dataFilters: {
          demand_id: IDemandId.BUY,
        },
      });
    }
    closeDrawerMenu();
  }

  useImperativeHandle(ref, () => ({ openDrawerMenu }));

  const menuList = [
    {
      name: 'Mua bán nhà đất',
      key: 1,
      handleOnPress: true
    },
    {
      name: 'Cho thuê nhà đất',
      key: 2,
      handleOnPress: true,
    },
    {
      name: 'Dự án',
      key: 3,
      handleOnPress: true,
    },
    {
      name: 'Tin BĐS',
      key: 4,
    },
    {
      name: 'BĐS độc quyền',
      key: 5,
      handleOnPress: true,
    },
    {
      name: 'Tra quy hoạch',
      key: 6,
      handleOnPress: true,
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
              onPress={() => {
                if (item.handleOnPress) {
                  handleNavigation(item?.key)
                }
              }}
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
