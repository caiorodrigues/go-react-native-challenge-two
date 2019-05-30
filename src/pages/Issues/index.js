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
import IssueItem from './IssueItem';
import Filter from './Filter';

export default class Issues extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Filter />
        <IssueItem />
        <IssueItem />
        <IssueItem />
        <IssueItem />
      </View>
    );
  }
}
