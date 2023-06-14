import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { COLORS } from '../../../constants';
import Text from '../../common/Text';
import styles from './styles';

interface AuthHeadingProps {
  hasBack?: boolean;
  hasHello?: boolean;
  children: string;
}

const AuthHeading = ({
  hasBack = false,
  hasHello = false,
  children,
}: AuthHeadingProps) => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {hasHello && <Text style={styles.hello}>{t('heading.hello')}</Text>}
      <View style={styles.headingContainer}>
        {hasBack && (
          <>
            <Icon
              color={COLORS.BLUE_1}
              name="arrow-back"
              onPress={goBack}
              size={28}
            />
          </>
        )}
        <Text style={styles.heading}>{children}</Text>
      </View>
    </View>
  );
};

export default AuthHeading;
