import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
class Assessment extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.contHead}>
                    <SafeAreaView style={styles.safeHead}>
                        <Image
                            style={styles.headimage}
                            source={{ uri: 'https://image.pngaaa.com/432/263432-middle.png' }}
                        />
                        
                        <Text style={styles.headerText}>manage</Text>
                        
                       
                        
                        <Image
                            style={styles.headimage}
                            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/007/037/880/non_2x/bell-the-black-color-icon-in-circle-or-round-vector.jpg' }}
                        />
                    </SafeAreaView>
                </View>
                <View style={styles.adMid}>
                    <View style={styles.adServices}>

                        <View style={styles.arrowtext}>
                            <Text style={styles.adtext}>Services</Text>
                            <Image
                                style={styles.imageArrow}
                                source={{ uri: 'https://www.clipartmax.com/png/middle/329-3299930_greater-than-number-right-arrow-icon.png' }} />
                        </View>

                        <View style={styles.boldText}>
                            <Text style={styles.adBold}>5 Services</Text>
                        </View>



                        <TouchableOpacity style={styles.buttonDetail}>
                            <Text style={styles.buttonText}>View Details</Text>


                        </TouchableOpacity>






                    </View>

                    <View style={styles.adServices}>

                        <View style={styles.viewLock}>
                            <Text style={styles.adtextTwo}>Money</Text>
                            <Image
                                style={styles.imageLock}
                                source={{ uri: 'https://img.favpng.com/11/3/17/computer-icons-lock-password-vector-graphics-email-png-favpng-cRjNJUWuWqpkjLqAHVVYwwbW3_t.jpg' }} />
                        </View>

                        <View style={styles.boldLock}>
                            <Text style={styles.adBoldTwo}>....</Text>
                            <Text style={styles.adsecond}>in your wallet</Text>
                        </View>

                        <TouchableOpacity style={styles.buttonDetailTwo}>
                            <Text style={styles.buttonTextTwo}>Show Balance</Text>


                        </TouchableOpacity>




                    </View>



                </View>

                <View style={styles.viewPlus}>
                    <TouchableOpacity style={styles.buttonPlus}>
                        <Image
                            style={styles.imageAirtel}
                            source={{ uri: 'https://menglish.sakshi.com/sites/default/files/styles/cinema_main/public/article_images/2022/10/6/Airtel-5G-Plus-1665051422.jpg?itok=a10RPMS6' }}
                        />
                        <Text style={styles.buttonTextplus}>Check if your phone is 5G enabled</Text>
                        <Image
                            style={styles.imageRedArrow}
                            source={{ uri: 'https://t4.ftcdn.net/jpg/05/29/79/13/360_F_529791353_Ip9hk3tZPgOhdt3gVnpLk0mDsoe6Zmrm.jpg' }}
                        />

                    </TouchableOpacity>

                </View>

                <View>
                    <ScrollView horizontal={true}>
                        <View style={styles.scrollAd}>
                            <Image
                                style={styles.imageScroll}

                                source={{ uri: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/10/07/1099601-airtel-5g.jpg' }} />

                            <Image
                                style={styles.imageScroll}

                                source={{ uri: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/10/07/1099601-airtel-5g.jpg' }} />

                            <Image
                                style={styles.imageScroll}

                                source={{ uri: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/10/07/1099601-airtel-5g.jpg' }} />


                        </View>



                    </ScrollView>
                </View>
                <View style={styles.infoView}>
                    <TouchableOpacity style={styles.buttonMis} >
                        <Image
                            style={styles.imageMis}
                            source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/phone-circle-green-512.png' }} />
                        <Text style={styles.textMis}>missed calls</Text >
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonReward}>
                        <Image
                            style={styles.imageReward}
                            source={{ uri:'https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/8/7/870.7-gift-box-icon-iconbunny.jpg'}} />
                        <Text style={styles.textReward}>rewards &</Text>
                        <Text style={styles.textCoupin}>coupin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPrepaid}>
                        <Image style={styles.imageprepaid}
                            source={require('./images/icons8-prepaid-recharge-24.png')} />
                        <Text style={styles.textPrepaid}>refer </Text>
                        <Text style={styles.textPrepaid}>Prepaid</Text>
                    </TouchableOpacity>
                </View>

































               

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    contHead: {
        flex: 1,
        backgroundColor: '#f8f8ff',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        // borderBottomWidth: 0.2,


    },
    safeHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,



    },
    
    
    headerText: {
        color: 'black',
        fontSize: 23,
        fontWeight:'500'

    },
    headimage: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        marginBottom: 15,

    },

    adMid: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 250,
        backgroundColor: '#f8f8ff',
        padding: 10,

    },
    adServices: {

        flexDirection: 'column',
        paddingHorizontal: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
       







    },
    arrowtext: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },


    adtext: {
        fontSize: 15,
        fontWeight: '200',
    },

    imageArrow: {
        height: 18,
        width: 18,
        borderRadius: 10,
    },



    boldText: {
        top: 10
    },

    adBold: {
        fontSize: 20,
        fontWeight: '500',

    },

    buttonDetail: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        top: 130,

    },
    buttonText: {
        fontSize: 15,
        color: 'white',

    },





    viewLock: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageLock: {
        height: 18,
        width: 18,
        borderRadius: 10,
        marginRight: 10,

    },
    adtextTwo: {
        fontSize: 15,
        fontWeight: '200',
        marginLeft: 10,

    },
    boldLock: {
        top: 10,
    },
    adBoldTwo: {
        fontSize: 20,
        fontWeight: '700',
    },
    adsecond: {
        fontSize: 15,
        fontWeight: '200',
    },
    buttonDetailTwo: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        top: 110,

    },
    buttonTextTwo: {
        fontSize: 15,
        color: 'white',


    },




    viewPlus: {

        flexDirection: 'row',
        backgroundColor: '#f8f8ff',
        height: 50,



    },
    buttonPlus: {
        flexDirection: 'row',
        //justifyContent:'space-between',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 30,
        marginHorizontal: 30,
        marginBottom: 5,



    },
    imageAirtel: {
        height: 30,
        width: 55,
        marginLeft: 10,
        borderRadius: 100,
    },
    buttonTextplus: {
        fontSize: 12,
        marginLeft: 20,
        marginTop: 5,

    },
    imageRedArrow: {
        height: 22,
        width: 25,
        marginLeft: 10,
        borderRadius: 100,
    },
    scrollAd: {
        backgroundColor: '#f8f8ff',
        height: 190,
        flexDirection: 'row',


    },
    imageScroll: {
        height: 150,
        width: 250,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 15,
    },
    infoView: {

        backgroundColor: '#f8f8f',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 100,
        marginTop: 20,
        marginHorizontal: 10,

    },
    buttonMis: {
       // marginLeft: 30,
        padding: 10,
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
    },
    imageMis: {
        height: 50,
        width: 50,
    },
    textMis: {
        fontSize: 15,
        fontWeight: '200',
    },
    buttonReward: {
       // marginLeft: 30,
       flexDirection:'column',
       justifyContent:'center',
        padding: 10,
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
    },
    textReward: {
        fontSize: 15,
        fontWeight: '200',
        
    },
    textCoupin: {
        fontSize: 15,
        fontWeight: '200'

    },
    imageReward: {
        height: 50,
        width: 50,
    },
    buttonPrepaid: {
        flexDirection:'column',
        justifyContent:'center',
        padding: 10,
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
    },
    textPrepaid: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: '200'
    },
    imageprepaid: {
        height: 50,
        width: 50,
    },





























})

























export default Assessment;



