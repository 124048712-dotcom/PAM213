import { Text, View, FlatList,StyleSheet } from 'react-native'
import {useState} from 'react'

class Producto{
  constructor(id, titulo, descripcion, precio){
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

export const productos2 =[
  new Producto('1', 'Audifonos', 'Experimenta algo sensacional',99),
  new Producto('2', 'Celular', 'Tecnologico',2000),
  new Producto('3', 'Lentes', 'Para una mejor vista',900),
  new Producto('4', 'Mochila', 'Necesario para la uni',1000),
];

const FlatListScreen = () => {
  const[productList, setProductList] = useState(productos2);

  return(
    <View style={styles.lista}>
      <FlatList
          data = {productList}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
            <View style={styles.item}>
              <Text>{item.titulo}</Text>
              <Text>{item.descripcion}</Text>
              <Text>{item.precio}</Text>
              <Text>Ver detalles</Text>
            </View>
          )}
        
        />
    </View>
  )
}

const styles = StyleSheet.create({
    lista: {
      paddingVertical: 200
  
    },

    item: {
      padding: 15, 
      marginVertical: 8,
      marginHorizontal: 16, 
      backgroundColor: '#f0f0f0', 
     }
})
export default FlatListScreen
