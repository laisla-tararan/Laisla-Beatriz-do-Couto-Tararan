import { StyleSheet, Text, View } from "react-native";

// Passe os parametros de forma correta e realize a estilização do componente
export default function CardJogo({ titulo, genero, plataforma, nota }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}> 🩷Título: {titulo} </Text>
        <Text style={styles.genero}> 🏷️Gênero: {genero} </Text>
        <Text style={styles.plataforma}> 🖥️Plataforma: {plataforma} </Text>
        <Text style={styles.nota}>⭐Nota: {nota} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  card: {
    backgroundColor: '#1F1F23',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2F2F33',
    
    // Efeito de sombra (Shadow) para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    // Efeito de sombra para Android
    elevation: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  genero: {
    fontSize: 14,
    color: '#C4C4CC',
    marginBottom: 4,
  },
  plataforma: {
    fontSize: 14,
    color: '#C4C4CC',
    marginBottom: 4,
  },
  nota: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFB800',
    marginTop: 4,
  },
})
