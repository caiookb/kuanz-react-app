import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  card: {
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: Colors.fifth,
    alignItems: 'center',
    paddingVertical: 12,
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
  },
  textAndDate: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '100',
  },
  dateText: {
    fontSize: 18,
  },
  valueView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
  },
  value: {
    fontSize: 18,
  },
});
