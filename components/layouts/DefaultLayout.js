
import TopNavbar from '../navigation/TopNavbar'
import styles from './DefaultLayout.module.scss'
export default function DefaultLayout({ children }) {
  return (
    <div className={`${styles.defaultLayout} flex-col`}>
      <TopNavbar />
      <div className={`${styles.mainContent}`}>
        { children }
      </div>
    </div>
  )
}
