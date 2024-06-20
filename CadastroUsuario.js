import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  matricula: yup.string().required('Matrícula é obrigatória'),
  funcao: yup.string().required('Função é obrigatória'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

  const CadastroUsuario = () => {
    const handleCadastro = async (values) => {
      try {
        // Simulação de armazenamento (substituir por lógica de banco de dados real quando estiver pronto)
        console.log('Valores do formulário:', values);
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso! Realize o login para acessar sua conta.');
      } catch (error) {
        console.error('Erro:', error);
        Alert.alert('Erro ao cadastrar usuário', 'Ocorreu um erro ao tentar cadastrar o usuário.');
      }
    };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.HomeContent}>
          É novo por aqui? Realize seu cadastro e acesse a plataforma:
        </Text>
      </View>
      <View style={styles.header}>
      </View>
      <Formik
        initialValues={{ nome: '', nomeEmpresa: '', matricula: '', funcao: '', email: '', senha: '' }}
        validationSchema={validationSchema}
        onSubmit={handleCadastro}
        // onSubmit={values => {
        //   console.log(values);
        // }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <TextInput
              placeholder="Nome"
              onChangeText={handleChange('nome')}
              onBlur={handleBlur('nome')}
              value={values.nome}
              style={styles.input}
            />
            {touched.nome && errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

            <TextInput
              placeholder="Nome da Empresa"
              onChangeText={handleChange('nomeEmpresa')}
              onBlur={handleBlur('nomeEmpresa')}
              value={values.nomeEmpresa}
              style={styles.input}
            />
            {touched.nomeEmpresa && errors.nomeEmpresa && <Text style={styles.errorText}>{errors.nomeEmpresa}</Text>}

            <TextInput
              placeholder="Matrícula"
              onChangeText={handleChange('matricula')}
              onBlur={handleBlur('matricula')}
              value={values.matricula}
              style={styles.input}
            />
            {touched.matricula && errors.matricula && <Text style={styles.errorText}>{errors.matricula}</Text>}

            <TextInput
              placeholder="Função"
              onChangeText={handleChange('funcao')}
              onBlur={handleBlur('funcao')}
              value={values.funcao}
              style={styles.input}
            />
            {touched.funcao && errors.funcao && <Text style={styles.errorText}>{errors.funcao}</Text>}

            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
              keyboardType="email-address"
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              placeholder="Senha"
              onChangeText={handleChange('senha')}
              onBlur={handleBlur('senha')}
              value={values.senha}
              style={styles.input}
              secureTextEntry
            />
            {touched.senha && errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

            <Button title="Cadastrar" onPress={handleSubmit} />
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
    textAlign: 'justify',
    fontSize: 20,
    paddingTop: 35,
  },
});

export default CadastroUsuario;