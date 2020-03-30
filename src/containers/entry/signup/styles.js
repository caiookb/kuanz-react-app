import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/colors';
export default StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    width: '100%',
    height: 80,
    backgroundColor: '#054367',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  content: {
    width: '95%',
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#045582',
    borderRadius: 12,
  },
  inputView: {
    width: '75%',
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

  fixedBottom: {
    width: '100%',
  },
});
