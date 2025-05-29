import { Ionicons } from "@expo/vector-icons";
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

export default function Index() {
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
        data={todoData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ToDoItem item={item} />}
      />

      {/* <View style={styles.footer}> */}
      <KeyboardAvoidingView
        style={styles.footer}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <TextInput placeholder="Add New Todo" style={styles.newTodoInput} />
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
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
});
