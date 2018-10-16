import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const weatherCases = {
    Rain: {
        colors:['#00C6FB', '#005BEA'],
        title: "Rain",
        subTitle: "1",
        icon: 'ios-rainy'
    },
    Clear: {
        colors:['#FEF253', '#FF7300'],
        title: "Clear",
        subTitle: "2",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors:['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subTitle: "3",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors:['#D7D2CC', '#304352'],
        title: "Clouds",
        subTitle: "4",
        icon: 'ios-cloudy'
    },
    Snow: {
        colors:['#7DE2FC', '#B9B6E5'],
        title: "Snow",
        subTitle: "5",
        icon: 'ios-snow'
    },
    Drizzle: {
        colors:['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subTitle: "6",
        icon: 'ios-cloudy'
    },
    Haze: {
        colors:['#89F7FE', '#66A6FF'],
        title: "Haze",
        subTitle: "7",
        icon: 'ios-cloudy'
    }
};

function Weather({ weatherName, temp }){
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={{flex: 1}}
        >
            <Upper>
                <Ionicons color="#fff" size={100} name={weatherCases[weatherName].icon}/>
                <Temp>{temp}º</Temp>
            </Upper>
            <Lower>
                <Title>{weatherCases[weatherName].title}</Title>
                <SubTitle>{weatherCases[weatherName].subTitle}</SubTitle>
            </Lower>
        </LinearGradient>
    );
}

export default Weather;

const Upper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const Temp = styled.Text`
    margin-top: 10;
    font-size: 35;
    color: #fff;
`;
const Lower = styled.View`
    padding: 0 30px 40px;
    flex: 1;
    align-items: flex-start;
    justify-content: flex-end;
`;
const Title = styled.Text`
    font-size: 30px;
    color: #fff;
`;
const SubTitle = styled.Text`
    font-size: 14px;
    color: #fff;
`;
