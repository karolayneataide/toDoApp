import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { FunctionProps, TaskProps } from "../../screens/Home/Home.props";
import { styles } from "./styles";

export function FullList({
  task,
  handleDelete,
  handleChecked,
}: TaskProps & FunctionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.check}>
        <Checkbox
          status={task.checked ? "checked" : "unchecked"}
          onPress={() => handleChecked(task.id)}
        />
      </View>
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
