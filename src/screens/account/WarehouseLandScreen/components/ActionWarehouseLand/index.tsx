import { Tooltip } from '@rneui/themed';
import React from 'react';
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
import { Text } from '../../../../../components';
import styles from './styles';

const ActionWarehouseLand = () => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const listAction = [
    {
      icon: <IconRepost />,
      label: t('common.repost'),
    },
    {
      icon: <IconUpload />,
      label: t('common.pushNews'),
    },
    {
      icon: <IconEdit />,
      label: t('common.editNews'),
    },
    {
      icon: <IconCopy />,
      label: t('common.copyNews'),
    },
    {
      icon: <IconPhone />,
      label: t('common.requestContact'),
    },
    {
      icon: <IconHistory />,
      label: t('common.history'),
    },
    {
      icon: <IconLink />,
      label: t('common.seeNews'),
    },
    {
      icon: <IconDownload />,
      label: t('common.lowNews'),
    },
    {
      icon: <IconDelete />,
      label: t('common.deleteNews'),
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
