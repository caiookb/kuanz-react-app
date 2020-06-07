import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    justifyContent: 'flex-end',
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
  content: {
    width: '95%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  fixedBottom: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '99%',
    borderRadius: 12,
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
  cardImage: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardImageInfo: {
    width: '70%',
    height: '70%',
    alignSelf: 'center',
  },
  cardInfo: {
    width: '70%',
    flexDirection: 'column',
    alignSelf: 'center',
    paddingHorizontal: 10,
    textAlign: 'center',
    alignContent: 'center',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.text,
  },
});
