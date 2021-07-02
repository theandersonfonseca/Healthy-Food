import * as S from './styles'

export type BlogCardProps = {
  image: string
  title: string
  authorName: string
  authorPhoto: string
}

export default function BlogCard({image, title, authorName, authorPhoto}: BlogCardProps) {
  return (
    <S.Wrapper >
      <S.Image src={image} alt={title}/>

      <S.Content>
        <S.Title>{title}</S.Title>

        <S.AuthorWrapper>
          <S.AuthorPhoto src={authorPhoto} alt={authorName}/>
          <S.AuthorName>{authorName}</S.AuthorName>
        </S.AuthorWrapper>
      </S.Content>
    </S.Wrapper>
  )
}