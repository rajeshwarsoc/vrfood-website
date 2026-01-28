import { cake } from './cake'
import { cakeCategory } from './cakeCategory'
import { cakeDesign } from './cakeDesign'
import { filling } from './filling'
import { decoration } from './decoration'
import { dessert } from './dessert'
import { food } from './food'
import { foodCategory } from './foodCategory'
import { review } from './review'
import { siteSettings } from './siteSettings'
import { aboutPage } from './aboutPage'

export const schemaTypes = [
  // Торты и связанные
  cakeCategory,
  cakeDesign,
  filling,
  decoration,
  cake,
  
  // Десерты
  dessert,
  
  // Еда
  foodCategory,
  food,
  
  // Отзывы
  review,
  
  // Настройки
  siteSettings,
  aboutPage,
]
