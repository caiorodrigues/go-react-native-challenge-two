import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// import { Container } from './styles';

const Filter = () => (
  <View>
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
);

export default Filter;
