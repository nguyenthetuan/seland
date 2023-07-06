import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Header, Text } from '../../../../components';
import { COLORS } from '../../../../constants';

const BankPayment = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Text style={styles.title}>Thông tin chuyển khoản</Text>
    </SafeAreaView>
  );
};

export default BankPayment;

const styles = StyleSheet.create({
  title: { fontSize: 16, fontWeight: '700', color: COLORS.BLACK_1 },
});
