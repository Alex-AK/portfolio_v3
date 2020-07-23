import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';
import Global from './Global';
import Options from './Options';

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Global}
  ${Options}
`;

export default GlobalStyles;
