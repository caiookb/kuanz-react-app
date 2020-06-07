import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  view: {
    width: '98%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  day: {
    // backgroundColor: 'red',
    paddingVertical: 3,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
  },
  textAndDate: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '100',
  },
  dateText: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 16,
    textAlign: 'right',
  },
  valueView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
  },
  value: {
    fontSize: 18,
    textAlign: 'right',
  },
  paidAndStatus: {
    flexDirection: 'row',
  },
});
