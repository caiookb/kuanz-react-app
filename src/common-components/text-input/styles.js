import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
export default StyleSheet.create({
  input: {
    fontSize: 16,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderRadius: 2,
    marginHorizontal: 20,
    paddingHorizontal: 0,
    paddingVertical: Platform.OS === 'ios' ? '12rem' : 5,
  },
  label: {
    marginHorizontal: 20,
  },
  labelText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
  },
});
