import { defineField, defineType } from 'sanity'

export const cake = defineType({
  name: 'cake',
  title: 'Торты',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'Классические', value: 'classic' },
          { title: 'Детские', value: 'kids' },
          { title: 'Свадебные', value: 'wedding' },
          { title: 'Праздничные', value: 'celebration' },
          { title: 'Фруктовые', value: 'fruit' },
          { title: 'Шоколадные', value: 'chocolate' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'basePrice',
      title: 'Базовая цена (за кг)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'minWeight',
      title: 'Минимальный вес (кг)',
      type: 'number',
      initialValue: 1,
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'featured',
      title: 'Показывать на главной',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Порядок сортировки',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Порядок',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Название А-Я',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})
