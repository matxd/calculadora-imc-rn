import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultLabel: {
        flex: 1,   
        paddingTop: 10,
        alignItems: "center",
        width: "100%",
        fontSize: 25,
        color: "#ffffff",
        fontWeight: "bold",
    },
    resultInfo: {
        fontSize: 25,
        color: "#ffffff",
        fontWeight: "bold"
    },
    viewShare: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shareButton: {
        backgroundColor: "#4287f5",
        borderRadius: 50,
        margin: 25,
        paddingTop: 5,
        paddingBottom: 5,
    },
    shareText: {
        fontSize: 20,
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 20,
    }
})

export default styles