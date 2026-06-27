import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
const SuppliesMissions = [
  {
    id: 1,
    img: 0,
    Title: "Tough Siege",
    Open: "Open on Mon/Thu/Sat/Sun",
  },
  {
    id: 2,
    img: 0,
    Title: "Cargo Escort",
    Open: "Open on Tue/Thu/Sat/Sun",
  },
  {
    id: 3,
    img: 0,
    Title: "Aerial Threat",
    Open: "Open on Tue/Wed/Fri/Sun",
  },
  {
    id: 4,
    img: 0,
    Title: "Resourse Search",
    Open: "Open on Mon/Wed/Fri/Sat",
  },
  {
    id: 5,
    img: 0,
    Title: "Tactical Drill",
    Open: "Always Open",
  },
  {
    id: 6,
    img: 0,
    Title: "Solid Defense",
    Open: "Open on Mon/Thu/Sat/Sun",
  },
  {
    id: 7,
    img: 0,
    Title: "Fierce Attack",
    Open: "Open on Mon/Thu/Sat/Sun",
  },
  {
    id: 8,
    img: 0,
    Title: "Unstoppable Charge",
    Open: "Open on Mon/Thu/Sat/Sun",
  },
  {
    id: 9,
    img: 0,
    Title: "Fearless Protection",
    Open: "Open on Mon/Thu/Sat/Sun",
  },
];
const Supplies = () => {
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
      <ScrollView style={styles.missionContainer} horizontal={true}>
        {SuppliesMissions.map((mission) => (
          <TouchableOpacity key={mission.id} onPress={() => alert("Pressed")}>
            <View style={styles.mission}>
              <Text style={styles.Title}>{mission.Title}</Text>
              <Text style={styles.Open}>{mission.Open}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Supplies;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#d8d8d8",
    width: 950,
    height: 450,
  },

  missionContainer: {
    flex: 1,
  },

  mission: {
    backgroundColor: "#2c2c2c",

    width: 125,
    height: 275,
    gap: 1,
    marginLeft: 10,
    marginTop: 25,
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
  Title: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 190,
  },
  Open: {
    textAlign: "center",
    color: "#ffffff",

    marginTop: 10,
    fontSize: 8,
  },
});
