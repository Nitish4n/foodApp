import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Restaurant = ({data, onClick}) => {
    
    return (
        <View>
            <TouchableOpacity onPress={() =>onClick.navigate('RestaurantDetails', {
                res_id: data.item.restaurant.R.res_id
            })}  style={styles.restaurantDiv}>
                <View style={{flex: 1}}>
                    <Image style={styles.image} source={{uri: `${data.item.restaurant.featured_image}`}} />
                </View>
                <View style={{...styles.details, flex: 3, padding: 5, marginLeft: 15}}>
                    <Text style={styles.name}>{data.item.restaurant.name}</Text>
                    <Text>Cusines</Text>
                    <Text>Description of restaurant will be here</Text>
                </View>
                <View style={{...styles.ratingArea, color: data.item.restaurant.user_rating.rating_color}}>
                    <Text style={styles.rating}>{data.item.restaurant.user_rating.aggregate_rating}</Text>
                </View>   
            </TouchableOpacity>
        </View>
    )
}

export default Restaurant

const styles = StyleSheet.create({
    restaurantDiv: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    details : {
        paddingLeft: 10
    },
    name: {
        fontSize: 22,
        fontWeight: '600',

    },
    ratingArea: {
        borderRadius: 10,
        // backgroundColor: '#65842e',
        backgroundColor: '#85a437',
        width: 35,
        height: 35,
        padding: 5,
        flex: 0.3
    },
    rating: {
        color: '#fff',
        fontSize: 18,
    }
})
