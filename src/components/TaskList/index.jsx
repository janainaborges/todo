import React,{ useState } from "react";
import { Timer } from "../Timer";

import * as Styled from "./styled"

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCreateNewTask() {
    //   Cria uma nova task com um id random, não permita criar algo vázio
    if (!newTaskTitle) return;
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };
    setTasks((oldState) => [...oldState, newTask]);
    setNewTaskTitle("");
  }

  function handleToggleTaskCompletion(id) {
    //Altera entre "true" ou " false" o campo "isComplete" de uma task com dado ID
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );
    setTasks(newTasks);
  }
  function handleRemoveTask(id) {
    // Remove uma task da listagem pelo ID
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  }
  return (
    <Styled.Section>
      <Styled.Header>
        <Styled.Title>Minhas Tarefas do dia</Styled.Title>
        <Styled.InputBox>
          <Styled.Input
            type="text"
            placeholder="digite aqui"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            {" "}
            ok{" "}
          </button>
        </Styled.InputBox>
        <Styled.Main>
          <Styled.Ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  readOnly
                  checked={task.isComplete}
                  onClick={() => handleToggleTaskCompletion(task.id)}
                />
                <p>{task.title}</p>
                <Timer />
                <button type="button" onClick={() => handleRemoveTask(task.id)}>
                  delete
                </button>
              </li>
            ))}
          </Styled.Ul>
        </Styled.Main>
      </Styled.Header>
    </Styled.Section>
  );
}
