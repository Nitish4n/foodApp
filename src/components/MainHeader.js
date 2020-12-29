import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const MainHeader = ({location}) => {
    const [myCurrentLocation, setMyCurrentLocation] = useState({}); 
    useEffect(() => {
        console.log('location data here')
        console.log(location)
        setMyCurrentLocation(location) 
    }, [location])
    return (
        <View style={styles.topHeader}>
            <View  style={styles.topHeader}>
                <Image source={{uri: 'https://image.flaticon.com/icons/png/128/684/684908.png'}}
                    style={{width:20, height:20}}
                />
                <Text style={styles.locationName}>{myCurrentLocation?.title}, {myCurrentLocation?.city_name}</Text>
            </View>
            
            <Image 
                source={{uri : 'https://image.flaticon.com/icons/png/512/147/147144.png'}} 
                style={{width:30, height:30}}
            />
        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    topHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    locationName: {
        fontSize: 20,
        marginLeft: 5
    },
})
