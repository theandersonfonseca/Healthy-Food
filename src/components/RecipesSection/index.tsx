import * as S from './styles';

import Container from '../Container';
import RecipeCard from '../RecipeCard';
import foodImg1 from '../../assets/images/comida_1.svg';
import foodImg2 from '../../assets/images/comida_2.svg';
import foodImg3 from '../../assets/images/comida_3.svg';
import foodImg4 from '../../assets/images/comida_4.svg';

export default function RecipesSection() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Header>
            <S.Title>Our Best Recipes</S.Title>

            <S.Text>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </S.Text>
          </S.Header>

          <S.Recipes>
            <RecipeCard image={foodImg1} title='Broccoli Saladwith Bacon' />
            <RecipeCard image={foodImg2} title='Classic Beef Burgers' />
            <RecipeCard image={foodImg3} title='Classic Potato Salad' />
            <RecipeCard image={foodImg4} title='Cherry Cobbler on the Grill' />
          </S.Recipes>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
