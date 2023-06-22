import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Header, Input, Text } from '../../../components';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { Icon } from '@rneui/themed';
import { useController, useForm } from 'react-hook-form';
import { IconFilter } from '../../../assets';

const ItemContact = ({role}: any) => {
  return (
    <View style={styles.wrapperItemContact}>
      <Text style={styles.titleItemContact}>Bán chung cư 219 Trung Kính</Text>

      <View style={styles.wrapContentItemContact}>
        <View style={styles.leftContentItemContact}>
          <View style={styles.avatar}>
            <Text style={styles.avatarName}>Q</Text>
          </View>
          <View>
            <Text style={styles.name}>Trịnh Trần Quỳnh Anh</Text>
            <Text style={styles.phone}>0123456789</Text>
          </View>
        </View>

        <View style={styles.rightContentItemContact}>
          <View style={styles.wrapRole}>
            <Text style={styles.role}>{role}</Text>
          </View>

          <Text style={styles.date}>Apr 5 - Apr 6</Text>
        </View>
      </View>

      <Text style={styles.message}>Message: KH đổi lịch hẹn sang ngày 4/3</Text>

    </View>
  )
}

const RequestContactScreen = () => {
  const { t } = useTranslation();
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      searchText: ""
    },
  });

  const submit = () => {
    
  };

  return (
    <ScrollView style={styles.container}>
      <Header title={t('common.requestContact')} />
      <View>
        <View style={styles.header}>
          <View style={styles.wrapTextSearch}>
            <Input
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.inputSearch}
              placeholder={t('placeholder.searchTitle') || ""}
              rightIcon={<Icon
                name="search"
                onPress={submit} />}
              control={control}
              name={'searchText'}
            />
          </View>

          <Button
            buttonStyle={styles.button}
            title="Lọc"
            icon={<IconFilter />}
          />
        </View>

        <Text style={styles.countRequestContact}>Bạn có 
          <Text style={styles.countRequestContactBold}> 10 </Text> 
        yêu cầu liên hệ</Text>

        <View style={styles.wrapList}>
          <ItemContact role={"Môi giới"}/>
          <ItemContact role={"Chủ đất"}/>
          <ItemContact role={"Nhà đầu tư"}/>
          <ItemContact role={"Khách hàng"}/>
          <ItemContact role={"Môi giới"}/>
          <ItemContact role={"Chủ đất"}/>
          <ItemContact role={"Nhà đầu tư"}/>
          <ItemContact role={"Khách hàng"}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default RequestContactScreen;
