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
import { useController } from 'react-hook-form';

interface IProps {
  options?: any[];
  type: string;
  name: string;
  control?: any;
}

interface ITypeHousingItem {
  index: number;
  item: string;
}

const TypeHousing = ({ options = [], type, name, control }: IProps) => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  const {
    field: { onChange, value },
  } = useController({ control, name });

  const [showTypeHousing, setShowTypeHousing] = useState<boolean>(false);

  const onShowListTypeHousing = () => {
    setShowTypeHousing(!showTypeHousing);
  };

  const onSelectTypeHousing = (item: string) => {
    const data = [...value];
    if (data.includes(item)) {
      return;
    }
    data.push(item);
    onChange(data);
  };

  const onRemoveTypeHousing = (item: String) => {
    const index = value.indexOf(item);
    const data = [...value];
    data.splice(index, 1);
    onChange(data);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.typeHousingContainer}
        onPress={onShowListTypeHousing}
      >
        {value.map((item: any, index: number) => {
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
        <View style={styles.wrapContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
          >
            {options.map((item: string, index: number) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => onSelectTypeHousing(item)}
                  style={{
                    backgroundColor: COLOR_GRAY_10,
                    paddingLeft: 4,
                    paddingBottom: 4,
                  }}
                >
                  <Text style={null}>{t(`${type}.${item}`)}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    height: 160,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 4,
  },
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
