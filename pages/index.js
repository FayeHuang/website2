import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const handleClick = () => {
    const url = `https://embed-chatbot.vercel.app/api/talk?appId=abc&userInput=HIHI`
    fetch(url)
    .then(res => res.json())
    .catch(error => {
      alert(`Error:\n${error}`)
    })
    .then(response => {
      alert(`Success:\n${JSON.stringify(response, null, 2)}`)
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Website2 !
        </h1>
        <button onClick={handleClick} style={{fontSize:24, padding:8, backgroundColor:'aquamarine'}}>TALK</button>
      </main>
    </div>
  )
}
