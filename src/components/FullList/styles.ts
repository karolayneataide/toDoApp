import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    marginHorizontal: 25,
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: colors.Gray[500],
    borderRadius: 6,
    gap: 16,
    alignItems: "center",
  },
  name: {
    width: 248,
    flex: 1,
    color: colors.Gray[100],
    fontSize: 16,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.Gray[100],
    fontSize: 24,
  },
  button: {
    width: 10,
    height: 56,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  check: {
    marginLeft: 14,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});
