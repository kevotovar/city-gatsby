import { createMuiTheme } from '@material-ui/core/styles'
import { blue, lightGreen } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightGreen[500],
    },
  },
})
