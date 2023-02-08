// Components
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

// author: { avatarUrl: "", name: "", role: "" }
// publishedAt: Date
// content: String
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/AOBarbosa.png",
      name: "André Barbosa",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-02-1 16:42:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir um projeto que fiz no NLW Setup, evento da Rocketseat. O nome do projeto é Habits 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-31 16:42:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {[
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            }),
          ]}
        </main>
      </div>
    </div>
  );
}
