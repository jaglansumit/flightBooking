import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';
import {getFontSize, basicScale, moderateScale} from '../../utils/responsive';
const {width, height} = Dimensions.get('screen');

export default AppLogo = ({width, height}) => {
  return (
    <Lottie
      resizeMode="cover"
      style={{
        alignSelf: 'center',
        width: width ? width : moderateScale(400),
        height: height ? height : moderateScale(250),
      }}
      source={require('../../assets/json/leherJson.json')}
      onAnimationLoop={true}
      loop={true}
      autoPlay={true}
    />
  );
};
