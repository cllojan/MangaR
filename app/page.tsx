import Image from 'next/image'
import styles from './page.module.css'
import getLastUpdate from '@/Components/getLastUpdates'

export default function Home() {
  const data = getLastUpdate();
  return (
    <main className={styles.main}>
    
      {data.status}
    </main>
  )
}
