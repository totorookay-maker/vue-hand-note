import type { App } from 'vue'
import HandNote from './HandNote.vue'
import './style.css'

export type {
  HandNoteColor,
  HandNoteDirection,
  HandNoteProps,
} from './types'

export { HandNote }

export default {
  install(app: App) {
    app.component('HandNote', HandNote)
  },
}
