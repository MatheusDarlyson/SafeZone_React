import React, { useState, useEffect }  from 'react';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, StyleSheet } from 'react-native';

const Map = () => {

  // Constante de localizações do usuário
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [freightPrice, setFreightPrice] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada');
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Sua Localização atual
        </Text>
      </View>
      <View>
        {location && (
          <View>
            {/* Mostra ao usuário suas coordenadas atuais */}
            {/* <Text>Latitude: {location.latitude}</Text>
            <Text>Longitude: {location.longitude}</Text> */}

            {/* Markpoint do Usuário */}
            <MapView
              style={{ width: 500, height: 500 }}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title="Sua Localização"
              />
            </MapView>
            <View style={styles.map}>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#09292c',
  },
  map: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#09292c',
  },
});

export default Map;