export type HandNoteDirection =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left'
  | 'right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right'
  | 'nw'
  | 'n'
  | 'ne'
  | 'w'
  | 'e'
  | 'sw'
  | 's'
  | 'se'

export type HandNoteColor =
  | 'amber'
  | 'blue'
  | 'green'
  | 'red'
  | 'purple'
  | (string & Record<never, never>)

export interface HandNoteProps {
  note: string
  direction?: HandNoteDirection
  color?: HandNoteColor
  gap?: number
  rotate?: number
  labelOffsetX?: number
  labelOffsetY?: number
  highlight?: boolean
}
