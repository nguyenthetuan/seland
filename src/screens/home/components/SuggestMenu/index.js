import { Icon } from '@rneui/base';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '../../../../components';
import styles from './styles';

const ItemCategory = ({ icon, content }) => (
  <View style={styles.boxItemSuggest}>
    {icon && <Text>{icon}</Text>}
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
    icon: '1',
  },
  {
    name: 'Cho thuê',
    icon: '2',
  },
  {
    name: 'Dự án',
    icon: '3',
  },
  {
    name: 'Đất CN',
    icon: '4',
  },
  {
    name: 'Khu vực\nsốt đất',
    icon: '5',
  },
  {
    name: 'Tính dòng tiền',
    icon: '6',
  },
  {
    name: 'BDS\nquanh bạn',
    icon: '7',
  },
  {
    name: 'Kho hàng',
    icon: '8',
  },
  {
    name: 'Đào tạo',
    icon: '9',
  },
  {
    name: 'Tin tức',
    icon: '10',
  },
  {
    name: 'Trở thành\nđại lý',
    icon: '11',
  },
  {
    name: 'Xem\nquy hoạch',
    icon: '12',
  },
];

const SuggestMenu = () => {
  const [show, setShow] = useState(false);

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
        <Text style={styles.txtExpand}>{show ? 'Thu gọn' : 'Xem thêm'}</Text>
        <Icon
          name={show ? 'expand-less' : 'keyboard-arrow-down'}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SuggestMenu;
