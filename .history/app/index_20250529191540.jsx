import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
        <TextInput placeholder="Search" />
      </View>
      {/* data=Listelenecek verileri iceren dizi */}
      {/* keyExtractor=Her item için benzersiz bir key belirler.  */}
      {/* renderItem=Her bir veriyi nasıl göstereceğini belirler. */}
      <FlatList
        data={todoData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
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
    backgroundColor: "#fff",
  },
});
