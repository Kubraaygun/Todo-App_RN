import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";

const ToDoItem = ({ item }) => {
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
          alert("Deleted " + item.id);
        }}
      >
        <Ionicons name="trash" size={24} color={"red"} />
      </TouchableOpacity>
    </View>
  );
};

export default ToDoItem;

const styles = StyleSheet.create({});
