
export default function InputError({ children, error }) {
  if (error) {
    return (
      <div className="input-error first-capitalize text-12">
        { children }
      </div>
    )
  } else {
    return <div className="input-error" />
  }
}
