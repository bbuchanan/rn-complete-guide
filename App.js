import React, { useState } from "react";
import { StyleSheet, Button, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(g => g.Id !== goalId);
    });
  };

  const addGoalHandler = enteredGoal => {
    setCourseGoals([
      ...courseGoals,
      { Id: Math.random().toString(), value: enteredGoal }
    ]);

    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onCancel={cancelGoalAdditionHandler}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={x => x.Id}
        renderItem={itemData => (
          <GoalItem
            Id={itemData.item.Id}
            onDelete={removeGoalHandler}
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
