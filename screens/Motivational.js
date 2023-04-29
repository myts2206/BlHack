import React, { useRef,useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';

const Motivational = () => {
  const [quote, setQuote] = useState('');
  const [randomPicture, setRandomPicture] = useState(null);

  const getRandomPicture = async () => {
    const response = await axios.get(
      'https://source.unsplash.com/random/?motivation',
    );
    setRandomPicture(response.request.responseURL);
  };

  useEffect(() => {
    getRandomPicture();
  }, []);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    setQuote(response.data.content);
  };

  const handleNewQuote = () => {
    fetchQuote();
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quote}</Text>
      <Button title="New Quote" onPress={handleNewQuote} />
      <Text style={styles.title}>Find your motivation</Text>
      {randomPicture && (
        <Image source={{ uri: randomPicture }} style={styles.image} />
      )}
      <TouchableOpacity style={styles.button} onPress={getRandomPicture}>
        <Text style={styles.buttonText}>New picture</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
      textAlign: 'center',
      fontSize: 19,
      padding:'10%',

},
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
},
image: {
  width: 200,
  height: 200,
  borderRadius: 10,
  marginVertical: 20,
},
button: {
  backgroundColor: '#3498db',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 5,
},
buttonText: {
  color: '#fff',
  fontSize: 18,
},
}
)



export default Motivational;
