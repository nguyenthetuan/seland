import { Tooltip } from '@rneui/themed';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import {
  IconCopy,
  IconDelete,
  IconDownload,
  IconEdit,
  IconHistory,
  IconLink,
  IconPhone,
  IconRepost,
  IconUpload,
  Reload,
} from '../../../../../assets';
import { IconSvg } from '../../../../../assets/icons/IconSvg';
import { Text } from '../../../../../components';
import styles from './styles';

interface ActionWarehouseLandProps {
  onDelete?: Function;
}
const ActionWarehouseLand: FC<ActionWarehouseLandProps> = ({ onDelete }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const listAction = [
    {
      icon: <IconRepost />,
      label: t('common.repost'),
      onPress: () => {},
    },
    {
      icon: <IconUpload />,
      label: t('common.pushNews'),
      onPress: () => {},
    },
    {
      icon: <IconSvg name="edit" />,
      label: t('common.editNews'),
      onPress: () => {},
    },
    {
      icon: <IconCopy />,
      label: t('common.copyNews'),
      onPress: () => {},
    },
    {
      icon: <IconPhone />,
      label: t('common.requestContact'),
      onPress: () => {},
    },
    {
      icon: <IconHistory />,
      label: t('common.history'),
      onPress: () => {},
    },
    {
      icon: <IconLink />,
      label: t('common.seeNews'),
      onPress: () => {},
    },
    {
      icon: <IconDownload />,
      label: t('common.lowNews'),
      onPress: () => {},
    },
    {
      icon: <IconDelete />,
      label: t('common.deleteNews'),
      onPress: () => {
        console.log('dmddmdmdmddm');
        onDelete && onDelete();
      },
    },
  ];

  return (
    <Tooltip
      visible={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      withPointer={false}
      popover={
        <View style={styles.listAction}>
          {listAction?.map((action, index) => {
            return (
              <TouchableOpacity
                style={
                  index === 8 ? styles.itemActionActive : styles.itemAction
                }
                key={action.label}
                onPress={() => {
                  setOpen(false);
                  action.onPress();
                }}
              >
                <View style={styles.itemIcon}>{action.icon}</View>
                <Text style={styles.itemActionText}>{action.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      }
      containerStyle={styles.tooltipContainer}
    >
      <View style={styles.actionButton}>
        <Text style={styles.action}>...</Text>
        <Text style={styles.actionText}>{t('button.actions')}</Text>
      </View>
    </Tooltip>
  );
};

export default ActionWarehouseLand;
