import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../../../../../../../components/common/Text';
import styles from './styles';
import { Input } from '../../../../../../../components';
import { useTranslation } from 'react-i18next';

type IProps = {
  visible: boolean;
  setVisible: (x: boolean) => void;
};

type IItem = {
  key: string;
  value: string;
};

const ModalAdvise = (props: IProps) => {
  const { visible, setVisible } = props;
  const { t } = useTranslation();

  const [chooseType, setChooseType] = useState<IItem>();
  console.log('chooseType: ', chooseType);

  const type: IItem[] = [
    { key: 'kh', value: 'Khách hàng' },
    { key: 'ndt', value: 'Nhà đầu tư' },
    { key: 'cd', value: 'Chủ đất' },
    { key: 'mg', value: 'Môi giới' },
  ];

  const onPressChooseType = (item: any) => {
    setChooseType(item);
  };

  const onPressCancel = () => {
    setVisible(false);
  };

  const onPressAccept = () => {
    setVisible(false);
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onPressCancel}
    >
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
          opacity: 0.5,
        }}
      />
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        presentationStyle="overFullScreen"
        onRequestClose={onPressCancel}
      >
        <View style={styles.container}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.title}>Yêu cầu tư vấn</Text>

            <Text style={styles.subTitle}>
              Hoặc vui lòng để lại thông tin trước khi liên hệ
            </Text>

            <View style={styles.wrapTypeContainer}>
              <Text style={styles.label}>Bạn đang là</Text>

              <View style={{ flex: 1 }}>
                <FlatList
                  data={type}
                  numColumns={2}
                  horizontal={false}
                  renderItem={item => {
                    return (
                      <TouchableOpacity
                        style={
                          item.item.value === chooseType?.value
                            ? styles.isChooseWrapItemContainer
                            : styles.wrapItemContainer
                        }
                        onPress={() => onPressChooseType(item.item)}
                      >
                        <Text>{item.item.value}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>

            <View style={styles.wrapTypeContainer}>
              <Text style={styles.label}>Họ và tên</Text>

              <View style={{ flex: 1, minHeight: 40 }}>
                <TextInput
                  style={styles.textInputContainer}
                  multiline={true}
                  numberOfLines={3}
                />
              </View>
            </View>

            <View style={styles.wrapTypeContainer}>
              <Text style={styles.label}>SĐT</Text>

              <View style={{ flex: 1, minHeight: 40 }}>
                <TextInput style={styles.textInputContainer} />
              </View>
            </View>

            <View style={styles.wrapTypeContainer}>
              <Text style={styles.label}>Lời nhắn</Text>

              <View style={{ flex: 1, minHeight: 40 }}>
                <TextInput style={styles.textInputContainer} />
              </View>
            </View>

            <View style={styles.wrapButtonContainer}>
              <TouchableOpacity
                onPress={onPressCancel}
                style={styles.wrapCancelButton}
              >
                <Text style={styles.cancelButtonTitle}>Huỷ bỏ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPressAccept}
                style={styles.wrapAcceptButton}
              >
                <Text style={styles.acceptButtonTitle}>Yêu cầu tư vấn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

export default ModalAdvise;
