import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './src/components/Weather';

const API_KEY = "343904aea116438da5e35075e3d5bce5";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            temperature: null,
            name: null
        };
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position => {
                this._getWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: error
                });
            }
        );
    }
    _getWeather = (lat, lon) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                temperature: Math.floor(json.main.temp - 273.15),
                name: json.weather[0].main,
                isLoaded: true
            });
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                { this.state.isLoaded ?
                    <Weather
                        temp={this.state.temperature}
                        name={this.state.name}
                    /> :
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}>Getting the weather</Text>
                        { this.state.error ? <Text style={styles.errorText}>{this.state.error}</Text> : null }
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    errorText: {
        color: 'red'
    },
    loading: {
        flex: 1,
        paddingRight: 30,
        paddingBottom: 40,
        paddingLeft: 30,
        backgroundColor: '#FDF6AA',
        justifyContent: 'flex-end'
    },
    loadingText: {
        fontSize: 30
    }
});
