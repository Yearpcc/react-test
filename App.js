import React from 'react';
import { StyleSheet, View } from 'react-native';
import Template from './component/Template'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Template></Template>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
