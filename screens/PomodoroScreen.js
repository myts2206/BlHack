// PomodoroScreen.js

import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

export default function PomodoroScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(25 * 60);
  const stopwatchRef = useRef(null);

  const handleStart = () => {
    setIsRunning(false);
    stopwatchRef.current.start();
  };

  const handleStop = () => {
    setIsRunning(false);
    stopwatchRef.current.reset();
  };

  const handleReset = () => {
    setDuration(25 * 60);
    stopwatchRef.current.reset();
  };

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
  };

  return (
    <View style={styles.container}>
      <Stopwatch
        ref={stopwatchRef}
        minutes={Math.floor(duration / 60)}
        seconds={duration % 60}
        start={false}
        reset={false}
        options={{ container: styles.stopwatchContainer, text: styles.stopwatchText }}
        onTick={(time) => handleDurationChange(time.minutes * 60 + time.seconds)}
      />

      <View style={styles.buttonsContainer}>
        {!isRunning ? (
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopwatchContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  stopwatchText: {
    fontSize: 30,
    color: '#333',
    marginLeft: 7,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  startButton: {
    backgroundColor: '#00c853',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  stopButton: {
    backgroundColor: '#ff3d00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
