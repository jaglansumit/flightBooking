import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale, getFontSize} from '../../utils/responsive';
import Moment from 'moment';
import {useSelector} from 'react-redux';

export default ListingHeader = ({navigation}) => {
  const {days} = useSelector(state => state.flightReducer);
  const [selectedDay, setSelectedDay] = useState(days[2].date);

  return (
    <View
      style={{
        backgroundColor: '#2a7cf8',
        paddingTop: moderateScale(50),
        paddingBottom: moderateScale(20),
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10),
        borderBottomRightRadius: moderateScale(10),
        borderBottomLeftRadius: moderateScale(10),
      }}>
      <SafeAreaView
        style={{
          justifyContent: 'space-between',
          marginBottom: moderateScale(20),
          flexDirection: 'row',
        }}>
        <Icon
          name="chevron-back"
          onPress={() => navigation.goBack(null)}
          size={getFontSize(22)}
          color="#fff"
        />
        <Icon name="color-filter-outline" size={getFontSize(22)} color="#fff" />
      </SafeAreaView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {days.map(item => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedDay(item.date)}
              style={
                selectedDay === item.date
                  ? styles.selectedDayBox
                  : styles.dayBox
              }>
              <Text
                style={{
                  fontSize: getFontSize(11),
                  textAlign: 'center',
                  fontFamily: 'Rubik-Medium',
                  color: selectedDay === item.date ? '#2a7cf8' : '#fff',
                }}>
                {item.week.charAt(0)}
              </Text>
              <Text
                style={{
                  fontSize: getFontSize(17),
                  textAlign: 'center',
                  color: selectedDay === item.date ? '#2a7cf8' : '#fff',
                  fontFamily: 'Rubik-Bold',
                  marginTop: moderateScale(5),
                  marginBottom: moderateScale(5),
                }}>
                {item.day}
              </Text>
              {/* <Text
                    style={{
                      fontSize: getFontSize(11),
                      textAlign: 'center',
                      fontFamily: 'Rubik-Medium',
                      color: selectedDay === item.date ? '#fff' : 'grey',
                    }}>
                    {item.month}
                  </Text> */}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dayBox: {
    backgroundColor: '#599bf7',
    borderColor: 'grey',
    borderWidth: 0.4,
    padding: moderateScale(12),
    margin: moderateScale(10),
    borderRadius: moderateScale(12),
  },
  selectedDayBox: {
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderWidth: 0.4,
    padding: moderateScale(12),
    margin: moderateScale(10),
    borderRadius: moderateScale(12),
  },
});
