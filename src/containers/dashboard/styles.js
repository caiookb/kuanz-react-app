import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import {withRouter} from 'react-router-dom';
export default StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  container: {
    flex: 0.9,
    width: '100%',
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  footerMenu: {
    flex: 0.1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary,
  },
  footerButton: {
    width: '25%',
  },
  footerButtonText: {
    flex: 1,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  goalTitle: {
    marginTop: 80,
  },
  goalTitleText: {
    fontSize: 22,
    color: 'white',
  },

  card: {
    marginTop: 20,
    height: 80,
    backgroundColor: Colors.third,
    width: '80%',
    borderRadius: 12,
    padding: 15,
  },
});
