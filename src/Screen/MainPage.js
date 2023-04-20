import {FlatList, Image, ScrollView, Text, View, Pressable} from 'react-native';
import Styles from './stylesheet';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
function Mainpage({navigation}) {
  const [arr, setarr] = useState([
    {
      id: 1,
      img: require('../Assests/bis.png'),
      tx1: 'Biscuits',
      tx2: '₹ 20',
    },
    {
      id: 2,
      img: require('../Assests/cake.png'),
      tx1: 'Cake',
      tx2: '₹ 100',
    },
    {
      id: 3,
      img: require('../Assests/chip.png'),
      tx1: 'Chips',
      tx2: '₹ 20',
    },
    {
      id: 4,
      img: require('../Assests/Chocolate.png'),
      tx1: 'Trendy wall ',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 5,
      img: require('../Assests/Coffee.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 6,
      img: require('../Assests/cooki.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 7,
      img: require('../Assests/gulabjamun.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 8,
      img: require('../Assests/Palkova.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 9,
      img: require('../Assests/ladu.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 10,
      img: require('../Assests/Teas.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 11,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 12,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 13,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 14,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 15,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 16,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 17,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 18,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 19,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 20,
      img: require('../Assests/wall.png'),
      tx1: 'Trendy wall',
      tx2: '₹ 3500/Roll',
    },
  ]);
  return (
    <View style={Styles.container}>
      <View style={Styles.view}>
        <Text style={Styles.text}>FlatList</Text>
        <Pressable>
          <Icons
            name="cart"
            style={Styles.icon}
            onPress={() => navigation.navigate('Cart')}
          />
        </Pressable>
      </View>

      <FlatList
        data={arr}
        renderItem={({item, index}) => (
          <View style={Styles.flatlist}>
            <View style={Styles.list}>
              <Image style={Styles.image} source={item.img} />
              <View style={Styles.space}>
                <Text>{item.tx1}</Text>
                <Text>{item.tx2}</Text>
                <View style={Styles.star}>
                  <Icon name="star" />
                  <Text>4.5</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default Mainpage;
