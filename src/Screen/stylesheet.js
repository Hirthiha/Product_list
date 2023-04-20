import {StyleSheet} from 'react-native';
import color from '../color';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: color.White,
  },
  view: {
    backgroundColor: color.Lightgreen,
    height: '10%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: color.Black,
    fontSize: 30,
    marginLeft: '37%',
  },
  icon: {
    color: color.Black,
    fontSize: 35,
    marginLeft: '45%',
  },
  image: {
    width: '90%',
    height: 130,
  },

  flatlist: {
    width: '45%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color.Black,
    borderRadius: 10,
    marginRight: '2%',
    marginLeft: '3%',
    marginTop: '3%',
  },
  list: {
    width: '100%',
    paddingTop: '5%',
    color: color.Black,
    fontSize: 30,
    marginLeft: '10%',
    padding: '5%',
    justifyContent: 'center',
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.Lightgreen,
    width: '25%',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '5%',
  },
  space: {
    // marginLeft: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ftext: {
    color: color.Black,
    fontSize: 30,
    marginLeft: '5%',
  },
  ficon: {
    color: color.Black,
    fontSize: 35,
  },
  hicon: {
    position: 'absolute',
    top: 45,
    fontSize: 20,
    left: 7,
    color: color.Red,
  },
});

export default Styles;
