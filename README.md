# Vue Hand Note

A lightweight handwritten annotation component for Vue 3.

Wrap any text or HTML element with the component, set the annotation text and direction, and it will render a handwritten label, curved arrow, and subtle highlight.

## Features

- Vue 3 and TypeScript support
- Eight annotation directions
- Hand-drawn curved arrows
- Custom text and colors
- Configurable rotation and offsets
- Supports text, code, and arbitrary HTML content
- Global plugin registration or individual component imports

## Usage

```vue
<template>
  <HandNote note="stable ID" direction="top" color="blue">
    CLI-042
  </HandNote>
</template>

<script setup lang="ts">
import { HandNote } from 'vue-hand-note'
import 'vue-hand-note/style.css'
</script>
```

Supported directions:

`top-left`, `top`, `top-right`, `left`, `right`, `bottom-left`, `bottom`, and `bottom-right`.

## License

MIT © totorookay-maker
