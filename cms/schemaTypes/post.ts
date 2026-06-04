export default {
  name: 'post',
  title: 'Blogi / Artikkelit',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Otsikko',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Polku (slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Julkaisupäivä',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Pääkuva',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'excerpt',
      title: 'Lyhyt kuvaus (esittelyteksti)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Sisältö',
      type: 'array',
      // Tähän lisätty { type: 'image' } mahdollistaa kuvat tekstin seassa
      of: [
        { type: 'block' }, 
        { type: 'image', options: { hotspot: true } }
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection: { title: string; media: any; date: string }) {
      return {
        title: selection.title,
        media: selection.media,
        subtitle: selection.date ? new Date(selection.date).toLocaleDateString() : '',
      };
    },
  },
};