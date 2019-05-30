import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const IssueItem = () => (
  <TouchableOpacity onPress={() => { }}>
    <Image source={''} />
    <View>
      <Text>Título</Text>
      <Text>Usuário da issue</Text>
    </View>
    <Icon name="star" size={16} />
  </TouchableOpacity>
);

export default IssueItem;
