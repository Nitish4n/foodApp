import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const FoodItem = ({name= " Grilled Chicken Wrap", type="veg", price="29", category="Wraps", description="Description will be here"}) => {
    return (
        <View style={styles.foodItem}>
            <View>
                {type === 'veg' ?
                <Image 
                style={{width: 20, height:20, bottom: 27}}
                source={{uri: 'https://res.cloudinary.com/nitish4n/image/upload/v1609156652/food/rad_ns8ra6.png'}} 
                />
                :
                <Image 
                style={{width: 20, height:20, bottom: 27}}
                source={{uri: 'https://res.cloudinary.com/nitish4n/image/upload/v1609156654/food/green_xljlbn.png'}} 
                />
            }
                
                
            </View>
            <View style={styles.foodDetail}>
                <Text style={styles.foodName}>{name}</Text>
                <Text style={styles.category}>in {category}</Text>
                <Text style={styles.price}>₹ {price}</Text>
                <Text style={{color:'#545656'}}>{description}</Text>
            </View>
            <View >
                <TouchableOpacity><Text style={styles.add}>Add +</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default FoodItem

const styles = StyleSheet.create({
    foodItem: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    sign: {
        borderWidth: 2,
        width: 15,
        height: 15,
        borderColor: '#e74c3c',
        color: '#e74c3c'
    },
    circle: {
        backgroundColor: '#fff',
        borderRadius: 7,
        color: '#e74c3c',
        fontSize: 22
    },
    foodDetail: {
        flex: 1,
        paddingLeft: 12
    },
    foodName: {
        fontSize: 20,
        fontWeight: '400'
    },
    category: {
        marginLeft: 4,
        color: '#95a5a6'
    },
    price: {
        marginLeft: 5,
        fontSize: 16,
        marginTop: 8
    },
    add: {
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#7f8c8d',
        paddingVertical: 6,
        paddingHorizontal: 15,
        fontSize:15,
        color:'#e25353'
    }
})
