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
import CalendarPicker from 'react-native-calendar-picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');
const DatePicker = ({visibility, onClose, setDate}) => {
  // ------------ States -------------- //
  const [searchText, setSearchText] = useState('');

  // ------------- Functions -------------
  const _applyButton = async date => {
    setDate(date);
    onClose(false);
  };

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
            <Text style={styles.headerTitle}>{'Select Date'}</Text>
          </View>

          <View style={{marginLeft: moderateScale(20)}}>
            <ScrollView>
              <CalendarPicker onDateChange={_applyButton} />
            </ScrollView>
          </View>
          <View style={{height: moderateScale(90)}} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    bottom: -20,
    width: width,
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

export default DatePicker;
