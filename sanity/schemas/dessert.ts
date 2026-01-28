import { defineField, defineType } from 'sanity'

export const dessert = defineType({
  name: 'dessert',
  title: 'Десерты',
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
          { title: 'Пирожные', value: 'pastries' },
          { title: 'Эклеры', value: 'eclairs' },
          { title: 'Макаронс', value: 'macarons' },
          { title: 'Чизкейки', value: 'cheesecakes' },
          { title: 'Капкейки', value: 'cupcakes' },
          { title: 'Другие', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
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
      name: 'price',
      title: 'Цена (₽)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'unit',
      title: 'Единица измерения',
      type: 'string',
      options: {
        list: [
          { title: 'за штуку', value: 'piece' },
          { title: 'за порцию', value: 'portion' },
          { title: 'за упаковку', value: 'pack' },
        ],
      },
      initialValue: 'piece',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Показывать на главной',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'available',
      title: 'В наличии',
      type: 'boolean',
      initialValue: true,
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
  ],
})
