import React from 'react';
import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const baseColor = '#e2497d';

const basicScale = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (basicScale(size) - size) * factor;

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const getFontSize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

module.exports = {
  getFontSize: getFontSize,
  basicScale: basicScale,
  verticalScale: verticalScale,
  moderateScale: moderateScale,
  baseColor: baseColor,
};
