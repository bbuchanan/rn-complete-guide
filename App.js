import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = enteredGoal => {
    setCourseGoals([
      ...courseGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={() => console.log("hey dude")}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
