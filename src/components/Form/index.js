import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native";
import ResultadoIMC from "./resultIMC";
import styles from "./style";

export default function Form(){

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [mensagemIMC, setMensagemIMC] = useState("Preencha o peso e a altura.")
    const [imc , setIMC] = useState(null)
    const [textoBotao, setTextoBotao] = useState("Calcular")
    const [mensagemError, setMensagemError] = useState(null)

    const calculaIMC = () => {
        let formataAltura = altura.replace(",",".")
        setIMC((peso / (formataAltura ** 2)).toFixed(1))
    }    
    const verificarIMC = () => {
        if(imc == null) {
            Vibration.vibrate()
            setMensagemError("Campo obrigatório.")
        }
    }
    const validacao = () => {
        if(peso != null && altura != null){
            calculaIMC()
            setMensagemIMC(`O seu IMC é: `)
            setTextoBotao("Calcular Novamente")            
            setAltura(null)
            setPeso(null)
            setMensagemError(null)
        }
        verificarIMC()
        setIMC(null)
        setTextoBotao("Calcular")
        setMensagemIMC("Preencha o peso e a altura.")   
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.viewPrincipal}>
                <Text style={styles.textNome}>Altura:</Text>
                <Text style={styles.textError}>{mensagemError}</Text>
                <TextInput style={styles.input} onChangeText={setAltura} value={altura} placeholder="Ex. 1.85 (m)" keyboardType="numeric"/>

                <Text style={styles.textNome}>Peso:</Text>
                <Text style={styles.textError}>{mensagemError}</Text>
                <TextInput style={styles.input} onChangeText={setPeso} value={peso} placeholder="Ex. 80 (kg)" keyboardType="numeric"/>

                <TouchableOpacity style={styles.button} onPress={() => validacao()} onPressIn={Keyboard.dismiss}>
                    <Text style={styles.textButton}>{textoBotao}</Text>
                </TouchableOpacity>
            </View>
            <ResultadoIMC mensagemResultado={mensagemIMC} resultadoIMC={imc}/>
        </Pressable>
    )
}