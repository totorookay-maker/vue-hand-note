# Vue Hand Note

A lightweight handwritten annotation component for Vue 3.

Wrap any text or HTML element, set the note and its direction, and Vue Hand Note renders a handwritten label, a curved arrow, and a subtle highlight automatically.

## Open-source support

Vue Hand Note is an open-source project supported by [LearningMap.today](https://learningmap.today/). This support helps keep the component documented, tested, and freely available to the Vue community.

## Live demo

[Open the interactive GitHub Pages demo →](https://totorookay-maker.github.io/vue-hand-note/)

## Features

- Vue 3 and TypeScript support
- Eight annotation directions plus short aliases
- Hand-drawn SVG arrows generated without image assets
- Five color presets and arbitrary CSS colors
- Configurable gap, rotation, offsets, and highlighting
- Global plugin registration or individual component imports
- Vite playground and a standalone HTML demo
- No runtime dependency other than Vue

## Install

```bash
npm install vue-hand-note
```

> The package is prepared for npm publishing. Until it is published, install it from a local checkout or tarball.

## Usage

### Import the component

```vue
<template>
  <p>
    Every task receives a
    <HandNote note="Stable ID" direction="top" color="blue">
      CLI-042
    </HandNote>
    identifier.
  </p>
</template>

<script setup lang="ts">
import { HandNote } from 'vue-hand-note'
import 'vue-hand-note/style.css'
</script>
```

### Register globally

```ts
import { createApp } from 'vue'
import App from './App.vue'
import VueHandNote from 'vue-hand-note'
import 'vue-hand-note/style.css'

createApp(App).use(VueHandNote).mount('#app')
```

## Directions

```text
top-left       top       top-right
left                         right
bottom-left   bottom   bottom-right
```

Short aliases are also supported:

```text
nw  n  ne  w  e  sw  s  se
```

`direction` means the position of the handwritten label. The arrow always points toward the wrapped content.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `note` | `string` | required | Annotation text |
| `direction` | `HandNoteDirection` | `top` | Label direction or short alias |
| `color` | preset or CSS color | `blue` | `amber`, `blue`, `green`, `red`, `purple`, or any CSS color |
| `gap` | `number` | `8` | Space between the target and arrow, in pixels |
| `rotate` | `number` | `-3` | Label rotation, in degrees |
| `labelOffsetX` | `number` | `0` | Horizontal label adjustment, in pixels |
| `labelOffsetY` | `number` | `0` | Vertical label adjustment, in pixels |
| `highlight` | `boolean` | `true` | Enables the subtle target highlight |

### Custom styling example

```vue
<HandNote
  note="Custom note"
  direction="right"
  color="#e1499a"
  :gap="10"
  :rotate="-6"
  :label-offset-x="5"
  :label-offset-y="-3"
>
  Target content
</HandNote>
```

The component uses `Shantell Sans` when available and falls back to common handwritten system fonts. Applications can load Shantell Sans themselves if they want the exact demo appearance.

## Local development

```bash
npm install
npm run dev
```

Validation and production builds:

```bash
npm run typecheck
npm run build
npm run build:demo
npm run pack:check
```

Open `static-demo.html` directly in a browser for a no-build Web Component demonstration.

## Contributing

Issues and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2026 totorookay-maker
