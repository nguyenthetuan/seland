import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Modal, TouchableNativeFeedback, View } from 'react-native';

import { Button, Input, Text } from '../../../../components';
import {
  COLOR_BLUE_1,
  COLOR_GRAY_4,
  COLOR_GRAY_7,
} from '../../../../constants';
import styles from './styles';

const LandBoundaryAngle = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const { control } = useForm({
    defaultValues: {
      plotLand: '',
    },
  });

  const openLandBoundaryAngle = () => setVisible(true);

  const closeLandBoundaryAngle = () => setVisible(false);

  useImperativeHandle(ref, () => ({ openLandBoundaryAngle }));

  return (
    <Modal
      visible={visible}
      transparent
    >
      <TouchableNativeFeedback onPress={closeLandBoundaryAngle}>
        <View style={styles.container}>
          <View style={styles.boxPopup}>
            <Text style={styles.findLandBoundaryAngle}>
              Quét toạ độ góc ranh từ ảnh chụp
            </Text>
            <Button
              buttonStyle={{ marginBottom: 10 }}
              titleStyle={{ color: COLOR_GRAY_7 }}
              title="Chọn ảnh"
              outline
              onPress={closeLandBoundaryAngle}
            />
            <Button
              buttonStyle={{}}
              title="Quét toạ độ"
              onPress={closeLandBoundaryAngle}
            />
            <Text style={styles.findLandBoundaryAngle}>
              Hoặc điền toạ độ góc ranh trên sổ đỏ / sổ hồng
            </Text>

            <View style={styles.boxForm}>
              <View>
                <View style={styles.boxTopNumber} />
                <View style={styles.boxOrdinalNumber}>
                  <Text>1</Text>
                </View>
                <View style={styles.boxOrdinalNumber}>
                  <Text>2</Text>
                </View>
                <View style={styles.boxOrdinalNumber}>
                  <Text>3</Text>
                </View>
              </View>
              <View>
                <Text style={styles.coordinates}>Toạ độ X</Text>
                <Input
                  control={control}
                  name="x1"
                  inputContainerStyle={styles.input}
                />
                <Input
                  control={control}
                  name="x2"
                  inputContainerStyle={styles.input}
                />
                <Input
                  control={control}
                  name="x3"
                  inputContainerStyle={styles.input}
                />
              </View>
              <View>
                <Text style={styles.coordinates}>Toạ độ Y</Text>
                <Input
                  control={control}
                  name="y1"
                  inputContainerStyle={styles.input}
                />
                <Input
                  control={control}
                  name="y2"
                  inputContainerStyle={styles.input}
                />
                <Input
                  control={control}
                  name="y3"
                  inputContainerStyle={styles.input}
                />
              </View>
            </View>

            <View style={styles.boxButton}>
              <Button
                buttonStyle={[styles.btnPopup, { borderColor: COLOR_GRAY_4 }]}
                titleStyle={{ color: COLOR_GRAY_7 }}
                title="Huỷ bỏ"
                outline
                onPress={closeLandBoundaryAngle}
              />
              <Button
                buttonStyle={[
                  styles.btnPopup,
                  { backgroundColor: COLOR_BLUE_1 },
                ]}
                title="Tìm kiếm"
                onPress={closeLandBoundaryAngle}
              />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </Modal>
  );
});

LandBoundaryAngle.displayName = 'PlotLand';

export default LandBoundaryAngle;
