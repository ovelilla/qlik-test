// Vendors
import styled from 'styled-components';

const AppLayoutStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AppLayoutHeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  display: flex;
  height: ${({ theme }) => theme.heights.height96};
  padding: ${({ theme }) => theme.spaces.space16};
`;

const AppLayoutMainStyled = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spaces.space16};
`;

const AppLayoutFooterStyled = styled.footer`
  display: flex;
  padding: ${({ theme }) => theme.spaces.space16};
`;

export { AppLayoutStyled, AppLayoutHeaderStyled, AppLayoutMainStyled, AppLayoutFooterStyled };
