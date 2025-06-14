import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToDoItem from "./toDoItem";
// Başlangıç todo verisi

export default function Index() {
  // todo listesini state olarak tutuyoruz
  const [todos, setTodos] = useState([]);
  // input alanına yazılan yeni todo metni için state
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      try {
        const todos = await AsyncStorage.getItem("my-todo");
        if (todos !== null) {
          setTodos(JSON.parse(todos));
        }
      } catch (error) {
        console.log("Error fetching todos:", error);
      }
    };
    getTodos();
  }, []);

  const addTodo = async () => {
    try {
      const newTodo = {
        id: Math.random(),
        title: todoText,
        isDone: false,
      };
      todos.push(newTodo);
      setTodos(todos);
      await AsyncStorage.setItem("my-todo", JSON.stringify(todos));
      setTodoText("");
      Keyboard.dismiss(); // Klavyeyi kapat
    } catch (error) {
      console.log("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const newTodos = todos.filter((item) => item.id !== id);
      await AsyncStorage.setItem("my-todo", JSON.stringify(newTodos));
      setTodos(newTodos);
    } catch (error) {
      console.log("Error deleting todo:", error);
    }
  };

  const handleDone = async () => {
    try {
      const newTodos = todos.map((item) => {
        if (item.id == id) {
          item.isDone = !item.isDone; // isDone değerini tersine çevir
        }
        return item;
      });
      await AsyncStorage.setItem("my-todo", JSON.stringify(newTodos));
      setTodos(newTodos);
    } catch (error) {
      console.log("Error updating todo:", error);
    }
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
        data={[...todos].reverse()}
        // Her item için benzersiz key
        keyExtractor={(item) => item.id.toString()}
        // // Her item nasıl görünecek
        renderItem={({ item }) => (
          <ToDoItem
            item={item}
            deleteTodo={deleteTodo}
            handleTodo={handleDone}
          />
        )}
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
