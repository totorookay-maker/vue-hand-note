<script setup lang="ts">
import { ref } from 'vue'
import HandNote from '../src/HandNote.vue'
import type {
  HandNoteColor,
  HandNoteDirection,
} from '../src/types'

const directions: Array<{ value: HandNoteDirection; label: string }> = [
  { value: 'top-left', label: '左上' },
  { value: 'top', label: '上' },
  { value: 'top-right', label: '右上' },
  { value: 'left', label: '左' },
  { value: 'right', label: '右' },
  { value: 'bottom-left', label: '左下' },
  { value: 'bottom', label: '下' },
  { value: 'bottom-right', label: '右下' },
]

const colors: HandNoteColor[] = ['amber', 'blue', 'green', 'red', 'purple']

const note = ref('稳定 ID')
const direction = ref<HandNoteDirection>('top')
const color = ref<HandNoteColor>('blue')
const gap = ref(8)
const rotate = ref(-3)
</script>

<template>
  <main class="page-shell">
    <header class="hero">
      <p class="eyebrow">Vue 3 component library</p>
      <h1>Vue Hand Note</h1>
      <p class="lead">
        用一个组件标签，为任意内容添加手写文字、弯曲箭头和八方向说明标注。
      </p>
    </header>

    <section class="playground" aria-labelledby="playground-title">
      <div class="controls">
        <div>
          <p class="section-kicker">Interactive playground</p>
          <h2 id="playground-title">实时调整标注</h2>
        </div>

        <label>
          标注文字
          <input v-model="note" type="text" />
        </label>

        <label>
          方向
          <select v-model="direction">
            <option v-for="item in directions" :key="item.value" :value="item.value">
              {{ item.label }} · {{ item.value }}
            </option>
          </select>
        </label>

        <label>
          颜色
          <select v-model="color">
            <option v-for="item in colors" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </label>

        <label>
          间距 {{ gap }}px
          <input v-model.number="gap" type="range" min="0" max="24" />
        </label>

        <label>
          倾斜 {{ rotate }}°
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
      <h2 id="directions-title">所有方向</h2>
      <div class="direction-grid">
        <article v-for="(item, index) in directions" :key="item.value" class="direction-card">
          <HandNote
            :note="item.label"
            :direction="item.value"
            :color="colors[index % colors.length]"
          >
            <span class="demo-target">{{ item.value }}</span>
          </HandNote>
        </article>
      </div>
    </section>

    <section class="code-card">
      <p class="section-kicker">Minimal API</p>
      <h2>三项属性即可使用</h2>
      <pre><code>&lt;HandNote
  note="稳定 ID"
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
