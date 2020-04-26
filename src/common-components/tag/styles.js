import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  tag: {
    marginHorizontal: 20,
    marginBottom: 15,
  },

  labelText: {
    fontWeight: '200',
    fontSize: 18,
    color: 'white',
  },
  touchable: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#005F94',
    paddingVertical: Platform.OS === 'ios' ? '12rem' : 5,
  },
  touchableIcon: {
    marginRight: 10,
  },
  touchableTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  downArrow: {
    transform: [{rotate: '90deg'}],
    marginRight: 5,
    marginTop: 7,
  },
  touchableText: {
    fontSize: 20,
    color: 'white',
  },
  centeredView: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalView: {
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 24,
    flexDirection: 'column',
  },
  modalList: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.fifth,
  },
  modalTag: {
    margin: 10,
  },
  modalText: {
    margin: 10,
    color: 'white',
    fontSize: 22,
  },
});
