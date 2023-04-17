import { useRoute } from '@react-navigation/native';
import React from 'react';

import { Screen, Text } from '../../components';

const OtpScreen = () => {
  const { params } = useRoute();

  return (
    <Screen>
      <Text>{params?.phoneNumber}</Text>
    </Screen>
  );
};

export default OtpScreen;
