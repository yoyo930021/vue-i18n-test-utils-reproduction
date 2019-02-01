import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AppMixin extends Vue {
  get i18n () {
    return {
      getValue: (key: string) => {
        return this.$t(`components.${this.$options.name}.${key}`)
      },
      getKey: (key: string) => {
        return `components.${this.$options.name}.${key}`
      }
    }
  }
}
