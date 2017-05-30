
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ListView,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Tabbar from 'react-native-tabbar'
import FlatListPage from './FlatListPage'

let pic = {
  uri: 'https://facebook.github.io/react-native/img/header_logo.png'
};

let tabs = [
  {
    key:"ListView",
    name:"ListView"
  }, {
    key: "FlatList",
    name: "FlatList"
  }, {
    key: "SectionList",
    name: "SectionList"
  }, {
    key: "Other",
    name: "Other"
  }
]

export default class Listing extends Component {

  constructor(props, context) {
    super(props, context)
    this.tabarRef = null
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      tab: 'ListView',
      dataSource: ds.cloneWithRows(this.genRows())
    };
  }

  render(text) {
    return (
      <View>
        <View style={styles.navigation}>
          <Text style={styles.navigationTitle}>列表示例</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          style={styles.scrollView}
          onScroll={this.onScroll}
          scrollEventThrottle={16}>
          <View style={{ paddingTop: 30 }}>
            {this.renderContent()}
          </View>
        </ScrollView>
        <Tabbar show={true}
                disable={false}
                ref={(ref) => this.tabarRef = ref}
                style={styles.tabbar}>
          {this.renderTabs()}
        </Tabbar>
      </View>
    );
  }

  cell(rowData, rowID, prefix) {
    return (
      <View style={styles.cellContainer}>
        <Image style={styles.cellIcon} source={pic} />
        <Text style={styles.cellTitle}>
          {prefix + rowData.text + rowID}
        </Text>
      </View>
    )
  }

    onScroll = (evt) => {
      const y = evt.nativeEvent.contentOffset.y
      this.tabarRef.updateHeight(y)
    }

    onTabSelect(tab) {
      this.setState({ tab })
    }

    renderTabs() {
      return (
        <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'green' }}>
        {
          tabs.map((it) => (
            <TouchableOpacity style={[styles.tabItem, this.state.tab === it.key? styles.selectedTab: '']} onPress={() => this.onTabSelect(it.key)}>
              <View>
                <Text style={{color: 'white'}}>{it.name.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
        </View>
      )
    }

    renderContent() {
      const { tab } = this.state
      let content
      switch(tab) {
        case 'ListView':
          content = <Text>This is the content 1</Text>
          break
        case 'FlatList':
          content = <FlatListPage
            data={this.genRows(tab)}
            renderRow = {(item, rowID) => this.cell(item, rowID, tab)}
          />
          break
        case 'SectionList':
          content = <Text>This is the content 3</Text>
          break
        case 'item4':
          content = <Text>This is the content 4</Text>
          break
        case 'item5':
          content = <Text>This is the content 5</Text>
          break
      }

      return content
    }

 genRows = function() {
    var dataBlob = [];
    for (var i = 0; i < 1000; i++) {
      dataBlob.push({text: 'CELL  ', key: i});
    }
    return dataBlob;
  }

}

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: 600,
  },
  scrollView: {
    marginBottom: 100,
    backgroundColor: '#f4f4f4'
  },
  tabbar:{
    backgroundColor: 'black',
    height: 100
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedTab: {
    backgroundColor: 'red'
  },
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
