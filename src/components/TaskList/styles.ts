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
    fontWeight: "700",
    fontSize: 14,
    padding: 4,
  },
  number: {
    color: colors.Gray[200],
    backgroundColor: colors.Gray[400],
  },
  numberBox: {
    backgroundColor: colors.Gray[400],
    borderRadius: 15,
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: colors.Gray[400],
    borderWidth: 1,
  },
  done: {
    fontWeight: "700",
    color: colors.Utils[100],
    fontSize: 14,
    padding: 4,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});
