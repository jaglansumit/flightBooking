import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getFontSize, moderateScale} from '../../utils/responsive';
import {FlightTypes, AirportSelection, DatePicker} from '../../component/home';
import GradientButton from '../../component/buttons/GradientButton';
import Moment from 'moment';
import {useDispatch} from 'react-redux';
import Header from '../../component/common/Header';
import {getNextDate} from '../../actions/FlightAction';

export default Home = ({navigation}) => {
  const dispatch = useDispatch();
  const GetNextDays = () => dispatch(getNextDate());

  // ----------------- Departure States ----------------- //
  const [showDepartureCalender, setDepartureCalender] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [showArrivalCalender, setArrivalCalender] = useState(false);
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [showDeparture, setShowDeparture] = useState(false);
  const [selectedDeparture, setSelectedDeparture] = useState({
    IATA_code: 'DEL',
    ICAO_code: 'VIDP',
    airport_name: 'Indira Gandhi International Airport',
    city_name: 'New Delhi',
  });

  // ----------------- Arrival States ----------------- //
  const [showArrival, setShowArrival] = useState(false);
  const [selectedArrival, setSelectedArrival] = useState({
    IATA_code: 'BOM',
    ICAO_code: 'VABB',
    airport_name: 'Chhatrapati Shivaji International Airport',
    city_name: 'Mumbai',
  });

  useEffect(() => {
    GetNextDays();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      {/* --------------- Header ------------ */}
      <Header />
      {/* ------ Select flight types ----- */}
      <FlightTypes />

      {/* ------------- Main Body ------------ */}

      <View
        style={{
          borderWidth: 1,
          backgroundColor: '#fcfcff',
          borderColor: '#e2e2ed',
          marginTop: moderateScale(25),
          borderRadius: moderateScale(13),
          marginRight: moderateScale(20),
          marginLeft: moderateScale(20),
        }}>
        {/* // Departure  */}
        <TouchableOpacity
          onPress={() => setShowDeparture(true)}
          style={{
            borderBottomWidth: 1,
            borderColor: '#e2e2ed',
            padding: moderateScale(20),
          }}>
          <Text
            style={{
              fontFamily: 'Axiforma-Book',
              color: 'black',
              fontSize: getFontSize(10),
            }}>
            FROM
          </Text>
          <Text
            style={{
              marginTop: moderateScale(9),
              fontFamily: 'Axiforma-Black',
              color: 'black',
              fontSize: getFontSize(16),
            }}>
            {selectedDeparture.city_name} -{' '}
            <Text style={{color: '#9ca7b2'}}>
              {selectedDeparture.ICAO_code}
            </Text>
          </Text>
        </TouchableOpacity>

        {/* // Arrival  */}
        <TouchableOpacity
          onPress={() => setShowArrival(true)}
          style={{
            borderBottomWidth: 1,
            borderColor: '#e2e2ed',
            padding: moderateScale(20),
          }}>
          <Text
            style={{
              fontFamily: 'Axiforma-Book',
              color: 'black',
              fontSize: getFontSize(10),
            }}>
            TO
          </Text>
          <Text
            style={{
              marginTop: moderateScale(9),
              fontFamily: 'Axiforma-Black',
              color: 'black',
              fontSize: getFontSize(16),
            }}>
            {selectedArrival.city_name} -{' '}
            <Text style={{color: '#9ca7b2'}}>{selectedArrival.ICAO_code}</Text>
          </Text>
        </TouchableOpacity>

        {/* // Date  */}
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#e2e2ed',
            padding: moderateScale(20),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => setDepartureCalender(true)}>
            <Text
              style={{
                fontFamily: 'Axiforma-Book',
                color: 'black',
                fontSize: getFontSize(10),
              }}>
              Departure Date
            </Text>
            <Text
              style={{
                marginTop: moderateScale(9),
                fontFamily: 'Axiforma-Black',
                color: 'black',
                fontSize: getFontSize(12),
              }}>
              {Moment(departureDate).format('LL')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setArrivalCalender(true)}>
            <Text
              style={{
                fontFamily: 'Axiforma-Book',
                color: 'black',
                fontSize: getFontSize(10),
              }}>
              Return Date
            </Text>
            <Text
              style={{
                marginTop: moderateScale(9),
                fontFamily: 'Axiforma-Black',
                color: 'black',
                fontSize: getFontSize(12),
              }}>
              {Moment(arrivalDate).format('LL')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* // Passengers  */}
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#e2e2ed',
            padding: moderateScale(20),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Axiforma-Book',
                color: 'black',
                fontSize: getFontSize(10),
              }}>
              Passengers
            </Text>
            <Text
              style={{
                marginTop: moderateScale(9),
                fontFamily: 'Rubik-SemiBold',
                color: 'black',
                fontSize: getFontSize(14),
              }}>
              01 Adult
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Axiforma-Book',
                color: 'black',
                fontSize: getFontSize(10),
              }}>
              Cabin class
            </Text>
            <Text
              style={{
                marginTop: moderateScale(9),
                fontFamily: 'Rubik-SemiBold',
                color: 'black',
                fontSize: getFontSize(14),
              }}>
              Business
            </Text>
          </View>
        </View>
      </View>

      {/* // ------------- Departure ----------- */}
      <AirportSelection
        title="Select Departure"
        visibility={showDeparture}
        departureData={item => setSelectedDeparture(item)}
        onClose={() => setShowDeparture(false)}
      />

      {/* // ------------- Departure ----------- */}
      <AirportSelection
        title="Select Arrival"
        visibility={showArrival}
        departureData={item => setSelectedArrival(item)}
        onClose={() => setShowArrival(false)}
      />

      {/* // ---------- Departure Date ------------  */}
      <DatePicker
        visibility={showDepartureCalender}
        onClose={() => setDepartureCalender(false)}
        setDate={date => setDepartureDate(date)}
      />

      {/* // ---------- Arrival Date ------------  */}
      <DatePicker
        visibility={showArrivalCalender}
        onClose={() => setArrivalCalender(false)}
        setDate={date => setArrivalDate(date)}
      />

      {/* Button  */}

      <GradientButton
        title={'Find flights'}
        onPress={() => navigation.navigate('FlightsList')}
      />
      {/* FlightsList */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.11,
    shadowRadius: 1,
    elevation: 4,
  },
});
