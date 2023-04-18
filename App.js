import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loadFont] = useFonts({
    ador: require("./assets/fonts/LiAdorNoirritBold.ttf"),
    luxS: require("./assets/fonts/LuxuriousScript-Regular.ttf"),
    nova: require("./assets/fonts/NovaOval-Regular.ttf"),
  })
  
  if (!loadFont) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontFamily:"aror"} ]}>আদর নৈর্ঋত</Text>
      <Text style={[styles.text,  {fontFamily:"luxS"}]}>Nova Oval</Text>
      <Text style={[styles.text,  {fontFamily:"nova"}]}>Luxurious Script</Text>
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
  text:{
    fontSize:40,
    marginBottom:10
  }
});
