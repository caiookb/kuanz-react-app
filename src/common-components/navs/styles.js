import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
export default StyleSheet.create({
  nav: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  goBack: {
    marginLeft: 20,
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    color: Colors.text,
    paddingTop: 1,
    fontWeight: '200',
  },
});
