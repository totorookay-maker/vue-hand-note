<script setup lang="ts">
import { computed } from 'vue'
import type {
  HandNoteColor,
  HandNoteDirection,
  HandNoteProps,
} from './types'

defineOptions({ name: 'HandNote' })

type LongDirection = Exclude<
  HandNoteDirection,
  'nw' | 'n' | 'ne' | 'w' | 'e' | 'sw' | 's' | 'se'
>

const props = withDefaults(defineProps<HandNoteProps>(), {
  direction: 'top',
  color: 'blue',
  gap: 8,
  rotate: -3,
  labelOffsetX: 0,
  labelOffsetY: 0,
  highlight: true,
})

const directionAliases: Record<HandNoteDirection, LongDirection> = {
  'top-left': 'top-left',
  top: 'top',
  'top-right': 'top-right',
  left: 'left',
  right: 'right',
  'bottom-left': 'bottom-left',
  bottom: 'bottom',
  'bottom-right': 'bottom-right',
  nw: 'top-left',
  n: 'top',
  ne: 'top-right',
  w: 'left',
  e: 'right',
  sw: 'bottom-left',
  s: 'bottom',
  se: 'bottom-right',
}

const presetColors: Record<string, string> = {
  amber: '#d97706',
  blue: '#2563eb',
  green: '#15803d',
  red: '#dc2626',
  purple: '#7c3aed',
}

const vectors: Record<LongDirection, { x: number; y: number }> = {
  'top-left': { x: -0.707, y: -0.707 },
  top: { x: 0, y: -1 },
  'top-right': { x: 0.707, y: -0.707 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  'bottom-left': { x: -0.707, y: 0.707 },
  bottom: { x: 0, y: 1 },
  'bottom-right': { x: 0.707, y: 0.707 },
}

const normalizedDirection = computed(() => directionAliases[props.direction])
const resolvedColor = computed(() => presetColors[props.color] ?? props.color)

const round = (value: number) => Math.round(value * 10) / 10

const arrow = computed(() => {
  const vector = vectors[normalizedDirection.value]
  const perpendicular = { x: -vector.y, y: vector.x }
  const start = { x: vector.x * 64, y: vector.y * 64 }
  const end = { x: vector.x * 18, y: vector.y * 18 }
  const control1 = {
    x: vector.x * 50 + perpendicular.x * 13,
    y: vector.y * 50 + perpendicular.y * 13,
  }
  const control2 = {
    x: vector.x * 31 - perpendicular.x * 9,
    y: vector.y * 31 - perpendicular.y * 9,
  }

  const backX = control2.x - end.x
  const backY = control2.y - end.y
  const length = Math.hypot(backX, backY) || 1
  const back = { x: backX / length, y: backY / length }
  const headPerpendicular = { x: -back.y, y: back.x }
  const head1 = {
    x: end.x + back.x * 9 + headPerpendicular.x * 4.5,
    y: end.y + back.y * 9 + headPerpendicular.y * 4.5,
  }
  const head2 = {
    x: end.x + back.x * 9 - headPerpendicular.x * 4.5,
    y: end.y + back.y * 9 - headPerpendicular.y * 4.5,
  }

  return {
    curve: `M ${round(start.x)} ${round(start.y)} C ${round(control1.x)} ${round(control1.y)}, ${round(control2.x)} ${round(control2.y)}, ${round(end.x)} ${round(end.y)}`,
    head: `M ${round(head1.x)} ${round(head1.y)} L ${round(end.x)} ${round(end.y)} L ${round(head2.x)} ${round(head2.y)}`,
  }
})

const rootStyle = computed(() => ({
  '--vhn-color': resolvedColor.value,
  '--vhn-gap': `${props.gap}px`,
  '--vhn-label-x': `${props.labelOffsetX}px`,
  '--vhn-label-y': `${props.labelOffsetY}px`,
  '--vhn-label-rotate': `${props.rotate}deg`,
}))
</script>

<template>
  <span
    class="vhn"
    :class="[`vhn--${normalizedDirection}`, { 'vhn--highlight': highlight }]"
    :style="rootStyle"
    :data-direction="normalizedDirection"
    :data-note="note"
  >
    <span class="vhn__target"><slot /></span>

    <svg
      class="vhn__arrow"
      viewBox="-80 -80 160 160"
      aria-hidden="true"
      focusable="false"
    >
      <path class="vhn__arrow-curve" :d="arrow.curve" />
      <path class="vhn__arrow-head" :d="arrow.head" />
    </svg>

    <span class="vhn__label-position" aria-hidden="true">
      <span class="vhn__label">{{ note }}</span>
    </span>
  </span>
</template>
