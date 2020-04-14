import {
    DefaultStyles,
    StandardStyles,
    OutlinedStyles,
    RoundedStyles
} from './styled'
import { Input } from '@components/atoms'
import withStyles from '@utils/withStyles'

const DefaultInput = withStyles(Input, DefaultStyles)
const StandardInput = withStyles(Input, StandardStyles)
const OutlinedInput = withStyles(Input, OutlinedStyles)
const RoundedInput = withStyles(Input, RoundedStyles)

export {
    DefaultInput,
    StandardInput,
    OutlinedInput,
    RoundedInput
}