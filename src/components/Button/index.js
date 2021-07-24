import { StyledButton } from "./style"
export default function Button(props) {
  return (
    <StyledButton variant="contained" { ...props } />
  )
}