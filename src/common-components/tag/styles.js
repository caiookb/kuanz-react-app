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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 24,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    maxHeight: 500,
    overflow: 'hidden',
  },
  modalList: {
    flexDirection: 'row',
    marginLeft: 15,
    width: '90%',
    backgroundColor: Colors.primary,
  },
  modalTag: {
    marginTop: 15,
    marginRight: 15,
  },
  modalText: {
    margin: 10,
    color: 'white',
    fontSize: 22,
  },
  addNewView: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.third,
    paddingVertical: 10,
  },
  inputView: {
    marginTop: 10,
  },
});
