import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const AttentionItems = [
  {
    id: 1,
    img: 0,
    Theme: "ACTIVITY",
    Title: "Trials [#06] for Navigator",
    Progress: "",
  },
  {
    id: 2,
    img: 0,
    Theme: "MAIN THEME",
    Title: "Dissociative Recombination",
    Progress: "15-3",
  },
  {
    id: 3,
    img: 0,
    Theme: "MAIN THEME",
    Title: "STORMWATCH",
    Progress: "9-14",
  },
];

const ToDoItems = [
  {
    id: 1,
    img: 0,
    Title: "Orundum",
  },
  {
    id: 2,
    img: 0,
    Title: "Stationary Security Service",
  },
  {
    id: 3,
    img: 0,
    Title: "Sarkaz's Furnaceside Fables",
  },
];
const Terminal = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          onPress={() => alert("Pressed Back.")}
          style={styles.Button}
        >
          <Text style={styles.back}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("Pressed Back.")}
          style={styles.Button}
        >
          <Text style={styles.home}>{"🏠︎"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.AttentionSection}>
        <View>
          <Text style={styles.Label}>Attention</Text>
          {AttentionItems.map((Attention) => (
            <TouchableOpacity>
              <View style={styles.Attention}>
                <Text style={styles.Theme}>{Attention.Theme}</Text>
                <Text style={styles.Subtitle}>Progress</Text>
                <Text style={styles.Subtitle}>{Attention.Progress}</Text>

                <Text style={styles.Title}>{Attention.Title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.ToDoSection}>
        <View>
          <Text style={styles.Label}>To-Do List</Text>
          {ToDoItems.map((ToDo) => (
            <TouchableOpacity>
              <View style={styles.ToDo}>
                <Text style={styles.Subtitle}>2 Days</Text>
                <Text style={styles.Title}>{ToDo.Title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.Event}>
        <Text style={styles.Subtitle}>{"<Medjehtiqedti Bound> opened"}</Text>
      </View>
      <View style={styles.Recent}>
        <Text style={styles.Title}>Ursus</Text>
      </View>
    </View>
  );
};

export default Terminal;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#d8d8d8",
    width: 950,
    height: 450,
  },
  AttentionSection: {
    backgroundColor: "#d8d8d8",
    position: "absolute",
    marginTop: 50,
    marginLeft: 450,
  },
  ToDoSection: {
    backgroundColor: "#d8d8d8",
    position: "absolute",
    marginTop: 50,
    marginLeft: 675,
  },
  Attention: {
    backgroundColor: "#2c2c2c",
    width: 200,
    height: 100,
    marginTop: 5,
  },
  ToDo: {
    backgroundColor: "#2c2c2c",
    width: 175,
    height: 60,
    marginTop: 5,
  },
  Event: {
    backgroundColor: "#2c2c2c",
    width: 200,
    height: 75,
    marginLeft: 10,
    marginTop: 305,

    position: "absolute",
  },
  Recent: {
    backgroundColor: "#2c2c2c",
    width: 165,
    height: 60,
    marginLeft: 685,
    marginTop: 315,

    position: "absolute",
  },
  back: {
    color: "#ffffff",
    fontSize: 20,
    paddingRight: 40,
    marginRight: 2,
  },
  home: {
    color: "#ffffff",
    paddingLeft: 30,
    paddingRight: 20,
    fontSize: 20,
    marginRight: 2,
  },

  Label: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 10,
    backgroundColor: "#2c2c2c",
    width: 60,
  },

  Button: {
    backgroundColor: "#2c2c2c",
    paddingRight: 20,
    paddingLeft: 10,
    paddingBottom: 5,
    textAlign: "left",
  },
  ButtonContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
    gap: 1,
  },
  Subtitle: {
    color: "#ffffff",
    textAlign: "left",

    marginLeft: 5,
    fontSize: 9,
  },

  Title: {
    color: "#ffffff",
    textAlign: "left",
    marginLeft: 50,
    fontSize: 14,
  },
  Theme: {
    color: "#ffffff",
    textAlign: "left",
    marginTop: 5,
    marginLeft: 5,
    fontSize: 7,
  },
});
