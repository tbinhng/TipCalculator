import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

var styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});

class Homescreen extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            selectedIndex: 0,
            percent: 0.1,
            resultBill: 0,
        };
    }
    handelCalculatorBill = (bill, percent) => {
        percent = percent / 100;
        var resultBill = bill + (bill * percent);
        this.setState({
            resultBill,
            percent,
        });
    }

    handleIndexChange = (index) => {
        this.setState({
            selectedIndex: index,
        }, () => this.handelCalculatorBill(
            this.state.text,
            parseFloat(this.segmentValue()[index])
        ));
    }

    handelBillAmoutChange = (text) => {
        this.setState({
            text,
        }, () => this.handelCalculatorBill(
            text,
            parseFloat(this.segmentValue()[this.state.selectedIndex])
        ));
    }

    segmentValue() {
        return ['10%', '20%', '50%'];
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <Text style={{ flex: 2 }} >Bill Amount: </Text>
                        <TextInput
                            style={{ flex: 8, height: 40 }}
                            onChangeText={
                                (text) => this.handelBillAmoutChange(parseFloat(text),
                                    this.state.selectedIndex)
                            }
                            value={this.state.text}
                            isFocused
                            keyboardType='numeric'
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Tip Amount:</Text>
                    <SegmentedControlTab
                        values={this.segmentValue()}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                    />
                </View>
                <View style={{ flex: 8 }}>
                    <Text>Bill Amount: {this.state.text} </Text>
                    <Text>Tip Amout: {this.state.percent}</Text>
                    <Text>Percent: {this.segmentValue()[this.state.selectedIndex]}</Text>
                    <Text style={{ fontWeight: 'bold' }} >Result: {this.state.resultBill}</Text>
                </View>
            </View>
        );
    }
}

export default Homescreen;
