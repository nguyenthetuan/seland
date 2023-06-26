import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { IconWebchat, IconZalo } from '../../../../../assets';
import { IconSvg } from '../../../../../assets/icons/IconSvg';
import { Button, Text } from '../../../../../components';
import { onPressCall } from '../../../../../utils/hook';
import { IRealEstateDetails } from '../../../../../utils/interface/realEstateDetails';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../../../constants';

interface Iprops {
  infoDetail: IRealEstateDetails;
}

const Contact: FC<Iprops> = props => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const { infoDetail, id } = props;
  const listAction = [
    {
      label: t('detailPost.evaluate'),
      onPress: () => {},
    },
    {
      label: t('detailPost.follow'),
      onPress: () => {},
    },
    {
      label: t('detailPost.book'),
      onPress: () => navigate(SCREENS.CREATEAPPOIONMENTSCREEN, { id: id }),
    },
    {
      label: t('detailPost.quickPost'),
      onPress: () => {},
    },
  ];
  const listFee = [
    {
      label: t('detailPost.allFee'),
      value: '100% = 20 triệu',
    },
    {
      label: t('detailPost.customer'),
      value: '45% = 9 triệu',
    },
    {
      label: t('detailPost.masterHead'),
      value: '45% = 9 triệu',
    },
    {
      label: t('detailPost.technology'),
      value: '45% = 9 triệu',
    },
  ];
  const onCallPhone = () => {
    if (infoDetail?.contacts?.phone_owner) {
      onPressCall(infoDetail?.contacts?.phone_owner);
    }
  };

  return (
    <View style={styles.contactWrapper}>
      <View style={styles.contact}>
        <View style={styles.infoContact}>
          <View style={styles.avatar}>
            <Text style={styles.textAvatar}>
              {infoDetail?.contacts?.name_owner &&
                infoDetail.contacts.name_owner.charAt(0)}
            </Text>
          </View>
          <View style={styles.contactName}>
            <Text style={styles.contactNameText}>
              {infoDetail?.contacts?.name_owner}
            </Text>
            <Text style={styles.contactNameTextSdt}>
              SĐT: {infoDetail?.contacts?.phone_owner}
            </Text>
            <Text style={styles.contactSee}>Xem tất cả tin đăng</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <Button
            title={t('detailPost.call')}
            outline
            radius={5}
            titleStyle={styles.callText}
            buttonStyle={styles.callButton}
            onPress={onCallPhone}
            icon={
              <IconSvg
                name="phone"
                color="#5B8C00"
                width={20}
                height={20}
              />
            }
          />
          <Button
            title={t('detailPost.zalo')}
            outline
            radius={5}
            titleStyle={styles.zaloText}
            buttonStyle={styles.zaloButton}
            icon={<IconZalo />}
          />
        </View>
        <Button
          title={t('detailPost.advise')}
          outline
          radius={5}
          buttonStyle={styles.adviseButton}
          icon={<IconWebchat />}
          titleStyle={styles.adviseText}
        />
        <View style={styles.listAction}>
          {listAction.map(action => {
            return (
              <Button
                title={action.label}
                outline
                radius={5}
                key={action.label}
                buttonStyle={styles.buttonActionItem}
                titleStyle={styles.titleActionItem}
                onPress={action.onPress}
              />
            );
          })}
        </View>
        <Text style={styles.reportMistake}>
          {t('detailPost.reportMistake')}
        </Text>
      </View>
      <View style={styles.cooperation}>
        <Text style={styles.cooperationTitle}>
          {t('detailPost.cooperation')}
        </Text>
        <Text style={styles.cooperationText}>
          Bất động sản này đang cần hợp tác để môi giới
        </Text>
        <View style={styles.listFee}>
          {listFee.map((fee, index) => {
            return (
              <View
                style={index === 3 ? styles.feeItemLast : styles.feeItem}
                key={fee.label}
              >
                <Text style={index === 0 ? styles.feeLabelFirst : {}}>
                  {fee.label}
                </Text>
                <Text>{fee.value}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <Button
        title={t('button.collapse')}
        outline
        radius={5}
        buttonStyle={styles.buttonCollapse}
        titleStyle={styles.titleCollapse}
      />
    </View>
  );
};

export default Contact;
