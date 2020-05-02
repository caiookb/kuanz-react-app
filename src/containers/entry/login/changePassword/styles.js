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
    color: Colors.text,
  },
  desc: {
    fontSize: 18,
    marginTop: 20,
    color: Colors.text,
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
    color: Colors.text,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.text,
    color: Colors.text,
    padding: 0,
    marginTop: 45,
    fontSize: 18,
  },
  inputTitle: {
    fontSize: 18,
    color: Colors.text,
  },

  cardContent: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
});
