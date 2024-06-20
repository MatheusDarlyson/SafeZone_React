import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Alert } from 'react-native';

const validationSchema = yup.object().shape({
  matricula: yup.string().required('Informe sua matrícula'),
  senha: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

const Homepage = () => {
  const handleSubmit = async (values) => {
    try {
      // Simulação de armazenamento (substituir por lógica de banco de dados real quando estiver pronto)
      console.log('Valores do formulário:', values);
      Alert.alert('Sucesso', 'Escolha abaixo o que deseja fazer:');
    } catch (error) {
      console.error('Erro:', error);
      Alert.alert('Erro', 'Verifique seus dados e tente novamente.');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.HomeContent}>
          Faça seu Login:
        </Text>
      </View>
      <View style={styles.header}>
      </View>
      <Formik
        initialValues={{ matricula: '', senha: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      // onSubmit={values => {
      //   console.log(values);
      // }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
      
            <TextInput
              placeholder="Matrícula"
              onChangeText={handleChange('matricula')}
              onBlur={handleBlur('matricula')}
              value={values.matricula}
              style={styles.input}
            />
            {touched.matricula && errors.matricula && <Text style={styles.errorText}>{errors.matricula}</Text>}

            <TextInput
              placeholder="Senha"
              onChangeText={handleChange('senha')}
              onBlur={handleBlur('senha')}
              value={values.senha}
              style={styles.input}
              secureTextEntry
            />
            {touched.senha && errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

            <Button title="Entrar" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderColor: 'darkblue',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
  HomeContent: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 35,
  },
});

export default Homepage;