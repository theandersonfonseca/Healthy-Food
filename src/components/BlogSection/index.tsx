import * as S from './styles';

import Container from '../Container';
import BlogCard from '../BlogCard';
import blogImg1 from '../../assets/images/blog_image_1.svg';
import blogImg2 from '../../assets/images/blog_image_2.svg';
import blogImg3 from '../../assets/images/blog_image_3.svg';
import blogImg4 from '../../assets/images/blog_image_4.svg';

export default function BlogSection() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Header>
            <S.Title>Read Our Blog</S.Title>

            <S.Text>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </S.Text>
          </S.Header>

          <S.Cards>
            <BlogCard
              image={blogImg1}
              title='Quick-start guide to nuts and seeds'
              authorName='Kevin Ibrahim'
              authorPhoto={blogImg1}
            />

            <BlogCard
              image={blogImg2}
              title='Nutrition: Tips for Improving Your Health'
              authorName='Mike Jackson'
              authorPhoto={blogImg2}
            />

            <BlogCard
              image={blogImg3}
              title='The top 10 benefits of eating healthy'
              authorName='Bryan McGregor'
              authorPhoto={blogImg3}
            />

            <BlogCard
              image={blogImg4}
              title='What Makes a Healthy Diet?'
              authorName='Jashua'
              authorPhoto={blogImg4}
            />
          </S.Cards>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
