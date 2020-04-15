import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00997A',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  formView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputView: {
    marginBottom: 20,
  },
  changePassword: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  changePasswordText: {
    textAlign: 'right',
    fontSize: 18,
    color: 'white',
  },
});
