import { StyleSheet } from 'react-native'
import Dimensions from "Dimensions";

export default StyleSheet.create({
    container:{
        backgroundColor:'#9C1C26',
        flex:1,
        justifyContent:'center'
    },
    containera:{
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
        paddingBottom:0
    },
    containerb:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15
    },
    containerc:{ 
        flexDirection:'row', 
        justifyContent:'space-between',
        borderTopWidth:1,
        borderTopColor:'rgba(0,0,0,0.2)',
        padding:8,
        paddingLeft:20,
        paddingRight:20
    },
    containerd:{
        flexDirection:'row', 
        justifyContent:'space-between',
        width:70
    },
    containere:{
        width: 20, 
        height: 20,
        alignSelf:'flex-end'
    },
    containerf:{
        padding:5,
        alignSelf:'stretch',
        borderRadius:20,
        borderColor:'#9C1C26',
        borderWidth:2
    },
    containerg:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        borderBottomColor:'rgba(0,0,0,0.1)',
        borderBottomWidth:1 ,
        //paddingRight:20
    },
    containerh:{
        flexDirection:'row',
        backgroundColor:'white',
        borderBottomColor:'rgba(0,0,0,0.1)',
        borderBottomWidth:1,
        position:'relative',
        height:120 
    },
    positiona:{
        position:'relative'
    },
    positionb:{
        position:'absolute'
    },
    radiusa:{
        borderRadius:5
    },
    containeri:{
        flex:1,
        position:'absolute',
        left:0,
        top:0,
        bottom:0,
        padding:20
    },
    containerj:{
        flex:2,
        backgroundColor:'#9C1C26',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15
    },
    containerk:{
        backgroundColor:'white',
        height:'70%',
        paddingTop:0,
        padding:10,
        paddingBottom:25
    },
    containerl:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5
    },
    containerm:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    containern:{
        flexDirection:'row',
        alignItems:'center'
    },
    button:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    toucha:{
        padding:12,
        backgroundColor:'rgba(0,0,0,0.05)',
        borderRadius:50
    },
    dimensiona:{
        width: 25, 
        height: 25,
    },
    flexa:{
        alignItems:'center'
    },
    textColora:{
        color:'#9C1C26'
    },
    textColorb:{
        color:'#FFFFFF'
    },
    textColorc:{
        color:'#000000'
    },
    button__Long:{
        height:50,
    },
    button__Longa:{
        height:45,
    },
    button_short:{
        height:35,
    },
    button__Widea:{
        width:179,
    },
    button__Wideb:{
        width:168
    },
    button__Widec:{
        width:158
    },
    button__Wided:{
        width:80
    },
    button__Widee:{
        width:82
    },
    button__Wide__Medium:{
        width:120
    },
    input:{
        
        height:50,
        fontSize:18
    },
    all_width:{
        width: Dimensions.get("window").width,
    },
    all_height:{
        width: Dimensions.get("window").height,
    },
    hideDisplay:{
        opacity:0
    },
    input_holder:{
        width: Dimensions.get("window").width,
        borderBottomColor:'rgba(255,255,255,0.8)',
        borderBottomWidth:1,
        marginLeft: -10, 
    },
    heighta:{
        height:16
    },
    widtha:{
        width:'90%'
    },
    Password__Input__Container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    simple_Margin:{
        marginTop:10,
        marginBottom:10
    },
    textWeight:{
        fontWeight:'bold'
    },
    anima:{ 
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:"rgba(156,28,38,0.1)",
        justifyContent:"center",
        alignItems:"center"
    },
    texta:{
        fontSize:18,
        color:'#9C1C26'
    },
    textb:{
        fontSize:20,
        color:'rgba(0,0,0,.5)'
    },
    textc:{
        fontSize:20,
        color:'#9C1C26',
        marginTop:8
    },
    textd:{
        padding:5,
        margin:5,
        color:'#9C1C26',
        borderLeftWidth:1,
        borderColor:'rgba(0,0,0,.2)',
        borderTopWidth:0,
        borderBottomWidth:0
    },
    imagea:{
        width:80,
        height:80,
        borderRadius:40
    },
    flexb:{
        flex:2
    },
    flexc:{
        flex:1
    },
    loading__a:{
            position:'absolute',
            right:0,
            top:0,
            width:90,
            height:119
    },
    button__a:{
        backgroundColor:'#9C1C26',
        borderRadius:5
    },
    textd:{
        padding:5,
        margin:5,
        color:'#9C1C26',
        borderLeftWidth:1,
        borderColor:'#9C1C26',
        borderTopWidth:0,
        borderBottomWidth:0
    },
    topa:{
        marginTop:15
    },
    flexd:{
        justifyContent:'space-between'
    },
    topb:{
        marginBottom:5 
    },
    texte:{
        fontSize:18,
        color:'#9C1C26',
        fontWeight:'600'
    },
    textf:{
        fontSize:18,
        color:'rgba(0,0,0,0.3)',
        fontWeight:'500'
    },
    textg:{
        fontSize:18,
        fontWeight:'600',
        marginBottom:5
    },
    textInputa:{
        height: 35, 
        borderColor: 'rgba(0,0,0,.2)', 
        borderWidth: 1,
        paddingLeft:10,
        borderRadius:5,
        color:'rgb(0,0,0)'
    },
    fullWidth: {
        width: Dimensions.get("window").width,
    },
    width80: {
        width: Dimensions.get("window").width * 4 / 5,
    },
    centeredView : {
        justifyContent: "center",
        height: "auto",
        flexDirection: "column",
        alignItems: "center"
    },
    faq: {
        position: "absolute",
        right: 0,
    },
    signout: {
      position: "absolute",
      height: 60,
      left: 10,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    },
})

export const colors={
    b:"#ffffff",
    a:'#9C1C26',
    aa:'rgba(156,28,38,1)',
    c:'#000000'
}