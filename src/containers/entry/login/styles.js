import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
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
    color: Colors.text,
  },
  buttonsView: {
    marginBottom: 20,
  },
  errorView: {
    opacity: 0.9,
    backgroundColor: Colors.error,
    height: 50,
  },
  errorText: {
    color: Colors.text,
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
  },
});
