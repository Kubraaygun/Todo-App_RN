import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToDoItem from "./toDoItem";
// Başlangıç todo verisi
const todoData = [
  {
    id: 1,
    title: "Todo 1",
    isDone: false,
  },
  {
    id: 2,
    title: "Todo 2",
    isDone: false,
  },
  {
    id: 3,
    title: "Todo 3",
    isDone: false,
  },
  {
    id: 4,
    title: "Todo 4",
    isDone: true,
  },
  {
    id: 5,
    title: "Todo 5",
    isDone: false,
  },
  {
    id: 6,
    title: "Todo 6",
    isDone: false,
  },
];

export default function Index() {
  // todo listesini state olarak tutuyoruz
  const [todos, setTodos] = useState(todoData);
  // input alanına yazılan yeni todo metni için state
  const [todoText, setTodoText] = useState();

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      title: todoText,
      isDone: false,
    };
    todos.push(newTodo);
    setTodos(todos);
    setTodoText("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            alert("Clicked!");
          }}
        >
          <Ionicons name="menu" size={24} color={"#333"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2024/01/05/17/46/ai-generated-8489902_960_720.png",
            }}
            style={{ height: 40, width: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color={"#333"} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          clearButtonMode="always"
        />
      </View>
      {/* data=Listelenecek verileri iceren dizi */}
      {/* keyExtractor=Her item için benzersiz bir key belirler.  */}
      {/* renderItem=Her bir veriyi nasıl göstereceğini belirler. */}

      <FlatList
        data={todos.reverse()}
        keyExtractor={(item) => item.id.toString()} // Her item için benzersiz key
        renderItem={({ item }) => <ToDoItem item={item} />} // Her item nasıl görünecek
      />

      {/* <View style={styles.footer}> */}
      <KeyboardAvoidingView
        style={styles.footer}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <TextInput
          placeholder="Add New Todo"
          style={styles.newTodoInput}
          value={todoText}
          onChangeText={(text) => setTodoText(text)} // Yazılan metni state'e kaydet
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            addTodo();
          }}
        >
          <Ionicons name="add" size={34} color={"#ffff"} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    gap: 10,
    marginBottom: 20,
  },
  searchInput: {
    // backgroundColor: "blue",
    flex: 1,
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
