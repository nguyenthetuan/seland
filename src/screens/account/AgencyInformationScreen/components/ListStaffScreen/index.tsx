import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '../../../../../components';
import { COLOR_BLACK_1, COLOR_BLACK_3, COLOR_GRAY_10, COLOR_GRAY_2, COLOR_GRAY_7, COLOR_GRAY_9, COLOR_ORANGE_1, COLOR_WHITE } from '../../../../../constants';
import { Icon } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { IconClose, IconEdit, IconOff, IconOn, StatusFail, StatusSuccess } from '../../../../../assets';

const ListStaffScreen = () => {

  const { t } = useTranslation();

  const isOnline = true;
  const isSuccess = false;

  const {
    clearErrors,
    control,
    getValues,
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      ward_id: null,
      district_id: null,
      province_id: null,
    }
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexRow}>
        <View style={styles.wrapInput}>
          <Input
            inputContainerStyle={styles.inputSearch}
            rightIcon={<Icon name="search" />}
            placeholder={""}
            control={control}
            name='ward_id'
          />
        </View>
        <Button
          buttonStyle={styles.buttonSave}
          // loading={loading}
          onPress={() => {}}
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

        <View style={styles.rowContent}>
          <View style={styles.wrapContent}>

            <View style={styles.wrapContentName}>
              <Text style={styles.contentName}>Tô Minh Tuấn</Text>
                {isOnline ? <IconOn /> : <IconOff />}
            </View>

            <Text style={styles.contentPhone}>012345679</Text>

            <View style={styles.wrapContentId}>
              <View style={styles.contentId}>
                {isSuccess ? <StatusSuccess /> : <StatusFail />}
              </View>
            </View>

            <View style={styles.wrapContentAction}>
              <IconEdit />
              <IconClose />
            </View>

          </View>
        </View>
        
        <View style={styles.rowContent}>
          <View style={styles.wrapContent}>

            <View style={styles.wrapContentName}>
              <Text style={styles.contentName}>Tô Minh Tuấn</Text>
                {isOnline ? <IconOn /> : <IconOff />}
            </View>

            <Text style={styles.contentPhone}>012345679</Text>

            <View style={styles.wrapContentId}>
              <View style={styles.contentId}>
                {isSuccess ? <StatusSuccess /> : <StatusFail />}
              </View>
            </View>

            <View style={styles.wrapContentAction}>
              <IconEdit />
              <IconClose />
            </View>

          </View>
        </View>

        <View style={styles.rowContent}>
          <View style={styles.wrapContent}>

            <View style={styles.wrapContentName}>
              <Text style={styles.contentName}>Tô Minh Tuấn</Text>
                {isOnline ? <IconOn /> : <IconOff />}
            </View>

            <Text style={styles.contentPhone}>012345679</Text>

            <View style={styles.wrapContentId}>
              <View style={styles.contentId}>
                {isSuccess ? <StatusSuccess /> : <StatusFail />}
              </View>
            </View>

            <View style={styles.wrapContentAction}>
              <IconEdit />
              <IconClose />
            </View>

          </View>
        </View>

        <View style={styles.rowContent}>
          <View style={styles.wrapContent}>

            <View style={styles.wrapContentName}>
              <Text style={styles.contentName}>Tô Minh Tuấn</Text>
                {isOnline ? <IconOn /> : <IconOff />}
            </View>

            <Text style={styles.contentPhone}>012345679</Text>

            <View style={styles.wrapContentId}>
              <View style={styles.contentId}>
                {isSuccess ? <StatusSuccess /> : <StatusFail />}
              </View>
            </View>

            <View style={styles.wrapContentAction}>
              <IconEdit />
              <IconClose />
            </View>

          </View>
        </View>

        <View style={styles.rowContent}>
          <View style={styles.wrapContent}>

            <View style={styles.wrapContentName}>
              <Text style={styles.contentName}>Tô Minh Tuấn</Text>
                {isOnline ? <IconOn /> : <IconOff />}
            </View>

            <Text style={styles.contentPhone}>012345679</Text>

            <View style={styles.wrapContentId}>
              <View style={styles.contentId}>
                {isSuccess ? <StatusSuccess /> : <StatusFail />}
              </View>
            </View>

            <View style={styles.wrapContentAction}>
              <IconEdit />
              <IconClose />
            </View>

          </View>
        </View>

        <View style={styles.rowContent}>
          <View style={styles.wrapContent}>

            <View style={styles.wrapContentName}>
              <Text style={styles.contentName}>Tô Minh Tuấn</Text>
                {isOnline ? <IconOn /> : <IconOff />}
            </View>

            <Text style={styles.contentPhone}>012345679</Text>

            <View style={styles.wrapContentId}>
              <View style={styles.contentId}>
                {isSuccess ? <StatusSuccess /> : <StatusFail />}
              </View>
            </View>

            <View style={styles.wrapContentAction}>
              <IconEdit />
              <IconClose />
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ListStaffScreen;

const styles = StyleSheet.create({
  buttonSave: {
    height: 40,
    borderRadius: 5,
    minWidth: 125,
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 10,
  },
  flexRow: {
    flexDirection: 'row'
  },
  flex: {
    flex: 1,
  },
  inputContainer: {
    height: 40,
  },
  inputSearch: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
  },
  wrapInput: {
    flex: 1,
    marginRight: 8
  },
  wrapTable: {

  },
  row: {
    flexDirection: 'row',
  },
  rowContent: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomColor: COLOR_GRAY_2,
    borderBottomWidth: 1,
  },
  wrapHeader: {
    backgroundColor: COLOR_GRAY_10,
    borderBottomColor: COLOR_GRAY_2,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 8
  },
  headerName: {
    flex: 1,
    fontWeight: '500',
    fontSize: 13,
  },
  headerPhone: {
    fontWeight: '500',
    width: 100,
    fontSize: 13,
  },
  headerId: {
    fontWeight: '500',
    width: 72,
    fontSize: 13,
  },
  headerAction: {
    fontWeight: '500',
    width: 72,
    fontSize: 13,
  },
  wrapContent: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
  },
  wrapContentName: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  contentName: {
    fontSize: 13,
    marginRight: 4
  },
  contentPhone: {
    fontSize: 13,
    width: 100,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  wrapContentId: {
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentId: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
  },
  wrapContentAction: {
    flexDirection: 'row',
    width: 72,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})