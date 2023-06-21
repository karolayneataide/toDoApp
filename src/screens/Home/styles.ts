import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Gray[600],
  },
  newContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    padding: 0,
    height: 54,
    marginTop: 142,
  },
  addTaskInput: {
    height: 56,
    width: 271,
    padding: 16,
    marginRight: 8,
    backgroundColor: colors.Gray[500],
    borderColor: colors.Gray[700],
    borderRadius: 5,
    color: colors.Gray[300],
    fontSize: 16,
  },
  borderbutton: {
    backgroundColor: colors.Utils[400],
    borderColor: colors.Gray[100],
    borderRadius: 50,
    height: 24,
    width: 24,
    borderWidth: 2,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    borderRadius: 100,
    fontSize: 16,
    alignItems: "center",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.Utils[400],
    alignItems: "center",
    justifyContent: "center",
  },
});
