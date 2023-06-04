import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { Text } from '../../../../../../components';
import {
  COLOR_GRAY_4,
  COLOR_GRAY_6,
  COLOR_GRAY_10,
  COLOR_GRAY_3,
} from '../../../../../../constants';
import { Icon } from '@rneui/themed';

interface IProps {
  options?: any[];
}

interface ITypeHousingItem {
  index: number;
  item: string;
}

const TypeHousing = ({ options = [] }: IProps) => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

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
        style={{ backgroundColor: COLOR_GRAY_10 }}
      >
        <Text style={null}>{t(`typeHousing.${item.item}`)}</Text>
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
                {t(`typeHousing.${item.item}`)}
              </Text>
              <Icon
                name="close"
                color={COLOR_GRAY_3}
                size={20}
              />
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
    padding: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeHousing: {
    backgroundColor: COLOR_GRAY_6,
    marginRight: 8,
    padding: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default TypeHousing;
