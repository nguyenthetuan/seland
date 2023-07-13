import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants';
const { width } = Dimensions.get('screen');

interface Props {
  children: ReactNode;
}

interface PopupInformation {
  openPopup: () => void;
}

const PopupInformation = forwardRef<PopupInformation, Props>(
  (props: Props, ref) => {
    const [visible, setVisible] = useState(false);
    const { children } = props;

    const openPopup = () => {
      setVisible(true);
    };

    useImperativeHandle(ref, () => ({ openPopup }));

    const handleOk = () => {
      setVisible(false);
    };

    return (
      <Modal
        visible={visible}
        transparent
      >
        <View style={styles.container}>
          <View style={styles.boxPopup}>{children}</View>
        </View>
      </Modal>
    );
  }
);

export default PopupInformation;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BLACK_2,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },
  boxPopup: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingHorizontal: 24,
    width: width * 0.96,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 24,
  },
});
