import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {moderateScale, getFontSize} from '../../utils/responsive';
import Icon from 'react-native-vector-icons/Ionicons';

export default Seat = ({item, selected, onPress}) => {
  if (item.status === 1) {
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={item.id === selected ? styles.available : styles.selectedSeat}
      />
    );
  } else {
    return (
      <TouchableOpacity style={styles.unavailable}>
        <Icon
          name="close"
          color={'#fff'}
          style={{alignSelf: 'center'}}
          size={getFontSize(30)}
        />
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  available: {
    backgroundColor: '#1f72e6',
    margin: moderateScale(5),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(10),
  },
  selectedSeat: {
    borderColor: '#1f72e6',
    borderWidth: 0.6,
    margin: moderateScale(5),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(10),
  },
  unavailable: {
    backgroundColor: '#ebebec',
    margin: moderateScale(5),
    borderWidth: 0.2,
    justifyContent: 'center',
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(10),
  },
});
