import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 80,
    width: '100%',
  },
  inputView: {
    width: '100%',
    marginBottom: 15,
    alignSelf: 'center',
    alignContent: 'center',
  },
  doubleView: {
    marginBottom: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
});
