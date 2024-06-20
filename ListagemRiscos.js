import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListagemRiscos() {
  const [riscos, setRiscos] = useState([]);

  useEffect(() => {
    // Carregar os riscos ao montar a página
    carregarRiscos();
  }, []);

  const carregarRiscos = async () => {
    try {
      // Carregar os riscos do AsyncStorage
      const riscosArmazenados = await AsyncStorage.getItem('riscos');
      if (riscosArmazenados !== null) {
        setRiscos(JSON.parse(riscosArmazenados));
      }
    } catch (error) {
      console.error('Erro ao carregar riscos:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Setor / Área: {item.area}</Text>
      <Text>Data: {item.data}</Text>
      <Text>Turno: {item.turno}</Text>
      <Text>Descrição: {item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Riscos Cadastrados</Text>
      <FlatList
        data={riscos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
