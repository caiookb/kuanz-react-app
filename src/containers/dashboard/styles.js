import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.primary,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  footer: {
    marginTop: 20,
    justifyContent: 'flex-end',
  },
});
