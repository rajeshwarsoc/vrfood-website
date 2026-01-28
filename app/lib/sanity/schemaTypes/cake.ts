import { defineType, defineField } from 'sanity'

export const cake = defineType({
  name: 'cake',
  title: 'Cake',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Cake Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0)
    }),

    defineField({
      name: 'image',
      title: 'Cake Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    })
  ]
})
