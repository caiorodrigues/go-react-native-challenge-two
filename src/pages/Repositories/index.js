import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';
import RepositoryItem from '~/pages/Repositories/RepositoryItem';

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
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </View>
    );
  }
}
