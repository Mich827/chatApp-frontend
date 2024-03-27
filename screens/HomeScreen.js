import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { randomUsernames } from "../data/randomUsernames";

export default function HomeScreen({ navigation }) {
  const handleNavigation = () => {
    const username =
      randomUsernames[Math.floor(Math.random() * randomUsernames.length - 1)];
    navigation.navigate("Chat", { username });
  };

  return (
    <ImageBackground
      source={require("../assets/flower.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <Text
        style={{
          bottom: 450,
          fontSize: 38,
          color: "white",
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 5,
        }}
      >
        ChatApp
      </Text>
      <View style={styles.inset}>
        <Text style={styles.title}>Make new friends</Text>

        <TouchableOpacity
          onPress={() => handleNavigation()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get started!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  inset: {
    width: "100%",
    height: "30%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "rgba(13, 8, 9, 0.9)",
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopColor: "#ffe099",
    borderLeftColor: "#ffe099",
    borderRightColor: "#ffe099",
    borderTopWidth: 4,
    borderRightWidth: 0.1,
    borderLeftWidth: 0.1,
  },
  title: {
    color: "#ffffff",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    position: "absolute",
    bottom: 50,
    left: 20,
    backgroundColor: "#ffe099",
    padding: 16,
    borderRadius: 24,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.41,
    elevation: 1.2,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#211417",
  },
});
