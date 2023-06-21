import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
    padding: 24,
    display: "flex",
    justifyContent: "space-between",
  },
  create: {
    color: colors.Utils[300],
  },
  number: {
    color: colors.Gray[200],
  },
  numberBox: {
    backgroundColor: colors.Gray[400],
    borderRadius: 50,
    // borderWidth: 12,
    // padding: 16,
  },
  done: {
    color: colors.Utils[100],
  },
  box: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
});
