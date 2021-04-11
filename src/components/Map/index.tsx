import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, {Geojson} from 'react-native-maps';

import Ma from '../../geodata-br-master/geojson/geojs-21-mun.json'

export default function Map() {
    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map}
            initialRegion={{
                latitude: -5.8056385,
                longitude: -45.3112443,
                latitudeDelta: 8,
                longitudeDelta: 8,
            }}
        >
            <Geojson geojson={Ma} 
                    strokeColor="blue"
                    fillColor="white"
                    strokeWidth={2}
            />
        </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        width: '95%',
        height: 330,
        marginTop: 16,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    map:{
        width: '100%',
        height: '100%',
    }
});