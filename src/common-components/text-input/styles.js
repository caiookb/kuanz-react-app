import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
export default StyleSheet.create({
  input: {
    fontSize: 22,
    fontWeight: '200',
    color: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#005F94',
    borderRadius: 2,
    marginHorizontal: 20,
    paddingHorizontal: 0,
    paddingVertical: Platform.OS === 'ios' ? '12rem' : 5,
  },
  label: {
    marginHorizontal: 20,
  },
  labelText: {
    fontWeight: '200',
    fontSize: 18,
    color: Colors.text,
  },
});
