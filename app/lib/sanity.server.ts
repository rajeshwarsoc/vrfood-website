import { createClient, type SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Initialize Sanity client
const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

let _sanityClient: SanityClient | null = null

if (projectId) {
  _sanityClient = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: true, // Use CDN for faster reads in production
    token, // Required for write operations
  })
}

function getClient(): SanityClient {
  if (!_sanityClient) {
    throw new Error(
      'SANITY_PROJECT_ID environment variable is required. ' +
      'Please copy .env.example to .env and configure your Sanity credentials.'
    )
  }
  return _sanityClient
}

// Image URL builder
export function urlFor(source: any) {
  const builder = imageUrlBuilder(getClient())
  return builder.image(source)
}

// Types for Sanity documents
export interface SanityCake {
  _id: string
  _type: 'cake'
  name: string
  slug: { current: string }
  category: string
  description?: string
  image: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  basePrice: number
  minWeight: number
  featured: boolean
  order: number
}

export interface SanityFood {
  _id: string
  _type: 'food'
  name: string
  slug: { current: string }
  category: string
  description: string
  image: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  price: number
  featured: boolean
  available: boolean
  order: number
}

export interface SanityReview {
  _id: string
  _type: 'review'
  name: string
  email: string
  rating: number
  text: string
  approved: boolean
  submittedAt: string
}

export interface SanitySiteSettings {
  _id: string
  _type: 'siteSettings'
  title?: string
  description?: string
  heroTitle?: string
  heroSubtitle?: string
  contactPhone?: string
  contactEmail?: string
  whatsappNumber?: string
  telegramHandle?: string
  instagramHandle?: string
  vkHandle?: string
}

// Query helpers
export async function getCakes(): Promise<SanityCake[]> {
  return getClient().fetch(
    `*[_type == "cake"] | order(order asc, name asc)`
  )
}

export async function getFeaturedCakes(): Promise<SanityCake[]> {
  return getClient().fetch(
    `*[_type == "cake" && featured == true] | order(order asc) [0...6]`
  )
}

export async function getCakeBySlug(slug: string): Promise<SanityCake | null> {
  return getClient().fetch(
    `*[_type == "cake" && slug.current == $slug][0]`,
    { slug }
  )
}

export async function getFoodItems(): Promise<SanityFood[]> {
  return getClient().fetch(
    `*[_type == "food" && available == true] | order(order asc, category asc, name asc)`
  )
}

export async function getFeaturedFood(): Promise<SanityFood[]> {
  return getClient().fetch(
    `*[_type == "food" && featured == true && available == true] | order(order asc) [0...4]`
  )
}

export async function getFoodByCategory(category: string): Promise<SanityFood[]> {
  return getClient().fetch(
    `*[_type == "food" && category == $category && available == true] | order(order asc, name asc)`,
    { category }
  )
}

export async function getApprovedReviews(): Promise<SanityReview[]> {
  return getClient().fetch(
    `*[_type == "review" && approved == true] | order(submittedAt desc)`
  )
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return getClient().fetch(
    `*[_type == "siteSettings"][0]`
  )
}

export async function submitReview(data: {
  name: string
  email: string
  rating: number
  text: string
}): Promise<SanityReview> {
  return getClient().create({
    _type: 'review',
    ...data,
    approved: false,
    submittedAt: new Date().toISOString(),
  })
}
