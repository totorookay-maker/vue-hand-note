<script setup lang="ts">
import { ref } from 'vue'
import HandNote from '../src/HandNote.vue'
import type {
  HandNoteColor,
  HandNoteDirection,
} from '../src/types'

const directions: Array<{ value: HandNoteDirection; label: string }> = [
  { value: 'top-left', label: 'Top left' },
  { value: 'top', label: 'Top' },
  { value: 'top-right', label: 'Top right' },
  { value: 'left', label: 'Left' },
  { value: 'right', label: 'Right' },
  { value: 'bottom-left', label: 'Bottom left' },
  { value: 'bottom', label: 'Bottom' },
  { value: 'bottom-right', label: 'Bottom right' },
]

const colors: HandNoteColor[] = ['amber', 'blue', 'green', 'red', 'purple']

const note = ref('Stable ID')
const direction = ref<HandNoteDirection>('top')
const color = ref<HandNoteColor>('blue')
const gap = ref(8)
const rotate = ref(-3)
</script>

<template>
  <main class="page-shell">
    <header class="hero">
      <p class="eyebrow">Open source · Vue 3</p>
      <h1>Vue Hand Note</h1>
      <p class="lead">
        Add precise handwritten notes and naturally curved arrows to any Vue 3 content.
      </p>
      <div class="hero-links">
        <a href="https://github.com/totorookay-maker/vue-hand-note">View on GitHub</a>
        <span>8 directions</span>
        <span>TypeScript</span>
      </div>
    </header>

    <section class="playground" aria-labelledby="playground-title">
      <div class="controls">
        <div>
          <p class="section-kicker">Interactive playground</p>
          <h2 id="playground-title">Tune the annotation</h2>
        </div>

        <label>
          Note text
          <input v-model="note" type="text" />
        </label>

        <label>
          Direction
          <select v-model="direction">
            <option v-for="item in directions" :key="item.value" :value="item.value">
              {{ item.label }} · {{ item.value }}
            </option>
          </select>
        </label>

        <label>
          Color
          <select v-model="color">
            <option v-for="item in colors" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </label>

        <label>
          Gap · {{ gap }}px
          <input v-model.number="gap" type="range" min="0" max="24" />
        </label>

        <label>
          Rotation · {{ rotate }}°
          <input v-model.number="rotate" type="range" min="-12" max="12" />
        </label>
      </div>

      <div class="preview-card">
        <p class="task-line">
          - [ ]
          <HandNote
            :note="note"
            :direction="direction"
            :color="color"
            :gap="gap"
            :rotate="rotate"
          >
            <code>CLI-042</code>
          </HandNote>
          Add export command <span class="tag">#cli</span>
        </p>
      </div>
    </section>

    <section class="directions" aria-labelledby="directions-title">
      <p class="section-kicker">Eight directions</p>
      <h2 id="directions-title">Aligned at every edge</h2>
      <div class="direction-grid">
        <article
          v-for="(item, index) in directions"
          :key="item.value"
          :class="['direction-card', `direction-card--${item.value}`]"
        >
          <span class="direction-name">{{ item.value }}</span>
          <HandNote
            :note="item.label"
            :direction="item.value"
            :color="colors[index % colors.length]"
          >
            <span class="demo-target">target</span>
          </HandNote>
        </article>
      </div>
    </section>

    <section class="code-card">
      <p class="section-kicker">Minimal API</p>
      <h2>Three props. Nothing else.</h2>
      <pre><code>&lt;HandNote
  note="Stable ID"
  direction="top"
  color="blue"
&gt;
  CLI-042
&lt;/HandNote&gt;</code></pre>
    </section>

    <footer class="site-footer">
      <p>
        Open-source project supported by
        <a href="https://learningmap.today/" rel="noopener">LearningMap.today</a>.
      </p>
      <a
        href="https://github.com/totorookay-maker/vue-hand-note"
        rel="noopener"
      >View source on GitHub</a>
    </footer>
  </main>
</template>
