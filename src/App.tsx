import { Header } from './components/Header'
import plusLogo from './assets/plus.svg'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.content}>
        <header className={styles.header}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button>
            Criar
            <img src={plusLogo} alt="icone de adição" />
          </button>
        </header>
        <div>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </main>
    </div>
  )
}