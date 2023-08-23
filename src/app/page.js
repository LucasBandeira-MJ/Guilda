import { QuestBox } from '@components/QuestBox'
import styles from './page.module.sass'
import { Header } from '@components/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <QuestBox />
    </main>
  )
}
