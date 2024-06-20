import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, ScrollView, View } from 'react-native';
import CadastroPontoRisco from './CadastroPontoRisco';
import CadastroUsuario from './CadastroUsuario';
import Homepage from './Homepage';
import ListagemRiscos from './ListagemRiscos';
import Map from './Map';
import icon from './assets/icon.png';

const App = () => {
  const [abaAtiva, setAbaAtiva] = useState('App');
  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case 'Homepage':
        return <Homepage />;
      case 'CadastroPontoRisco':
        return <CadastroPontoRisco />;
      case 'CadastroUsuario':
        return <CadastroUsuario />;
      case 'ListagemRiscos':
        return <ListagemRiscos />;
      case 'Map':
        return <Map />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Linha dupla header */}
      <View style={styles.header}>
      </View>
      {/*Header (nome/foto) */}
      <View style={styles.header}>
        <View style={styles.foto}>
          <Image source={icon} style={{ width: 100, height: 100 }} />
        </View>
        <View style={styles.nomeApp}>
          <Text style={styles.nomeApp}>SafeZone</Text>
          <Text style={styles.sloganApp}>Defesa Inigualável</Text>
        </View>
      </View>

      <View style={styles.Home}>
        <Text style={styles.HomeContentTitle}>
          Olá colaborador.
        </Text>
        <Text style={styles.HomeContentTitle}>
          Seja bem vindo a sua SafeZone!
        </Text>
      </View>

      <View style={styles.content}>{renderizarConteudo()}</View>

      <View style={styles.menu}>
        <Text
          style={[styles.menuItem, abaAtiva === 'CadastroUsuario' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('CadastroUsuario')}
        >
          Cadastro
        </Text>
        <Text
          style={[styles.menuItem, abaAtiva === 'Homepage' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('Homepage')}
        >
          Login
        </Text>
        <Text
          style={[styles.menuItem, abaAtiva === 'CadastroPontoRisco' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('CadastroPontoRisco')}
        >
          Cadastrar Risco
        </Text>
        <Text
          style={[styles.menuItem, abaAtiva === 'ListagemRiscos' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('ListagemRiscos')}
        >
          Listagem de Riscos
        </Text>
        <Text
          style={[styles.menuItem, abaAtiva === 'Map' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('Map')}
        >
          Visualizar Mapa
        </Text>
      </View>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79ada2',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#09292c',
    backgroundColor: '#00b0e9',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nomeApp: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  sloganApp: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#09292c',
  },
  menuItem: {
    fontSize: 12,
    color: '#09292c',
  },
  menuItemAtiva: {
    fontWeight: 'bold',
    color: 'blue',
  },
  Home: {
    // alignItems: 'center',
    paddingTop: 35,
  },
  HomeContentTitle: {
    textAlign: 'center',
    // paddingBottom: 35,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  HomeContent: {
    textAlign: 'justify',
    fontSize: 25,
  },
});


export default App;
