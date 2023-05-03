import { Icon } from '@rneui/base';
import { Input } from '@rneui/themed';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';

import { LogoZoning } from '../../../assets';
import { Container, Screen, Select, Text } from '../../../components';
import ItemPosts from '../components/ItemPosts';
import styles from './styles';

const ListPostsScreen = () => {
  const { control } = useForm({
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
    mode: 'onChange',
  });

  return (
    <View style={styles.boxListPost}>
      <View style={styles.headerListPosts}>
        <Icon name="arrow-back" />
        <Input
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputSearch}
          rightIcon={<Icon name="search" />}
        />
        <Icon name="my-location" />
        <View style={styles.boxZoning}>
          <LogoZoning />
          <Text style={styles.checkZoning}>Tra quy hoạch</Text>
        </View>
      </View>
      <Screen>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btnFilter}>
            <Icon name="filter-list" />
          </TouchableOpacity>

          <Select
            control={control}
            name="type_transaction"
            data={[{ label: 'test', value: 'test' }]}
          />
          <Select
            control={control}
            name="test"
            data={[{ label: 'test', value: 'test' }]}
          />
          <Select
            control={control}
            name="category"
            data={[{ label: 'test', value: 'test' }]}
          />
        </View>
        <Container>
          {[...Array(10)].map((_, index) => (
            <ItemPosts key={`itemPost${index}`} />
          ))}
        </Container>
      </Screen>
    </View>
  );
};

export default ListPostsScreen;
