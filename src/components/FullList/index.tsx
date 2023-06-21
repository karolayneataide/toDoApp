import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { TaskProps } from "../../screens/Home/Home.props";
import { styles } from "./styles";

export function FullList({ task }: TaskProps) {
  const [isChecked, setIsChecked] = useState<Boolean>(task.checked);

  return (
    <View style={styles.container}>
      <Checkbox
        status={task.checked ? "checked" : "unchecked"}
        onPress={() => {
          setIsChecked(!isChecked);
        }}
      />
      <TextInput style={styles.name} value={task.text} editable={false} />
      <TouchableOpacity style={styles.button}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}

// type Props = {
//   deleteTask: () => void,
//   handleChecked: () => void,
// };

// export function FullList({ tasks, deleteTask, handleChecked }) {
//   return (
//     <View style={styles.container}>
//       <Checkbox
//         status={checked ? "checked" : "unchecked"}
//         onPress={() => {
//           setChecked(handleChecked);
//         }}
//       />
//       <TextInput style={styles.name} value={tasks} editable={false} />
//       <TouchableOpacity style={styles.button} onPress={deleteTask}>
//         <Image source={require("../../../assets/trash.png")} />
//       </TouchableOpacity>
//     </View>
//   );
//   });
//   }
// }
