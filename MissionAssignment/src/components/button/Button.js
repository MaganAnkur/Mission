import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

const Button = ({onPress, label}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {alignSelf: 'center', marginBottom: 16, flex: 1},
  buttonContainer: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: '#91C483',
  },
  buttonLabel: {
    color: '#EEEEEE',
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center',
    flexShrink: 1,
  },
});

export default Button;
