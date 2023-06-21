import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../../../assets/clipboard.png")}
        />
        <Text style={styles.boldText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.simpleText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
