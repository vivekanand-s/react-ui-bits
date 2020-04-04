import {
    PRIMARY_COLOR,
    PRIMARY_BTN_COLOR,
    DISABLED_BTN_COLOR,
    DISABLED_COLOR,
    DEFAULT_BTN_COLOR,
    DEFAULT_COLOR
} from '@config/styles'

const THEME = {
    contained: {
        primary: {
            'backgroundColor': PRIMARY_COLOR,
            'color': PRIMARY_BTN_COLOR
        },
        disabled: {
            'backgroundColor': DISABLED_COLOR,
            'color': DISABLED_BTN_COLOR
        },
        defaults: {
            'backgrounColor': DEFAULT_COLOR,
            'color': DEFAULT_BTN_COLOR
        }
    },
    outlined: {
        primary: {
            'border': `1px solid ${PRIMARY_COLOR}`,
            'color': PRIMARY_COLOR
        },
        disabled: {
            'border': `1px solid ${DISABLED_COLOR}`,
            'color': DISABLED_BTN_COLOR
        },
        defaults: {
            'border': '1px solid rgba(0, 0, 0, 0.23)',
            'color': DEFAULT_BTN_COLOR
        }
    },
    defaults: {
        primary: {
            'backgroundColor': 'transparent',
            'color': PRIMARY_COLOR
        },
        disabled: {
            'backgroundColor': 'transparent',
            'color': DISABLED_BTN_COLOR
        },
        defaults: {
            'backgroundColor': 'transparent',
            'color': DEFAULT_BTN_COLOR
        }
    }
};  

export default THEME
export { THEME }
