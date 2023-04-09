import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {moderateScale, getFontSize} from '../../utils/responsive';

export default CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

//------------------- stylsheet -----------

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7f74ff',
    marginLeft: moderateScale(15),
    marginRight: moderateScale(15),
    justifyContent: 'center',
    height: moderateScale(50),
    marginTop: moderateScale(30),
    borderRadius: moderateScale(10),
  },
  title: {
    textAlign: 'center',
    fontSize: getFontSize(15),
    color: '#fff',
    fontFamily: 'Rubik-Medium',
  },
});
