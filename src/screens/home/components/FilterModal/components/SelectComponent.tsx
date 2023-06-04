import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  COLOR_BLACK_1,
  COLOR_GRAY_2,
  COLOR_GRAY_8,
} from '../../../../../constants';
import { Button } from '../../../../../components';
import { useController } from 'react-hook-form';

interface SelectComponentProps {
  title?: string;
  options?: TOptions[];
  name: string;
  control?: any;
}

interface TOptions {
  title: string;
  value: string | number;
}

export const SelectComponent = ({
  title,
  options = [],
  name,
  control,
}: SelectComponentProps) => {
  const {
    field: { onChange, value = [] },
  } = useController({ control, name });

  const handlePressButton = (val: string | number) => {
    let newVal = [...value];
    if (value.includes(val)) {
      newVal = value.filter((item: string) => item !== val);
    } else {
      newVal = [...newVal, val];
    }
    onChange(newVal);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.txtFilter}>{title}</Text>
      <ScrollView
        style={styles.wrapListOption}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {options.map((option: TOptions, idx) => {
          const isSelected = value && value.includes(option?.value);
          return (
            <Button
              key={`button-${idx}`}
              buttonStyle={[
                styles.btnSelect,
                !isSelected && styles.btnSelected,
              ]}
              titleStyle={[styles.txtSelect, !isSelected && styles.txtSelected]}
              onPress={() => handlePressButton(option.value)}
              title={option.title}
              radius={4}
              color={undefined}
              loading={undefined}
              outline={!isSelected}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btnSelect: {
    height: 30,
    marginRight: 8,
    width: 104,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  buttonSelect: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 2,
    height: 36,
  },
  btnSelected: {
    borderColor: COLOR_GRAY_2,
  },
  txtFilter: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '400',
  },
  txtSelect: {
    fontSize: 14,
    lineHeight: 18,
  },
  txtSelected: {
    color: COLOR_BLACK_1,
  },
  wrapListOption: {
    flexDirection: 'row',
    marginTop: 4,
  },
  wrapper: {
    marginBottom: 8,
  },
});
