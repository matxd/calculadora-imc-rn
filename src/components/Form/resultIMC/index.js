import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultadoIMC(props){

    const compartilhar = async () => {
        const resultado = await Share.share({
            message: `Meu IMC hoje é: ${props.resultadoIMC}`,
        })
    }

    return (
        <View style={styles.resultLabel}>
            <Text style={styles.resultInfo}>{props.mensagemResultado}</Text>
            <Text style={styles.resultInfo}>{props.resultadoIMC}</Text>
            <View style={styles.viewShare}>
                { props.resultadoIMC != null ? <TouchableOpacity onPress={compartilhar} style={styles.shareButton}><Text style={styles.shareText}>Compartilhar</Text></TouchableOpacity> : <View/> }
            </View> 
        </View>
    )
}