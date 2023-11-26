import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  modal: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  name: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
  rateButton: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  rateButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
