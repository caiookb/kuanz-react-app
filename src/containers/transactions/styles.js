import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  cards: {
    marginTop: 15,
    width: '97%',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  day: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingVertical: 5,
  },
});
