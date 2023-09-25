import { colors } from './colors'
import { technologies } from './technologies'

export interface ProgressInformation {
  commits: string
  hours: string
}

export interface Project {
  id: string
  title: string
  description: string
  info?: ProgressInformation
  deploy?: string
  video?: string
  color: (typeof colors)[keyof typeof colors]
  cover: string
  artists: string[]
  technologies: (typeof technologies)[keyof typeof technologies][]
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Bookbuster',
    description: 'La plataforma cuenta con un vasto abanico de funcionalidades, entre las que se encuentran los filtros combinados para obtener recomendaciones personalizadas, una amplia librería con carruseles temáticos, pasarela de pagos con integración de Mercado Pago, interacciones entre usuarios por medio de reseñas y comentaros, entre otras.',
    info: {
      commits: '+250 commits',
      hours: 'about 300 hours'
    },
    deploy: 'https://bookbuster-ar.vercel.app',
    video: 'https://youtu.be/uYzy7-6IETo?si=GmrzJ-YYne2AMjBb',
    color: colors.purple,
    cover: '/bookbuster-mac.avif',
    artists: ['E-commerce', 'MVP'],
    technologies: [
      technologies.javascript,
      technologies.react,
      technologies.redux,
      technologies.tailwind,
      technologies.node,
      technologies.express,
      technologies.postgresql,
      technologies.sequelize,
      technologies.cloudinary,
      technologies.mercadopago,
      technologies.nodemailer,
      technologies.firebase,
      technologies.github
    ]
  },
  {
    id: '2',
    title: 'Rick And Morty',
    description:
      'Una SPA donde interactuamos con una API aplicando buenas prácticas, WPO y SEO',
    info: {
      commits: '+20 commits',
      hours: 'about 30 hours'
    },
    deploy: '',
    video: '',
    color: colors.green,
    cover: '/rick-and-morty.avif',
    artists: ['SPA', 'WPO'],
    technologies: [
      technologies.typescript,
      technologies.react,
      technologies.redux,
      technologies.tailwind
    ]
  },
  {
    id: '3',
    title: 'Trap Vibes',
    color: colors.rose,
    cover:
      'https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_3_grshca.jpg',
    artists: ['Post Malone', 'Travis Scott', '21 savage']
  },
  {
    id: '4',
    title: 'Beatles Classics',
    color: colors.red,
    cover:
      'https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_4_ap5xnb.jpg',
    artists: ['The Beatles']
  },
  {
    id: '5',
    title: 'Electronic Dance',
    color: colors.pink,
    cover:
      'https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_5_erjyb7.jpg',
    artists: ['Deadmau5']
  },
  {
    id: '6',
    title: 'Cow songs',
    color: colors.gray,
    cover:
      'https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776474/spotify-astro/R-15112137-1586815179-1911_fsyl58.jpg',
    artists: ['Saint Hilda', 'Canada Buffalo']
  }
]

export const moreProjects = [
  ...projects.map((item) => ({
    ...item,
    id: item.id + 'a'
  }))
]

export const sidebarProjects = [
  ...projects.map((item) => ({
    ...item,
    id: item.id + '_side'
  }))
]

export const allProjects = [...projects, ...moreProjects, ...sidebarProjects]

export const allTechnologies = [
  technologies.javascript,
  technologies.typescript,
  technologies.react,
  technologies.redux,
  technologies.tailwind,
  technologies.node,
  technologies.express,
  technologies.postgresql,
  technologies.sequelize,
  technologies.html,
  technologies.css,
  technologies.github,
  technologies.astro,
]