import {FlatList, Image, Text, View, Pressable} from 'react-native';
import Styles from './stylesheet';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../Redux/Action';

function Mainpage({navigation}) {
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item));
  };

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
      tx1: 'Chocolate ',
      tx2: '₹ 50',
    },
    {
      id: 5,
      img: require('../Assests/Coffee.png'),
      tx1: 'Cool Coffee',
      tx2: '₹ 80',
    },
    {
      id: 6,
      img: require('../Assests/cooki.png'),
      tx1: 'Cookiees',
      tx2: '₹ 3500/Roll',
    },
    {
      id: 7,
      img: require('../Assests/gulabjamun.png'),
      tx1: 'Gulab Jamun',
      tx2: '₹ 100',
    },
    {
      id: 8,
      img: require('../Assests/Palkova.png'),
      tx1: 'Palkova',
      tx2: '₹ 120',
    },
    {
      id: 9,
      img: require('../Assests/ladu.png'),
      tx1: 'Ladoo',
      tx2: '₹ 10',
    },
    {
      id: 10,
      img: require('../Assests/Teas.png'),
      tx1: 'Green Tea',
      tx2: '₹ 20',
    },
    {
      id: 11,
      img: require('../Assests/Rasagulla.png'),
      tx1: 'Rasagulla',
      tx2: '₹ 30',
    },
    {
      id: 12,
      img: require('../Assests/Jalebi.png'),
      tx1: 'Jalebi',
      tx2: '₹ 10',
    },
    {
      id: 13,
      img: require('../Assests/KAju.png'),
      tx1: 'Kaju Katli',
      tx2: '₹ 15',
    },
    {
      id: 14,
      img: require('../Assests/Soanpapdi.png'),
      tx1: 'Soan Papdi',
      tx2: '₹ 40',
    },
    {
      id: 15,
      img: require('../Assests/pizza.png'),
      tx1: 'Pizza',
      tx2: '₹ 450',
    },
    {
      id: 16,
      img: require('../Assests/burger.png'),
      tx1: 'Burger',
      tx2: '₹ 120',
    },
    {
      id: 17,
      img: require('../Assests/fries.png'),
      tx1: 'French Fries',
      tx2: '₹ 100',
    },
    {
      id: 18,
      img: require('../Assests/popcorn.png'),
      tx1: 'Pop Corn',
      tx2: '₹ 150',
    },
    {
      id: 19,
      img: require('../Assests/Halwa.png'),
      tx1: 'Halwa',
      tx2: '₹ 190',
    },
    {
      id: 20,
      img: require('../Assests/donut.png'),
      tx1: 'Donut',
      tx2: '₹ 40',
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

                <Icons
                  onPress={() => handleAddToCart(item)}
                  name="cards-heart-outline"
                  style={Styles.hicon}></Icons>

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
