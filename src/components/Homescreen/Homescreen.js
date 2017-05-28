import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  billamoutline: {

  },
  texttitle: {},
  billamoutinput: {},
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
    var percent;
    this.setState({
      billamout: bill,
    });

    bill = parseFloat(bill);
    if (!index && index !== 0) {
      index = this.selectedIndex;
    }
    console.log(index);
    percent = this.segmentValue()[index];
    percent = parseFloat(percent) / 100;

    let billresult = bill + (bill * percent);

    this.setState({
      result: billresult,
      tipamout: percent,
    });
  }

  segmentValue() {
    return ['10%', '20%', '50%'];
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.billamoutline}>
          <Text style={styles.texttitle}>Bill Amout:</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(billamout) => this.handleBillAmoutChange(billamout)}
            keyboardType='numeric'
          />
        </View>
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
          <Text>Tip Amout: {this.segmentValue()[this.selectedIndex]}</Text>
          <Text>Percent Amout: {this.state.tipamout}</Text>
        </View>
        <View>
          <Text>Result: {this.state.result}</Text>
        </View>
      </View>
    );
  }
}

export default Homescreen;
