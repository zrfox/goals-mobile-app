import { StyleSheet, View, TextInput, Button, modal, Modal, Image } from "react-native"
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
            <Image style={styles.image} source={require('../assets/outlined_flag_100dp_75FB4C.png')} />
        <TextInput  style={styles.textInput} 
                    placeholder='Your goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler} color={"#75FB4C"}/>
            </View>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} color={"#75FB4C"} />
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
    backgroundColor: '#189c5a'
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#75FB4C',
    borderColor: '#75F11C',
    borderRadius: 5,
    color: '#000000',
    height: '5%',
    width: '100%',
    padding: 6
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});


export default GoalInput;