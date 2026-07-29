import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Ionicons
          name="code-slash-outline"
          size={24}
          color="#6366F1"
        />
      </View>

      <View>
        <Text style={styles.title}>
          BINARY GAME
        </Text>

        <Text style={styles.subtitle}>
          Convert Decimal to Binary
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#334155",
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#F8FAFC",
    letterSpacing: 2,
  },

  subtitle: {
    marginTop: 2,
    fontSize: 12,
    color: "#94A3B8",
    letterSpacing: 0.5,
  },
});