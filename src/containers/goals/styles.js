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

  textTitle: {
    marginTop: 30,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 80,
    width: '98%',
  },
  fixedBottom: {
    marginBottom: 15,
  },
  inputView: {
    marginBottom: 15,
  },
  datepicker: {
    marginHorizontal: 20,
  },

  success: {
    height: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 250,
  },
  successText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  cardImageInfo: {
    marginTop: 30,
  },
});
