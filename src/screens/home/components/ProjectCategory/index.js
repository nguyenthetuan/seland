import { Button } from '@rneui/base';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { COLOR_BLUE_1 } from '../../../../constants';
import REAL_ESTATE from '../../../../constants/realEstate';
import { selectHome } from '../../../../features';
import ItemHottestRealEstate from '../ItemHottestRealEstate';
import styles from './styles';

const ProjectCategory = () => {
  const { t } = useTranslation();
  const [isBuy, setIsBuy] = useState(true);
  const { listProject } = useSelector(selectHome);

  const handleSelectOptions = value => {
    setIsBuy(value);
  };

  const listHottestRealEstate = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = listProject?.data;
    } else {
      results = listProject?.data?.slice(0, 2);
    }
    return results;
  }, [isBuy, listProject.data]);

  if (listProject.loading) {
    return (
      <View>
        <ActivityIndicator
          size="small"
          color={COLOR_BLUE_1}
        />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.boxSelect}>
        <Button
          buttonStyle={styles.btnSelect}
          titleStyle={styles.txtSelect}
          onPress={() => handleSelectOptions(true)}
          title={t('button.all')}
          type={isBuy ? 'solid' : 'outline'}
        />
        <Button
          buttonStyle={styles.btnSelectMonopoly}
          titleStyle={styles.txtSelect}
          onPress={() => handleSelectOptions(false)}
          title={t('button.monopoly')}
          type={isBuy ? 'outline' : 'solid'}
        />
      </View>
      <ScrollView
        style={styles.carousel}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {listHottestRealEstate.map((item, index) => (
          <ItemHottestRealEstate
            key={`ProjectCategory${index}`}
            item={item}
            type={REAL_ESTATE.PROJECT}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProjectCategory;
