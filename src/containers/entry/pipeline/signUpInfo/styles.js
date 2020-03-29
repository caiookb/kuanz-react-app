import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '95%',
    height: '90%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 150,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '99%',
    borderRadius: 12,
    backgroundColor: Colors.fourth,
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
    color: 'white',
  },
});
