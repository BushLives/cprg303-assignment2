import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
const MissionsItems = [
  {
    id: 1,
    img: 0,
    Title: "For Tomorrow",
    Theme: "Main Theme",
    Subtitle: "Main Story",
    Progress: 0,
  },
  {
    id: 2,
    img: 0,
    Title: "The Ark",
    Theme: "RL",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 3,
    img: 0,
    Title: "The Blessed",
    Theme: "LA",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 4,
    img: 0,
    Title: "Snow and Silver Steel",
    Theme: "KJ",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 5,
    img: 0,
    Title: "Sette Colli's Sprouts",
    Theme: "SI",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 6,
    img: 0,
    Title: "Under the Neon",
    Theme: "KA",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 7,
    img: 0,
    Title: "Through the Ages",
    Theme: "SU",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 8,
    img: 0,
    Title: "Those Who Take The future",
    Theme: "RH",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 9,
    img: 0,
    Title: "Glimpse of the Depths",
    Theme: "AE",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 10,
    img: 0,
    Title: "Spire Mirages",
    Theme: "LE",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 11,
    img: 0,
    Title: "Rekindled Flame",
    Theme: "TA",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 12,
    img: 0,
    Title: "Summertime Beats",
    Theme: "ST",
    Subtitle: "Story Line",
    Progress: 0,
  },
  {
    id: 13,
    img: 0,
    Title: "Tales of Terra",
    Theme: "TS",
    Subtitle: "Story Line",
    Progress: 0,
  },
];
const Score = () => {
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
      <ScrollView>
        {MissionsItems.map((mission) => (
          <TouchableOpacity>
            <View style={styles.mission}>
              <Text style={styles.Subtitle}>{mission.Subtitle}</Text>
              <Text style={styles.Title}>{mission.Title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#d8d8d8",
    width: 950,
    height: 450,
  },

  mission: {
    backgroundColor: "#2c2c2c",

    width: 225,
    height: 75,
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
  Subtitle: {
    color: "#ffffff",
    textAlign: "left",
    marginTop: 15,
    marginLeft: 50,
    fontSize: 16,
  },

  Title: {
    color: "#ffffff",
    textAlign: "left",
    marginLeft: 50,
    fontSize: 14,
  },
});
