import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
           
    },
    headerContainer: {
        flexDirection: "row",     
    },       
    bodyContainer: {
        flex: 1,      
        justifyContent:"space-between",
        padding:10,
        marginLeft:10,
        marginRight:14,  
         
    },   
    image: {
        width: 100,
        minHeight: 120,
        borderRadius: 5,       
        resizeMode: "contain",
        marginLeft:5
             
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "tomato",
        textAlign:"right",      
    }
});