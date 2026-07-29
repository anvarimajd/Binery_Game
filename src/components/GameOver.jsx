import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GameOver({ score, restart }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="alert-circle-outline"
        size={42}
        color="#F43F5E"
      />

      <Text style={styles.title}>
        GAME OVER
      </Text>

      <Text style={styles.subtitle}>
        Time is up!
      </Text>

      <Text style={styles.score}>
        FINAL SCORE
      </Text>

      <Text style={styles.scoreValue}>
        {score}
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={restart}
      >
        <Ionicons
          name="refresh-outline"
          size={20}
          color="#FFFFFF"
          style={styles.icon}
        />

        <Text style={styles.buttonText}>
          PLAY AGAIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E293B",
    borderRadius: 18,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#334155",
    marginBottom: 20,
  },

  title: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "800",
    color: "#F43F5E",
    letterSpacing: 2,
  },

  subtitle: {
    marginTop: 5,
    fontSize: 14,
    color: "#94A3B8",
  },

  score: {
    marginTop: 5,
    fontSize: 13,
    color: "#64748B",
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  scoreValue: {
    marginTop: 6,
    fontSize: 42,
    fontWeight: "800",
    color: "#F8FAFC",
  },

  button: {
    marginTop: 10,
    width: "100%",
    height: 54,
    borderRadius: 12,
    backgroundColor: "#6366F1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    marginRight: 8,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
});