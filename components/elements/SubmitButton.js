
import LoadingCircleIcon from '../svg/LoadingCircleIcon'
import styles from './SubmitButton.module.scss'

export default function SubmitButton({ children, loading, disabled, secondary }) {
  return (
    <div className={`${styles.submitBtn} flex-cl`}>
      {
        loading && (
          <div className={`${styles.loading} text-12`}>
            <div className={`${styles.loadingIcon} float-left mr-5 logo-wrapper`}>
              <LoadingCircleIcon />
            </div>
            Loading..
          </div>
        )
      }
      {
        secondary ? (
          <button className="secondary-btn" disabled={disabled || loading} tabIndex="1">
            { children }
          </button>
        ) : (
          <button type="submit" className="primary-btn" disabled={disabled || loading} tabIndex="1">
            { children }
          </button>
        )
      }
    </div>
  )
}
