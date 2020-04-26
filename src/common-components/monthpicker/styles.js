import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    width: '60%',
    height: 60,
    backgroundColor: Colors.third,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 24,
  },
  rotateArrow: {
    transform: [{rotate: '180deg'}],
  },
  label: {
    fontSize: 20,
    color: 'white',
    fontWeight: '100',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 24,
  },
  yearView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 15,
  },
  yearText: {
    color: 'black',
    fontSize: 20,
  },
  monthView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  monthContainer: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    margin: 1,
  },
  monthText: {
    marginTop: 5,
    color: 'black',
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  monthSelected: {
    borderBottomColor: 'black',
    borderBottomWidth: 4,
  },
  button: {
    marginBottom: 10,
  },
});
