<template>
  <div
    :class="$style['number-supporter']"
    role="radiogroup"
  >
    <div
      v-for="(value, index) in btnTexts"
      :style="styleSize"
      :key="'radio'+index"
      :class="{[$style.active]: active === index}"
      role="radio"
      @click="input(index)"
    >{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Model, Mixins } from 'vue-property-decorator'
import { isEqual, range } from 'lodash'
import AppMixin from '@/components/AppMixin'

@Component({
  name: 'AppNumberSupporter'
})
export default class AppNumberSupporter extends Mixins(AppMixin) {
  @Model('input', { type: Array }) value!: number[]
  @Prop({ default: 30 }) size!: number
  @Prop({ default: 0, type: Number }) min!: number
  @Prop({ default: 9, type: Number }) max!: number

  get btnTexts (): any[] {
    return range(0, 6).map((element) => this.i18n.getValue(`text[${element}]`))
  }

  get status (): number[][] {
    return [
      range(this.min, this.max + 1),
      range(this.min, this.max + 1).filter((value) => value % 2 === 1),
      range(this.min, this.max + 1).filter((value) => value % 2 === 0),
      range(this.min, this.max + 1).slice((this.max - this.min + 1) / 2, this.max + 1),
      range(this.min, this.max + 1).slice(0, (this.max - this.min + 1) / 2),
      []
    ]
  }

  get styleSize () {
    return {
      width: this.size + 'px',
      height: this.size + 'px',
      fontSize: this.size * 0.467 / 16 + 'rem'
    }
  }

  get active () {
    for (let i = 0; i < this.status.length; i++) {
      if (isEqual(this.status[i], this.value)) return i
    }
    return -1
  }

  @Emit()
  input (index: number) {
    return this.status[index]
  }
}
</script>

<style lang="stylus" module>
.number-supporter
  display inline-block

  >[role=radio]
    display inline-flex
    justify-content center
    align-items center
    box-sizing border-box
    margin 3px 5px
    min-width 30px
    border-radius 4px
    background-color #bdc0d7
    color #373a4f
    text-align center
    font-size 0.875rem
    user-select none

    &:hover
      background-color #7f86b6
      background-image linear-gradient(to bottom, #7f86b6, #545979)
      color #fff
      cursor pointer

  .active
    background-color #a6b0fa
    background-image linear-gradient(to bottom, #a6b0fa, #5666d8)
    color #fff
</style>
