import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import axios from 'axios';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);


  const handleCadastro = async () => {
    
    if (!nome || !email || !senha || !confirmarSenha || !telefone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    setLoading(true);

    try {
      const dadosUsuario = {
        nome,
        email,
        senha,
        telefone
      };
      console.log('Dados do formulário:', dadosUsuario);
      
      /*
      // Código para quando for conectar com o back-end:
      const response = await axios.post('https://portadobackend/api/cadastro', dadosUsuario);
      
      if (response.data.success) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        setConfirmarSenha('');
        setTelefone('');
      } else {
        Alert.alert('Erro', response.data.message || 'Erro ao cadastrar');
      }
      */

      Alert.alert('Sucesso', 'Dados capturados com sucesso (verifique o console)');
      
    } catch (error) {
      console.error('Erro:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao processar os dados');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image
          source={require('./assets/ilumina.png')}
          style={styles.img}
          resizeMode='contain'
        />
      </View>
      
      <TextInput
        label="Nome Completo"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        style={styles.input}
        activeOutlineColor="#4CAF50"
        outlineColor="#ccc"
        left={<TextInput.Icon icon="account" />}
      />

      <TextInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        activeOutlineColor="#4CAF50"
        outlineColor="#ccc"
        left={<TextInput.Icon icon="email" />}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        mode="outlined"
        style={styles.input}
        activeOutlineColor="#4CAF50"
        outlineColor="#ccc"
        left={<TextInput.Icon icon="lock" />}
        secureTextEntry={!showSenha}
        right={
          <TextInput.Icon 
            icon={showSenha ? "eye-off" : "eye"} 
            onPress={() => setShowSenha(!showSenha)}
          />
        }
      />

        <TextInput
        label="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        mode="outlined"
        style={styles.input}
        activeOutlineColor="#4CAF50"
        outlineColor="#ccc"
        left={<TextInput.Icon icon="lock-check" />}
        secureTextEntry={!showConfirmarSenha}
        right={
          <TextInput.Icon 
            icon={showConfirmarSenha ? "eye-off" : "eye"} 
            onPress={() => setShowConfirmarSenha(!showConfirmarSenha)}
          />
        }
      />

      <TextInput
        label="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        mode="outlined"
        style={styles.input}
        activeOutlineColor="#4CAF50"
        outlineColor="#ccc"
        left={<TextInput.Icon icon="phone" />}
        keyboardType="phone-pad"
      />

      <Button
        mode="contained"
        onPress={handleCadastro}
        style={styles.button}
        labelStyle={styles.buttonLabel}
        icon="account-plus"
        loading={loading}
        disabled={loading}
      >
        {loading ? 'Processando...' : 'Cadastrar'}
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  img: {
    width: 265,
    left: 45,
    bottom: 35
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    paddingVertical: 8,
    backgroundColor: '#4CAF50',
  },
  buttonLabel: {
    fontSize: 16,
  },
});