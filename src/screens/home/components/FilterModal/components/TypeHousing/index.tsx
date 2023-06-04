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

interface IProps {
  options?: any[];
}

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

const TypeHousing = ({options = []}: IProps) => {
  const [showTypeHousing, setShowTypeHousing] = useState<boolean>(false);
  const [listChooseTypeHousing, setListChooseTypeHousing] = useState<
    Array<ITypeHousingItem>
  >([]);

  const onShowListTypeHousing = () => {
    setShowTypeHousing(!showTypeHousing);
  };

  const onSelectTypeHousing = (item: ITypeHousingItem) => {
    const data = [...listChooseTypeHousing];
    const index = data.findIndex(e => e.index == item.index);
    if (index == -1) {
      data.push(item);
    } else {
      return;
    }
    setListChooseTypeHousing(data);
  };

  const onRemoveTypeHousing = (item: ITypeHousingItem) => {
    const index = listChooseTypeHousing.indexOf(item);
    const data = [...listChooseTypeHousing];
    data.splice(index, 1);
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
        {listChooseTypeHousing.map((item, idx) => {
          return (
            <TouchableOpacity
              style={styles.typeHousing}
              key={idx}
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
          data={options}
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
    flexDirection: 'row',
  },
});

export default TypeHousing;
