import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {moderateScale} from '../../utils/responsive';
import Icon from 'react-native-vector-icons/Ionicons';

export default BackOption = ({navigation}) => {
  return (
    <View style={{margin: moderateScale(15)}}>
      <Icon
        onPress={() => navigation.goBack(null)}
        name="arrow-back-outline"
        size={moderateScale(30)}
      />
    </View>
  );
};
