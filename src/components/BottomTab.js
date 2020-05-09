import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const menu = [{ nombre: 'Inicio', icon: 'medicinebox' }, { nombre: 'Estadisticas', icon: 'linechart' }]
const BottomTab = ({ selected, onSelected }) => {
    return (
        <View style={styles.bottoms}>
            {menu.map((e, i) => {
                return (
                    <TouchableOpacity style={styles.icon} key={e.icon} onPress={() => onSelected(i)}>
                        <AntDesign name={e.icon} color={selected == i ? "#fff" : "#78909C"} size={36} />
                        <Text style={selected == i ? styles.textWhite : styles.textDark}>{e.nombre}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    bottoms: {
        flexDirection: 'row',
        padding: 5,
        paddingHorizontal: 30,
        shadowColor: '#000',
        backgroundColor: "#00796b",
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 3,
    }, textWhite: {
        color: '#ffff'
    }, textDark: {
        color: '#78909c'
    }
});
export default BottomTab
