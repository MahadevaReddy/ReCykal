import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Platform,
  TouchableHighlight,
} from 'react-native';
import CartItems from './CartItems';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Container, Header, Content, List, ListItem, Button} from 'native-base';
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: 1,
          name: 'Tata',
          price: 10,
          count: 0,
        },
        {
          id: 2,
          name: 'Google',
          price: 10,
          count: 0,
        },
        {
          id: 3,
          name: 'MicroSoft',
          price: 10,
          count: 0,
        },
      ],
    };
  }
  _onPress = (item) => {
    console.log(item);
    this.props.navigation.navigate('CartItems', {
      products: this.state.productList,
    });
  };
  decreaseItems = (id) => {
    let {productList} = this.state;
    productList.map((item, index) => {
      if (item.id === id && item.count > 0) {
        item.count = item.count - 1;
      }
    });
    this.setState({productList: productList});
  };
  increaseItems = (id) => {
    let {productList} = this.state;
    productList.map((item, index) => {
      if (item.id === id) {
        item.count = item.count + 1;
      }
    });
    this.setState({productList: productList});
  };
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.productList}
          renderItem={({item, index, separators}) => (
            <List>
              <ListItem key={item.id} onPress={() => this._onPress(item)}>
                <View>
                  <Text>Product Name: {item.name}</Text>
                  <Text>Price : {item.price}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignSelf: 'flex-end',
                  }}>
                  <Button
                    style={{width: 40, marginRight: 10}}
                    onPress={this.decreaseItems.bind(this, item.id)}>
                    <Text style={{flex: 1}}>-</Text>
                  </Button>
                  <Text>{item.count}</Text>
                  <Button
                    style={{width: 40, marginLeft: 10}}
                    onPress={this.increaseItems.bind(this, item.id)}>
                    <Text>+</Text>
                  </Button>
                </View>
              </ListItem>
            </List>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  // },
  separator: {},
});
export default ProductList;
