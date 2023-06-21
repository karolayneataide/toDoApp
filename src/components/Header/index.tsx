import { Text, View } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.toColor}>to</Text>
      <Text style={styles.doColor}>do</Text>
    </View>
  );
}
