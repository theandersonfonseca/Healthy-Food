import * as S from './styles'

import Button from '../Button'

export type RecipeCardProps = {
  image: string
  title: string
}

export default function RecipeCard({image, title}: RecipeCardProps) {
  return (
    <S.Wrapper >
      <S.Image src={image} alt={title}/>

      <S.Content>
        <S.Title>{title}</S.Title>
        <Button>See Recipe</Button>
      </S.Content>
    </S.Wrapper>
  )
}