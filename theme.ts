import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-brand': '#f7ab0a',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58'
}

export const myTheme = buildLegacyTheme({
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray-base': '#666',
  '--gray': '#666',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  '--brand-primary': props['--my-brand'],

  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-brand']
})
