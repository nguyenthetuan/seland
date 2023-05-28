import { CheckBox, Icon } from '@rneui/themed';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import { ImageUpload } from '../../../../assets';
import { Button, Input, Text } from '../../../../components';
import { COLOR_BLACK_2 } from '../../../../constants';
import {
  createArticleDetails,
  selectPosts,
  selectUser,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';
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

// const StoreBDS = [
//   {
//     value: false,
//     label: 'test 1',
//     key: 1,
//   },
//   {
//     value: false,
//     label: 'test 2',
//     key: 2,
//   },
//   {
//     value: false,
//     label: 'test 3',
//     key: 3,
//   },
//   {
//     value: false,
//     label: 'test 4',
//     key: 4,
//   },
// ];

const ArticleDetails = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { articleDetails } = useSelector(selectPosts);
  const { data: user } = useSelector(selectUser);
  const [typeUpload, setTypeUpload] = useState({
    photo: articleDetails?.photo || [],
    video: articleDetails?.video || [],
    isPhoto: articleDetails?.isPhoto || true,
  });
  const [iam, setIam] = React.useState(1);
  const [typeBroker, setTypeBroker] = React.useState(articleDetails?.type || 1);
  // const [listStoreBDS, setListStoreBDS] = useState(StoreBDS);
  // const [listShareBroker, setListShareBroker] = useState(StoreBDS);
  const [errors, setErrors] = useState();

  const { control, setValue, getValues, reset } = useForm({
    defaultValues: {
      title: '',
      content: '',
      name: '',
      urlVideo: '',
      phone_number: '',
    },
  });

  useEffect(() => {
    Object.entries(articleDetails).forEach(
      ([key, value]) => value && setValue(key, value)
    );
  }, [articleDetails, setValue]);

  const toggleCheck = value => {
    setIam(value);
  };

  const toggleIam = value => {
    setTypeBroker(value);
  };

  // const toggleStoreBDS = value => {
  //   const array = listStoreBDS.map(item => {
  //     if (item.key === value) {
  //       return {
  //         ...item,
  //         value: !item?.value,
  //       };
  //     }
  //     return item;
  //   });
  //   setListStoreBDS(array);
  // };

  // const toggleShareBroker = value => {
  //   const array = listShareBroker.map(item => {
  //     if (item.key === value) {
  //       return {
  //         ...item,
  //         value: !item?.value,
  //       };
  //     }
  //     return item;
  //   });
  //   setListShareBroker(array);
  // };

  const handleSelectFile = () => {
    try {
      if (errors?.photo) delete errors.photo;
      setErrors({
        ...errors,
      });
      launchImageLibrary({
        mediaType: typeUpload.isPhoto ? 'photo' : 'video',
        selectionLimit: typeUpload.isPhoto ? 12 : 1,
      })
        .then(result => {
          if (result?.assets) {
            setTypeUpload({
              ...typeUpload,
              photo: typeUpload.isPhoto
                ? [...typeUpload.photo, ...result?.assets]
                : typeUpload.photo,
              video: typeUpload.isPhoto ? typeUpload.video : result?.assets,
            });
          }
        })
        .catch(() =>
          Toast.show({
            text1: 'Lỗi tải file',
          })
        );
    } catch (err) {
      Toast.show({
        text1: 'Lỗi tải file',
      });
    }
  };

  const handleDeleteFile = value => {
    const newPhoto = typeUpload.photo.filter(item => item?.fileName !== value);
    setTypeUpload({ ...typeUpload, photo: newPhoto });
  };

  const file = useMemo(() => {
    let array = [];
    if (typeUpload.isPhoto) {
      array = typeUpload.photo;
    } else {
      array = typeUpload.video;
    }
    return array;
  }, [typeUpload]);

  const handleNext = () => {
    const value = getValues();
    if (!value.area || !value.price || !value.price_unit) {
      setErrors({
        title: !value.title ? 'Vui lòng nhập tiêu đề bài viết' : null,
        content: !value.content ? 'Vui lòng nhập nội dung' : null,
        photo: typeUpload?.photo?.length === 0 ? 'Vui lòng chọn ảnh' : null,
      });
      return true;
    }
    setErrors();
    dispatchThunk(
      dispatch,
      createArticleDetails({
        ...value,
        type: typeBroker,
        isPhoto: typeUpload?.isPhoto,
        photo: typeUpload.photo,
        video: typeUpload.video,
      })
    );
  };

  const onFocusTitle = () => {
    if (errors?.title) delete errors.title;
    setErrors({
      ...errors,
    });
  };

  const onFocusContent = () => {
    if (errors?.content) delete errors.content;
    setErrors({
      ...errors,
    });
  };

  const clearForm = () => {
    reset();
  };

  useImperativeHandle(ref, () => ({ handleNext, clearForm }));

  return (
    <View>
      <View style={styles.boxSelectTypeUpload}>
        <Button
          buttonStyle={styles.btnSelectTypeUpload(typeUpload.isPhoto ? 2 : 0)}
          outline
          title="Hình ảnh BĐS"
          onPress={() => setTypeUpload({ ...typeUpload, isPhoto: true })}
        />
        <Button
          buttonStyle={styles.btnSelectTypeUpload(typeUpload.isPhoto ? 0 : 2)}
          outline
          title="Video BĐS"
          onPress={() => setTypeUpload({ ...typeUpload, isPhoto: false })}
        />
      </View>
      {typeUpload.isPhoto ? null : (
        <Input
          control={control}
          label="Dán link video của bạn tại đây."
          placeholder="VD: https://www.youtube.com/watch?v=bymBAF8d_sc"
          labelStyle={styles.inputLabel}
          name="urlVideo"
          renderErrorMessage={false}
        />
      )}

      {file.length ? (
        <View style={styles.boxFile}>
          {file?.map(item => (
            <View
              key={`imageUpload${item?.file}`}
              style={{ margin: 5 }}
            >
              <Image
                source={{ uri: item?.uri }}
                style={styles.image}
              />

              <Pressable
                style={styles.btnDeleteImage}
                onPress={() => handleDeleteFile(item?.fileName)}
              >
                <Icon
                  name="close"
                  size={20}
                />
              </Pressable>
            </View>
          ))}
          {file.length < 11 ? (
            <Pressable
              style={styles.btnAddImage}
              onPress={handleSelectFile}
            >
              <Icon name="add" />
            </Pressable>
          ) : null}
        </View>
      ) : (
        <TouchableOpacity
          style={styles.boxUpload}
          onPress={handleSelectFile}
        >
          <ImageUpload />
          <Text style={{ marginTop: 20 }}>
            {t('common.selectFileToUpload').replace(
              'file',
              t(typeUpload.isPhoto ? 'common.image' : 'common.video')
            )}
          </Text>
          <Text style={{ color: COLOR_BLACK_2 }}>
            {t(
              typeUpload.isPhoto
                ? 'common.supportSingleOrBulkUpload'
                : 'common.supportUploadAVideo'
            )}
          </Text>
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontSize: 12,
          color: 'red',
          marginLeft: 16,
          marginBottom: 20,
          marginTop: -16,
        }}
      >
        {errors?.photo}
      </Text>
      <Input
        control={control}
        label={t('input.title')}
        labelStyle={styles.inputLabel}
        name="title"
        required
        onFocus={onFocusTitle}
        errorMessage={errors?.title}
        renderErrorMessage={false}
      />
      <Input
        control={control}
        label={t('input.content')}
        labelStyle={styles.inputLabel}
        name="content"
        multiline
        required
        onFocus={onFocusContent}
        errorMessage={errors?.content}
        inputContainerStyle={styles.inputContainerContent}
        renderErrorMessage={false}
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
                  checked={typeBroker === item?.key}
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
      {/* <Category label="Chính sách bán hàng">
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
      </Category> */}
      {/* <Category label="Chia sẻ với các môi giới">
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
      </Category> */}
      {/* <Category label="Chọn kho BĐS">
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
      </Category> */}
    </View>
  );
});

ArticleDetails.displayName = 'ArticleDetails';

export default ArticleDetails;
