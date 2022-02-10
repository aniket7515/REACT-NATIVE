import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import CustomComponenets from './src/screens/CustomComponenets'
import FlatListDemo from './src/screens/FlatListDemo';

export default function App() {
  const myName="Aniket Dhokane"
  return (
    <View style={styles.container}>
      {/* <Text>{myName}'s first react Native App My App.js</Text>
      <CustomComponenets/>
      <Text style={styles.text}>Welcome to React Native Challenge</Text>
      <Text style={styles.text2}>We all love React Native </Text>
      <StatusBar style="auto" /> */}
      <FlatListDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'blue',
    fontSize:40,
  },
  text2:{
    color:'cyan',
    fontSize:30,
  }
});
