
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ListView
} from 'react-native';
let pic = {
  uri: 'https://facebook.github.io/react-native/img/header_logo.png'
};


export default class Listing extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.genRows())
    };
  }

  render(text) {
    return (
      <View>
        <View style={styles.navigation}>
          <Text style={styles.navigationTitle}>列表示例</Text>
        </View>
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID) => this.cell(rowData, rowID)}
          />
        </View>
      </View>
    );
  }

  cell(rowData, rowID) {
    return (
      <View style={styles.cellContainer}>
        <Image style={styles.cellIcon} />
        <Text style={styles.cellTitle}>
          {rowData + rowID}
        </Text>
      </View>
    )
  }


 genRows = function() {
    var dataBlob = [];
    for (var i = 0; i < 100; i++) {
      dataBlob.push('CELL  ');
    }
    return dataBlob;
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  navigation: {
    backgroundColor: 'red',
    height: 58,
    alignItems: 'center',
    paddingTop: 28,
  },
  navigationTitle: {
    color: 'white',
    fontSize: 18,
  },
  cellContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  cellIcon: {
    width: 60,
    height: 58,
    backgroundColor: '#8bb',
    tintColor: '#fff',
    resizeMode: 'stretch'
  },
  cellTitle: {
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 10,
    flex: 1,
    color: 'white',
    backgroundColor: '#8bb'
  },
});