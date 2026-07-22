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

const arrowAngles: Record<LongDirection, number> = {
  left: 0,
  'top-left': 45,
  top: 90,
  'top-right': 135,
  right: 180,
  'bottom-right': 225,
  bottom: 270,
  'bottom-left': 315,
}

const normalizedDirection = computed(() => directionAliases[props.direction])
const resolvedColor = computed(() => presetColors[props.color] ?? props.color)

const arrowTransform = computed(
  () => `rotate(${arrowAngles[normalizedDirection.value]} 88 48)`,
)

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
      viewBox="0 0 96 96"
      aria-hidden="true"
      focusable="false"
    >
      <g :transform="arrowTransform">
        <path
          class="vhn__arrow-ghost"
          d="M 12 38 C 31 19 48 63 69 48 C 77 42 82 45 88 48"
          transform="translate(0.7 0.6)"
        />
        <path
          class="vhn__arrow-curve"
          d="M 12 38 C 31 19 48 63 69 48 C 77 42 82 45 88 48"
        />
        <path
          class="vhn__arrow-head"
          d="M 81 39.5 L 88 48 L 77 47.5"
        />
      </g>
    </svg>

    <span class="vhn__label-position" aria-hidden="true">
      <span class="vhn__label">{{ note }}</span>
    </span>
  </span>
</template>
