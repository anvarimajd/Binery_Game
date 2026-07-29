import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { BIT_VALUES } from "../constants/game";

export default function BitGrid({ bits, toggleBit }) {
  return (
    <View style={styles.container}>
      {BIT_VALUES.map((value, index) => (
        <View key={value} style={styles.column}>
          <Text style={styles.weight}>{value}</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.button,
              bits[index] && styles.buttonActive,
            ]}
            onPress={() => toggleBit(index)}
          >
            <Text
              style={[
                styles.buttonText,
                bits[index] && styles.buttonTextActive,
              ]}
            >
              {bits[index]}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },

  column: {
    width: "11.5%",
    alignItems: "center",
  },

  weight: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
    marginBottom: 8,
  },

  button: {
    width: "100%",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderWidth: 1,
    borderColor: "#334155",
  },

  buttonActive: {
    backgroundColor: "#6366F1",
    borderColor: "#818CF8",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#64748B",
  },

  buttonTextActive: {
    color: "#FFFFFF",
  },
});