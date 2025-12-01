// sanity/schemas/pastTrip.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'pastTrip',
  title: 'Lejárt utazás',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Cím',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Helyszín',
      type: 'string',
    },
    {
      name: 'days',
      title: 'Napok száma',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Dátum',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Végső ár',
      type: 'string',
    },
    {
      name: 'detail',
      title: 'Részletek',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Kép',
      type: 'image',
      options: { hotspot: true },
    },
  ],
});
