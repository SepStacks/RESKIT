import colors from 'vuetify/es5/util/colors'

import 'typeface-montserrat/index.css'

// Make sure css loader is installed first
import 'line-awesome/dist/line-awesome/css/line-awesome.css'

const LINE_AWESOME = {
  complete: 'la-check',
  cancel: 'la-ban',
  close: 'la-times',
  delete: 'la-trash', // delete (e.g. v-chip close)
  clear: 'la-times',
  success: 'la-check',
  info: 'la-exclamation-circle',
  warning: 'la-exclamation-triangle',
  error: 'la-exclamation-triangle',
  prev: 'la-angle-left',
  next: 'la-angle-right',
  checkboxOn: 'la-check',
  checkboxOff: 'la-stop',
  checkboxIndeterminate: '...',
  delimiter: '...', // for carousel
  sort: '...',
  expand: 'la-angle-down',
  menu: '...',
  subgroup: '...',
  dropdown: 'la-angle-down',
  radioOn: '...',
  radioOff: '...',
  edit: 'la-edit',
  ratingEmpty: '...',
  ratingFull: '...',
  ratingHalf: '...',
  loading: '...',
  first: '...',
  last: '...',
  unfold: '...',
  file: '...'
}

export default {
  icons: {
    iconfont: 'la', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    values: LINE_AWESOME
  },
  theme: {
    themes: {
      // dark: {
      //   text:'#707070',
      //   primary: '#E61331',
      //   accent: '#FFB300',
      //   secondary: '#222324',
      //   tertiary: "#282A2D",
      //   quaternary: "#707070",
      //   info: colors.teal.lighten3,
      //   warning: colors.amber.base,
      //   error: colors.deepOrange.accent4,
      //   success: colors.green.accent3
      // },

      light: {
        primary: '#1D1F2B',
        accent: '#E31B6D',
        secondary: '#252934',
        tertiary: '#2F3850',
        quaternary: "#596C9E",
        info: colors.teal.lighten1,
        warning: '#FFB300',
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
}
