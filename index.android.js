import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  const numeroaleatorio = Math.random();
  alert(Math.floor(numeroaleatorio * 10));
};

const App = () => (
      <View>
        <Text>Meu Primeiro APP REACT-NATIVE!</Text>
        <Button
          title="Gerar numero randomico"
          onPress={geraNumeroAleatorio} 
        />
      </View>
    );


AppRegistry.registerComponent('teste', () => App);
