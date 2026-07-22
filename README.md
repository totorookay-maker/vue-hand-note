# Vue Hand Note

A lightweight handwritten annotation component for Vue 3.

Wrap any text or HTML element, set the note and its direction, and Vue Hand Note renders a handwritten label, a curved arrow, and a subtle highlight automatically.

一个适用于 Vue 3 的轻量手写标注组件。通过组件标签包裹目标内容，并设置标注文字和方向，即可自动生成手写说明、弯曲箭头和背景高亮。

## Open-source support / 开源支持

Vue Hand Note is an open-source project supported by [LearningMap.today](https://learningmap.today/). This support helps keep the component documented, tested, and freely available to the Vue community.

Vue Hand Note 是由 [LearningMap.today](https://learningmap.today/) 支持的开源项目，致力于为 Vue 社区持续提供文档完善、经过测试且可自由使用的手写标注组件。

## Live demo / 在线演示

[Open the interactive GitHub Pages demo →](https://totorookay-maker.github.io/vue-hand-note/)

[打开 GitHub Pages 在线交互演示 →](https://totorookay-maker.github.io/vue-hand-note/)

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
    创建任务时需要提供一个
    <HandNote note="稳定 ID" direction="top" color="blue">
      CLI-042
    </HandNote>
    作为唯一标识。
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
  note="自定义标注"
  direction="right"
  color="#e1499a"
  :gap="10"
  :rotate="-6"
  :label-offset-x="5"
  :label-offset-y="-3"
>
  目标内容
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
