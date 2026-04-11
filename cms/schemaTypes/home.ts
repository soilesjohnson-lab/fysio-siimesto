export default {
  name: 'home',
  title: 'Etusivu',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: 'Hero', options: { collapsible: true, collapsed: false } },
    { name: 'services', title: 'Palvelut / Nostot', options: { collapsible: true, collapsed: true } },
    { name: 'about', title: 'Yrittäjätarina', options: { collapsible: true, collapsed: true } }
  ],
  fields: [
    // ===== HERO =====
    {
      name: 'title',
      title: 'Pääotsikko',
      type: 'string',
      fieldset: 'hero'
    },
    {
      name: 'subtitle',
      title: 'Alaotsikko',
      type: 'text',
      fieldset: 'hero'
    },
    {
      name: 'image',
      title: 'Hero-kuva',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'hero'
    },

    // ===== SERVICES =====
    {
      name: 'servicesList',
      title: 'Palvelut',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Palvelu',
          fields: [
            { name: 'title', title: 'Otsikko', type: 'string' },
            { name: 'benefit', title: 'Hyötyteksti', type: 'text' },
            { name: 'result', title: 'Tulosteksti', type: 'text' }
          ]
        }
      ],
      fieldset: 'services'
    },

    // ===== ABOUT =====
    {
      name: 'aboutTitle',
      title: 'Otsikko',
      type: 'string',
      fieldset: 'about'
    },
    {
      name: 'aboutContent',
      title: 'Teksti',
      type: 'array',
      of: [{ type: 'block' }],
      fieldset: 'about'
    },
    {
      name: 'aboutImage',
      title: 'Henkilökuva',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'about'
    }
  ],

  preview: {
    select: {
      heroImage: 'image'
    },
    prepare(selection: { heroImage?: any }) {
      const { heroImage } = selection
      return {
        title: 'Etusivu',
        media: heroImage
      }
    }
  }
}