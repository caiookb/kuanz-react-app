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
    width: '98%',
  },
  inputView: {
    marginBottom: 15,
  },
  doubleView: {
    marginBottom: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    width: '90%',
  },
});
