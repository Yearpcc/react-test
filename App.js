import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavButton from './component/NavButton'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavButton></NavButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#999999',
  },
});
