import { CheckBox, Icon } from '@rneui/themed';
import React, { useEffect, useMemo, useState } from 'react';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImageUpload } from '../../../../assets';
import { Button, Input, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import { selectUser } from '../../../../features';
import Category from '../Category';
import styles from './styles';
import {
  validateContent,
  validateName,
  validatePhone,
  validateTitle,
  validateUrlYoutube,
} from '../../../../utils/validates';

const MB = 1048576;
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
    value: 'brokerOther',
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

interface ArticleDetailsProps {
  control?: Control;
  setValue?: Function;
  getValues?: Function;
  setError?: Function;
  clearErrors?: Function;
  errors?: {
    photo?: any;
  };
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({
  control,
  setValue,
  getValues,
  setError,
  clearErrors,
  errors,
}) => {
  const value = getValues && getValues();
  const { t } = useTranslation();
  const { data: user } = useSelector(selectUser);
  const [typeUpload, setTypeUpload] = useState({
    photo: [],
    video: [],
    isPhoto: true,
    errorsPhoto: '',
    errorsVideo: '',
  });
  const [iam, setIam] = React.useState(1);
  const [typeBroker, setTypeBroker] = React.useState(1);
  // const [listStoreBDS, setListStoreBDS] = useState(StoreBDS);
  // const [listShareBroker, setListShareBroker] = useState(StoreBDS);

  useEffect(() => {
    if (typeUpload.photo.length >= 3) {
      clearErrors && clearErrors();
    }
  }, [typeUpload.photo]);

  useEffect(() => {
    if (value?.photo.length > 0 || value?.video.length > 0) {
      setTypeUpload({
        ...typeUpload,
        photo: value?.photo,
        video: value?.video,
      });
    }
  }, []);

  const toggleCheck = (value: any) => {
    setIam(value);
  };

  const toggleIam = (value: any) => {
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
    const verifyMB = typeUpload.isPhoto ? 0.2 : 1;
    try {
      launchImageLibrary({
        mediaType: typeUpload.isPhoto ? 'photo' : 'video',
        selectionLimit: typeUpload.isPhoto ? 12 : 1,
      })
        .then(result => {
          if (result?.assets) {
            let errorsVideo = '';
            let errorsPhoto = '';
            const arrayImage = result?.assets.filter(item => {
              if (item?.fileSize && item?.fileSize / MB <= verifyMB) {
                return item;
              } else {
                errorsPhoto = typeUpload.isPhoto
                  ? 'Ảnh vượt quá giới hạn dung lượng'
                  : '';
                errorsVideo = typeUpload.isPhoto
                  ? ''
                  : 'Video vượt quá giới hạn dung lượng';
                return;
              }
            });

            console.log('arrayImage', arrayImage);
            if (!typeUpload.isPhoto) {
              setValue && setValue('urlVideo', '');
            }
            if (typeUpload.isPhoto) {
              setValue && setValue('photo', [...value?.photo, ...arrayImage]);
            } else {
              setValue && setValue('video', [...arrayImage]);
            }

            setTypeUpload({
              ...typeUpload,
              errorsPhoto: errorsPhoto,
              errorsVideo: errorsVideo,
              photo: typeUpload.isPhoto
                ? [...typeUpload.photo, ...arrayImage]
                : typeUpload.photo,
              video: typeUpload.isPhoto ? typeUpload.video : arrayImage,
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

  const handleDeleteFile = (value: any) => {
    if (typeUpload.isPhoto) {
      const newPhoto = typeUpload.photo.filter(
        (item: any) => item?.fileName !== value
      );
      setTypeUpload({ ...typeUpload, photo: newPhoto });
      setValue && setValue('photo', newPhoto);
    } else {
      const newVideo = typeUpload.video.filter(
        (item: any) => item?.fileName !== value
      );
      setTypeUpload({ ...typeUpload, video: newVideo });
      setValue && setValue('video', newVideo);
    }
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

  const handleRemoveVideo = (e: any) => {
    if (e.nativeEvent.text) {
      setTypeUpload({ ...typeUpload, video: [], errorsVideo: '' });
      setValue && setValue('video', []);
    }
  };

  console.log('errors?.photo?.message', errors?.photo?.message);
  return (
    <View>
      <KeyboardAwareScrollView>
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
            labelStyle={[styles.inputLabel, { marginLeft: 10 }]}
            inputContainerStyle={styles.inputContainerStyle}
            name="urlVideo"
            renderErrorMessage={false}
            rules={{ validate: validateUrlYoutube }}
            onEndEditing={handleRemoveVideo}
          />
        )}

        {file.length ? (
          <View style={styles.boxFile}>
            {file?.map(
              (item: {
                fileName?: string;
                uri?: string;
                fileSize: number;
                update?: boolean;
              }) => {
                return (
                  <View
                    key={`item${typeUpload?.isPhoto ? 'image' : 'video'}${
                      item?.uri
                    }`}
                    style={styles.boxImage}
                  >
                    {typeUpload.isPhoto ? (
                      <>
                        <Image
                          source={{ uri: item?.uri }}
                          style={styles.image}
                        />
                        {item?.update ? null : (
                          <Text style={styles.fileSize}>{`${(
                            item?.fileSize / MB
                          ).toFixed(2)}/MB`}</Text>
                        )}
                      </>
                    ) : (
                      <>
                        <View
                          style={[
                            styles.image,
                            { alignItems: 'center', justifyContent: 'center' },
                          ]}
                        >
                          <Icon
                            name="movie"
                            color={COLORS.GRAY_1}
                          />
                        </View>
                        {item?.update ? null : (
                          <Text style={styles.fileSize}>{`${(
                            item?.fileSize / MB
                          ).toFixed(2)}/MB`}</Text>
                        )}
                      </>
                    )}

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
                );
              }
            )}
            {typeUpload?.isPhoto && file.length < 11 ? (
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
            <Text style={{ color: COLORS.BLACK_2 }}>
              {t(
                typeUpload.isPhoto
                  ? 'common.supportSingleOrBulkUpload'
                  : 'common.supportUploadAVideo'
              )}
            </Text>
          </TouchableOpacity>
        )}
        {(typeUpload?.errorsPhoto ||
          typeUpload?.errorsVideo ||
          errors?.photo) && (
          <Text style={styles.errorPhoto}>
            {typeUpload.isPhoto
              ? typeUpload?.errorsPhoto || errors?.photo?.message
              : typeUpload?.errorsVideo || ''}
          </Text>
        )}
        <View style={{ marginHorizontal: 10, marginTop: 16 }}>
          <Input
            control={control}
            label={t('input.title')}
            labelStyle={styles.inputLabel}
            name="title"
            required
            inputContainerStyle={styles.inputContainerTitle}
            rules={{
              required: 'Vui lòng nhập tiêu đề',
              validate: validateTitle,
            }}
            renderErrorMessage={false}
          />
          <Input
            control={control}
            label={t('input.content')}
            labelStyle={styles.inputLabel}
            name="content"
            multiline
            required
            rules={{
              required: 'Vui lòng nhập nội dung',
              validate: validateContent,
            }}
            inputContainerStyle={styles.inputContainerContent}
            renderErrorMessage={false}
          />
        </View>
        <Category label="Thông tin liên hệ">
          <Text>{t('Hiển thị công khai')}</Text>
          <Text
            style={styles.nameAndPhone}
          >{`${user?.phone_number} - ${user?.name}`}</Text>
          <Text>{t('Người đăng là')}</Text>
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
              <Text>{t('Hiển thị riêng tư')}</Text>
              <Text style={styles.content}>
                Đây là thông tin bảo mật của riêng bạn, thông tin này sẽ hiển
                thị với riêng bạn, không hiển thị với người xem bài đăng.
              </Text>
              <Text style={styles.content}>
                Bạn vui lòng điền các thông tin sau để giúp bạn quản lý nguồn
                hàng hiệu quả.
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
                rules={{
                  validate: validateName,
                }}
                name="name"
              />
              <Input
                autoComplete="tel"
                control={control}
                inputMode="numeric"
                isNumeric
                rules={{
                  validate: validatePhone,
                }}
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
          <Text style={{ color: COLORS.BLACK_2 }}>
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
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ArticleDetails;
