import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert,Dimensions,Text } from 'react-native';

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState(null);

  const setAlarm = (time) => {
    setAlarmTime(time);
  };
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    let interval = null;

    if (alarmTime) {
      const alarmDate = new Date(alarmTime);
      const currentDate = new Date();

      if (alarmDate > currentDate) {
        const timeDifference = alarmDate - currentDate;
        interval = setTimeout(() => {
            
          Alert.alert('Alarm!', 'Wake up!');
        }, timeDifference);
      }
    }

    return () => clearInterval(interval);
  }, [alarmTime]);

  return (
    <View style={styles.container}>
        <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
      <View style={styles.clockContainer}>
        <Text style={styles.clockText}>{currentTime.toLocaleTimeString()}</Text>
      </View>
    </View>
      <Button title="Set alarm for 5 seconds" onPress={() => setAlarm(Date.now() + 5000)} />
      <Button title="Set alarm for 1 minute" onPress={() => setAlarm(Date.now() + 60000)} />
      <Button title="Cancel alarm" onPress={() => setAlarm(null)} />
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export default Alarm;
