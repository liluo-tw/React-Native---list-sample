import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import React from "react";

type Props = {
  data: Array<Object>,
  renderRow: (item: any, rowID: number) => any,
  renderHeader?: () => any,
  renderFooter?: () => any,
  appendMoreCell?: () => void,
  rowHasChanged?: (r1:any, r2: any) => bool,
  onRefresh?: () => any,
  refreshing?: boolean,
  style?: any,
}

class FlatListPage extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { horizontal: false };
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.flatlistBtn}
          onPress={() => {
            this.setState({ horizontal: !this.state.horizontal });
          }}
        >
          <Text style={{ color: "white" }}>CHANGE</Text>
        </TouchableOpacity>

        <FlatList
          horizontal={this.state.horizontal}
          data={this.props.data}
          renderItem={({ item, index }) => this.props.renderRow(item, index)}
        />
      </View>
    );
  }

  cell(rowData, rowID) {
    return (
      <View style={styles.cellContainer}>
        <Image style={styles.cellIcon} source={pic} />
        <Text style={styles.cellTitle}>
          {rowData + rowID}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: "#8bb"
  },
  flatlistBtn: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    marginLeft: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default FlatListPage;
