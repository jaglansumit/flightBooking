import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getFontSize, moderateScale} from '../../utils/responsive';

export default GradientButton = ({title, onPress}) => {
  return (
    <LinearGradient
      style={styles.button}
      onStartShouldSetResponder={() => onPress()}
      colors={['#1f72e6', '#2a7cf8', '#29b5fd', '#29b5fd']}>
      <Text
        style={{
          fontFamily: 'Axiforma-Black',
          color: '#fff',
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    justifyContent: 'center',
    height: moderateScale(60),
    marginTop: moderateScale(55),
    borderRadius: moderateScale(35),
  },
});
