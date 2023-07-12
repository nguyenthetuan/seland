import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  onPromotionSelect: () => void;
}

const PromotionPicker = (props: Props) => {
  const { onPromotionSelect } = props;
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn thời gian</Text>
      <Text style={styles.text}>Hiện quý khách không có mã khuyến mãi nào</Text>
      <View style={[styles.bottom, { marginBottom: insets.bottom }]}>
        <Button
          onPress={onPromotionSelect}
          buttonStyle={styles.btnConfirm}
          title="Xác nhận"
        />
      </View>
    </View>
  );
};

export default PromotionPicker;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    color: COLORS.BLUE_1,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
  },
  text: { color: COLORS.LOCAL_GRAY, marginTop: 16 },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  btnConfirm: { width: Dimensions.get('screen').width - 40, marginLeft: 20 },
});
