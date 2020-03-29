import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#024A73',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoView: {
    height: '50%',
    backgroundColor: Colors.blue,
  },
  formView: {
    height: '35%',
    backgroundColor: '#024A73',
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  inputView: {
    marginTop: 35,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    color: 'white',
    padding: 0,
    marginTop: 15,
    fontSize: 18,
  },
  inputTitle: {
    fontSize: 18,
    color: 'white',
  },
  inputForgotPassword: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  buttonsView: {
    height: '15%',
    backgroundColor: 'blue',
  },
  loginButton: {
    height: '50%',
    backgroundColor: '#0F70B8',
  },
  signUpButton: {
    height: '50%',
    backgroundColor: '#2896E8',
  },
  buttonsText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
