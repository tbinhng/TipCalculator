import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  billamoutline: {
    flexDirection: 'row',
  },
  texttitle: { flex: 2 },
  billamoutinput: {},
  resultsection: {
  }
});

class Homescreen extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      text: '',
      billamout: 0,
      tipamout: 0,
      result: 0,
    };
  }
  handleIndexChange = (index) => {
    this.setState({
      selectedIndex: index,
    });
    this.handleBillAmoutChange(this.state.billamout, index);
  }

  handleBillAmoutChange = (bill, index) => {
    this.setState({
      billamout: bill,
    });

    bill = parseFloat(bill);
    if (!index && index !== 0) {
      index = this.selectedIndex;
    }
    console.log(index);
    var percent = this.segmentValue()[index];
    percent = parseFloat(percent) / 100;

    var billresult = bill + (bill * percent);
    if (!isNaN(percent)) {
      this.setState({
        result: billresult,
        tipamout: percent,
      });
    }
  }

  segmentValue() {
    return ['10%', '20%', '50%'];
  }

  gotoSettingscreen() {
    this.props.navigation.navigate('SETTING_SCREEN');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.billamoutline}>
          <Text style={styles.texttitle}>Bill Amout:</Text>
          <TextInput
            style={{ height: 40, flex: 8 }}
            onChangeText={(billamout) => this.handleBillAmoutChange(billamout)}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.resultsection}>
          <View>
            <Text>Tip Amout:</Text>
          </View>
          <View>
            <SegmentedControlTab
              values={this.segmentValue()}
              selectedIndex={this.state.selectedIndex}
              onTabPress={this.handleIndexChange}
            />
          </View>
          <View>
            <Text>Bill Amout: {this.state.billamout}</Text>
            <Text>Tip Amout: {this.segmentValue()[this.state.selectedIndex]}</Text>
            <Text>Percent Amout: {this.state.tipamout}</Text>
          </View>
          <View>
            <Text>Result: {this.state.result}</Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SETTING_SCREEN')}
          >
            <Text> Setting </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default Homescreen;
