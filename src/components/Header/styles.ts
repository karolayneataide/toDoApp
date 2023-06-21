import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    height: 120,
    backgroundColor: colors.Gray[700],
    padding: 24,
    display: "flex",
  },
  toColor: {
    color: colors.Utils[100],
    fontSize: 40,
    fontWeight: "bold",
  },
  doColor: {
    color: colors.Utils[300],
    fontSize: 40,
    fontWeight: "bold",
  },
});
