import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '../../../../../components';
import { COLORS, SCREENS } from '../../../../../constants';
import { Icon } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import {
  IconClose,
  IconEdit,
  IconOff,
  IconOn,
  StatusFail,
  StatusSuccess,
} from '../../../../../assets';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ListStaffScreen = () => {
  const data = [
    {
      id: 1,
      name: 'To Minh Tuan',
      status: 'online',
      phoneNumber: '0123456789',
      verify: true,
      sex: 'Male',
      dob: '01/01/2022',
      email: 'tominhtuan@gmail.com',
      address: '123 Pham Van Dong',
    },
    {
      id: 2,
      name: 'To Minh Tuan',
      status: 'offline',
      phoneNumber: '0123456789',
      verify: true,
      sex: 'Male',
      dob: '01/01/2022',
      email: 'tominhtuan@gmail.com',
      address: '123 Pham Van Dong',
    },
    {
      id: 3,
      name: 'To Minh Tuan',
      status: 'online',
      phoneNumber: '0123456789',
      verify: false,
      sex: 'Male',
      dob: '01/01/2022',
      email: 'tominhtuan@gmail.com',
      address: '123 Pham Van Dong',
    },
  ];

  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const isOnline = true;
  const isSuccess = false;

  const { clearErrors, control, getValues, handleSubmit, setValue } = useForm({
    defaultValues: {
      ward_id: null,
      district_id: null,
      province_id: null,
    },
  });

  const onAddAccount = () => {
    navigate(SCREENS.ADD_ACCOUNT_SCREEN);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.flexRow}>
          <View style={styles.wrapInput}>
            <Input
              inputContainerStyle={styles.inputSearch}
              rightIcon={<Icon name="search" />}
              placeholder={''}
              control={control}
              name="ward_id"
            />
          </View>
          <Button
            buttonStyle={styles.buttonSave}
            // loading={loading}
            onPress={onAddAccount}
            title={'+ Thêm'}
          />
        </View>

        <View style={styles.wrapTable}>
          {/* <View style={styles.row}> */}
          <View style={styles.wrapHeader}>
            <Text style={styles.headerName}>Tên</Text>
            <Text style={styles.headerPhone}>Số điện thoại</Text>
            <Text style={styles.headerId}>Xác thực</Text>
            <Text style={styles.headerAction}>Thao tác</Text>
          </View>
          {/* </View> */}

          {data.map(item => {
            return (
              <View style={styles.rowContent}>
                <View style={styles.wrapContent}>
                  <View style={styles.wrapContentName}>
                    <Text style={styles.contentName}>{item.name}</Text>
                    {item.status === 'online' ? <IconOn /> : <IconOff />}
                  </View>

                  <Text style={styles.contentPhone}>{item.phoneNumber}</Text>

                  <View style={styles.wrapContentId}>
                    <View style={styles.contentId}>
                      {item.verify ? <StatusSuccess /> : <StatusFail />}
                    </View>
                  </View>

                  <View style={styles.wrapContentAction}>
                    <IconEdit />
                    <IconClose />
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.wrapButtonSave}>
        <Button
          buttonStyle={styles.buttonSave}
          // loading={loading}
          onPress={() => {}}
          title={t('button.save')}
        />
      </View>
    </>
  );
};

export default ListStaffScreen;
