import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image'; // Allows for placeholder and transition, documentation is here: https://docs.expo.dev/versions/latest/sdk/image/

// Allows for smooth blur fade in effect, so that fade in isn't from a black screen.
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Image
        style={StyleSheet.absoluteFill} // Allows for an absolute display of image and still fills the screen, makes the image act as a background
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={5000}
      />
      <Text style={styles.title}>This is the tracking app title, it has a background colour</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'justify',
    margin: 5,
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0.5 )",
    color: '#fff',
    fontSize: 30,
  },
});
