export function ListCell(rowData, rowID) {
    return cell(rowData, rowID)
}

function cell(rowData, rowID) {
  return (
    <View style={styles.cellContainer}>
      <Image style={styles.cellIcon} source={pic} />
      <Text style={styles.cellTitle}>
        {rowData.text + rowID}
      </Text>
    </View>
  );
}
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
    backgroundColor: "#8bb"
  }
});
