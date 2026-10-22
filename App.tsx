import React, { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

// Reusable button component
type CounterButtonProps = {
  label: string;
  onPress: () => void;
  color: string;
};

function CounterButton({ label, onPress, color }: CounterButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color },
        pressed && styles.buttonPressed,
      ]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f4f8" />

      <Text style={styles.title}>Counter</Text>

      <Text
        style={[
          styles.count,
          count > 0 && styles.positive,
          count < 0 && styles.negative,
        ]}>
        {count}
      </Text>

      <View style={styles.row}>
        <CounterButton label="−" onPress={decrement} color="#e74c3c" />
        <CounterButton label="+" onPress={increment} color="#2ecc71" />
      </View>

      <CounterButton label="Reset" onPress={reset} color="#7f8c8d" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f4f8',
    gap: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2c3e50',
  },
  count: {
    fontSize: 96,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  positive: { color: '#27ae60' },
  negative: { color: '#c0392b' },
  row: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    minWidth: 90,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
});