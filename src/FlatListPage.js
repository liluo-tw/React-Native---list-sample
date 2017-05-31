import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Alert
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
    this.state = { horizontal: false, refreshing: false };
  }

  render() {
    return (
      <View>
        <FlatList
          horizontal={this.state.horizontal}
          data={this.props.data}
          numColumns={4}
          columnWrapperStyle={styles.multiColumns}
          refreshing={false}
          onRefresh={()=> Alert.alert("on refresh")}
          renderItem={({ item, index }) => this.props.renderRow(item, index)}
        />
      </View>
    );
  }

 getHeader() {
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
      </View>
    )
  }
}


const styles = StyleSheet.create({
  flatlistBtn: {
    width: 100,
    height: 80,
    backgroundColor: "red",
    marginLeft: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default FlatListPage;
