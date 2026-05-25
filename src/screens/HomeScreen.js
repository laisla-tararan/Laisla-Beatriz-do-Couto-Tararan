// TODO: estilizar esta tela com as cores e identidade visual do seu tema
import { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const jogos = [
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
  {
    id: '3',
    titulo: 'Grand Theft Auto V',
    genero: 'Acao / Aventura',
    plataforma: 'PS4 / PC',
    nota: '10/10',
    sinopse:
      'A história de Grand Theft Auto V gira em torno de três criminosos em Los Santos: um jovem malandro de rua (Franklin), um ladrão de bancos aposentado (Michael) e um psicopata (Trevor). Suas vidas se cruzam quando se envolvem com o submundo do crime e agências corruptas.',
  },
  {
    id: '4',
    titulo: '8 Ball Pool',
    genero: 'Simulação',
    plataforma: 'Mobile',
    nota: '9/10',
    sinopse:
      'O objetivo é encaçapar todas as suas bolas (lisas ou listradas) e, por fim, a bola 8 preta antes do adversário, competindo em torneios 1x1, subindo de nível e ganhando recompensas.',
  },
  {
    id: '5',
    titulo: 'The Last of Us',
    genero: 'Simulação / Aventura',
    plataforma: 'PC / Switch / PS4',
    nota: '10/10',
    sinopse:
      'Acompanha Joel, um contrabandista endurecido, encarregado de escoltar Ellie, uma adolescente de 14 anos, para fora de uma zona de quarentena militar. O que começa como um pequeno trabalho se transforma em uma jornada brutal e emocionante pelos Estados Unidos, arruinados por uma pandemia fúngica que dizimou a civilização.',
  },
  {
    id: '6',
    titulo: 'Stardew Valley',
    genero: 'Simulacao / RPG',
    plataforma: 'PC / Switch / Mobile',
    nota: '9/10',
    sinopse:
      'Herde a fazenda do seu avo e comece uma nova vida. Plante, colete, construa relacionamentos e explore cavernas neste mundo relaxante.',
  },
];

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState('');
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    setJogosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detalhe', { ...item })}>
        <View style={styles.cardIcone}>
          {/* TODO: substituir pela inicial do titulo ou outro elemento do seu tema */}
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
          <Text style={styles.cardSubtitulo}>{item.plataforma}</Text>
          <Text style={styles.cardSubtitulo}>{item.nota}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}> Tararan Games </Text>
        <Text style={styles.headerSubtitulo}>
          Escolha um jogo para saber mais, Diva(o)!
        </Text>
      </View>
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>
      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  buscaContainer: {
    backgroundColor: '#eeeeee',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  buscaInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#1A1A1A',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#333333',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitulo: {
    fontSize: 13,
    color: '#CCCCCC',
    marginTop: 4,
  },
  lista: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardIconeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555555',
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: '#888888',
  },
});
