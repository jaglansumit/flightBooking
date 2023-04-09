import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {moderateScale, getFontSize} from '../../utils/responsive';
import Icon from 'react-native-vector-icons/Ionicons';

export default CustomInput = ({
  icon,
  placeholder,
  password,
  number,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRightWidth: 0,
          alignSelf: 'center',
          paddingRight: moderateScale(10),
          flexDirection: 'row',
        }}>
        <Icon name={icon} color="grey" size={moderateScale(23)} />
      </View>

      <View
        style={{
          marginLeft: moderateScale(0),
          borderBottomWidth: 0.4,
          flex: 1,
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          keyboardType={number ? 'numeric' : 'default'}
          secureTextEntry={password ? true : false}
          style={{
            paddingLeft: moderateScale(10),
            paddingBottom: moderateScale(6),
            marginTop: moderateScale(4),
            fontFamily: 'Rubik-Regular',
            fontSize: getFontSize(13),
            width: moderateScale(200),
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderColor: '#7f74ff',
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
    flexDirection: 'row',
    marginTop: moderateScale(5),
  },
});
