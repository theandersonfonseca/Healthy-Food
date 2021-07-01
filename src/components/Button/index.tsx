import { ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: ReactNode
  boxShadow?: boolean
}

export default function Button({children, boxShadow}: ButtonProps) {
  return (
    <S.Wrapper boxShadow={boxShadow}>{children}</S.Wrapper>
  )
}