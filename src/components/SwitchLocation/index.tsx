import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
 
export default function SwitchLocation(){
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={{flexDirection: 'row'}}>
                    <AntDesign style={{paddingRight: 8}} name="enviroment" size={16} color="black" />
                    <Text style={{fontFamily: 'Ubuntu_500Medium'}}>Presidente Dutra, MA</Text>
                </View>
                <Text style={styles.link}>Alterar</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden', paddingBottom: 5, width: '100%'
    },
    textContainer: {
        width: '100%',
        height: 28,
        backgroundColor: '#f0f0f5',
        paddingHorizontal: 10,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    link:{
        fontFamily: 'Ubuntu_700Bold',
        color: 'blue',
    }
});