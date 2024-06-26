export default defineAppConfig({
  alpine: {
    title: 'Alpine',
    description: 'Welcome in Ennio\'s space',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Ennio Visconti', // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on', // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      facebook: 'ennioVisco',
      twitter: 'ennioVisco',
      instagram: 'enniovisconti',
      github: 'ennioVisco',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ennioVisco'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
