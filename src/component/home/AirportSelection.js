import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {getFontSize, moderateScale} from '../../utils/responsive';
import {airportsList} from '../../utils/dataObj';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');
const AirportSelection = ({visibility, onClose, departureData, title}) => {
  // ------------ States -------------- //
  const [searchText, setSearchText] = useState('');

  // ------------- Functions -------------
  const _applyButton = async item => {
    const obj = {
      IATA_code: item.IATA_code,
      ICAO_code: item.ICAO_code,
      airport_name: item.airport_name,
      city_name: item.city_name,
    };
    departureData(obj);
    onClose(false);
  };

  // --------- Filter ----------

  const data = airportsList.filter(item => {
    if (searchText) {
      return item.city_name.includes(searchText);
    } else {
      return true;
    }
  });

  return (
    <View style={styles.shadow}>
      <Modal
        animationType={'slide'}
        transparent={true}
        hasBackdrop={visibility}
        onBackdropPress={() => onClose(false)}
        backdropOpacity={visibility ? 0.7 : 0}
        backdropColor="black"
        visible={visibility}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0.7,
              borderRadius: moderateScale(10),
              marginLeft: moderateScale(10),
              marginRight: moderateScale(10),
              marginBottom: moderateScale(10),
              padding: moderateScale(10),
              borderColor: '#eb8249',
            }}>
            <TextInput
              placeholder="Enter Aiport name"
              onChangeText={text => setSearchText(text)}
              style={{flex: 1, fontFamily: 'Axiforma-Medium'}}
            />
            <Icon
              name="search-outline"
              color={'#eb8249'}
              size={getFontSize(18)}
            />
          </View>

          <View style={{marginLeft: moderateScale(20)}}>
            <ScrollView>
              {data.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => _applyButton(item)}
                    style={{
                      marginTop: moderateScale(10),
                      paddingRight: moderateScale(10),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('../../assets/logos/airportIcon.png')}
                        style={{
                          width: moderateScale(20),
                          alignSelf: 'center',
                          height: moderateScale(20),
                        }}
                      />
                      <View style={{marginLeft: moderateScale(10)}}>
                        <Text
                          style={{
                            fontFamily: 'Axiforma-Medium',
                            color: '#2a7cf8',
                            fontSize: getFontSize(13),
                          }}>
                          {item.city_name}
                        </Text>
                        <Text
                          style={{
                            fontSize: getFontSize(10),
                            marginTop: moderateScale(4),
                            fontFamily: 'Axiforma-Book',
                            color: '#9ca7b2',
                          }}>
                          {item.airport_name}
                        </Text>
                      </View>
                    </View>

                    <Text
                      style={{
                        fontFamily: 'Axiforma-Black',
                        color: '#2a7cf8',
                        alignSelf: 'center',
                        fontSize: getFontSize(10),
                        marginBottom: moderateScale(10),
                        lineHeight: moderateScale(20),
                      }}>
                      {item.ICAO_code}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    bottom: -20,
    width: width,
    height: height - moderateScale(50),
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
  },
  filterButtonContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: moderateScale(0),
    borderTopWidth: 0.3,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    padding: moderateScale(15),
    right: 0,
    left: 0,
  },
  header: {
    borderBottomWidth: 0.4,
    marginTop: moderateScale(20),
    borderBottomColor: 'grey',
    paddingBottom: moderateScale(15),
    paddingTop: moderateScale(0),
    marginBottom: moderateScale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    marginLeft: moderateScale(20),
    fontSize: getFontSize(14),
    fontFamily: 'Axiforma-Black',
    color: 'black',
    alignSelf: 'center',
  },
  filterButtonText: {
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default AirportSelection;
