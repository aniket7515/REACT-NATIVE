import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponenets from './src/screens/CustomComponenets'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aniket Dhokane's first react Native App My App.js</Text>
      <CustomComponenets/>
      
      <StatusBar style="auto" />
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
});
