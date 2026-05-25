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
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#333333",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
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
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  icone: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#555555",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 8,
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#555555",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  dica: {
    fontSize: 13,
    color: "#888888",
    textAlign: "center",
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 8,
    padding: 16,
  },
});
