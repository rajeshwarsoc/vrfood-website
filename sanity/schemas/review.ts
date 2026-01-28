import { defineField, defineType } from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Отзывы',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'rating',
      title: 'Оценка',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
      initialValue: 5,
    }),
    defineField({
      name: 'text',
      title: 'Текст отзыва',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
    defineField({
      name: 'approved',
      title: 'Одобрен',
      type: 'boolean',
      initialValue: false,
      description: 'Показывать отзыв на сайте',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Дата отправки',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Дата (новые первые)',
      name: 'dateDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Оценка (высокие первые)',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'text',
      rating: 'rating',
      approved: 'approved',
    },
    prepare({ title, subtitle, rating, approved }) {
      return {
        title: `${title} ${approved ? '✓' : '⏳'}`,
        subtitle: `${'⭐'.repeat(rating)} - ${subtitle?.substring(0, 50)}...`,
      }
    },
  },
})
