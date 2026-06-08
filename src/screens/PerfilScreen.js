// TODO: escolher um tema e personalizar os dados e estilizacao desta tela
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Perfil</Text>
      </View>

      <View style={styles.cartao}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>L</Text>
        </View>
        <Text style={styles.nome}>laisla-tararan</Text>
        <Text style={styles.email}>laisla.tararan@email.com</Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>🎮Jogos salvos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>⭐Jogos favoritos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>👑 Level</Text>
          <Text style={styles.infoValor}>99</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>📆 Membro desde</Text>
          <Text style={styles.infoValor}>Maio 2026</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Editar perfil</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // Substituído o marrom pelo preto puro padrão do app
  },
  header: {
    backgroundColor: "#121212", // Integrado ao padrão de tom escuro das outras telas
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#FF1493", // Linha divisória em rosa choque
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cartao: {
    margin: 16,
    backgroundColor: "#1A1A1A", // Card em cinza escuro para se destacar do fundo preto
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#FF1493", // Sombra leve em rosa choque criando efeito glow sutil
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "rgba(255, 20, 147, 0.1)", // Fundo do avatar com leve transparência rosa choque
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FF1493", // Borda marcante em rosa choque para destacar a foto/iniciais
    marginBottom: 16,
  },
  avatarTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF", // Letra do avatar em branco puro
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF", // Nome do usuário em destaque branco
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#FFB6C1", // Email em rosa claro (ótima legibilidade e estilo no tema escuro)
    marginBottom: 20,
  },
  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255, 182, 193, 0.2)", // Divisor sutil em rosa claro transparente
    marginBottom: 16,
  },
  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: "#A0A0A0", // Cinza claro neutro para as labels de informação
  },
  infoValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF", // Dados em branco para facilitar a leitura rápida
  },
  botao: {
    marginHorizontal: 16,
    backgroundColor: "#FF1493", // Botão principal em rosa choque
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#FF1493",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000", // Texto do botão em preto para o contraste perfeito sobre o rosa choque
  },
});
