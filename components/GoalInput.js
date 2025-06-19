import { StyleSheet, View, TextInput, Button, modal, Modal } from "react-native"
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
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput  style={styles.textInput} 
                    placeholder='Your goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} />
            </View>
        </View>
      </View>
      </Modal>
    );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // determines cross-axis behavior
    padding: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    height: '5%',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 8
  },
});


export default GoalInput;