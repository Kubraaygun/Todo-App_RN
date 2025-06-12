import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// ToDoItem bileşeni, her bir todo'yu temsil eder
const ToDoItem = ({ item, deleteTodo }) => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoInfoContainer}>
        <Checkbox
          value={item.isDone}
          color={item.isDone ? "purple" : undefined}
        />
        <Text
          style={[
            styles.todoText,
            item.isDone && { textDecorationLine: "line-through" },
          ]}
        >
          {item.title}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          deleteTodo();
          alert("Deleted " + item.id);
        }}
      >
        <Ionicons name="trash" size={24} color={"red"} />
      </TouchableOpacity>
    </View>
  );
};

export default ToDoItem;

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  todoInfoContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  todoText: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  newTodoInput: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "plum",
    padding: 8,
    borderRadius: 10,
    marginLeft: 20,
  },
});
