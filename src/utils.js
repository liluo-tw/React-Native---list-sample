  export const genRows = function(prefix) {
    var dataBlob = [];
    for (var i = 0; i < 1000; i++) {
      dataBlob.push({ text: prefix + "CELL ", key: i });
    }
    return dataBlob;
  };

  export const cell = (rowData, rowID)=> {
    return (
      <View style={styles.cellContainer}>
        <Image style={styles.cellIcon} source={pic} />
        <Text style={styles.cellTitle}>
          {rowData.text + rowID}
        </Text>
      </View>
    );
  }