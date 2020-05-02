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
    color: Colors.text,
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
  tagImage: {
    width: 40,
    height: 40,
  },
  touchableTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  downArrow: {
    transform: [{rotate: '90deg'}],
    marginRight: 5,
    marginTop: 7,
  },
  touchableText: {
    fontSize: 20,
    color: Colors.text,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
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
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    maxHeight: 350,
    overflow: 'hidden',
  },
  modalList: {
    flexDirection: 'row',
    marginLeft: 15,
    width: '90%',
    alignItems: 'center',
    borderBottomColor: Colors.fifth,
    borderBottomWidth: 0.2,
    backgroundColor: Colors.primary,
  },
  modalTag: {
    marginVertical: 10,
  },
  modalText: {
    margin: 10,
    color: Colors.text,
    fontSize: 22,
    marginLeft: 20,
  },
  addNewView: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.third,
    paddingVertical: 15,
    height: 60,
  },
  inputView: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: Colors.primary,
  },
});
