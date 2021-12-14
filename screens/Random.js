import React, { useContext } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ApiContext } from "../context/context";

export default function Random() {
    const { Random } = useContext(ApiContext)
    return (
        <View style={styles.container}>
            <Text style={{fontSize:40, paddingTop:50}}>Random</Text>
            {Random.map((a) =>
                <Text style={{fontSize:25, paddingTop:200}}>"{a.q}"</Text>
            )}
        
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
