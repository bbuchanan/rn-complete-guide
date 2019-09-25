import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  button: {
    width: "40%"
  }
});
export default GoalInput;
