import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Restaurant from './Restaurant';


const RestaurantsNearBy = ({data, navigationData}) => {
    return (
        
        <FlatList
            keyExtractor={(item, index) => item.restaurant.R.res_id}
            data={data} renderItem={
            (item) => <Restaurant data={item} onClick={navigationData} />
        } />
            
    )
}

export default RestaurantsNearBy

const styles = StyleSheet.create({})
