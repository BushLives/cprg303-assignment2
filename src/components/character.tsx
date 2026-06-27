import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const charactersInfo = [
  {
    id: 1,
    name: "Exuiai",
    rank: "★★★★★★",
    charimg: require("../../assets/characterimages/cropimg/Exusiai.jpg"),
    Role: require("../../assets/characterimages/Role/Sniper.webp"),
    Skill: require("../../assets/characterimages/Skill/Skill-Exusiai1.webp"),
  },

  {
    id: 2,
    name: "Kal'tsit",
    rank: "★★★★★★",
    charimg: require("../../assets/characterimages/cropimg/Kal'tsit.webp"),
    Role: require("../../assets/characterimages/Role/Medic.webp"),
    Skill: require("../../assets/characterimages/Skill/Skill-Kaltsit1.webp"),
  },

  {
    id: 3,
    name: "Mudrock",
    rank: "★★★★★★",
    charimg: require("../../assets/characterimages/cropimg/Mudrock.webp"),
    Role: require("../../assets/characterimages/Role/Defender.webp"),
    Skill: require("../../assets/characterimages/Skill/Skill-D3.webp"),
  },

  {
    id: 4,
    name: "Siege",
    rank: "★★★★★★",
    charimg: require("../../assets/characterimages/cropimg/Siege.webp"),
    Role: require("../../assets/characterimages/Role/Vanguard.webp"),
    Skill: require("../../assets/characterimages/Skill/Skill-C3.webp"),
  },

  {
    id: 5,
    name: "Amiya",
    rank: "★★★★★",
    charimg: require("../../assets/characterimages/cropimg/Amiya.webp"),
    Role: require("../../assets/characterimages/Role/Caster.webp"),
    Skill: require("../../assets/characterimages/Skill/Skill-T3.webp"),
  },
];
const CharacterPage = () => {
  return (
    <View>
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

      <View style={styles.ContainerOffset}>
        <ScrollView horizontal={true}>
          {charactersInfo.map((character) => (
            <TouchableOpacity
              key={character.id}
              onPress={() => alert("Pressed")}
            >
              <View>
                <Image
                  source={character.charimg}
                  style={styles.characterImage}
                />
                <Image source={character.Role} style={styles.RoleImage} />
              </View>
              <View></View>

              <View style={styles.circleBorder}></View>
              <View style={styles.Container}>
                <Text style={styles.circleText}>LV</Text>
                <Text style={styles.circleNumber}>{"50"}</Text>
                <Text style={styles.Name}>{character.name}</Text>
                <Text style={styles.rank}>{character.rank}</Text>
                <Image source={character.Skill} style={styles.SkillImg} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CharacterPage;

const styles = StyleSheet.create({
  ContainerOffset: {
    backgroundColor: "rgba(230, 230, 230, 0.75)",
    alignContent: "space-around",
  },
  Container: {
    backgroundColor: "rgba(0,0,0,0.75)",
    alignSelf: "center",
    height: 50,
    width: 105,
    position: "absolute",
    top: 150,
  },
  Container45: {
    backgroundColor: "rgba(0,0,0,0.75)",
    alignSelf: "center",
    height: 50,
    width: 115,
    position: "absolute",
    top: 155,
    transform: [{ rotate: "15deg" }],
  },
  Name: {
    color: "#ffffff",
    fontSize: 10,
    textAlign: "right",
    marginRight: 2,
    marginTop: 34,
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

  Level: {
    color: "#ffffff",
    fontSize: 20,

    textAlign: "right",
  },
  rank: {
    color: "#ffc402",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "left",
    marginLeft: 28,
    marginTop: -188,
  },
  Button: {
    backgroundColor: "#2c2c2c",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: -10,
    paddingBottom: 5,
  },
  Button2: {
    backgroundColor: "#2c2c2c",
    alignSelf: "flex-end",
  },

  ButtonContainer: {
    flexDirection: "row",
    textAlign: "right",
    alignItems: "flex-start",
    gap: 2,
    marginBottom: 3,
  },
  ScrollContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    height: 400,
    marginHorizontal: 8,
  },
  characterImage: {
    margin: 8,
    width: 100,
    height: 180,
  },
  RoleImage: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 10,
    position: "absolute",
    backgroundColor: "#242020",
  },
  SkillImg: {
    width: 25,
    height: 25,
    marginTop: 6,
    marginLeft: 75,
    position: "absolute",
    opacity: 1,
  },

  circleBorder: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 100 / 2,
    borderWidth: 3,
    position: "absolute",
    marginTop: 150,
    marginLeft: 10,
    borderColor: "#ccc0c0e8",
    backgroundColor: "#2c2c2cc0",
  },
  circleText: {
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "100",
    marginLeft: 18,
    marginTop: 5,
    position: "absolute",
  },
  circleNumber: {
    color: "#ffffff",
    fontSize: 12,
    marginLeft: 15,
    marginTop: 13,
    position: "absolute",
  },
});
