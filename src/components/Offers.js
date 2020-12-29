import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const Offers = () => {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.offerArea}>
                <View style={{padding: 10, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={styles.offerText}>
                        Flat
                    </Text>
                    <Text style={styles.offerText}>
                        Rs. 50
                    </Text>
                </View>
                <View style={{flexShrink: 1}}>
                    <Text>Use Code HSBCFEAST to avail this offer.</Text>
                </View>
            </View>

            <View style={styles.offerArea}>
                <View style={{padding: 10, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={styles.offerText}>
                        Flat
                    </Text>
                    <Text style={styles.offerText}>
                        Rs. 150
                    </Text>
                </View>
                <View style={{flexShrink: 1}}>
                    <Text>Use Code ZOMATONEW to avail this offer.</Text>
                </View>
            </View>

            <View style={styles.offerArea}>
                <View style={{padding: 10, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={styles.offerText}>
                        Flat
                    </Text>
                    <Text style={styles.offerText}>
                        20% OFF
                    </Text>
                </View>
                <View style={{flexShrink: 1}}>
                    <Text>Use Code NEWYEAR to avail this offer.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Offers

const styles = StyleSheet.create({
    offerArea: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        width: 270
    },
    offerText: {
        color: '#ef3726',
        fontSize: 15
    }
})
