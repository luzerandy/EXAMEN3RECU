import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ApiContext } from "../context/context";

export default function Quotes() {
    const { Quotes } = useContext(ApiContext)
    return (
        <View style={styles.container}>
            <Text style={{fontSize:40, paddingTop:10}}>Quotes</Text>
            <ScrollView>
                {Quotes.map((a) =>
                    <View>                   
                        <Text style={{fontSize:25, paddingTop:20, textAlign:'center'}}>"{a.q}"</Text>
                    </View>
                )}
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop:30
    },
});