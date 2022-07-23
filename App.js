import React from 'react'
import { StyleSheet, View } from 'react-native'

import Title from './src/components/Title/Title'
import Form from './src/components/Form/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc7c7',
    paddingTop: 70,
  },
});