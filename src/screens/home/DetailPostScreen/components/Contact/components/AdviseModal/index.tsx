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
import { useForm } from 'react-hook-form';

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

  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone_number: '',
      note: '',
      youAre: '',
    },
  });

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
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.title}>Yêu cầu tư vấn</Text>

            <Text style={styles.subTitle}>
              Hoặc vui lòng để lại thông tin trước khi liên hệ
            </Text>

            <View style={styles.wrapTypeContainer}>
              <Text style={styles.label}>Bạn đang là</Text>

              <FlatList
                data={type}
                numColumns={2}
                horizontal={false}
                contentContainerStyle={styles.youAre}
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

            <View style={styles.wrapTypeContainer}>
              <Text style={styles.label}>Họ và tên</Text>
              <Input
                control={control}
                name="name"
                renderErrorMessage={false}
              />
            </View>

            <View style={styles.wrapTypeContainer}>
              <Text style={styles.label}>SĐT</Text>
              <Input
                control={control}
                name="phone_number"
                renderErrorMessage={false}
              />
            </View>

            <View style={styles.wrapTypeContainer}>
              <Text style={styles.label}>Lời nhắn</Text>
              <Input
                control={control}
                name="note"
                renderErrorMessage={false}
              />
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
      </View>
    </Modal>
  );
};

export default ModalAdvise;
