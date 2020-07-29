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

import {List, ListItem, Button} from 'native-base';
class CartItems extends Component {
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
    this.props.navigation.navigate('CartItems');
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
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text>Quantity : {item.count}</Text>
                    <Text style={{marginLeft: 10}}>
                      Total : {item.count > 0 ? item.price * item.count : 0}
                    </Text>
                  </View>
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
export default CartItems;
