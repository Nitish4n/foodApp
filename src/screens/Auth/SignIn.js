import React from 'react'
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const SignIn = () => {
    return (
        <View style={styles.body}>
            <Image 
                source={{uri: 'https://image.shutterstock.com/image-photo/delivery-man-employee-red-cap-600w-1682833498.jpg'}} 
                style={styles.image}
            />

            <View style={{flexDirection: 'row' ,justifyContent: 'center'}}>
                <TouchableOpacity style={styles.email}>
                    <Image source={{uri: 'https://library.kissclipart.com/20180901/wye/kissclipart-email-icon-clipart-computer-icons-email-c8c4733065800f95.png'}} 
                    style={{width: 25, height: 25}} />
                    <Text >Continue with Email</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F7B844',
        width:'100%',
        height: '100%'
    },
    image: {
        width: 500,
        height: 400
    },
    email: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 22
    },
    emailButtonText: {

    }
})
