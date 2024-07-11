// Vendors
import styled from 'styled-components';

const AppLogoComponentStyled = styled.div`
  align-items: center;
  display: flex;
`;

const AppLogoComponentTextStyled = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.size18};
  font-weight: ${({ theme }) => theme.fontWeights.weight700};
`;

export { AppLogoComponentStyled, AppLogoComponentTextStyled };
