import { StyleSheet } from 'react-native';
import { Colors } from '../../../../assets/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nav: {
    width: '100%',
    height: 80,
    backgroundColor: Colors.third,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  textTitle: {
    marginTop: 30,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 40
  },
  content: {
    width: '95%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '99%',
  },

  fixedBottom: {
    width: '100%',
  },
  inputView: {
    width: '99%',
    marginTop: 20,
  },
  success: {
    width: '75%',
    height: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 100,
  },
  successText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
