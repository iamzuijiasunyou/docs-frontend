export default {
  children: [
    {
      lang: 'introduction',
      icon: 'mdi-book-open-page-variant',
      children: [
        {
          lang: 'quickStart'
        },
        {
          lang: 'register'
        }
      ]
    },
    {
      lang: 'docx',
      icon: 'mdi-file-chart',
      children: [
        {
          lang: 'docxIndex',
          to: '/docx/test'
        }
      ]
    }
  ]
}
