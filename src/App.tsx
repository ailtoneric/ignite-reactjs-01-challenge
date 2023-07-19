import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import plusLogo from './assets/plus.svg'
import clipboardIcon from './assets/Clipboard.svg'
import { Trash } from '@phosphor-icons/react'

import styles from './App.module.css'
import './global.css'
interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}



const tasks: TaskType[] = [
  {
    'id': uuidv4(),
    'title': 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    'isComplete': false
  },
  {
    'id': uuidv4(),
    'title': 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    'isComplete': true
  },
  {
    'id': uuidv4(),
    'title': 'asdasda asd asd asdadasda asda sd asdasdasd',
    'isComplete': true
  }
];

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <header className={styles.header}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button>
            Criar
            <img src={plusLogo} alt="icone de adição" />
          </button>
        </header>
        <div className={styles.content}>
          <div className={styles.info}>
            <div>
              <p className={styles.text}>Tarefas Criadas</p>
              <span className={styles.counter}>0</span>
            </div>
            <div>
              <p className={styles.text}>Concluídas</p>
              <span className={styles.counter}>0</span>
            </div>
          </div>
          <div className={styles.wrapperTasks}>
          {
            (tasks.length === 0) ? (
              <div className={styles.contentNoTasks}>
                <img src={clipboardIcon} alt="icone de clipboard" />
                <div>
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            ) : (
              tasks.map(task => {
                return (
                  <div className={styles.contentTasks} key={task.id}>
                    <label className={styles.bContain}>
                      <input type="checkbox" />
                      <div className={styles.bInput}></div>
                    </label>
                    <p>{task.title}</p>
                    <Trash className={styles.trashIcon} size={24} />
                  </div>
                )
              })
            )
          }
          </div>
        </div>
      </main>
    </div>
  )
}