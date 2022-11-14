import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const FirstScreen = (props) => {
    let a = 100
    const handleButtonClick = (nav) => {
        const { navigation } = props
        navigation.navigate('Display', { nav, navigation })
    }
    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.firstView}>
                <Text style={styles.mainText}>Hello</Text>
                <Text style={styles.mainText}>Ketan</Text>
                <Text style={styles.baseText}>
                    Sunday,
                    <Text style={styles.innerText}>12th March</Text>
                </Text>
            </View>

            <View style={styles.buttonView}>
                <View style={styles.firstRow}>
                    <TouchableOpacity style={styles.firstButton}
                        onPress={() => handleButtonClick("SCHEDULE")}>
                        <Image source={require('../Images/icons8-view-schedule-32.png')}
                            style={styles.images} />
                        <Text style={styles.buttonText}>SCHEDULE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.firstButton}
                        onPress={() => handleButtonClick("SCHOOL")}>
                        <Image source={require('../Images/icons8-open-book-50.png')}
                            style={styles.images} />
                        <Text style={styles.buttonText}>SCHOOL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secondRow}>
                    <TouchableOpacity style={styles.firstButton}
                        onPress={() => handleButtonClick("GROCERY")}>
                        <Image source={require('../Images/icons8-grocery-64.png')}
                            style={styles.images} />
                        <Text style={styles.buttonText}>GROCERY</Text>
                    </TouchableOpacity>
                </View>



            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
     firstView: {
        marginLeft: 40,
        marginTop: 40,

    },
    mainText: {
        fontSize: 35,
        color: 'purple'
    },
    baseText: {
        fontWeight: 'bold',
        color: 'grey'
    },
    innerText: {
        fontWeight: '200',
        marginLeft: 10,
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginHorizontal: 10,
    },
    secondRow: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    buttonView: {
        marginTop: 30,
        flexDirection: 'column',

    },
    firstButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        backgroundColor:'#f0f8ff',
        paddingVertical: 50,
        height: 150,
        width: 180,
        borderRadius: 20,
    },
    images: {
        height: 40,
        width: 40,
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: '700',
        marginTop: 12,

    },
})


export default FirstScreen;