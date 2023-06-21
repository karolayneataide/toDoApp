import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
  wrapper: {
    height: 208,
    width: 327,
    borderTopWidth: 1,
    marginTop: 98,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderColor: colors.Gray[400],
  },
  container: {
    alignItems: "center",
  },
  img: {
    marginBottom: 16,
  },
  boldText: {
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: "700",
    color: Colors.Gray[300],
  },
  simpleText: {
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: "400",
    color: Colors.Gray[300],
  },
});
