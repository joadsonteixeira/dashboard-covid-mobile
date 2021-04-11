import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface CardConfig{
    label: string,
    data: string,
    color: string
}

export default function Card({label, data, color}:CardConfig){
    return (
        <View style={styles.container} >
            <View style={[styles.bar, {backgroundColor: color}]}></View>

            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.cardLabel}>{label}</Text>
                </View>
                <View>
                    <Text style={[styles.cardData, {color: color}]}>{data}</Text>
                </View>
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: '95%',
        height: 56,
        backgroundColor: '#f0f0f5',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 2,
        elevation: 5,
    },

    bar: {
        position: 'absolute',
        alignSelf: 'center',
        width: '30%',
        height: 4,
        backgroundColor: 'red',
        borderRadius: 5
    },

    textContainer: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
    },

    cardLabel: {
        color: 'black',
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: '500',
        fontSize: 16,
    },

    cardData: {
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: '500',
        fontSize: 28
    }
});

