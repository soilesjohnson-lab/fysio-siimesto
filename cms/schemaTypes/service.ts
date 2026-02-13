export default {
  name: 'service',
  title: 'Palvelut',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Palvelun nimi',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Kuva',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Kuvaus',
      type: 'text'
    },
    {
      name: 'options',
      title: 'Vaihtoehdot',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'time',
              title: 'Aika (min)',
              type: 'number'
            },
            {
              name: 'price',
              title: 'Hinta (€)',
              type: 'number'
            }
          ],
          preview: {
            select: { time: 'time', price: 'price' },
            prepare(selection: { time?: number; price?: number }) {
              const { time, price } = selection;
              return { title: `${time ?? '-'} min – ${price ?? '-'} €` };
            }
          }
        }
      ]
    },
    {
      name: 'orderIndex',
      title: 'Järjestys',
      type: 'number'
    }
  ]
};