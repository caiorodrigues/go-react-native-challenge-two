import React, { Component } from 'react';

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Issues extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <TouchableOpacity onPress={() => { }}>
            <Text>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Text>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Text>Fechadas</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { }}>
          <Image source={''} />
          <View>
            <Text>Título</Text>
            <Text>Usuário da issue</Text>
          </View>
          <Icon style={styles.icon} name="star" size={16} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Image source={''} />
          <View>
            <Text>Título</Text>
            <Text>Usuário da issue</Text>
          </View>
          <Icon style={styles.icon} name="star" size={16} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Image source={''} />
          <View>
            <Text>Título</Text>
            <Text>Usuário da issue</Text>
          </View>
          <Icon style={styles.icon} name="star" size={16} />
        </TouchableOpacity>
      </View>
    );
  };
}
