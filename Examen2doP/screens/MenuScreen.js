import { Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
export default function MenuScreen (){
 const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'Galeria':
            return <GaleriaScreen/>

                    case 'menu':
            default:
                    return (
                        <View style={styles.container}>
                        <Text style={styles.title}>Menu</Text>

                        <Button title='Pract:Galeria'color="#4D7C8A" onPress={()=>setScreen('Galeria')}/>


                        </View>
                    )
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f9c96',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1B4079',
    marginBottom: 25,
    textAlign: 'center',
  },


});
