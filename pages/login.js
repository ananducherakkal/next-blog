import InputWrapper from '../components/elements/InputWrapper'
import InputError from '../components/elements/InputError'
import SubmitButton from '../components/elements/SubmitButton'
import styles from '../styles/Login.module.scss'

export default function login() {
  const loginErrorMessage = null
  const submitLoading = null

  return (
    <div>
      <form className={`${styles.form}`}>
        <InputWrapper error={false} label="Email/Phone number" errorText="Please enter valid Email/Phone number">
          <input v-model="userId.value" type="text" className="input" placeholder="Email/Phone number" />
        </InputWrapper>
        <InputWrapper error={false} label="Password" errorText="Please enter password">
          <input v-model="password.value" type="password" className="input" placeholder="Password" />
        </InputWrapper>
        <InputError error={false}>
          { loginErrorMessage || 'Something went wrong!' }
        </InputError>
        <SubmitButton loading={submitLoading}>
          Login
        </SubmitButton>
      </form>
    </div>
  )
}
