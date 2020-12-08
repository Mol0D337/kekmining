import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './locales/en'
import ru from './locales/ru'

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ru',
  messages: {
    en, ru
  }
});
