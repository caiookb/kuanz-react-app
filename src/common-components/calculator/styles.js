import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  calculator: {
    paddingTop: 15,
    backgroundColor: Colors.black,
  },
  calculatorInput: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.third,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
  },
  label: {
    color: Colors.text,
    fontSize: 18,
  },
  value: {
    fontSize: 30,
    color: Colors.text,
    borderRadius: 20,
    paddingVertical: 10,
  },
  padView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  padText: {
    fontSize: 24,
    color: Colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pad: {
    padding: 20,
    margin: 5,
    borderColor: 'white',
    flexBasis: (4 * 100) / 5,
    borderRadius: 5,
  },
  input: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: Colors.black,
  },

  inputText: {
    color: Colors.text,
    fontSize: 36,
  },

  historic: {
    fontSize: 26,
    textAlign: 'right',
    width: '100%',
    paddingTop: 10,
    color: Colors.gray,
  },
});
