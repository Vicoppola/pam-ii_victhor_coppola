import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome5 } from '@expo/vector-icons'; // Biblioteca de ícones que contém o ícone do Discord

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleForgotPassword = () => {
    console.log("Esqueceu a senha pressionado");
  };

  const handleBackPress = () => {
    console.log("Back button pressed");
  };

  return (
    <View style={styles.container}>
      {/* Detalhes de fundo estilizados */}
      <View style={styles.backgroundCircle1} />
      <View style={styles.backgroundCircle2} />
      <View style={styles.backgroundSquare} />

      {/* Botão de Voltar no canto superior esquerdo */}
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Ícone do Discord acima do texto de boas-vindas */}
      <FontAwesome5 name="discord" size={50} color="#5865F2" style={styles.discordIcon} />

      <Text style={styles.welcomeText}>Welcome back!</Text>
      <Text style={styles.subtitle}>We’re so excited to see you again!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>ACCOUNT INFORMATION</Text>

        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          placeholderTextColor="#9E9E9E"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9E9E9E"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.icon}
          >
            <Icon
              name={passwordVisible ? 'visibility' : 'visibility-off'}
              size={20}
              color="#9E9E9E"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1F25',
    padding: 20,
    justifyContent: 'center',
  },
  // Estilos dos detalhes de fundo
  backgroundCircle1: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#3A3D44',
    opacity: 0.15,
    top: 60,
    left: -40,
  },
  backgroundCircle2: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#3A3D44',
    opacity: 0.15,
    bottom: 120,
    right: -30,
  },
  backgroundSquare: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 15,
    backgroundColor: '#3A3D44',
    opacity: 0.1,
    top: -50, // Posiciona o quadrado no topo
    right: -50, // Posiciona o quadrado no canto direito
    transform: [{ rotate: '15deg' }],
  },
  // Botão de "Back" no canto superior esquerdo
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  // Ícone do Discord acima do texto de boas-vindas
  discordIcon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#B0B3B8',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: '#9E9E9E',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#2E3239',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordContainer: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  forgotPasswordText: {
    color: '#5865F2',
    textAlign: 'left',
    marginTop: 5,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#5865F2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
