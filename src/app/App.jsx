import { useState, useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import GameStats from "../components/GameStats";
import TargetCard from "../components/TargetCard";
import BitGrid from "../components/BitGrid";
import GameOver from "../components/GameOver";

import { BIT_VALUES } from "../constants/game";

export default function App() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [bits, setBits] = useState(Array(8).fill(0));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isGameOver, setIsGameOver] = useState(false);

  // ساخت عدد جدید
  const generateNewTarget = () => {
    const randomNumber = Math.floor(Math.random() * 255) + 1;

    setTargetNumber(randomNumber);
    setBits(Array(8).fill(0));
    setTimeLeft(15);
  };

  // شروع بازی
  useEffect(() => {
    generateNewTarget();
  }, []);

  // تایمر
  useEffect(() => {
    if (isGameOver) return;

    if (timeLeft === 0) {
      setIsGameOver(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isGameOver]);

  // تغییر بیت
  const toggleBit = (index) => {
    if (isGameOver) return;

    const newBits = [...bits];
    newBits[index] = newBits[index] ? 0 : 1;

    setBits(newBits);

    const total = newBits.reduce(
      (sum, bit, i) => sum + bit * BIT_VALUES[i],
      0
    );

    if (total === targetNumber) {
      setScore((prev) => prev + 10);
      generateNewTarget();
    }
  };

  // شروع مجدد
  const restartGame = () => {
    setScore(0);
    setIsGameOver(false);
    generateNewTarget();
  };

  // مجموع فعلی
  const currentTotal = bits.reduce(
    (sum, bit, i) => sum + bit * BIT_VALUES[i],
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0F172A"
      />

      <Header />

      <GameStats
        score={score}
        timeLeft={timeLeft}
      />

      <TargetCard
        targetNumber={targetNumber}
        currentTotal={currentTotal}
      />

      {isGameOver ? (
        <GameOver
          score={score}
          restart={restartGame}
        />
      ) : (
        <BitGrid
          bits={bits}
          toggleBit={toggleBit}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
    justifyContent: "space-between",
  },
});
