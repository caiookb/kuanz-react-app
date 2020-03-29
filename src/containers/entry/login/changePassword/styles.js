import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/colors';
import {withRouter} from 'react-router-dom';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  modalMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  info: {
    height: 300,
    alignSelf: 'center',
    width: '80%',
  },
  title: {
    fontSize: 22,
    color: 'white',
  },
  desc: {
    fontSize: 18,
    marginTop: 20,
    color: 'white',
  },

  card: {
    backgroundColor: Colors.third,
    flex: 1,
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    width: '110%',
  },
  inputTitle: {
    fontSize: 18,
    color: 'white',
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    color: 'white',
    padding: 0,
    marginTop: 45,
    fontSize: 18,
  },
  inputTitle: {
    fontSize: 18,
    color: 'white',
  },

  cardContent: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
});
