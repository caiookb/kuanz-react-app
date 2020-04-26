import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/colors';
export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorView: {
    width: '100%',
    height: 40,
    backgroundColor: '#8F0000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  errorMessage: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 5,
  },
  content: {
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    width: '90%',
    marginTop: 20,
  },
  fixedBottom: {
    marginBottom: 15,
  },
});
