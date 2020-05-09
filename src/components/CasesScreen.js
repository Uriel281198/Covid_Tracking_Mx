import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Image,ActivityIndicator, Dimensions, FlatList } from 'react-native'
import styled from 'styled-components';
import AntDesign from 'react-native-vector-icons/AntDesign';

const w = Dimensions.get('window').width;

const CasesScreen = ({navigation }) => {

    const [isloading,setLoading] = useState(true);
    const [datos,setDatos] = useState([]);
    useEffect((x,i)=>{
        async function getdata(){
            const data = await fetch('https://api-anime-schedule.herokuapp.com/v1/covid');
            const resultado = await data.json()
            setDatos(resultado)   
            if(datos){
                setLoading(false)
            }       
        }
        getdata()
        
    },[])
    
    remderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <Text>{item.name}</Text>
                <AntDesign name="minus" color={"#fbc02d"} size={20} style={{ margin: 2 }} />
                <Text>{item.datos.confirmados}</Text>
                <AntDesign name="minus" color={"#4caf50"} size={20} style={{ margin: 2 }} />
                <Text>{item.datos.recuperadas}</Text>
                <AntDesign name="minus" color={"#d32f2f"} size={20} style={{ margin: 2 }} />
                <Text>{item.datos.muertes}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ width: w  }}>
                    <Text style={styles.heading}>Casos Totales en Mexico </Text>
                    <Text style={styles.des}>Conoce cuantos casos de covid-19 hay en mexico y como evitarlo</Text>                                        
                </View>              
            </View>

            <View style={styles.caseContainer}>
                <AntDesign name="minus" color={"#fbc02d"} size={20} style={{ margin: 2 }} />
                <Subtitle>Contagiados</Subtitle>
                <AntDesign name="minus" color={"#4caf50"} size={20} style={{ margin: 2 }} />
                <Subtitle>Recuperados</Subtitle>
                <AntDesign name="minus" color={"#d32f2f"} size={20} style={{ margin: 2 }} />
                <Subtitle>Fallecidos</Subtitle>
            </View>

            {isloading ?
                ( <ActivityIndicator style={styles.indicador} size="large" color="#4caf50" />)  
                : ( <FlatList
                    data={datos}
                    renderItem={remderItem}
                    keyExtractor={(item, index) => index.toString()}
                />)}
           
           
        </View>
    )
}

export default CasesScreen;


const Subtitle = styled.Text`
    font-weight:100;
`;



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        width: w ,
        padding:20
       
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        width: w ,
    },
    des: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'left',
        marginTop:10,
        width: w / 1.5
    },
    caseContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor:'#000',
        elevation: 3,
        borderRadius: 20,
        marginHorizontal: 20,        
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        shadowRadius: 2,
        marginTop: 2,
        borderWidth:3,
        borderColor:'#00796b'
    },
    item:{
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: "row",
        alignItems: 'center',
        textAlign:'right',
        justifyContent: 'space-between',
        borderColor:'#00796b',
        elevation: 3,
        borderRadius: 20,
        marginHorizontal: 20,        
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        shadowRadius: 2,
        marginTop: 20,  
        borderLeftWidth:3,
    
    },
    indicador:{
        
        padding: 20,        
        alignItems: 'center',
        textAlign:'right',
        flex:1,    
        marginHorizontal: 20,                
    }
})

