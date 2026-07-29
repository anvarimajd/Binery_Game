import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TargetCard({
  targetNumber,
  currentTotal,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons
          name="flag-outline"
          size={18}
          color="#6366F1"
        />

        <Text style={styles.label}>
          TARGET DECIMAL
        </Text>
      </View>

      <Text style={styles.number}>
        {targetNumber}
      </Text>

      <View style={styles.divider} />

      <View style={styles.currentContainer}>
        <Text style={styles.currentLabel}>
          CURRENT VALUE
        </Text>

        <Text style={styles.currentValue}>
          {currentTotal}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#334155",
    marginVertical: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  label: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "700",
    color: "#94A3B8",
    letterSpacing: 2,
  },

  number: {
    fontSize: 60,
    fontWeight: "900",
    color: "#F8FAFC",
    letterSpacing: -2,
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#334155",
    marginVertical: 20,
  },

  currentContainer: {
    alignItems: "center",
    backgroundColor: "#0F172A",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 24,
    minWidth: 150,
  },

  currentLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748B",
    letterSpacing: 1,
  },

  currentValue: {
    marginTop: 4,
    fontSize: 24,
    fontWeight: "800",
    color: "#10B981",
  },
});