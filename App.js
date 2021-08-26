import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View>


      <MapView
        style={styles.mapa}
        initialRegion={{
          latitude: -23.552950,
          longitude: -46.399712,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421, 
        }}
      >

    <Marker
    coordinate={{
      latitude: -23.552950,
      longitude: -46.399712,
    }}
    title="Etec de Guaianazes"
    description="Rua Feliciano de Mendonça, 290 - Jardim Soares"
    />

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  
  mapa: {
    width: '100%',
    height: '100%'
  }
});