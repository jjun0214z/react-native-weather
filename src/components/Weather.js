import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <LinearGradient
                colors={["#00C6FB", "#005BEA"]}
                style={styles.container}
            >
                <View style={styles.upper}>
                    <Ionicons color="#fff" size={100} name="ios-rainy"/>
                    <Text style={styles.temp}>{this.props.temp}º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <Text style={styles.subtitle}>subtitle</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        marginTop: 10,
        fontSize: 35,
        color: '#fff'
    },
    lower: {
        paddingRight: 30,
        paddingBottom: 40,
        paddingLeft: 30,
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end"
    },
    title: {
        fontSize: 30,
        color: '#fff'
    },
    subtitle: {
        fontSize: 14,
        color: '#fff'
    }
});
