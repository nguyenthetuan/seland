import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../../constants';

interface Props {
  children: ReactNode;
  height?: number;
  closeOnPressOutside?: boolean;
}

interface BottomSheet {
  open: () => void;
  close: () => void;
}

const BottomSheet = forwardRef<BottomSheet, Props>((props: Props, ref) => {
  const { children, height = 200, closeOnPressOutside = true } = props;
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => ({ open, close }));

  const handlePressOutside = () => {
    console.log(closeOnPressOutside);
    if (closeOnPressOutside) {
      close();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
    >
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={handlePressOutside}
          activeOpacity={1}
          style={styles.backdrop}
        />
        <View style={[styles.sheet, { height: height, bottom: 0 }]}>
          {children}
        </View>
      </View>
    </Modal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  sheet: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    width: '100%',
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.BLACK_3,
  },
});
