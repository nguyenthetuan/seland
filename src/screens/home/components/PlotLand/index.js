import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Modal, TouchableNativeFeedback, View } from 'react-native';

import { Button, Input, Select, Text } from '../../../../components';
import {
  COLOR_BLUE_1,
  COLOR_GRAY_4,
  COLOR_GRAY_7,
} from '../../../../constants';
import styles from './styles';

const PlotLand = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const { control } = useForm({
    defaultValues: {
      plotLand: '',
    },
  });

  const openPlotLand = () => setVisible(true);

  const closePlotLand = () => setVisible(false);

  useImperativeHandle(ref, () => ({ openPlotLand }));

  return (
    <Modal
      visible={visible}
      transparent
    >
      <TouchableNativeFeedback onPress={closePlotLand}>
        <View style={styles.container}>
          <View style={styles.boxPopup}>
            <Text style={styles.findPlotLand}>Tìm theo tờ thửa</Text>
            <View style={styles.form}>
              <View style={{ flexDirection: 'row' }}>
                <Input
                  control={control}
                  label="Số thửa"
                  name="plotLand"
                  renderErrorMessage={false}
                />

                <Input
                  control={control}
                  label="Số tờ"
                  name="plotLand"
                  renderErrorMessage={false}
                />
              </View>

              <Select
                containerSelect={styles.select}
                control={control}
                data={[{ value: 'sex', label: 'sex' }]}
                defaultButtonText={t('select.province')}
                name="province_id"
              />

              <Select
                containerSelect={styles.select}
                control={control}
                data={[{ value: 'sex', label: 'sex' }]}
                defaultButtonText={t('select.district')}
                name="district_id"
              />

              <Select
                containerSelect={styles.select}
                control={control}
                data={[{ value: 'sex', label: 'sex' }]}
                defaultButtonText={t('select.ward')}
                name="ward_id"
              />
            </View>

            <View style={styles.boxButton}>
              <Button
                buttonStyle={[styles.btnPopup, { borderColor: COLOR_GRAY_4 }]}
                titleStyle={{ color: COLOR_GRAY_7 }}
                title="Huỷ bỏ"
                outline
                onPress={closePlotLand}
              />
              <Button
                buttonStyle={[
                  styles.btnPopup,
                  { backgroundColor: COLOR_BLUE_1 },
                ]}
                title="Tìm kiếm"
                onPress={closePlotLand}
              />
            </View>
            <Text style={styles.note}>
              Những địa phương chưa tìm được bằng tờ thửa bạn vui lòng sử dụng
              cách còn lại để xem quy hoạch
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </Modal>
  );
});

PlotLand.displayName = 'PlotLand';

export default PlotLand;
