import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

import {
  BDSHome,
  BecomeAnAgentHome,
  BuySellHome,
  CalculateCashFlowHome,
  IndustrialLandHome,
  LandFeverAreaHome,
  LeaseHome,
  LogoZoning,
  NewsHome,
  ProjectHome,
  TrainHome,
} from '../../../../assets';
import { Text } from '../../../../components';
import { SCREENS } from '../../../../constants';
import { IDemandId } from '../../../../utils/interface/home';
import styles from './styles';

const ItemCategory = ({ icon, content, onPress }) => (
  <TouchableOpacity
    style={styles.boxItemSuggest}
    onPress={onPress}
  >
    {icon && typeof icon === 'string' ? <Text>{icon}</Text> : icon}
    <Text style={styles.content}>{content}</Text>
  </TouchableOpacity>
);

ItemCategory.defaultProps = {
  content: '',
  onPress: () => {},
};

ItemCategory.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

const SuggestMenu = () => {
  const [show, setShow] = useState(false);
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const navigateToListPosts = () => {
    const dataFilters = {
      demand_id: IDemandId.BUY,
    };
    navigate(SCREENS.LIST_POST, {
      demand_id: IDemandId.BUY,
      dataFilters,
    });
  };

  const navigateToListProject = () => navigate(SCREENS.LIST_PROJECT);

  const navigateToLease = () => {
    const dataFilters = {
      demand_id: IDemandId.LEASE,
    };
    navigate(SCREENS.LIST_POST, {
      dataFilters,
      demand_id: IDemandId.LEASE,
    });
  };

  const listCategory = [
    {
      name: 'Mua bán',
      icon: <BuySellHome />,
      onPress: navigateToListPosts,
    },
    {
      name: 'Cho thuê',
      icon: <LeaseHome />,
      onPress: navigateToLease,
    },
    {
      name: 'Dự án',
      icon: <ProjectHome />,
      onPress: navigateToListProject,
    },
    {
      name: 'Đất CN',
      icon: <IndustrialLandHome />,
    },
    {
      name: 'Khu vực\nsốt đất',
      icon: <LandFeverAreaHome />,
    },
    {
      name: 'Tính dòng\ntiền',
      icon: <CalculateCashFlowHome />,
    },
    {
      name: 'BDS\nquanh bạn',
      icon: <BDSHome />,
    },
    {
      name: 'Kho hàng',
      icon: <LogoZoning />,
    },
    {
      name: 'Đào tạo',
      icon: <TrainHome />,
    },
    {
      name: 'Tin tức',
      icon: <NewsHome />,
    },
    {
      name: 'Trở thành\nđại lý',
      icon: <BecomeAnAgentHome />,
    },
    {
      name: 'Xem\nquy hoạch',
      icon: <LogoZoning />,
    },
  ];

  const listSuggest = useMemo(() => {
    let array = [];
    if (show) {
      array = listCategory;
    } else {
      array = listCategory.slice(0, 4);
    }
    return array;
  }, [show]);

  return (
    <View>
      <View style={styles.listSuggest}>
        {listSuggest?.map(item => (
          <ItemCategory
            key={`category${item.name}`}
            icon={item?.icon}
            content={item?.name}
            onPress={item?.onPress}
          />
        ))}
      </View>
      <View style={styles.line} />
      <TouchableOpacity
        style={styles.expand}
        onPress={() => setShow(!show)}
      >
        <Text style={styles.txtExpand}>
          {t(show ? 'button.collapse' : 'button.extend')}
        </Text>
        <Icon
          name={show ? 'expand-less' : 'keyboard-arrow-down'}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SuggestMenu;
