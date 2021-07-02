import { useState } from 'react';
import * as S from './styles';

import { Link } from 'react-router-dom';

import { Menu as MobileMenuIcon } from '@styled-icons/boxicons-regular';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMobileMenu() {
    setIsOpen((state) => !state);
  }

  return (
    <S.Wrapper>
      <S.Logo>Healthy Food</S.Logo>

      <S.MenuNav isOpen={isOpen}>
        <S.MenuLink href='#'>Healthy Recipes</S.MenuLink>
        <S.MenuLink href='#'>Blog</S.MenuLink>
        <S.MenuLink href='#'>Join</S.MenuLink>

        <Link to='/sign-up'>
          <S.Register>Register</S.Register>
        </Link>
      </S.MenuNav>

      <S.MobileMenuButton onClick={handleMobileMenu}>
        <MobileMenuIcon size={40} />
      </S.MobileMenuButton>
    </S.Wrapper>
  );
}
