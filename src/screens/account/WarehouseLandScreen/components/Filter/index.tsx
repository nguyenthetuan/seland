import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import {
  FlatList,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from 'react-native';
import { Icon } from '@rneui/base';
import { Control, useController } from 'react-hook-form';
import { Button, Select, Text } from '../../../../../components';
import { dispatchThunk } from '../../../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadListAllWareHouses,
  loadListAgency,
  selectWareHouses,
  loadRealEstateWarehouses,
  createWareHouse,
} from '../../../../../features';
import { formatSelect } from '../../../../../utils/format';
import ModalFilter from '../../../UserPostsScreen/components/ModalFilter';
import { COLORS, sortBy, statuses, YOUR_WANT } from '../../../../../constants';
import Toast from 'react-native-simple-toast';

interface Iprops {
  control: Control<any>;
  handleSubmit?: any;
  onSelect: (value: any) => void;
  onFilter?: (value?: any) => void;
  setValue?: Function;
  getValues?: any;
}

const FilterWarehouse: FC<Iprops> = props => {
  const { control, handleSubmit, onSelect, onFilter, setValue, getValues } =
    props;
  const {
    field: { onChange, value },
  } = useController({ control, name: 'status' });
  const [showAddWare, setShowAddWare] = useState<boolean>(false);
  const [nameWare, setNameWare] = useState<string>('');
  const refSelect = useRef();

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filterRef: any = useRef();

  const { listAllWareHouses, listAgency } = useSelector(selectWareHouses);

  const listAllWareHousesConvert = (listAllWareHouses &&
    Array.isArray(listAllWareHouses) &&
    formatSelect(listAllWareHouses)) || [
    {
      label: `${t('button.all')}`,
      value: null,
    },
  ];
  const listAgencyConvert = (listAgency &&
    Array.isArray(listAgency) &&
    formatSelect(listAgency)) || [
    {
      label: `${t('button.all')}`,
      value: null,
    },
  ];
  const onOpenFilter = () => {
    filterRef.current.onOpen();
  };
  const handleSelectStatus = (value: number | null) => {
    onChange(value);
    dispatchThunk(dispatch, loadRealEstateWarehouses(getValues()));
  };
  const submit = handleSubmit(onFilter);

  useEffect(() => {
    dispatchThunk(dispatch, loadListAllWareHouses());
    dispatchThunk(dispatch, loadListAgency());
  }, [dispatch]);

  const selectFilter = handleSubmit(onSelect);

  const onSelectWareHouses = (value: any) => {
    if (value?.value === undefined) {
      setShowAddWare(!showAddWare);
      return;
    }
    selectFilter();
  };

  const createWareSuccess = () => {
    Toast.show('Tạo kho BDS thành công.');
  };

  const handleAddWare = () => {
    const params = {
      warehouse_name: nameWare,
    };
    setShowAddWare(!showAddWare);
    dispatchThunk(dispatch, createWareHouse(params), createWareSuccess);
  };

  return (
    <>
      <View>
        <FlatList
          style={styles.listButton}
          data={statuses}
          horizontal
          renderItem={({ item }) => (
            <Button
              buttonStyle={[styles.marginHorizontal, styles.postButton]}
              onPress={() => handleSelectStatus(item?.value)}
              outline={item?.value !== value}
              title={t(`button.${item?.label}`)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.filter}>
          <TouchableOpacity
            style={styles.btnFilter}
            onPress={onOpenFilter}
          >
            <Icon name="filter-list" />
          </TouchableOpacity>

          <View style={styles.boxRealEstate}>
            <Select
              buttonStyle={styles.buttonSelect}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={listAllWareHousesConvert}
              name="real_estate_warehouse_id"
              onSelect={onSelectWareHouses}
              title={`${t('upgradeAccount.realEstatesSelect')}` || ''}
            />
          </View>
          <View style={styles.areaRange}>
            <Select
              buttonStyle={[styles.buttonSelect]}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={listAgencyConvert}
              name="area_range_id"
              onSelect={selectFilter}
              title={`${t('upgradeAccount.agencySelect')}` || ''}
            />
          </View>
        </View>
        <Select
          buttonStyle={[styles.buttonSelect, styles.buttonSort]}
          buttonTextStyle={styles.textButtonSelect}
          rowStyle={styles.buttonSelect}
          rowTextStyle={styles.rowTextStyle}
          control={control}
          data={sortBy.map(item => ({
            ...item,
            label: t(`select.${item?.label}`),
          }))}
          name="sort_by"
          onSelect={handleSubmit(onSelect)}
        />
      </View>

      <Modal
        visible={showAddWare}
        transparent
      >
        <View style={styles.container}>
          <View style={styles.boxPopup}>
            <Text style={styles.title}>Thêm kho BDS</Text>
            <TextInput
              placeholder="Nhập tên kho BDS"
              onChangeText={text => setNameWare(text)}
              value={nameWare}
              style={styles.input}
            />
            <View style={styles.boxButton}>
              <Button
                buttonStyle={[styles.btnPopup, { borderColor: COLORS.GRAY_4 }]}
                titleStyle={{ color: COLORS.GRAY_7 }}
                title={t('button.cancel')}
                outline
                onPress={() => setShowAddWare(false)}
              />
              <Button
                buttonStyle={[
                  styles.btnPopup,
                  { backgroundColor: COLORS.BLUE_1 },
                ]}
                title={t('button.add')}
                onPress={handleAddWare}
              />
            </View>
          </View>
        </View>
      </Modal>
      <ModalFilter
        ref={filterRef}
        control={control}
        onPressConfirm={submit}
        setValueHookForm={setValue}
      />
    </>
  );
};

export default FilterWarehouse;
