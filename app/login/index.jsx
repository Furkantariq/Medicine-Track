import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'



export default function LoginScreen() {
    const router =useRouter()
  return (
    <View style={styles.rootcontainer}>
      <Image style={styles.Image}
      source={require('../../assets/images/login.png')}/>
     <View style={styles.textContainer}>
     <Text style={styles.text}>Stay on Track, Stay Healthy</Text>
     <Text style={styles.Text}>Track your med, take control of your healths, Stay Consistent, Stay Confident </Text>
     <TouchableOpacity style={styles.button} 
     onPress={()=> router.push('login/signin')}>
        <Text style={styles.buttonstyling}>
            Continue
        </Text>
     </TouchableOpacity>
     <Text style={styles.Text}> Note: By Clicking button, you will agree to our terms and conditions</Text>
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Image:{
        marginTop:10,
        width:210,
        height:450,
        
       alignSelf:'center',
       marginBottom:10,
       borderRadius:10,
    },
    rootcontainer:{
        flex:1,
        
       
        marginTop:40,
       
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        padding:20,
        textAlign:'center',
        color:'white'

    },
    textContainer:{
        flex:1,
        backgroundColor:'#007dfc',
        padding:20,

    },
    Text:{
        color:'white',
        textAlign:'center',
        marginHorizontal:20,
        marginVertical:10,

    },
    button:{
        backgroundColor:'white',
        borderRadius:20,
        marginHorizontal:40,
        marginTop:30
    },
    buttonstyling:{
        padding:10,
        textAlign:'center',
        fontSize:15,
        color:'#007dfc'
        

    }



})