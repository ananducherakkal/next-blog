import styles from './TopNavbar.module.scss'
import Link from 'next/link'

export default function TopNavbar() {
  const userDetails = false
  return (
    <div className={`${styles.navbar} flex-row items-center semi-bold`}>
      <Link href="/">
        <a className="logo text-20 mr-auto cursor-pointer uppercase">
          Blog
        </a>
      </Link>
      <div className={`${styles.menuItems} flex-row items-center text-16`}>
        {
          userDetails ? (
            // <UserMenu />
            <div>
              sls
            </div>
          ) : (
            <>
              <Link href="/login">
                <a>
                  LogIn
                </a>
              </Link>
              <Link href="/register">
                <a className={`${styles.signupBtn} secondary-btn-light`}>
                  SignUp
                </a>
              </Link>
            </>
          )
        }
      </div>
    </div>
  )
}
