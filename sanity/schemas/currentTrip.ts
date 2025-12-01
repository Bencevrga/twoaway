// sanity/schemas/currentTrip.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'currentTrip',
  title: 'Aktuális utazás',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'days',
      title: 'Napok száma',
      type: 'string',
    },
    {
      name: 'highlight',
      title: 'Kiemelés',
      type: 'string',
    },
    {
      name: 'fromPrice',
      title: 'Kezdőár',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Típus',
      type: 'string',
      options: {
        list: [
          { title: 'City break', value: 'city' },
          { title: 'Tengerpart', value: 'tengerpart' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Kép',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'orderRank',
      title: 'Sorrend',
      type: 'number',
      description: 'Minél kisebb, annál előrébb kerül a listában.',
    },
  ],
});
