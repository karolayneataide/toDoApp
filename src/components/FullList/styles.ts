import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
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
    borderRadius: 5,
    backgroundColor: colors.Utils[200],
    alignItems: "center",
    justifyContent: "center",
  },
});
