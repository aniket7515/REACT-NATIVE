import { Text, View ,StyleSheet, FlatList} from 'react-native';
import React, { PureComponent } from 'react';

const FlatListDemo =()=> {
    const names=[
        { 
            key:"1",
            name:"Aniket"
        },
        { 
            key:"2",
            name:"Harshit"
        },
        { 
            key:"3",
            name:"Devesh"
        },
        { 
            key:"4",
            name:"Anup"
        },

    ];
  
    return (
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={names} renderItem={({item})=>{
            console.log(item.name);
            return <Text style={styles.textStyle}>{item.name}</Text>
        }}/>
     
    );
  
}
const styles=StyleSheet.create({
    textStyle:{
        fontSize:40,
        padding:30,
        backgroundColor:"blue",
        margin:20,
        color:"white",

    },
    


})

export default FlatListDemo;
