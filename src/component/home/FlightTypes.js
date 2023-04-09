import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getFontSize, moderateScale} from '../../utils/responsive';

const types = [
  {key: 1, name: 'One way'},
  {key: 2, name: 'Round Trip'},
  {key: 3, name: 'Multicity'},
];

export default FlightTypes = () => {
  const [selectedType, setSelectedType] = useState(2);

  return (
    <View
      style={{
        marginTop: moderateScale(40),
        marginLeft: moderateScale(20),
        marginRight: moderateScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {types.map(item => {
        if (selectedType === item.key) {
          return (
            <LinearGradient
              onStartShouldSetResponder={() => setSelectedType(item.key)}
              style={styles.selectedButton}
              colors={['#1f72e6', '#2a7cf8', '#29b5fd']}>
              <Text style={{fontFamily: 'Axiforma-Medium', color: '#fff'}}>
                {item.name}
              </Text>
            </LinearGradient>
          );
        } else {
          return (
            <TouchableOpacity
              onPress={() => setSelectedType(item.key)}
              style={styles.notSelected}>
              <Text style={{fontFamily: 'Axiforma-Medium', color: 'black'}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  selectedButton: {
    alignSelf: 'center',
    paddingLeft: moderateScale(11),
    paddingRight: moderateScale(11),
    paddingTop: moderateScale(8),
    paddingBottom: moderateScale(8),
    borderRadius: moderateScale(11),
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.11,
    shadowRadius: 1.5,
    elevation: 10,
  },
  notSelected: {
    alignSelf: 'center',
    paddingLeft: moderateScale(11),
    paddingRight: moderateScale(11),
    paddingTop: moderateScale(8),
    paddingBottom: moderateScale(8),
    borderRadius: moderateScale(11),
  },
});
