import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function RepositoryItem() {
  return (
    <View>
      <Icon name="star" size={24} />
      <View>
        <Text>Nome do Repositorio</Text>
        <Text>Organização</Text>
      </View>
      <Icon name="star" size={24} />
    </View>
  );
}
