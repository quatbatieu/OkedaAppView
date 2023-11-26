import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 65,
    backgroundColor: '#333333',
  },
  modalContainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 100,
    backgroundColor: 'transparent',
  },
  centeredView: {
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingTop: 23,
    paddingLeft: 13,
    paddingRight: 13,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
