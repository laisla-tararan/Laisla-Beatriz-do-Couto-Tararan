// TODO: estilizar esta tela com as cores e identidade visual do seu tema
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dados de fallback — usados enquanto a navegacao nao estiver configurada
const jogoMock = {
  titulo: 'HayDay',
  genero: 'Jogo eletrônico de estratégia',
  plataforma: 'Mobile / PC',
  nota: '10/10',
  sinopse:
    'No game, você recebe um pedaço de terra como herança e precisa cuidar de plantações e animais, gerando lucro com a venda de produtos como queijo, manteiga, torta, bolo, pipoca e até roupas.',
};

// Os dados chegam via route.params quando o usuario toca em um jogo na HomeScreen
export default function DetalheScreen( route, navigation ) {
  const { titulo, genero, plataforma, nota, sinopse } = route?.params ?? jogoMock;

  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          {/* TODO: substituir pela inicial do titulo ou outro elemento do seu tema */}
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>{titulo[0]}</Text>
          </View>
          <Text style={styles.heroTitulo}>{titulo}</Text>
          <Text style={styles.heroSubtitulo}>{genero}</Text>
          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>
            <View style={styles.metaSeparador} />
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.detalheTexto}>{sinopse}</Text>
        </View>
        <TouchableOpacity style={styles.botao, isSalvo && styles.botaoAtivo} onPress={() => setIsSalvo(prev => !prev)} >
            <Text style={styles.botaoTexto}>{isSalvo ? 'Remover da Lista' : 'Adicionar a Lista'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // Preto puro de fundo para alto contraste
  },
  hero: {
    backgroundColor: "#121212", // Cinza quase preto para separar o hero do fundo
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FF1493", // Linha fina em rosa choque para detalhe
  },
  heroIcone: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FF1493", // Rosa Choque vibrante no fundo do ícone
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    shadowColor: "#FF1493",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8, // Efeito de brilho (glow) no ícone
  },
  heroIconeTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF", // Branco para legibilidade
  },
  heroTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 6,
  },
  heroSubtitulo: {
    fontSize: 14,
    color: "#FFB6C1", // Rosa Claro para o subtítulo ter bom contraste, mas não brigar com o título
    marginBottom: 16,
  },
  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "rgba(255, 20, 147, 0.15)", // Fundo rosa choque com transparência
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 20, 147, 0.3)",
  },
  metaItem: {
    alignItems: "center",
  },
  metaLabel: {
    fontSize: 11,
    color: "#FFB6C1", // Rosa Claro suave
    marginBottom: 2,
  },
  metaValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  metaSeparador: {
    width: 1,
    height: 28,
    backgroundColor: "rgba(255, 182, 193, 0.4)", // Divisor em rosa claro transparente
  },
  secao: {
    margin: 16,
    backgroundColor: "#1A1A1A", // Card em cinza escuro para se destacar do fundo preto
    borderRadius: 12,
    padding: 16,
    shadowColor: "#FF1493", // Sombra sutil rosa
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF1493", // Rosa Choque para os títulos das seções chamarem atenção
    marginBottom: 10,
  },
  detalheTexto: {
    fontSize: 14,
    color: "#FFFFFF", // Texto principal em branco para leitura confortável no escuro
    lineHeight: 22,
  },
  botao: {
    margin: 16,
    marginTop: 4,
    backgroundColor: "#FF1493", // Botão principal em Rosa Choque
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 32,
    shadowColor: "#FF1493",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  // Solução do TODO: O botão ativo assume um tom de Rosa Claro para indicar o clique/foco
  botaoAtivo: {
    backgroundColor: "#FFB6C1", 
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000", // Texto preto dentro do botão rosa para contraste perfeito
  },
});