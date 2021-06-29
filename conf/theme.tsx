
import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f50b5',
      contrastText: '#fff',
    },
  },
  typography: {
      button: {
          textTransform: "none"
      }
  },
  props: {
    MuiTextField: {
        variant: "outlined"
    }
  },
})

export default theme;
