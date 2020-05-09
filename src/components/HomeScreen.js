import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native'
import styled from 'styled-components';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const images = [
    {img:require('../img/casita.png'),frase:'Quedate en casa'},
    {img:require('../img/distancia.png'),frase:'Manten tu distancia'}, 
    {img:require('../img/toserbien.png'),frase:'Cuidado al toser'},
    {img:require('../img/lavar.png'),frase:'Lava tus manos'}, 
    {img:require('../img/limpiar.png'),frase:'Limpia productos'}, 
    {img:require('../img/usocubrebocas.png'),frase:'Usa cubrebocas'},      
];

const HomeScreen = () => {

 

    return (
        <View style={styles.container}>            
            <View style={styles.headerContainer}>
                <View style={{ width: w / 2 }}>
                    <Text style={styles.heading}>COVID-19 </Text>
                    <Text  style={styles.des}>Conoce cuantos casos de covid-19 hay en mexico
                    y como evitar su propagacion.</Text>
                </View>
                <View style={{ width: w / 2 }}>
                    <Image
                        style={{ width: w / 2 ,height:w/2, }}
                        source={require('../img/virus.png')}
                    />
                </View>
            </View>
            <Text style={styles.prev}>Prevencion</Text>                    
            <View style={styles.caseContainer}>   

                {images.map((x,i) => {                    
                    return (
                        <View style={styles.cajita}  key={i.toString()}>
                        <Image
                            style={{ width: w / 6 ,height:w/6, }}
                            source={x.img}
                        />
                         <Text style={styles.textCajita}>{x.frase}</Text>
                    </View>      
                    )
                })}                                                     
            </View>


        
        </View>
    )
}

export default HomeScreen;


const Subtitle = styled.Text`
    font-weight:100;
    
`;



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        padding: 20,
        paddingHorizontal: 30,
        flexDirection: "row"
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15
    },
    des: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'left',
        marginTop: 10
    },
    caseContainer: {
        backgroundColor: '#ffff',
        padding: 20,   
        flex:1,        
        flexDirection:'row',     
        alignContent:'space-around',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#000',
        elevation: 3,        
        flexWrap:'wrap'
    },
    prev:{
        marginTop:10,
        marginBottom:10,
        marginHorizontal:10,
        fontWeight:'bold',
        fontSize:22,
    },
    cajita:{
        flexDirection:'column',        
        alignItems:'center',
        marginBottom:10,        
        width: w /3
    },
    textCajita:{
        fontSize:14,
        fontWeight:'500',
        marginTop:10,

    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#00796b',
        elevation: 3,
        borderRadius: 20,
        marginHorizontal: 20,
        shadowOffset: { width: 10, height: 10 },    
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        shadowRadius: 2,
        marginTop: 20,

    }
})

