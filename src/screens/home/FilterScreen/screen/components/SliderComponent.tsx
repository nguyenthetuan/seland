import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../../constants';
import { Slider } from '@miblanchard/react-native-slider';
import { ThumbSlider } from '../../../../../assets';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../../../../../components';
import { useController } from 'react-hook-form';

interface SliderComponentProps {
  title?: string;
  options?: TOptions[];
  defaultValues?: number[];
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  convertDisplay?: Function;
  name: string;
  control?: any;
  multiple?: boolean;
}

interface TOptions {
  title: string;
  value: string | number;
}

const DEFAULT_VALUE = 0.2;
const borderWidth = 4;

const trackMarkStyles = StyleSheet.create({
  activeMark: {
    borderColor: 'red',
    borderWidth,
    left: -borderWidth / 2,
  },
  inactiveMark: {
    borderColor: 'grey',
    borderWidth,
    left: -borderWidth / 2,
  },
});

const SliderContainer = (props: {
  children: React.ReactElement;
  sliderValue?: Array<number>;
  trackMarks?: Array<number>;
  vertical?: boolean;
}) => {
  const { sliderValue, trackMarks } = props;
  const [value, setValue] = useState(sliderValue ? sliderValue : DEFAULT_VALUE);
  let renderTrackMarkComponent: any;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark;
      return <View style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return <View style={styles.sliderContainer}>{renderChildren()}</View>;
};

export const SliderComponent = ({
  title,
  options = [],
  defaultValues = [0, 1],
  minimumValue = 0,
  maximumValue = 10,
  step = 1,
  convertDisplay,
  name,
  control,
  multiple = false,
}: SliderComponentProps) => {
  const {
    field: { onChange, value = defaultValues },
  } = useController({ control, name });
  const [buttonSelected, setButtonSelected] = useState<Array<string | number>>([
    defaultValues[0].toString() + '-' + defaultValues[1].toString(),
  ]);

  const handleOnClick = (option: string | number) => {
    let newArrButton = [...buttonSelected];
    if (multiple) {
      if (buttonSelected.includes(option)) {
        newArrButton = buttonSelected.filter(i => i !== option);
      } else {
        newArrButton = [...buttonSelected, option];
      }
    } else {
      if (buttonSelected?.[0] === option) {
        newArrButton = [];
      } else {
        newArrButton = [option];
      }
    }
    setButtonSelected(newArrButton);

    const arrVal = String(option).split('-');
    if (newArrButton.length === 0) {
      onChange([0, 1])
    }
    else if (arrVal.length === 1) {
      onChange([Number(arrVal[0]), Number(arrVal[0])]);
    } else {
      onChange([Number(arrVal[0]), Number(arrVal[1])]);
    }
  };

  useEffect(() => {
    if (value) {
      setButtonSelected([value[0].toString() + '-' + value[1].toString()])
    }
  }, [value]);

  const renderSlider = useCallback(() => {
    return (
      <SliderContainer sliderValue={value || defaultValues}>
        <Slider
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          step={step}
          value={value}
          minimumTrackTintColor={COLORS.SLIDER_1}
          maximumTrackTintColor={COLORS.GRAY_5}
          thumbTintColor={COLORS.SLIDER_1}
          thumbImage={ThumbSlider}
          onSlidingComplete={val => onChange(val)}
          thumbStyle={{ width: 15, height: 15 }}
        />
      </SliderContainer>
    );
  }, [value, defaultValues]);

  return (
    <View>
      <Text style={styles.txtFilter}>{title}</Text>
      <ScrollView
        style={styles.wrapListOption}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {options.map((option: TOptions, idx) => {
          const isSelected =
            buttonSelected && !buttonSelected.includes(option.value);
          return (
            <Button
              key={`button-${idx}`}
              buttonStyle={[styles.btnSelect, isSelected && styles.btnSelected]}
              titleStyle={[styles.txtSelect, isSelected && styles.txtSelected]}
              onPress={() => handleOnClick(option.value)}
              title={option.title}
              radius={4}
              outline={isSelected}
            />
          );
        })}
      </ScrollView>
      {renderSlider()}
      <Text style={styles.txtValue}>
        {String(value?.[0]).slice(0, 4) || ''}
        {(convertDisplay
          ? ' - ' + convertDisplay(value?.[1])
          : ' - ' + value?.[1]) || ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnSelect: {
    height: 30,
    marginRight: 8,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  btnSelected: {
    borderColor: COLORS.GRAY_2,
  },
  buttonClose: {
    backgroundColor: COLORS.BLUE_1,
    borderRadius: 5,
    padding: 6,
  },
  sliderContainer: {
    paddingVertical: 0,
    marginVertical: 0,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtFilter: {
    marginBottom: 4,
    fontSize: 16,
  },
  txtValue: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '700',
    marginTop: -10,
    marginBottom: 6,
  },
  txtSelect: {
    fontSize: 14,
    lineHeight: 18,
  },
  txtSelected: {
    color: COLORS.BLACK_1,
  },
  wrapListOption: {
    flexDirection: 'row',
    marginTop: 4,
  },
});
