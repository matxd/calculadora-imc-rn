import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        bottom: 0,
        backgroundColor: "#787878",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20,
    },
    viewPrincipal: {
        width: "100%",
        height: "auto",
        marginTop: 15,
        padding: 10,
    },
    textNome: {
        color: "#ffffff",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "bold",
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#bdc7c7",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    button: {
        borderRadius: 50,
        alignItems: "center",
        width: "90%",
        backgroundColor: "#4287f5",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButton: {
        fontSize: 20,
        color: "#ffffff",
        fontWeight: "bold"
    },
    textError: {
        fontSize: 15,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    }
})

export default styles