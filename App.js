import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import styled, { injectGlobal } from 'styled-components';
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
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this._getWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: error
                });
            },
            { timeout: 7000, enableHighAccuracy: true }
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
            <Container>
                <StatusBar hidden={true} />
                { this.state.isLoaded ?
                    <Weather
                        weatherName={this.state.name}
                        temp={this.state.temperature}
                    /> :
                    <Loading>
                        <LoadingText>aaaa</LoadingText>
                        { this.state.error ? <ErrorText >{this.state.error}</ErrorText> : null }
                    </Loading>
                }
            </Container>
        );
    }
}

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;
const ErrorText  = styled.Text`
    color: red;
`;
const Loading  = styled.View`
    flex: 1;
    padding: 0 30px 40px 30px;
    background-color: #FDF6AA;
    justify-content: flex-end;
`;
const LoadingText  = styled.Text`
    font-size: 30;
`;
