import React, { useEffect } 
from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } 
from 'react-native';
import { useDispatch, useSelector } 
from 'react-redux';
import { fetchTodos } 
from '../reducerss/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { list: todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos()); 
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.error}>Error: {error}</Text>;

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default TodoList;
