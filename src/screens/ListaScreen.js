// TODO: estilizar esta tela com as cores e identidade visual do seu tema

import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CardJogo } from '../components/index';

// Dados de exemplo para voce visualizar o renderItem funcionando
// Em um app real, esses itens chegariam via route.params enviados pela DetalheScreen
const jogosMock = [
  {
    id: '1',
    titulo: 'HayDay',
    genero: 'Jogo eletrônico de estratégia',
    plataforma: 'Mobile / PC',
    nota: '10/10',
    sinopse:
      'No game, você recebe um pedaço de terra como herança e precisa cuidar de plantações e animais, gerando lucro com a venda de produtos como queijo, manteiga, torta, bolo, pipoca e até roupas.',
  },
  {
    id: '2',
    titulo: 'Roblox',
    genero: 'RGPs / Simulações / Terror',
    plataforma: 'PS4 / Xbox / PC / Mobile',
    nota: '10/10',
    sinopse:
      'O Roblox é uma plataforma global imersiva e um sistema de criação onde usuários podem programar e jogar uma infinidade de jogos criados pela própria comunidade Wikipedia.',
  },
];

export default function ListaScreen({ route }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);
  // Para receber um jogo salvo da DetalheScreen via route.params:
  if (route.params?.novoJogo) {
    setItensSalvos(prev => [...prev, route.params.novoJogo]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Lista das Mais Mais</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardJogo titulo={item.titulo} genero={item.genero} plataforma={item.plataforma} nota={item.nota} />
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>T</Text>
            </View>
            <Text style={styles.titulo}>Nenhum jogo salvo</Text>
            <Text style={styles.descricao}>Sua lista aparecerá aqui</Text>
            <Text style={styles.dica}>
              Acesse um jogo e toque em "Adicionar a Lista" para salva-lo aqui.
            </Text>
          </View>
        }
        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
      />
    </SafeAreaView>
  );
}

// TODO: ajuste as cores para o tema do seu app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // Fundo preto puro para seguir o padrão do app
  },
  header: {
    backgroundColor: "#121212", // Cabeçalho ligeiramente cinza escuro
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#FF1493", // Linha divisória em rosa choque
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF", // Título do topo em branco limpo
  },
  listaVazia: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  iconeContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "rgba(255, 20, 147, 0.15)", // Fundo rosa choque bem transparente para efeito "Glow"
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#FF1493", // Borda fina em rosa choque para dar acabamento ao círculo
  },
  icone: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF1493", // Ícone central em Rosa Choque vibrante
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF", // Título da mensagem em branco para contrastar no fundo preto
    marginBottom: 8,
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#FFB6C1", // Descrição em Rosa Claro, dando destaque suave à mensagem principal
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  dica: {
    fontSize: 13,
    color: "#A0A0A0", // Cinza claro neutro para a dica menor não brigar com as outras cores
    textAlign: "center",
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#1A1A1A", // Card em cinza escuro (estilo dark mode premium)
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 182, 193, 0.1)", // Borda quase invisível em rosa claro para elegância
  },
});
