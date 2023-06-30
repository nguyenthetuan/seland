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
import { CheckBox as RNECheckBox } from '@rneui/themed';

interface IProps {
  options?: any[];
  type: string;
  name: string;
  control?: any;
  multipleChoice?: boolean;
  onSelectTypeHousing?: any;
  onShowTypeHousing?: (val?: any) => void;
  brief?: boolean;
  placeHolder?: string;
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
  brief = false,
  placeHolder = "",
}: IProps) => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  const {
    field: { onChange, value },
  } = useController({ control, name });

  const [showTypeHousing, setShowTypeHousing] = useState<boolean>(false);

  const onShowListTypeHousing = () => {
    setShowTypeHousing(!showTypeHousing);
    onShowTypeHousing && onShowTypeHousing(!showTypeHousing);
  };

  const onSelectTypeHousing = (item: string | number) => {
    const data = [...value];
    if (data.includes(item)) {
      onRemoveTypeHousing(item);
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
        style={brief ? styles.typeHousingContainerBrief : styles.typeHousingContainer}
        onPress={onShowListTypeHousing}
      >
        {((value?.length > 0 && !brief) ? value : []).map((item: any, index: number) => {
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
        {(placeHolder && brief) && <Text style={styles.placeHolder}>{placeHolder}{value.length > 0 ? ` (${value.length}) `: ""}</Text> }
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
                    <View style={styles.row}>
                      <RNECheckBox
                        containerStyle={styles.checkbox}
                        checked={value.includes(item?.value)}
                        iconType="material"
                        checkedIcon="check-box"
                        onPress={() => onSelectTypeHousing(item?.value)}
                        uncheckedIcon="check-box-outline-blank"
                      />
                      <Text>{t(`${item?.title}`)}</Text>
                    </View>
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
  checkbox: {
    padding: 0,
    margin: 0,
  },
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
    minHeight: 46,
    borderRadius: 5,
    padding: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeHousingContainerBrief: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_4,
    minHeight: 36,
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
    marginVertical: 2,
  },
  wrapIcon: {
    position: 'absolute',
    right: 0,
    zIndex: 1000,
  },
  placeHolder: {
    paddingLeft: 8,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
});

export default TypeHousing;
