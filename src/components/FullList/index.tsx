import Checkbox from "expo-checkbox";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { FunctionProps, TaskProps } from "../../screens/Home/Home.props";
import { Colors } from "../../styles";
import { styles } from "./styles";

export function FullList({
  task,
  handleDelete,
  handleChecked,
}: TaskProps & FunctionProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        color={task.checked ? Colors.Utils[100] : Colors.Utils[300]}
        style={[styles.check]}
        value={task.checked}
        onValueChange={() => handleChecked(task.id)}
      />
      <View>
        <TextInput style={styles.name} value={task.text} editable={false} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => handleDelete(task.id)}
          style={styles.button}
        >
          <Image source={require("../../../assets/trash.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
