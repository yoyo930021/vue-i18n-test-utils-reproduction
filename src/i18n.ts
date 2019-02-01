import Vue from 'vue'
import VueI18n, { LocaleMessages, NumberFormats } from 'vue-i18n'
import zhCN from '@/locales/langs/zh-CN.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN
  },
  numberFormats: {
    'zh-CN': { currency: zhCN.currency }
  }
})

const loadedLanguages = ['zh-CN']

function setI18nLanguage (lang: string) {
  i18n.locale = lang
  document.querySelector('html')!.setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang: string) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/locales/langs/${lang}.json`).then((msgs) => {
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
