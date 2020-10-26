// @flow
import {useTheme} from 'theming'

import type {Styles} from './types'
import createUseStyles from './createUseStyles'

const useStyles = <Theme: {}>(styles: Styles<Theme>, props?: any) =>
  createUseStyles(styles)({
    theme: useTheme(),
    ...props
  })

export default useStyles
