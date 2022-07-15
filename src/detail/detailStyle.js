import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
    minHeight: deviceSize.height,
  },
  info_container: {
    flexDirection: 'row',
    padding: 10,
    width: deviceSize.width,
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 4,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    color: '#f4511e',
  },
  category: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    fontSize: 19,
    color: '#000',
    fontWeight: '600',
    textAlign: 'justify',
  },
  price: {
    fontSize: 26,
    fontWeight: '900',
    padding: 10,
    textAlign: 'right',
    color: '#f4511e',
  },
});
