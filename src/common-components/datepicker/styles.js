import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
export default StyleSheet.create({
  datepicker: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  label: {
    fontWeight: '200',
    fontSize: 18,
    color: 'white',
  },
  content: {
    width: '100%',
    marginTop: 5,
    flexDirection: 'row',
  },
  image: {
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itens: {
    backgroundColor: 'white',
    paddingBottom: 20,
  },
});
