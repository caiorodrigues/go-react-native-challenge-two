import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';

import styles from './styles';

export default class Repositories extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>

        <Header title="GitIssues" />
        <View style={styles.repositoryInputContainer}>
          <TextInput style={styles.repositoryInput} placeholder="Adicionar novo repositório" />
          <TouchableOpacity style={styles.repositoryInputButton}>
            <Icon name="star" size={16} />
          </TouchableOpacity>
        </View>
        <View>
          <Icon name="star" size={24} />
          <View>
            <Text>Nome do Repositorio</Text>
            <Text>Organização</Text>
          </View>
          <Icon name="star" size={24} />
        </View>
        <View>
          <Icon name="star" size={24} />
          <View>
            <Text>Nome do Repositorio</Text>
            <Text>Organização</Text>
          </View>
          <Icon name="star" size={24} />
        </View>
        <View>
          <Icon name="star" size={24} />
          <View>
            <Text>Nome do Repositorio</Text>
            <Text>Organização</Text>
          </View>
          <Icon name="star" size={24} />
        </View>
      </View>
    );
  }
}
