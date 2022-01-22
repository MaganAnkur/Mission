import React, {useState, useEffect} from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import {View, StyleSheet} from 'react-native';

const AddItem = ({onItemAdded = () => {}}) => {
  const [value, setValue] = useState();
  const [todoItem, setTodoItem] = useState('');

  useEffect(() => {
    onItemAdded(todoItem);
  }, [todoItem]);

  return (
    <View style={styles.container}>
      <Input value={value} onChangeText={setValue} />
      <Button
        onPress={() => {
          setTodoItem(value);
          setValue('');
        }}
        label={'Add Item'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 0.5},
});
export default AddItem;
