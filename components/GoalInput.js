import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.input}
        />
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default GoalInput;