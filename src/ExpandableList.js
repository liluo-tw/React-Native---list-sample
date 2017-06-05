import {
  View,
  Text,
  SectionList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import React from "react";
import Cell from "./Cell";

const sections = [
  {
    key: "SECTION1",
    data: [{ title: "1 Section", text: "Section s1", key: "SECTION1-0" }]
  },
  {
    key: "SECTION2",
    data: [
      { title: "1st item", text: "Section s2", key: "SECTION2-0" },
      { title: "2nd item", text: "Section s2", key: "SECTION2-1" },
      { title: "3nd item", text: "Section s2", key: "SECTION2-2" }
    ]
  },
  {
    key: "SECTION3",
    data: [
      { title: "1st item", text: "Section s3", key: "SECTION3-0" },
      { title: "2nd item", text: "Section s3", key: "SECTION3-1" }
    ]
  }
];
class ExpandableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: {
        SECTION1: false,
        SECTION2: false,
        SECTION3: false
      }
    };
  }
  change(sectionKey) {
    const current = this.state.flag[sectionKey];
    const newFlag = this.state.flag;
    newFlag[sectionKey] = !current;
    this.setState({
      flag: newFlag
    });
  }

  getHeader(section) {
    return (
      <TouchableOpacity onPress={() => this.change(section.key)}>
        <View style={styles.sectionHead}>
          <Text style={styles.sectionText}>{section.key}</Text>
          <Image source={require("./images/arrow-down@3x.png")} />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SectionList
        renderItem={({ item, index }) => (
          <Cell
            rowData={item}
            rowID={index}
            prefix={"ExpandableList "}
            collapsed={!this.state.flag[item.key.slice(0, 8)]}
          />
        )}
        renderSectionHeader={({ section }) => this.getHeader(section)}
        sections={sections}
      />
    );
  }
}
const styles = StyleSheet.create({
  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    alignItems: "center",
    backgroundColor: "black",
    padding: 10
  },
  sectionText: {
    color: "white"
  }
});
export default ExpandableList;
