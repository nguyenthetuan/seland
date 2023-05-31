import PropTypes from 'prop-types';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, View } from 'react-native';

import { Button, Text } from '../../../../components';
import {
  COLOR_BLUE_1,
  COLOR_GRAY_4,
  COLOR_GRAY_7,
} from '../../../../constants';
import styles from './styles';

const PopupConfirmPost = forwardRef(
  (
    {
      onPressManagePost,
      onPressPostOther,
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

    const handlePostOther = () => {
      setVisible(false);
      onPressPostOther();
    };

    const handleManagePost = () => {
      setVisible(false);
      onPressManagePost();
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
                buttonStyle={[styles.btnPopup, { borderColor: COLOR_GRAY_4 }]}
                titleStyle={{ color: COLOR_GRAY_7 }}
                title={titleButtonLeft}
                outline
                onPress={handleManagePost}
              />
              <Button
                buttonStyle={[
                  styles.btnPopup,
                  { backgroundColor: COLOR_BLUE_1 },
                ]}
                title={titleButtonRight}
                onPress={handlePostOther}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
);

PopupConfirmPost.defaultProps = {
  onPressManagePost: () => {},
  onPressPostOther: () => {},
  label: '',
  description: '',
  titleButtonLeft: '',
  titleButtonRight: '',
};

PopupConfirmPost.propTypes = {
  onPressPostOther: PropTypes.func,
  onPressManagePost: PropTypes.func,
  label: PropTypes.string,
  description: PropTypes.string,
  titleButtonLeft: PropTypes.string,
  titleButtonRight: PropTypes.string,
  content: PropTypes.node.isRequired,
};

PopupConfirmPost.displayName = 'PopupConfirmPost';

export default PopupConfirmPost;
