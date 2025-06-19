import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}, // Object is used to include key for each goal while using FlatList for lazy loading. 
    ]);
  }

function deleteGoalHandler(id) {
  setCourseGoals(currentCourseGoals => {
    return (currentCourseGoals.filter((goal) => goal.id !== id ))
  } )
}

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View  style={styles.goalsContainer}> 
      <FlatList data={courseGoals} renderItem={(itemData) =>{ 
        return (
          <GoalItem 
            text={itemData.item.text}
            id={itemData.item.id} 
            onDeleteItem={deleteGoalHandler} 
            />
      );
      }}
      keyExtractor={(item, index) => {
        return item.id;
        
      }}
      
       />
      </View>
    </View>

    )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },

  goalsContainer: {
    flex: 4,
  }
  ,
  
});
