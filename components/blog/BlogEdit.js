import styles from './BlogEdit.module.scss'
import InputWrapper from '../elements/InputWrapper'
import InputError from '../elements/InputError'
import SubmitButton from '../elements/SubmitButton'
import Link from 'next/link'

export default function BlogEdit() {
  return (
    <div className={`page ${styles.page}`}>
      <form>
        <InputWrapper error={false} label="Title" errorText="Please enter title">
          <input type="text" className="input" placeholder="Title" />
        </InputWrapper>
        <InputWrapper error={false} label="Description" errorText="Please enter description">
          <input className="input" placeholder="Description" />
        </InputWrapper>
        <InputWrapper error={false} label="Image Url" errorText="Please enter image url">
          <input type="text" className="input" placeholder="Image Url" />
        </InputWrapper>
        <InputWrapper error={false} label="Content" errorText="Please enter content">
          <textarea className="input" placeholder="Content" />
        </InputWrapper>
        <InputError className="input-error" error={false}>
          Something went wrong
        </InputError>
        <div className="flex-row items-end">
          <SubmitButton loading={false}>
            Add
          </SubmitButton>
          <Link href="/">
            <a className="secondary-btn">
              Cancel
            </a>
          </Link>
        </div>
      </form>
    </div>
  )
}
