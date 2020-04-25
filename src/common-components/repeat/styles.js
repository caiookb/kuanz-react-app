import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  repeat: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    marginBottom: 10,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  times: {
    fontSize: 20,
    color: 'white',
  },
  inputs: {
    flex: 0.48,
    borderBottomWidth: 1,
    borderBottomColor: Colors.fifth,
    paddingBottom: 10,
  },
  periodInput: {
    marginLeft: 10,
  },
  periodText: {
    fontSize: 20,
    color: 'white',
  },
  bottomView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.primary,
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
    marginBottom: 20,
  },
  choice: {
    marginTop: 10,
    height: 60,
    width: '90%',
    borderBottomColor: Colors.fifth,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  choiceOption: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  cancel: {
    backgroundColor: Colors.spending,
    borderRadius: 20,
    marginBottom: 20,
  },
});
