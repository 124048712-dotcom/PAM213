import { Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import { FlatList, TextInput } from 'react-native-web';
import TextInputScreen from './TextInputScreen';
import ImageScreen from './ImageScreen';
import ScrollViewScreen from './ScrollViewScreen';

import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import Repaso1Screen from './Repaso1Screen';
import IndicatorScreen from './IndicatorScreen';
import SeccionListScreen from'./SeccionListScreen';


export default function MenuScreen() {

    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'TextInput':
            return <TextInputScreen/>
        case 'ImageBackground':
            return <ImageScreen/>
        case 'ScrollView':
            return <ScrollViewScreen/>
        case'Indicator':
            return<IndicatorScreen/>
        case 'FlatList':
            return<FlatListScreen/>
        case'SeccionList':
            return<SeccionListScreen/>
        case 'Modal':
            return<ModalScreen/>
        case 'BottomSheet':
            return<BottomSheetScreen/>
        case 'Repaso1':
            return<Repaso1Screen/>
        
        
        case 'menu':
            default:
                    return (
                        <View style={styles.container}>
                        <Text style={styles.title}>Menu de Practicas</Text>

                        <Button title='Pract:Contador'color="#4D7C8A" onPress={()=>setScreen('contador')}/>
                        <Button title='Pract:Buttons' color="#4D7C8A" onPress={()=>setScreen('botones')}/>
                        <Button title='Pract:TextInput' color="#4D7C8A" onPress={()=>setScreen('TextInput')}/>
                        <Button title='Pract:ImageBackground' color="#4D7C8A" onPress={()=>setScreen('ImageBackground')}/>
                        <Button title='Pract:ScrollView' color="#4D7C8A" onPress={()=>setScreen('ScrollView')}/>
                        <Button title='Pract:Indicator' color="#4D7C8A" onPress={()=>setScreen('Indicator')}/>
                        
                        <Button title='Pract:FlatList'color="#4D7C8A" onPress={()=>setScreen('FlatList')}/>
                        <Button title='Pract:SeccionList' color="#4D7C8A" onPress={()=>setScreen('SeccionList')}/>
                        <Button title='Pract:Modal'color="#4D7C8A" onPress={()=>setScreen('Modal')}/>
                        <Button title='Pract:Bottom Sheet'color="#4D7C8A" onPress={()=>setScreen('BottomSheet')}/>
                        <Button title='Pract:Repaso1'color="#4D7C8A" onPress={()=>setScreen('Repaso1')}/>
                        

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
