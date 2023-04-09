import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale, getFontSize} from '../../utils/responsive';
import GradientButton from '../../component/buttons/GradientButton';
import BackOption from '../../component/common/BackOption';
import {bookFlight} from '../../actions/FlightAction';
import {Seat} from '../../component/flightlisting';

const seatA = [
  {id: 1, status: 1},
  {id: 2, status: 0},
  {id: 3, status: 1},
  {id: 4, status: 1},
  {id: 5, status: 0},
  {id: 6, status: 0},
  {id: 7, status: 1},
  {id: 8, status: 0},
];

const seatB = [
  {id: 9, status: 1},
  {id: 10, status: 0},
  {id: 11, status: 0},
  {id: 12, status: 0},
  {id: 13, status: 0},
  {id: 14, status: 0},
  {id: 15, status: 1},
  {id: 16, status: 1},
];

const seatC = [
  {id: 17, status: 1},
  {id: 18, status: 0},
  {id: 19, status: 0},
  {id: 20, status: 0},
  {id: 21, status: 0},
  {id: 22, status: 1},
  {id: 23, status: 1},
  {id: 24, status: 1},
];

const seatD = [
  {id: 25, status: 1},
  {id: 26, status: 0},
  {id: 27, status: 0},
  {id: 28, status: 0},
  {id: 29, status: 1},
  {id: 30, status: 1},
  {id: 31, status: 0},
  {id: 32, status: 0},
];

export default FlightDetails = ({navigation}) => {
  const [selectedSeat, setSelectedSeat] = useState(4);

  const _onBookFlight = async () => {
    const res = await bookFlight();
    if (res) {
      navigation.navigate('BoardingPass');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fafafa'}}>
      <BackOption navigation={navigation} />
      {/* Seat Types  */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: moderateScale(20),
          marginRight: moderateScale(20),
          marginTop: moderateScale(20),
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="square" color={'#1f72e6'} size={getFontSize(20)} />
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Axiforma-Medium',
              marginLeft: moderateScale(5),
            }}>
            Selected
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="square-outline"
            color={'#1f72e6'}
            size={getFontSize(20)}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Axiforma-Medium',
              marginLeft: moderateScale(5),
            }}>
            Available
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="square" color={'#ddd8ce'} size={getFontSize(20)} />
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Axiforma-Medium',
              marginLeft: moderateScale(5),
            }}>
            Unavailable
          </Text>
        </View>
      </View>

      {/* ------ Row 1 -----  */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: moderateScale(40),
          marginLeft: moderateScale(20),
          marginRight: moderateScale(20),
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                fontFamily: 'Axiforma-Black',
                fontSize: getFontSize(20),
                textAlign: 'center',
              }}>
              A
            </Text>
            {seatA.map(item => {
              return (
                <Seat
                  onPress={obj => setSelectedSeat(obj.id)}
                  selected={selectedSeat}
                  item={item}
                />
              );
            })}
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Axiforma-Black',
                fontSize: getFontSize(20),
                textAlign: 'center',
              }}>
              B
            </Text>
            {seatB.map(item => {
              return (
                <Seat
                  onPress={obj => setSelectedSeat(obj.id)}
                  selected={selectedSeat}
                  item={item}
                />
              );
            })}
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                fontFamily: 'Axiforma-Black',
                fontSize: getFontSize(20),
                textAlign: 'center',
              }}>
              C
            </Text>
            {seatC.map(item => {
              return (
                <Seat
                  onPress={obj => setSelectedSeat(obj.id)}
                  selected={selectedSeat}
                  item={item}
                />
              );
            })}
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Axiforma-Black',
                fontSize: getFontSize(20),
                textAlign: 'center',
              }}>
              D
            </Text>
            {seatD.map(item => {
              return (
                <Seat
                  onPress={obj => setSelectedSeat(obj.id)}
                  selected={selectedSeat}
                  item={item}
                />
              );
            })}
          </View>
        </View>
      </View>

      {/* -------- Book Button -------- */}

      <GradientButton title={'Book Now'} onPress={() => _onBookFlight()} />
    </SafeAreaView>
  );
};
