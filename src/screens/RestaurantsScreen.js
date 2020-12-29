import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ImageBackground, SafeAreaView, StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { fetchRestaurantDetails } from '../redux/action/restaurantAction';
import Offers from '../components/Offers';
import FoodItem from '../components/FoodItem';
import {foodItems} from '../utils/foodlist';


const RestaurantsScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.restaurant.details)
    const { res_id } = route.params;
    useEffect(() => {
        dispatch(fetchRestaurantDetails(res_id))
        console.log('details here')
        console.log(foodItems)
        console.log(details)
    }, [res_id])
    return (
        <SafeAreaView>
            
            <View>
                <View style={{width: '100%', height: '100%'}}>
                    <ImageBackground 
                        source={{uri: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/low-carb-diet-meal-plan-and-menu-1296x728-feature.jpg?h=1528'}}
                        style={styles.headerImage} >
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.headerButton}>Go Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.headerButton}>More Info </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                
                <View style={styles.body}>
                    
                    <View style={styles.bodyHeader}>
                        <View>
                            <Text style={styles.BodyTitle}>{details.name}</Text>
                            <Text style={{width: 290}}>{details.cuisines}</Text>
                        </View>
                        <View style={styles.ratingArea}>
                        <Text style={{...styles.ratingText, backgroundColor: "#3F7E00", color: '#fff'}}>{details.user_rating.aggregate_rating}</Text>
                            <View style={{justifyContent: 'center', alignItems: 'center', padding: 2}}>
                                <Text style={{...styles.ratingText, paddingVertical: 3}}>{details.user_rating.votes}</Text>
                                <Text style={{fontSize: 10}}>Reviews</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.offerArea}>
                        <Offers />
                    </View>
                    
                    <View>
                        {foodItems.map(food => (
                            <FoodItem name={food.name} type={food.type} price={food.price} category={food.category} description={food.description} />
                        ))}
                        
                    </View>
                </View>
                
            </View>
           
        </SafeAreaView>
    )
}

export default RestaurantsScreen

const styles = StyleSheet.create({
    header: {
        
    },
    headerImage: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerButton: {
        color:'#fff',
        fontSize: 16,
        fontWeight: '400',
        padding: 5
    },
    body: {
        backgroundColor: '#fff',
        zIndex: 99,
        borderRadius: 20,
        position: 'absolute',
        width: '100%',
        marginTop: 35,
        paddingVertical: 15
    },
    bodyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10
    },
    BodyTitle: {
        fontSize: 23,
        fontWeight: '500'
    },
    ratingArea: {
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10
    },
    ratingText: {
        fontSize: 18,
        fontWeight: '500',
        padding: 10
    },
    offerArea: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10
    }
})
