import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

AsyncStorage.setItem('riscos', JSON.stringify([]));


export default function App() {
  const [facing, setFacing] = useState('back');
  const [area, setArea] = useState('');
  const [data, setData] = useState('');
  const [turno, setTurno] = useState('manha');
  const [descricao, setDescricao] = useState('');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const handleCadastroPress = () => {
    // Exemplo de armazenamento local no estado
    const novoRisco = { area, data, turno, descricao };
    console.log('Novo risco:', novoRisco);

    
  
    // Limpar o formulário após o envio
    setArea('');
    setData('');
    setTurno('manha');
    setDescricao('');
  
    // Exibir um alerta ou mensagem de sucesso
    Alert.alert('Sucesso', 'Risco cadastrado com sucesso!');
  };
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Pontos de Risco</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Setor / Área:</Text>
          <TextInput
            style={styles.input}
            placeholder="Onde se encontra o risco?"
            value={area}
            onChangeText={setArea}
            required
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Data:</Text>
          <TextInput
            style={styles.input}
            placeholder="Data"
            value={data}
            onChangeText={setData}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Turno:</Text>
          <TextInput
            style={styles.input}
            placeholder="Turno"
            value={turno}
            onChangeText={setTurno}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Descrição:</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Descreva de forma direta o risco em questão:"
            value={descricao}
            onChangeText={setDescricao}
            multiline
          />
        </View>

        <CameraView style={styles.camera} facing={facing}>
        </CameraView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Girar câmera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCadastroPress}>
            <Text style={styles.text}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  camera: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
  },
  formGroup: {
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 30,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    margin: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});