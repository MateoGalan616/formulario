import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nombre:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      />

      <Text>Email:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />

      <Text>Contraseña:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}
