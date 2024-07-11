// Vendors
import 'styled-components';
// Constants
import { DEFAULT_BORDER_RADIUS } from '../styles/borderRadius/default.border-radius.theme';
import { DEFAULT_BORDERS } from '../styles/borders/default.borders.theme';
import { DEFAULT_BREAKPOINTS } from '../styles/breakpoints/default.breakpoints.theme';
import { DEFAULT_COLORS } from '../styles/colors/default.colors.theme';
import { DEFAULT_FONT_SIZES } from '../styles/fontSizes/default.font-sizes.theme';
import { DEFAULT_FONT_WEIGHTS } from '../styles/fontWeights/default.font-weights.theme';
import { DEFAULT_HEIGHTS } from '../styles/heights/default.heights.theme';
import { DEFAULT_OPACITIES } from '../styles/opacities/default.opacities.theme';
import { DEFAULT_SHADOWS } from '../styles/shadows/default.shadows.theme';
import { DEFAULT_SPACES } from '../styles/spaces/default.spaces.theme';
import { DEFAULT_VISIBILITY } from '../styles/visibility/default.visibility.theme';
import { DEFAULT_WIDTHS } from '../styles/widths/default.widths.theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: typeof DEFAULT_BORDER_RADIUS;
    borders: typeof DEFAULT_BORDERS;
    breakpoints: typeof DEFAULT_BREAKPOINTS;
    colors: typeof DEFAULT_COLORS;
    fontSizes: typeof DEFAULT_FONT_SIZES;
    fontWeights: typeof DEFAULT_FONT_WEIGHTS;
    heights: typeof DEFAULT_HEIGHTS;
    opacities: typeof DEFAULT_OPACITIES;
    shadows: typeof DEFAULT_SHADOWS;
    spaces: typeof DEFAULT_SPACES;
    visibility: typeof DEFAULT_VISIBILITY;
    widths: typeof DEFAULT_WIDTHS;
  }
}
