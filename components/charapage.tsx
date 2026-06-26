import { StatusBar, StyleSheet, View } from "react-native";
const posts = [require("../assets/images/react-logo.png")];
const ProfilePage = () => {
  return <View></View>;
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: 10,
  },
  HeaderText: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 12,
    textAlign: "center",
    color: "gray",
    justifyContent: "center",
  },
  circlePFP: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "#3498db",
  },
  circleBorder: {
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 55,
    borderRadius: 100 / 2,
    backgroundColor: "white",
    borderWidth: 1.5,
  },
  pfp: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    textAlignVertical: "auto",
    padding: 12,
  },
  Stat_text: {
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "semibold",
    color: "gray",
  },
  StatNUM_text: {
    fontSize: 12,
    alignSelf: "center",
    fontWeight: "bold",
  },
  BioTitle_text: {
    marginTop: -10,
    marginBottom: -10,
    fontSize: 11,
    padding: 10,
    fontWeight: "bold",
  },
  Bio_text: {
    marginTop: -10,
    fontSize: 11,
    padding: 10,
  },

  Member_button: {
    margin: 5,
    alignSelf: "center",
    height: 22,
    width: 225,
    fontWeight: "semibold",
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 2.5,
  },
  Back_button: {
    backgroundColor: "white",
    marginRight: 60,
    height: 30,
    width: 30,
    borderWidth: 0,
  },
  Add_postButton: {
    backgroundColor: "white",
    marginLeft: 60,
    height: 30,
    width: 30,
    borderWidth: 0,
  },
  Post_images: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 5,
    gap: 2,
  },

  grid_post: {
    height: 120,
    width: 105,
    justifyContent: "center",
    aspectRatio: 0.5,
    resizeMode: "cover",
  },
});
