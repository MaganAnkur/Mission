/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import AddItem from './src/components/addItem/AddItem';

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const onItemAdded = itemName => {
    setTodoItems([...todoItems, itemName]);
  };
  //Flat List can also be used instead
  const RenderToDoListItem = () => {
    return (
      todoItems &&
      todoItems?.map((item, index) => {
        return (
          <View style={styles.listItem} key={`${index}`}>
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        );
      })
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <AddItem onItemAdded={onItemAdded} />
        <RenderToDoListItem />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFE162',
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  listItem: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginBottom: 4,
    borderRadius: 6,
  },
  listItemText: {
    color: '#FF6464',
    fontSize: 16,
  },
});

export default App;
