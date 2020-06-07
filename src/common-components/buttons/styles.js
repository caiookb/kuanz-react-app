import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
export default StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedButton: {
    width: '90%',
    height: '80%',
    borderRadius: 10,
  },
  signUpButton: {
    height: '50%',
    backgroundColor: '#2896E8',
  },
  buttonsText: {
    fontWeight: '200',
    textAlign: 'center',
    fontSize: 20,
    color: Colors.text,
    marginTop: 10,
  },
  IconButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  IconButtonSpending: {
    flexDirection: 'row-reverse',
  },
  rotateIconSpending: {
    transform: [{rotate: '1804deg'}],
  },
  IconButtonText: {
    color: Colors.text,
    fontSize: 18,
    marginBottom: 4,
    textAlignVertical: 'center',
  },
});
