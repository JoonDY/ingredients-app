import styled from 'styled-components';
import { theme } from '../../shared/theme';
import { H1, Nav } from '../../shared/globals';

export const HeaderContainer = styled.header`
  width: 90%;
  margin: 1rem auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  border-bottom: 2px solid ${theme.color.accent};

  @media (min-width: 1000px) {
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const TitleH1 = styled(H1)`
  font-size: 1.5rem;

  @media (min-width: 1500px) {
  }
`;

export const HeaderNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;

  @media (min-width: 1000px) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const UL = styled.ul`
  font-size: 0.7rem;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 1000px) {
    margin-top: 0;
  }
`;

export const LI = styled.li`
  margin: 0 0.5rem;
  display: flex;
  font-weight: 700;

  @media (min-width: 1500px) {
    margin-left: 1rem;
  }
`;
