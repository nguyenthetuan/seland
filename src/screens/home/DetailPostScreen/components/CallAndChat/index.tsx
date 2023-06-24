import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import styles from './styles';
import { Button } from '../../../../../components';
import { IconSvg } from '../../../../../assets/icons/IconSvg';
import { COLORS } from '../../../../../constants';
import { IconZaloBlue } from '../../../../../assets';

interface Iprops {}

const CallAndChat: FC<Iprops> = props => {
  const { t } = useTranslation();

  return (
    <View style={styles.flex}>
      <Button
        title={t('detailPost.call')}
        outline
        titleStyle={styles.callText}
        buttonStyle={styles.callButton}
        radius={0}
        icon={
          <IconSvg
            name="phone"
            color={COLORS.WHITE}
            width={20}
            height={20}
          />
        }
      />
      <Button
        title={t('detailPost.zalo')}
        outline
        titleStyle={styles.zaloText}
        buttonStyle={styles.zaloButton}
        icon={<IconZaloBlue />}
        radius={0}
      />
    </View>
  );
};

export default CallAndChat;
