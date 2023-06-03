import { StyleSheet, Text, View } from "react-native";
import { COLOR_BLUE_1, COLOR_GRAY_2, COLOR_GRAY_8 } from "../../../../constants";
import { useTranslation } from "react-i18next";
import {Slider} from '@miblanchard/react-native-slider';
import { ThumbSlider } from "../../../../assets";

const styles = StyleSheet.create({
  boxRealEstate: {
    flexDirection: "row",
    flex: 1,
  },
  btnSelect: {
    height: 30,
    marginRight: 8,
    maxWidth: 96,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  buttonClose: {
    backgroundColor: COLOR_BLUE_1,
    borderRadius: 5,
    padding: 6,
  },
  buttonSelect: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 2,
    height: 36,
  },
  district: {
    paddingRight: 4,
    width: "50%",
  },
  filterPost: {
    color: COLOR_GRAY_8,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowTextStyle: {
    fontSize: 12,
    lineHeight: 15,
  },
  scroll: {
    paddingHorizontal: 10,
  },
  textButtonSelect: {
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 2,
  },
  txtFilter: {
    marginBottom: 4,
    fontSize: 16
  },
  txtSelect: {
    fontSize: 14,
    lineHeight: 18,
  },
  ward: {
    paddingLeft: 4,
    width: '50%',
  },
  wrapArea: {
    flexDirection: "row"
  },
  wrapButton: {
    flexDirection: 'row',
    paddingHorizontal: 0
  },
  wrapFilter: {
    marginTop: 8,
  }
});

interface SliderComponentProps {
  title?: string;
  options?: TOptions[];
}

interface TOptions {
  title: string, value: string | number
}

const arrMock = [
  {title: 'Dưới 500 triệu', value: 1},
  {title: '500 - 800 triệu', value: 2},
  {title: '800 triệu - 1 tỷ', value: 2},
]

export const SliderComponent = ({title, options = arrMock}: SliderComponentProps) => {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={styles.txtFilter}>{title}</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#91D5FF"
        maximumTrackTintColor="#91D5FF"
        thumbTintColor="#91D5FF"
        thumbImage={ThumbSlider}
        thumbStyle={{width: 15, height: 15}}
      />
    </View>
  )
}