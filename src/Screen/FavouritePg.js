import {View, Text} from 'react-native';
import Styles from './stylesheet';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
function Favourite({navigation}) {
  return (
    <View style={Styles.container}>
      <View style={Styles.view}>
        <Text style={Styles.ftext}>Cart</Text>
        <Icons name="cart" style={Styles.ficon} />
      </View>
    </View>
  );
}

export default Favourite;
