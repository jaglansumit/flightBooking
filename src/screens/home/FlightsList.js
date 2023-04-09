import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale, getFontSize} from '../../utils/responsive';
import {ListingHeader, Ticket, Filter} from '../../component/flightlisting';
import {getFlights, setFlight} from '../../actions/FlightAction';
import {useSelector, useDispatch} from 'react-redux';

export default FlightsList = ({navigation}) => {
  // ------- Redux ---------- //

  const dispatch = useDispatch();
  const {flights} = useSelector(state => state.flightReducer);
  const GetFlights = () => dispatch(getFlights());
  const SetFlight = data => dispatch(setFlight(data));

  // ---------- States --------- //
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [filterData, setFilterData] = useState({
    airline: null,
    sort: null,
  });

  const data = flights
    .filter(item => {
      if (filterData.airline) {
        return item.airlineCode === filterData.airline;
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      return a.fare - b.fare;
    });

  useEffect(() => {
    GetFlights();
  }, []);

  const _onSelectFlight = async item => {
    SetFlight(item);
    navigation.navigate('FlightDetails');
  };

  const _renderFlights = ({item}) => {
    return <Ticket item={item} onPress={() => _onSelectFlight(item)} />;
  };

  return (
    <View style={{backgroundColor: '#f1f5fd', flex: 1}}>
      {/* ------- Header with date selector -------- */}
      <ListingHeader
        onPressFilter={() => setFilterVisibility(true)}
        navigation={navigation}
      />

      {/* ------ Render Flights -------  */}
      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={_renderFlights}
      />
      <Filter
        filterData={data => setFilterData(data)}
        onClose={() => setFilterVisibility(false)}
        visibility={filterVisibility}
      />
    </View>
  );
};
