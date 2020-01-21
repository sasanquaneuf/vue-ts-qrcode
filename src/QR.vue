<template>
  <div></div>
</template>

<script lang="ts">
import { QRCode } from 'ts-qrcode'

export default {
  name: 'qr',
  props: ['width', 'height', 'correctLevel', 'background', 'foreground', 'text'],
  watch: {
    width () { this.draw() },
    height () { this.draw() },
    correctLevel () { this.draw() },
    background () { this.draw() },
    foreground () { this.draw() },
    text () { this.draw() }
  },
  methods: {
    draw (this: any) {
      const option: any = {}
      if (this.width != null) option.width = parseInt(this.width)
      if (this.height != null) option.height = parseInt(this.height)
      if (this.correctLevel != null) option.correctLevel = parseInt(this.correctLevel)
      if (this.background != null) option.background = this.background
      if (this.foreground != null) option.foreground = this.foreground
      if (this.text != null) option.text = this.text
      const canvas = QRCode.createCanvas(option)
      this.$el.innerHTML = ''
      this.$el.appendChild(canvas)
    }
  },
  mounted () {
    this.draw()
  }
}
</script>
