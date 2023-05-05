import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor:'#fff',
    padding: 5,
    // borderTopWidth: 1,
    // borderRadious: 16,
    // borderColor: "purple",
  },
  profileAvatar: {
    width: 63,
    height: 63,
    borderRadius: 30,
  },
  avatarButton: {
    paddingRight: 15,
  },
});
