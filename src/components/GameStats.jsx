import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GameStats({ score, timeLeft }) {
  return (
    <View style={styles.container}>
      <StatCard
        icon="trophy-outline"
        title="SCORE"
        value={score}
        color="#F59E0B"
      />

      <StatCard
        icon="timer-outline"
        title="TIME"
        value={`${timeLeft}s`}
        color={timeLeft <= 5 ? "#F43F5E" : "#10B981"}
      />
    </View>
  );
}

function StatCard({ icon, title, value, color }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons
          name={icon}
          size={16}
          color={color}
        />

        <Text style={styles.title}>
          {title}
        </Text>
      </View>

      <Text
        style={[
          styles.value,
          { color },
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5
    ,
  },

  card: {
    width: "48%",
    backgroundColor: "#1E293B",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#334155",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  title: {
    marginLeft: 6,
    fontSize: 11,
    fontWeight: "700",
    color: "#94A3B8",
    letterSpacing: 1.5,
  },

  value: {
    fontSize: 28,
    fontWeight: "800",
  },
});