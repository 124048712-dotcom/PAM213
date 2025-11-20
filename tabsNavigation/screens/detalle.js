import { View, Text, StyleSheet, Button } from 'react-native';

export default function Detalle({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del usuario</Text>
        <Text style={{ color: 'blue' }}>Usando Navegacion Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
