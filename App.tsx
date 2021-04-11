import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppLoading from 'expo-app-loading';
import { Ubuntu_500Medium, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Card from './src/components/Card'
import Map from './src/components/Map';
import SwitchLocation from './src/components/SwitchLocation';

export default function App() {
  const [fontLoaded] = useFonts({Ubuntu_500Medium, Ubuntu_700Bold});

  if(!fontLoaded){
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.logo}>
        <Text style={{ fontSize: 20, fontFamily: "Ubuntu_500Medium" }}>
          Painel Coronavírus // Brasil
        </Text>
      </View>

      <SwitchLocation />
      <ScrollView contentContainerStyle={{alignItems: 'center'}} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{ fontSize: 12, fontFamily: "Ubuntu_500Medium" }}>
            Última atualização às 17:30 29/10/1997
          </Text>
        </View>

        <Card
          label={"Casos confirmados"}
          data={"21546"}
          color={"#FFB900"}
        ></Card>
        <Card label={"Óbitos"} data={"3120"} color={"#FF0000"}></Card>
        <Card label={"Mortalidade"} data={"2,4%"} color={"#4D148C"}></Card>
        <Map />
        <Text style={styles.bottom}>@Joadson Teixeira</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#f0f0f5',
    justifyContent: 'center',
  },

  logo: {
    width: '100%', 
    height: 48, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottom: {
    height: 32
  }
});
