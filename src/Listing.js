import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ListView,
  ScrollView,
  TouchableOpacity,
  SectionList
} from "react-native";

import Tabbar from "react-native-tabbar";
import FlatListPage from "./FlatListPage";
import ExpandableList from "./ExpandableList";

let pic = {
  uri: "https://facebook.github.io/react-native/img/header_logo.png"
};

let tabs = [
  {
    key: "ListView",
    name: "ListView"
  },
  {
    key: "FlatList",
    name: "FlatList"
  },
  {
    key: "SectionList",
    name: "SectionList"
  },
  {
    key: "Expandable",
    name: "Expandable"
  }
];

const sectionlistSource = [
  {
    key: "SECTION 1",
    data: [
      {
        collapsed: false,
        title: "Item In Header Section",
        text: "Section s1",
        key: "0"
      }
    ]
  },
  {
    key: "SECTION 2",
    data: [
      {
        collapsed: false,
        noImage: true,
        title: "1st item",
        text: "Section s2",
        key: "0"
      },
      {
        collapsed: false,
        noImage: true,
        title: "2nd item",
        text: "Section s2",
        key: "1"
      },
      {
        collapsed: false,
        noImage: true,
        title: "3nd item",
        text: "Section s2",
        key: "2"
      }
    ]
  },
  {
    key: "SECTION 3",
    data: [
      {
        collapsed: false,
        noImage: true,
        title: "1st item",
        text: "Section s3",
        key: "0"
      },
      {
        collapsed: false,
        noImage: true,
        title: "2nd item",
        text: "Section s3",
        key: "1"
      }
    ]
  }
];

export default class Listing extends Component {
  constructor(props, context) {
    super(props, context);
    this.tabarRef = null;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      tab: "ListView",
      dataSource: ds.cloneWithRows(this.genRows()),
      sections: sectionlistSource
    };
  }

  render(text) {
    return (
      <View>
        <View style={styles.navigation}>
          <Text style={styles.navigationTitle}>列表示例</Text>
        </View>
        <View style={{ paddingTop: 30 }}>
          {this.renderContent()}
        </View>
        <Tabbar
          show={true}
          disable={false}
          ref={ref => this.tabarRef = ref}
          style={styles.tabbar}
        >
          {this.renderTabs()}
        </Tabbar>
      </View>
    );
  }

  onScroll = evt => {
    const y = evt.nativeEvent.contentOffset.y;
    this.tabarRef.updateHeight(y);
  };

  onTabSelect(tab) {
    this.setState({ tab });
  }

  renderTabs() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderTopWidth: 1,
          borderTopColor: "green"
        }}
      >
        {tabs.map(it => (
          <TouchableOpacity
            key={it.key}
            style={[
              styles.tabItem,
              this.state.tab === it.key ? styles.selectedTab : ""
            ]}
            onPress={() => this.onTabSelect(it.key)}
          >
            <View>
              <Text style={{ color: "white" }}>{it.name.toUpperCase()}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  renderContent() {
    const { tab } = this.state;

    let content;

    switch (tab) {
      case "ListView":
        content = (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID) =>
              this.cell(rowData, rowID, "listView")}
          />
        );
        break;
      case "FlatList":
        content = (
          <FlatListPage
            data={this.genRows(tab)}
            renderRow={(item, rowID) => this.cell(item, rowID, tab)}
          />
        );
        break;
      case "SectionList":
        content = (
          <SectionList
            renderItem={({ item, index }) => this.cell(item, index, tab)}
            renderSectionHeader={({ section }) => (
              <Text style={{ height: 40, marginLeft: 10 }}>{section.key}</Text>
            )}
            sections={this.state.sections}
          />
        );
        break;
      case "item4":
        content = <Text>This is the content 4</Text>;
        break;
      case "Expandable":
        content = <ExpandableList />;
        break;
    }

    return content;
  }

  cell(rowData, rowID, prefix) {
    return rowData.collapsed
      ? null
      : <View style={styles.cellContainer}>
          <Image style={styles.cellIcon} source={pic} />
          <Text style={styles.cellTitle}>
            {prefix + rowData.text + rowID}
          </Text>
        </View>;
  }

  genRows = function() {
    var dataBlob = [];
    for (var i = 0; i < 1000; i++) {
      dataBlob.push({ text: "CELL  ", key: i });
    }
    return dataBlob;
  };
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: 580
  },
  scrollView: {
    marginBottom: 100,
    backgroundColor: "#f4f4f4"
  },
  tabbar: {
    backgroundColor: "black",
    height: 100
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  selectedTab: {
    backgroundColor: "red"
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  },
  navigation: {
    backgroundColor: "red",
    height: 58,
    alignItems: "center",
    paddingTop: 28
  },
  navigationTitle: {
    color: "white",
    fontSize: 18
  },
  cellContainer: {
    flexDirection: "row",
    padding: 10
  },
  cellIcon: {
    width: 60,
    height: 58,
    backgroundColor: "#8bb",
    tintColor: "#fff",
    resizeMode: "stretch"
  },
  cellTitle: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
    flex: 1,
    color: "white",
    backgroundColor: "#bbb"
  }
});
