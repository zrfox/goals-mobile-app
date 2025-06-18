import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()}, // Object is used to include key for each goal while using FlatList for lazy loading. 
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput  style={styles.textInput} 
                    placeholder='Your goal!'
                    onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View  style={styles.goalsContainer}> 
      <FlatList data={courseGoals} renderItem={(itemData) =>{ 
        return <GoalItem text={itemData.item.text} />
      }}
       />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row', // sets direction of primary axis
    justifyContent: 'space-between',
    alignItems: 'center', // determines cross-axis behavior
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
  },
  goalsContainer: {
    flex: 4,
  }
  ,
  
});
