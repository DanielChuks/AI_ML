import { StyleSheet } from 'react-native'
import normalize from './normalize';
const { RATIO_X, RATIO_Y, DEVICE_HEIGHT, DEVICE_WIDTH } = normalize;


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
        width:70 * RATIO_X
    },
    containere:{
        width: 20 * RATIO_X, 
        height: 20 * RATIO_Y,
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
        height:120 * RATIO_Y
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
        paddingTop:15 * RATIO_Y,
        paddingBottom:15 * RATIO_Y
    },
    containerk:{
        backgroundColor:'white',
        height:'70%',
        paddingTop:0,
        padding:10,
        paddingBottom:25 * RATIO_Y
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
        width: 25 * RATIO_X, 
        height: 25 * RATIO_Y,
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
        height:50 * RATIO_Y,
    },
    button__Longa:{
        height:45 * RATIO_Y,
    },
    button_short:{
        height:35 * RATIO_Y,
    },
    button__Widea:{
        width:179 * RATIO_X,
    },
    button__Wideb:{
        width:168 * RATIO_X
    },
    button__Widec:{
        width:158 * RATIO_X
    },
    button__Wided:{
        width:80 * RATIO_X
    },
    button__Widee:{
        width:82 * RATIO_X
    },
    button__Wide__Medium:{
        width:120 * RATIO_X
    },
    input:{
        
        height:50 * RATIO_Y,
        fontSize:18
    },
    all_width:{
        width: DEVICE_WIDTH,
    },
    all_height:{
        width: DEVICE_HEIGHT,
    },
    hideDisplay:{
        opacity:0
    },
    input_holder:{
        width: DEVICE_WIDTH,
        borderBottomColor:'rgba(255,255,255,0.8)',
        borderBottomWidth:1 * RATIO_X,
        marginLeft: -10 * RATIO_X, 
    },
    heighta:{
        height:16 * RATIO_Y
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
        marginTop:10 * RATIO_Y,
        marginBottom:10 * RATIO_Y
    },
    textWeight:{
        fontWeight:'bold'
    },
    anima:{ 
        width:80 * RATIO_X,
        height:80 * RATIO_Y,
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
        marginTop:8 * RATIO_Y
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
        width:80 * RATIO_X,
        height:80 * RATIO_Y,
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
            width:90 * RATIO_X,
            height:119 * RATIO_Y
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
        marginTop:15 * RATIO_Y
    },
    flexd:{
        justifyContent:'space-between'
    },
    topb:{
        marginBottom:5 * RATIO_Y
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
        marginBottom:5 * RATIO_Y
    },
    textInputa:{
        height: 35 * RATIO_Y, 
        borderColor: 'rgba(0,0,0,.2)', 
        borderWidth: 1,
        paddingLeft:10 * RATIO_X,
        borderRadius:5,
        color:'rgb(0,0,0)'
    },
    fullWidth: {
        width: DEVICE_WIDTH,
    },
    width80: {
        width: DEVICE_WIDTH * 4 / 5,
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
      height: 60 * RATIO_Y,
      left: 10 * RATIO_X,
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