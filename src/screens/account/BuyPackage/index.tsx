import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Header, Text } from '../../../components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS } from '../../../constants';

const BuyPackage = () => {
  const { packageId, price } = useRoute().params;
  return (
    <SafeAreaView>
      <Header title="Thông tin thanh toán" />
      <ScrollView>
        <View>
          <Text style={styles.total}>Tổng tiền</Text>
          <Text style={styles.price}>{} VND</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuyPackage;

const styles = StyleSheet.create({
  total: { fontSize: 16, color: COLORS.NORMAL },
  price: { fontSize: 30, fontWeight: 'bold' },
});
