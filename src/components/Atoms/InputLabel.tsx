type propsType = {
  inputId: string;
}
export default function InputLabel({ inputId }: propsType) {
  return (
    <label htmlFor={inputId} />
  )
}
