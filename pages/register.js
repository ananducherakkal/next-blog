import InputWrapper from '../components/elements/InputWrapper'
import InputError from '../components/elements/InputError'
import SubmitButton from '../components/elements/SubmitButton'
import styles from '../styles/Login.module.scss'

export default function register() {
  const registerErrorMessage = null
  return (
    <div>
      <form className={`${styles.form}`}>
        <InputWrapper error={false} errorText="Please enter Name" label="Name">
          <input v-model="name.value" type="text" className="input" placeholder="Name" />
        </InputWrapper>
        <InputWrapper error={false}  errorText="Please enter valid Email" label="Email">
          <input v-model="email.value" type="text" className="input" placeholder="Email" />
        </InputWrapper>
        <InputWrapper error={false}  errorText="Please enter valid Phone number" label="Phone number">
          <input v-model="phone.value" type="text" className="input" placeholder="Phone number" />
        </InputWrapper>
        <InputWrapper error={false} errorText="Please enter password" label="Password">
          <input v-model="password.value" type="password" className="input" placeholder="Password" />
        </InputWrapper>
        <InputError error={false}>
          { registerErrorMessage || 'Something went wrong!' }
        </InputError>
        <SubmitButton>
          Sign Up
        </SubmitButton>
      </form>
    </div>
  )
}
