import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem (props) {
    return (
      <Pressable 
        android_ripple={{ color: '#dddddd'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}  
      >
        <View style={styles.goalItem}> 
            <Text style={styles.goalText}>{props.text}</Text>  
          </View>
      </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#75FB4C',
    color: '000000',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: '000000',
    padding: 8,
  }
});