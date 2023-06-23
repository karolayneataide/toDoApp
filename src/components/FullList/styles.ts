import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    margin: 25,
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    backgroundColor: colors.Gray[500],
    borderRadius: 6,
  },
  name: {
    flex: 1,
    backgroundColor: colors.Gray[500],
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  check: {
    width: 35,
    height: 35,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderColor: colors.Utils[300],
    borderWidth: 2,
    paddingVertical: 1,
    paddingHorizontal: 6,
  },
});
