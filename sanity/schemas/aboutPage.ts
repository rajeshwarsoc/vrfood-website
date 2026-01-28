import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Страница "О нас"',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Главное изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sections',
      title: 'Разделы',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Заголовок раздела',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Содержание',
              type: 'text',
              rows: 6,
            }),
            defineField({
              name: 'image',
              title: 'Изображение',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'chefName',
      title: 'Имя шеф-повара',
      type: 'string',
    }),
    defineField({
      name: 'chefBio',
      title: 'Биография шеф-повара',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'chefImage',
      title: 'Фото шеф-повара',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
