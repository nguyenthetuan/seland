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
  type: string;
}

interface ITypeHousingItem {
  index: number;
  item: string;
}

const TypeHousing = ({ options = [], type }: IProps) => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  const [showTypeHousing, setShowTypeHousing] = useState<boolean>(false);
  const [listChooseTypeHousing, setListChooseTypeHousing] = useState<
    Array<String>
  >([]);

  const onShowListTypeHousing = () => {
    setShowTypeHousing(!showTypeHousing);
  };

  const onSelectTypeHousing = (item: string) => {
    const data = [...listChooseTypeHousing];
    if (data.includes(item)) {
      return;
    }
    data.push(item);
    setListChooseTypeHousing(data);
  };

  const onRemoveTypeHousing = (item: String) => {
    const index = listChooseTypeHousing.indexOf(item);
    const data = [...listChooseTypeHousing];
    data.splice(index, 1);
    setListChooseTypeHousing(data);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.typeHousingContainer}
        onPress={onShowListTypeHousing}
      >
        {listChooseTypeHousing.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.typeHousing}
              key={index}
              onPress={() => onRemoveTypeHousing(item)}
            >
              <Text
                style={null}
                numberOfLines={1}
              >
                {t(`${type}.${item}`)}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          {options.map((item: string, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onSelectTypeHousing(item)}
                style={{ backgroundColor: COLOR_GRAY_10 }}
              >
                <Text style={null}>{t(`${type}.${item}`)}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
