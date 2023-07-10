import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Button, ItemRealEstateCarousel } from '../../../../components';
import { COLORS, SCREENS } from '../../../../constants';
import REAL_ESTATE from '../../../../constants/realEstate';
import { selectHome } from '../../../../features';
import styles from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { URL_MAP } from '../../../../utils/maps';

const ProjectCategory = () => {
  const { t } = useTranslation();
  const { navigate }: NavigationProp<any, any> = useNavigation();
  const [isBuy, setIsBuy] = useState(true);
  const { listProject } = useSelector(selectHome);

  const handleSelectOptions = value => {
    setIsBuy(value);
  };

  const listProjectRealEstate = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = listProject?.data;
    } else {
      results = listProject?.data?.slice(0, 2);
    }
    return results;
  }, [isBuy, listProject.data]);

  const onOpenMap = () => {
    navigate(SCREENS.MAPS, {
      customerUrl: `${URL_MAP}defaultFilter=false`,
    });
  };

  if (listProject.loading) {
    return (
      <View>
        <ActivityIndicator
          size="small"
          color={COLORS.BLUE_1}
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
          outline={!isBuy}
        />
        <Button
          buttonStyle={styles.btnSelectMonopoly}
          titleStyle={styles.txtSelect}
          onPress={() => handleSelectOptions(false)}
          title={t('button.monopoly')}
          outline={isBuy}
        />
      </View>
      <ScrollView
        style={styles.carousel}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {listProjectRealEstate.map(item => (
          <ItemRealEstateCarousel
            key={`ProjectCategory${item?.id}`}
            item={item}
            type={REAL_ESTATE.PROJECT}
            onOpenMap={() => onOpenMap()}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProjectCategory;
