import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const Input = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add Item"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FF6464',
    borderRadius: 6,
    paddingVertical: 16,
    marginBottom: 16,
  },
  input: {
    paddingHorizontal: 8,
    fontSize: 17,
    color: '#FF6464',
  },
});

export default Input;
