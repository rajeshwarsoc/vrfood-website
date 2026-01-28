import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название сайта',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Описание сайта',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroTitle',
      title: 'Заголовок главной страницы',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Подзаголовок главной страницы',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'contactPhone',
      title: 'Телефон',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'contactAddress',
      title: 'Адрес',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'telegramHandle',
      title: 'Telegram',
      type: 'string',
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'vkHandle',
      title: 'ВКонтакте',
      type: 'string',
    }),
    defineField({
      name: 'minCakeWeight',
      title: 'Минимальный вес торта (кг)',
      type: 'number',
      initialValue: 2,
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'maxCakeWeight',
      title: 'Максимальный вес торта (кг)',
      type: 'number',
      initialValue: 20,
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'minBentoWeight',
      title: 'Минимальный вес бенто-торта (кг)',
      type: 'number',
      initialValue: 0.5,
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'maxBentoWeight',
      title: 'Максимальный вес бенто-торта (кг)',
      type: 'number',
      initialValue: 1.5,
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'minWeightForFilling',
      title: 'Минимальный вес для начинки (кг)',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'preorderDays',
      title: 'Минимум дней для предзаказа',
      type: 'number',
      initialValue: 3,
      validation: (Rule) => Rule.required().positive(),
    }),
  ],
})
