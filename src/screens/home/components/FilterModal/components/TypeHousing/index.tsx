import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from '../../../../../../components';
import { COLOR_GRAY_4, COLOR_GRAY_6 } from '../../../../../../constants';

interface IProps {}

interface ITypeHousingItem {
  index: number;
  item: string;
}
// const listTypeHousing = [
//   { ALL: 'Tất cả (Mặc định)' },
//   {
//     HOME: 'Nhà riêng',
//     STREET_HOUSE: 'Nhà mặt phố',
//     APARTMENT: 'Căn hộ chung cư',
//     VILLA: 'Biệt thự',
//     SHOP_HOUSE: 'Shop-house',
//     PENT_HOUSE: 'Pent-house',
//     LAND: 'Đất',
//     PROJECT_LAND: 'Đất nền dự án',
//     OFFICE: 'Văn phòng',
//     FLOOR_PLAN_STORE: 'Mặt bằng, cửa hàng',
//     WAREHOUSE_FACTORY: 'Kho, nhà xưởng',
//     HOSTELS_ROOMS: 'Nhà trọ, phòng trọ',
//     RESORTS_FARMS: 'Resorts, farms',
//     OTHER: 'Bất động sản khác',
//   },
// ];

const listTypeHousing = [
  'ALL',
  'HOME',
  'STREET_HOUSE',
  'APARTMENT',
  'VILLA',
  'SHOP_HOUSE',
  'PENT_HOUSE',
  'LAND',
  'PROJECT_LAND',
  'OFFICE',
  'FLOOR_PLAN_STORE',
  'WAREHOUSE_FACTORY',
  'HOSTELS_ROOMS',
  'RESORTS_FARMS',
  'OTHER',
];

const TypeHousing = (props: IProps) => {
  const [showTypeHousing, setShowTypeHousing] = useState<boolean>(false);
  const [listChooseTypeHousing, setListChooseTypeHousing] = useState<
    Array<ITypeHousingItem>
  >([]);

  const onShowListTypeHousing = () => {
    setShowTypeHousing(!showTypeHousing);
  };

  const onSelectTypeHousing = (item: ITypeHousingItem) => {
    const data = [...listChooseTypeHousing];
    data.push(item);
    setListChooseTypeHousing(data);
  };

  const onRemoveTypeHousing = (item: ITypeHousingItem) => {
    const data = [...listChooseTypeHousing];
    data.filter(e => e === item);
    setListChooseTypeHousing(data);
  };

  const renderListTypeHousing = (item: ITypeHousingItem) => {
    return (
      <TouchableOpacity
        key={item.index}
        onPress={() => onSelectTypeHousing(item)}
      >
        <Text style={null}>{item.item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity
        style={styles.typeHousingContainer}
        onPress={onShowListTypeHousing}
      >
        {listChooseTypeHousing.map(item => {
          return (
            <TouchableOpacity
              style={styles.typeHousing}
              onPress={() => onRemoveTypeHousing(item)}
            >
              <Text
                style={null}
                numberOfLines={1}
              >
                {item.item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>

      {showTypeHousing ? (
        <FlatList
          data={listTypeHousing}
          renderItem={renderListTypeHousing}
          style={styles.container}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 150,
  },
  typeHousingContainer: {
    borderWidth: 1,
    borderColor: COLOR_GRAY_4,
    minHeight: 32,
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    padding: 4,
  },
  typeHousing: {
    backgroundColor: COLOR_GRAY_6,
    marginRight: 8,
    padding: 4,
  },
});

export default TypeHousing;
