import { StyleSheet, View, TextInput, Button } from "react-native"
import { useState } from "react";

function GoalInput(props) {
      const [enteredGoalText, setEnteredGoalText] = useState('');
      
      function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
  }

function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
}

    return (
        <View style={styles.inputContainer}>
        <TextInput  style={styles.textInput} 
                    placeholder='Your goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
    )
}
const styles = StyleSheet.create({
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
});


export default GoalInput;