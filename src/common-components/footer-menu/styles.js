import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: -12,
      height: -12,
    },
    shadowOpacity: 0.41,
    shadowRadius: 10,
    elevation: 13,
    backgroundColor: Colors.third,
  },
  downNavBar: {
    width: '96%',
    height: 55,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 10,
    backgroundColor: Colors.fifth,
    shadowColor: '#000',
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.41,
    shadowRadius: 10,
    elevation: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 7,
  },
  balanceView: {
    flexDirection: 'row',
    width: '98%',
    justifyContent: 'space-around',
  },
  balanceStatsView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  dot: {
    marginTop: 10,
    marginRight: 5,
  },
  balanceStatsTitle: {
    textAlign: 'center',
    color: Colors.text,
    fontSize: 16,
  },
  balanceStatsValue: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
