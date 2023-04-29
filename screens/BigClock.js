import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const BigClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
      <View style={styles.clockContainer}>
        <Text style={styles.clockText}>{currentTime.toLocaleTimeString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default BigClock;
