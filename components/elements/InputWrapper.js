
import InputError from './InputError'
import styles from './InputWrapper.module.scss'

export default function InputWrapper({ children, label, error, errorText }) {
  return (
    <div className={`${styles.inputWrapper} ${error ? 'error' : ''} flex-cl`}>
      {
        label && (
          <div className={`${styles.inputLabel} text-14`}>
            { label }
          </div>
        )
      }
      <div className={styles.inputFieldWrapper}>
        { children }
      </div>
      <InputError error={error && errorText}>
        { errorText }
      </InputError>
    </div>
  )
}
