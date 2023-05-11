import { Icon } from '@rneui/base';
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
import styles from './styles';

const ItemCategory = ({ icon, content }) => (
  <View style={styles.boxItemSuggest}>
    {icon && typeof icon === 'string' ? <Text>{icon}</Text> : icon}
    <Text style={styles.content}>{content}</Text>
  </View>
);

ItemCategory.defaultProps = {
  content: '',
};

ItemCategory.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

const listCategory = [
  {
    name: 'Mua sắm',
    icon: <BuySellHome />,
  },
  {
    name: 'Cho thuê',
    icon: <LeaseHome />,
  },
  {
    name: 'Dự án',
    icon: <ProjectHome />,
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

const SuggestMenu = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

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
            key={`category${item?.icon}`}
            icon={item?.icon}
            content={item?.name}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.expand}
        onPress={() => setShow(!show)}
      >
        <Text style={styles.txtExpand}>
          {t(show ? 'button.collapse' : 'button.seeMore')}
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
