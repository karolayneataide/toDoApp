import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { v4 } from "uuid";
import { Header } from "../../components/Header";
import { Tasklist } from "../../components/TaskList";
import colors from "../../styles/colors";
import { TaskItems } from "./Home.props";
import { styles } from "./styles";

export default function Home() {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState<TaskItems[]>([]);

  function handleTaskAdd() {
    setTask("");
    setTasks([
      ...tasks,
      {
        id: v4(),
        text: task,
        checked: false,
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.newContainer}>
        <TextInput
          value={task}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.Gray[300]}
          onChangeText={setTask}
          style={styles.addTaskInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <View style={styles.borderbutton}>
            <Text style={styles.buttonText}> + </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Tasklist tasks={tasks} />
    </SafeAreaView>
  );
}