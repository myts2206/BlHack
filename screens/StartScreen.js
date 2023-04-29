import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const StartScreen = (props) => {
    return (
        <View style= {styles.container}>
            <Text style ={styles.Text} >Pix-Nex</Text>
            <Button  onPress={() => props.navigation.navigate('Home')} title="My To-Do" 
            style={styles.button}
            />
            <Button  onPress={() => props.navigation.navigate('motivate')} title="Motivate"/>
            <Button  onPress={() => props.navigation.navigate('pomo')} title="PomoDoro timer"/>
            <Button  onPress={() => props.navigation.navigate('alarm')} title="Alarm"/>
            <Button  onPress={() => props.navigation.navigate('clock')} title="Clock"/>
            
            

        </View>
    )
}
const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        fontSize: 40,
        padding:'10%',

        
    }, 
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '30%',
    },
    button: {

        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        width:300,
        height:40 
    },

})
export default StartScreen;