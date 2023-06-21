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
import { COLORS } from '../../../../../../constants';
import { Icon } from '@rneui/themed';
import { useController } from 'react-hook-form';

interface IProps {
  options?: any[];
  type: string;
  name: string;
  control?: any;
  multipleChoice?: boolean;
  onSelectTypeHousing?: any;
  onShowTypeHousing: () => void;
}

interface ITypeHousingItem {
  index: number;
  item: string;
}

const TypeHousing = ({
  options = [],
  type,
  name,
  control,
  multipleChoice = false,
  onSelectTypeHousing: onSelectType,
  onShowTypeHousing,
}: IProps) => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  const {
    field: { onChange, value },
  } = useController({ control, name });

  const [showTypeHousing, setShowTypeHousing] = useState<boolean>(false);

  const onShowListTypeHousing = () => {
    setShowTypeHousing(!showTypeHousing);
    onShowTypeHousing(!showTypeHousing);
  };

  const onSelectTypeHousing = (item: string | number) => {
    const data = [...value];
    if (data.includes(item)) {
      return;
    }
    if (multipleChoice) {
      data.push(item);
      onChange(data);
      onSelectType && onSelectType(data);
    } else {
      onChange([item]);
      onSelectType && onSelectType([item]);
    }
  };

  const onRemoveTypeHousing = (item: string | number) => {
    const index = value.indexOf(item);
    const data = [...value];
    data.splice(index, 1);
    onChange(data);
    onSelectType && onSelectType(data);
  };

  const getTitleFromValue = (val: string | number) => {
    let title = '';
    options.forEach(option => {
      if (option.value == val) {
        title = option.title;
        return;
      }
    });
    return title;
  };

  return (
    <>
      <TouchableOpacity
        style={styles.typeHousingContainer}
        onPress={onShowListTypeHousing}
      >
        {(value?.length > 0 ? value : []).map((item: any, index: number) => {
          return (
            <TouchableOpacity
              style={styles.typeHousing}
              key={index}
              onPress={() => onRemoveTypeHousing(item?.value)}
            >
              <Text>{t(`${getTitleFromValue(item)}`)}</Text>
              <Icon
                name="close"
                color={COLORS.GRAY_3}
                size={20}
              />
            </TouchableOpacity>
          );
        })}
      </TouchableOpacity>

      {showTypeHousing ? (
        <View style={styles.wrapContainer}>
          <View style={styles.wrapIcon}>
            <Icon
              name="close"
              color={COLORS.GRAY_3}
              size={20}
              onPress={onShowListTypeHousing}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
          >
            {options.map(
              (item: { title: string; value: number }, index: number) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => onSelectTypeHousing(item?.value)}
                    style={{
                      backgroundColor: COLORS.GRAY_10,
                      paddingLeft: 4,
                      paddingBottom: 4,
                    }}
                  >
                    <Text>{t(`${item?.title}`)}</Text>
                  </TouchableOpacity>
                );
              }
            )}
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
    position: 'relative',
  },
  container: {
    maxHeight: 150,
  },
  typeHousingContainer: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_4,
    minHeight: 32,
    borderRadius: 5,
    padding: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeHousing: {
    backgroundColor: COLORS.GRAY_6,
    marginRight: 8,
    padding: 4,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
  wrapIcon: {
    position: 'absolute',
    right: 0,
    zIndex: 1000,
  },
});

export default TypeHousing;
