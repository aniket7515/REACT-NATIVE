import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function CustomComponenets() {
  return (
    <Text style={styles.textStyle}>
       Hello world this is my custom componenets 
   
    </Text>
  );
}

const styles = StyleSheet.create({
  textStyle:{
      color:"red",
  
  },
});
