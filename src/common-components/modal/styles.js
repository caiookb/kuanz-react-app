import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import {Colors, Fonts} from '../../assets/variables';

const {height} = Dimensions.get('screen');

export default EStyleSheet.create({
  dismiss: {
    backgroundColor: 'black',
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: Colors.third,
    maxHeight: 0.8 * height,
    position: 'absolute',
    width: '94%',
    borderRadius: 5,
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: '2rem',
  },
  closeIcon: {
    height: '35rem',
    width: '35rem',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
    alignSelf: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    height: '40rem',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 5,
  },
  confirmLabel: {
    fontFamily: Fonts.fourth,
    fontSize: '13rem',
    color: 'white',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: Colors.gray3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
  },
  cancelLabel: {
    fontFamily: Fonts.fourth,
    fontSize: '13rem',
    color: Colors.black3,
  },
  backGreen: {
    backgroundColor: Colors.green3,
  },
});
