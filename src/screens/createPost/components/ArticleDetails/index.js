import { Button, CheckBox, Icon, Input as InputBase } from '@rneui/base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ImageUpload } from '../../../../assets';
import { DateTimePicker, Input, Text } from '../../../../components';
import { COLOR_BLACK_2 } from '../../../../constants';
import { selectUser } from '../../../../features';
import Category from '../Category';
import styles from './styles';

const IAm = [
  {
    value: 'landlord',
    key: 1,
  },
  {
    value: 'broker',
    key: 2,
  },
];
const IAm1 = [
  {
    value: 'landlord',
    key: 1,
  },
  {
    value: 'broker',
    key: 2,
  },
];

const StoreBDS = [
  {
    value: false,
    label: 'test 1',
    key: 1,
  },
  {
    value: false,
    label: 'test 2',
    key: 2,
  },
  {
    value: false,
    label: 'test 3',
    key: 3,
  },
  {
    value: false,
    label: 'test 4',
    key: 4,
  },
];

const ArticleDetails = () => {
  const { t } = useTranslation();
  const { data: user } = useSelector(selectUser);
  const [typeUpload, setTypeUpload] = useState(true);
  const [iam, setIam] = React.useState(1);
  const [iam1, setIam1] = React.useState(1);
  const [listStoreBDS, setListStoreBDS] = useState(StoreBDS);
  const [listShareBroker, setListShareBroker] = useState(StoreBDS);

  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      acreage: '',
      price: '',
      width: '',
      length: '',
      lane_width: '',
      unit: null,
      bathroom: null,
      bedroom: null,
      compass: null,
      structure: null,
    },
  });

  const toggleCheck = value => {
    setIam(value);
  };

  const toggleIam = value => {
    setIam1(value);
  };

  const toggleStoreBDS = value => {
    const array = listStoreBDS.map(item => {
      if (item.key === value) {
        return {
          ...item,
          value: !item?.value,
        };
      }
      return item;
    });
    setListStoreBDS(array);
  };

  const toggleShareBroker = value => {
    const array = listShareBroker.map(item => {
      if (item.key === value) {
        return {
          ...item,
          value: !item?.value,
        };
      }
      return item;
    });
    setListShareBroker(array);
  };

  return (
    <View>
      <View style={styles.boxSelectTypeUpload}>
        <Button
          buttonStyle={styles.btnSelectTypeUpload(typeUpload ? 2 : 0)}
          type="outline"
          title="Hình ảnh BĐS"
          onPress={() => setTypeUpload(true)}
        />
        <Button
          buttonStyle={styles.btnSelectTypeUpload(typeUpload ? 0 : 2)}
          type="outline"
          title="Video BĐS"
          onPress={() => setTypeUpload(false)}
        />
      </View>
      <TouchableOpacity style={styles.boxUpload}>
        <ImageUpload />
        <Text style={{ marginTop: 20 }}>Chọn ảnh để tải lên</Text>
        <Text style={{ color: COLOR_BLACK_2 }}>
          Hỗ trợ tải lên một lần hoặc hàng loạt.
        </Text>
      </TouchableOpacity>
      <Input
        control={control}
        label={t('input.title')}
        labelStyle={styles.inputLabel}
        name="title"
      />
      <Input
        control={control}
        label={t('input.content')}
        labelStyle={styles.inputLabel}
        name="content"
        multiline
        inputContainerStyle={styles.inputContainerContent}
      />
      <Category label="Thông tin liên hệ">
        <Text style={styles.iam}>{t('Hiển thị công khai')}</Text>
        <Text
          style={styles.nameAndPhone}
        >{`${user?.phone_number} - ${user?.name}`}</Text>
        <Text style={styles.iam}>{t('Người đăng là')}</Text>
        <View style={styles.boxCheck}>
          {IAm.map(item => (
            <CheckBox
              key={`checkIam${item?.key}`}
              title={t(`checkbox.${item?.value}`)}
              checked={iam === item?.key}
              onPress={() => toggleCheck(item?.key)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          ))}
        </View>
        {iam === 2 ? (
          <View>
            <View style={styles.line} />
            <Text style={styles.iam}>{t('Hiển thị riêng tư')}</Text>
            <Text style={styles.content}>
              Đây là thông tin bảo mật của bạn, thông tin này sẽ hiển thị với
              riêng tư bạn, không hiển thị với người xem bài đăng.
            </Text>
            <Text style={styles.content}>
              Bạn vui lòng điền các thông tin sau để giúp bạn quản lý nguồn hàng
              hiệu quả.
            </Text>
            <Text style={styles.txtInformationContact}>
              Thông tin liên hệ người đã gửi BĐS này cho bạn.
            </Text>
            <View style={styles.boxCheck}>
              {IAm1.map(item => (
                <CheckBox
                  key={`checkIam${item?.key}`}
                  title={t(`checkbox.${item?.value}`)}
                  checked={iam1 === item?.key}
                  onPress={() => toggleIam(item?.key)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              ))}
            </View>
            <Input
              control={control}
              label={t('input.name')}
              labelStyle={styles.inputLabel}
              name="name"
            />
            <Input
              autoComplete="tel"
              control={control}
              inputMode="numeric"
              isNumeric
              label={t('input.phoneNumber')}
              labelStyle={styles.inputLabel}
              name="phone_number"
            />
          </View>
        ) : null}
      </Category>
      <Category label="Chính sách bán hàng">
        <Text style={styles.label}>{t('THỜI HẠN CHÍNH SÁCH')}</Text>
        <View style={styles.boxDate}>
          <View style={styles.itemDate}>
            <Text>{t('Từ')}</Text>
            <DateTimePicker
              labelStyle={styles.inputLabel}
              control={control}
              name="date1"
            />
          </View>
          <View style={styles.itemDate}>
            <Text>{t('Đến')}</Text>
            <DateTimePicker
              labelStyle={styles.inputLabel}
              control={control}
              name="date2"
            />
          </View>
        </View>
        <Text style={styles.txtImageContract}>Ảnh hợp đồng</Text>
        <TouchableOpacity style={styles.boxUpload}>
          <ImageUpload />
          <Text style={{ marginTop: 20 }}>Chọn ảnh để tải lên</Text>
          <Text style={{ color: COLOR_BLACK_2 }}>
            Hỗ trợ tải lên một lần hoặc hàng loạt.
          </Text>
        </TouchableOpacity>
        <Text style={styles.label}>{t('HOA HỒNG VỀ SÀN')}</Text>
        <Input
          control={control}
          label={t('Hoa hồng')}
          labelStyle={styles.inputLabel}
          name="rose"
        />
        <Input
          control={control}
          label={t('Thưởng')}
          labelStyle={styles.inputLabel}
          name="bonus"
        />
        <Text style={styles.label}>{t('HOA HỒNG VỀ ĐẠI LÝ F2')}</Text>
        <Input
          control={control}
          label={t('Hoa hồng')}
          labelStyle={styles.inputLabel}
          name="rose_agent"
        />
        <Input
          control={control}
          label={t('Thưởng')}
          labelStyle={styles.inputLabel}
          name="bonus_agent"
        />
        <Text style={styles.label}>{t('HOA HỒNG VỀ SALE')}</Text>
        <Input
          control={control}
          label={t('Hoa hồng')}
          labelStyle={styles.inputLabel}
          name="rose_sale"
        />
        <Input
          control={control}
          label={t('Thưởng')}
          labelStyle={styles.inputLabel}
          name="bonus_sale"
        />
        <Text style={styles.label}>{t('HOA HỒNG VỀ CỘNG TÁC VIÊN')}</Text>
        <Input
          control={control}
          label={t('Hoa hồng')}
          labelStyle={styles.inputLabel}
          name="rose_collaborator"
        />
        <Input
          control={control}
          label={t('Thưởng')}
          labelStyle={styles.inputLabel}
          name="bonus_collaborator"
        />
      </Category>
      <Category label="Chia sẻ với các môi giới">
        <InputBase
          inputContainerStyle={styles.inputContainer}
          style={styles.txtInput}
          rightIcon={<Icon name="search" />}
          placeholder="Tìm kiếm"
        />
        {listShareBroker.map(item => (
          <CheckBox
            key={`shareBroker${item?.key}`}
            checked={item?.value}
            onPress={() => toggleShareBroker(item?.key)}
            title={item.label}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon="checkbox-blank-outline"
          />
        ))}
      </Category>
      <Category label="Chọn kho BĐS">
        <InputBase
          inputContainerStyle={styles.inputContainer}
          style={styles.txtInput}
          rightIcon={<Icon name="search" />}
          placeholder="Tìm kiếm"
        />
        {listStoreBDS.map(item => (
          <CheckBox
            key={`storebds${item?.key}`}
            checked={item?.value}
            onPress={() => toggleStoreBDS(item?.key)}
            title={item.label}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon="checkbox-blank-outline"
          />
        ))}
      </Category>
    </View>
  );
};

export default ArticleDetails;
