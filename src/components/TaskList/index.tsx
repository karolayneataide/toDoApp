import { ScrollView, Text, View } from "react-native";
import { FunctionProps, TasksProps } from "../../screens/Home/Home.props";
import { EmptyList } from "../EmptyList ";
import { FullList } from "../FullList";
import { styles } from "./styles";

export function Tasklist({
  tasks,
  handleDelete,
  handleChecked,
}: TasksProps & FunctionProps) {
  const taskCreated = tasks.length;
  const tasksChecked = tasks.filter((task) => task.checked).length;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.box}>
          <View>
            <Text style={styles.create}>Criadas </Text>
          </View>
          <View style={styles.numberBox}>
            <Text style={styles.number}>{taskCreated}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.done}>Concluídas </Text>
          <View style={styles.numberBox}>
            <Text style={styles.number}>{tasksChecked}</Text>
          </View>
        </View>
      </View>
      <View>
        {tasks.length === 0 ? (
          <EmptyList />
        ) : (
          <ScrollView>
            {tasks.map((task) => (
              <FullList
                key={task.id}
                task={task}
                handleDelete={handleDelete}
                handleChecked={handleChecked}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
