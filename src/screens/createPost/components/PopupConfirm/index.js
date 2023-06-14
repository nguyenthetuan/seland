import PropTypes from 'prop-types';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, View } from 'react-native';

import { Button, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import styles from './styles';

const PopupConfirmPost = forwardRef(
  (
    {
      onPressButtonLeft,
      onPressButtonRight,
      label,
      description,
      content,
      titleButtonRight,
      titleButtonLeft,
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);

    const openPopup = () => {
      setVisible(true);
    };

    useImperativeHandle(ref, () => ({ openPopup }));

    const handleButtonLeft = () => {
      onPressButtonLeft();
      setVisible(false);
    };

    const handleButtonRight = () => {
      onPressButtonRight();
      setVisible(false);
    };

    return (
      <Modal
        visible={visible}
        transparent
      >
        <View style={styles.container}>
          <View style={styles.boxPopup}>
            {label && <Text style={styles.posting}>{label}</Text>}
            {description && <Text style={styles.youPost}>{description}</Text>}

            {content && content}
            <View style={styles.boxButton}>
              <Button
                buttonStyle={[styles.btnPopup, { borderColor: COLORS.GRAY_4 }]}
                titleStyle={{ color: COLORS.GRAY_7 }}
                title={titleButtonLeft}
                outline
                onPress={handleButtonLeft}
              />
              <Button
                buttonStyle={[
                  styles.btnPopup,
                  { backgroundColor: COLORS.BLUE_1 },
                ]}
                title={titleButtonRight}
                onPress={handleButtonRight}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
);

PopupConfirmPost.defaultProps = {
  onPressButtonLeft: () => {},
  onPressButtonRight: () => {},
  label: '',
  description: '',
  titleButtonLeft: '',
  titleButtonRight: '',
};

PopupConfirmPost.propTypes = {
  onPressButtonRight: PropTypes.func,
  onPressButtonLeft: PropTypes.func,
  label: PropTypes.string,
  description: PropTypes.string,
  titleButtonLeft: PropTypes.string,
  titleButtonRight: PropTypes.string,
  content: PropTypes.node.isRequired,
};

PopupConfirmPost.displayName = 'PopupConfirmPost';

export default PopupConfirmPost;
