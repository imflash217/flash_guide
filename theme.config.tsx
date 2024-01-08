import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { Pre } from './components/pre'

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ marginLeft: '.4em', fontWeight: 800, fontSize: 20 }}>
        ⚡️ Flash AI
      </span>
    </>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'hi', text: 'हिन्दी' },
  ],
  head: function UseHead() {
    const { title } = useConfig()
    return (
    <>
      <title>{title ? title + ' @ Flash AI ': ' Vinay Kumar '} </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Prompt Engineering Guide" />
      <meta property="og:description" content="A Comprehensive Overview of Prompt Engineering" />
      <meta
          name="og:title"
          content={title ? title + ' | Prompt Engineering Guide' : 'Prompt Engineering Guide'}
        />
      <link rel="icon" href="/144-favicon.svg" type="image/svg+xml" />

        <link
          rel="icon"
          href="/144-favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
    </>
  )},
  project: {
    link: 'https://github.com/dair-ai/Prompt-Engineering-Guide',
  },
  // chat: {
  //   link: 'https://discord.gg/FUyz9vPAwf',
  // },
  docsRepositoryBase: 'https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/',
  footer: {
    text: 'Copyright 🍥 2024 ⚡️ Flash AI',
  },
  search: {
    placeholder: 'Search...',
  },
  components: {
    pre: Pre,
  },
}

export default config
