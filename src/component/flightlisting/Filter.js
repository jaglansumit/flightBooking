import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {getFontSize, moderateScale} from '../../utils/responsive';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientButton from '../buttons/GradientButton';

const airlines = [
  {id: 'CD', name: 'Air India'},
  {id: 'AB', name: 'JetSpice'},
];

const sortTypes = [
  {id: '1', name: 'Price Low to High'},
  {id: '2', name: 'Price High to Low'},
];

const {width} = Dimensions.get('screen');

const Filter = ({visibility, onClose, filterData}) => {
  const [selectedSort, setSelectedSort] = useState('1');
  const [selectdAirline, setSelectedAirlines] = useState(null);

  const _applyButton = async () => {
    const obj = {
      airline: selectdAirline,
      sort: selectedSort,
    };
    filterData(obj);
    onClose(false);
  };

  return (
    <View style={styles.shadow}>
      <Modal
        animationType={'slide'}
        transparent={true}
        hasBackdrop={visibility}
        onBackdropPress={() => onClose(false)}
        backdropOpacity={visibility ? 0.7 : 0}
        backdropColor="black"
        visible={visibility}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Filter</Text>
          </View>

          <View style={{marginLeft: moderateScale(20)}}>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontFamily: 'Axiforma-Medium',
                marginBottom: moderateScale(15),
              }}>
              Select Airline
            </Text>
            {airlines.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedAirlines(item.id)}
                  style={{marginTop: moderateScale(0), flexDirection: 'row'}}>
                  <Icon
                    name={
                      selectdAirline === item.id
                        ? 'checkbox-outline'
                        : 'square-outline'
                    }
                    color={selectdAirline === item.id ? '#1f72e6' : '#d3cdcd'}
                    size={getFontSize(20)}
                    style={{alignSelf: 'auto', marginRight: moderateScale(20)}}
                  />

                  <Text
                    style={{
                      fontFamily: 'Axiforma-Medium',
                      color: '#7a7272',
                      alignSelf: 'center',
                      fontSize: getFontSize(12),
                      marginBottom: moderateScale(10),
                      lineHeight: moderateScale(20),
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={{marginLeft: moderateScale(20)}}>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontFamily: 'Axiforma-Medium',
                marginBottom: moderateScale(15),
                marginTop: moderateScale(20),
              }}>
              Sort By
            </Text>
            {sortTypes.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedSort(item.id)}
                  style={{marginTop: moderateScale(0), flexDirection: 'row'}}>
                  <Icon
                    name={
                      selectedSort === item.id
                        ? 'checkbox-outline'
                        : 'square-outline'
                    }
                    color={selectedSort === item.id ? '#1f72e6' : '#d3cdcd'}
                    size={getFontSize(20)}
                    style={{alignSelf: 'auto', marginRight: moderateScale(20)}}
                  />

                  <Text
                    style={{
                      fontFamily: 'Axiforma-Medium',
                      color: '#7a7272',
                      alignSelf: 'center',
                      fontSize: getFontSize(12),
                      marginBottom: moderateScale(10),
                      lineHeight: moderateScale(20),
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={{paddingBottom: moderateScale(40)}}>
            <GradientButton title={'APPLY'} onPress={() => _applyButton()} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    bottom: -20,
    width: width,
    // height: height,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
  },
  filterButtonContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: moderateScale(0),
    borderTopWidth: 0.3,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    padding: moderateScale(15),
    right: 0,
    left: 0,
  },
  header: {
    borderBottomWidth: 0.4,
    marginTop: moderateScale(20),
    borderBottomColor: 'grey',
    paddingBottom: moderateScale(15),
    paddingTop: moderateScale(0),
    marginBottom: moderateScale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    marginLeft: moderateScale(20),
    fontSize: getFontSize(16),
    fontFamily: 'Axiforma-Black',
    color: 'black',
    alignSelf: 'center',
  },
  filterButtonText: {
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Filter;
