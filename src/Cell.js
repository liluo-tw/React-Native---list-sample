import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

let pic = {
  uri: "https://facebook.github.io/react-native/img/header_logo.png"
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
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
export default (Cell = ({ rowData, rowID, prefix, collapsed }) => {
  return collapsed
    ? null
    : <View style={styles.cellContainer}>
        <Image style={styles.cellIcon} source={pic} />
        <Text style={styles.cellTitle}>
          {prefix + rowData.text + rowID}
        </Text>
      </View>;
});
