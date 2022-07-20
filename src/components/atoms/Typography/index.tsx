import { Typography ,TypographyProps} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import baseTheme from '../../../theme/index';
type Typography_Props = {
  fontWeight?: string,
  fontSize?: string,
  color?:any
}&TypographyProps;
const TypographyComponent = ( {children, ...remProps}:Typography_Props) =>{
  return(
    <ThemeProvider theme={baseTheme} >
      <Typography {...remProps} data-testid="typography" mb={1} mt={1} >
        {children}
      </Typography>
    </ThemeProvider>
  )
}

export default TypographyComponent;

