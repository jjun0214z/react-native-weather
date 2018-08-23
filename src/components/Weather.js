import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {
    render() {
        return(
            <LinearGradient
                colors={["#00C6FB", "#005BEA"]}
                style={{flex: 1}}
            >
                <Upper>
                    <Ionicons color="#fff" size={100} name="ios-rainy"/>
                    <Temp>{this.props.temp}º</Temp>
                </Upper>
                <Lower>
                    <Title>{this.props.name}</Title>
                    <SubTitle>subtitle</SubTitle>
                </Lower>
            </LinearGradient>
        );
    }
}


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
