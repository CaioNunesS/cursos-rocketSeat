import { Post } from "./components/Post"
import { Header } from "./components/Header.module"
import { Sidebar } from "./components/Sidebar";

import './global.css';

import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Caio Nunes"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro?"
        />
        <Post
          author="Caio NunesS"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro?"
        />
        </main>
      </div>
      
    </div>
  )
}

