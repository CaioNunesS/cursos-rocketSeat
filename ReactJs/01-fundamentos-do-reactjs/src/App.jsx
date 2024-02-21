import { Post } from "./Post"
import { Header } from "./components/Header.module"

import './global.css';

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

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

