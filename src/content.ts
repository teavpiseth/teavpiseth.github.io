export const brandName = 'Start Learning'

export const sections = ['home', 'projects', 'notes', 'academy', 'about'] as const
export type Section = (typeof sections)[number]

export const projects = [
  { repository: 'teavpiseth.github.io', icon: 'globe', stack: ['React', 'TypeScript', 'Tailwind CSS'] },
  { repository: 'course-react-05', icon: 'layers', stack: ['React', 'JavaScript'] },
  { repository: 'back-end-02', icon: 'terminal', stack: ['JavaScript'] },
] as const

export const notes = [
  { id: 'component-state', topic: 'React', icon: 'react' },
  { id: 'type-boundaries', topic: 'TypeScript', icon: 'typescript' },
  { id: 'pages-deployment', topic: 'GitHub Pages', icon: 'github' },
] as const

export const copy = {
  en: {
    pageTitle: `${brandName} | Web Development`,
    description: 'Projects, experiments, and practical notes on building for the web.',
    skip: 'Skip to content',
    navigation: 'Main navigation',
    menu: 'Open menu',
    close: 'Close menu',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    switchLanguage: 'Switch to Khmer',
    nav: { home: 'Home', projects: 'Projects', notes: 'Notes', academy: 'Academy', about: 'About' },
    intro: `Welcome to ${brandName}`,
    headline: ['Building for the web.', 'Sharing what I learn.'],
    heroDescription: 'A place for my projects, experiments, and practical notes on web development.',
    explore: 'Explore projects',
    heroImage: 'A laptop displaying code on a desk lit by a warm red lamp.',
    technologiesTitle: 'Languages & Tools',
    projectsTitle: 'Selected projects',
    projectDetails: {
      'teavpiseth.github.io': { title: `${brandName} website`, description: 'The source for this bilingual site, built with React and Tailwind and published through GitHub Pages.' },
      'course-react-05': { title: 'React course examples', description: 'A collection of React examples for learning and teaching JavaScript UI development.' },
      'back-end-02': { title: 'Backend practice', description: 'A JavaScript repository for exploring backend development.' },
    },
    notesTitle: 'Developer notes',
    noteDetails: {
      'component-state': {
        title: 'Where should React state live?',
        description: 'Keep state near the components that use it.',
        body: 'Start with local state. If two components need to read or update the same value, move it to their nearest shared parent and pass it down with props. When a value can be calculated from existing props or state, calculate it during render to keep it in sync.',
      },
      'type-boundaries': {
        title: 'TypeScript at API boundaries',
        description: 'Check external data before passing it into your app.',
        body: 'Type annotations are erased at runtime. Treat a JSON response as unknown until you have checked its shape with a type guard or a schema validator. Once the response passes validation, the rest of the application can work with a trusted type.',
      },
      'pages-deployment': {
        title: 'Deploying Vite to GitHub Pages',
        description: 'Build the app and publish the generated files.',
        body: 'Configure Vite’s base path to match the published URL. A user or custom domain site normally uses a root path, and a project site uses its repository path. Build the app in GitHub Actions and upload the generated dist directory as the Pages artifact.',
      },
    },
    aboutTitle: `About ${brandName}`,
    aboutDescription: `${brandName} brings together web development courses, projects, and practical notes on React and JavaScript.`,
    footerNavigation: 'Footer navigation',
  },
  km: {
    pageTitle: `${brandName} | ការអភិវឌ្ឍគេហទំព័រ`,
    description: 'គម្រោង ការសាកល្បង និងកំណត់ត្រាអនុវត្តអំពីការអភិវឌ្ឍគេហទំព័រ។',
    skip: 'រំលងទៅមាតិកា',
    navigation: 'ម៉ឺនុយមេ',
    menu: 'បើកម៉ឺនុយ',
    close: 'បិទម៉ឺនុយ',
    toDark: 'ប្ដូរទៅរបៀបងងឹត',
    toLight: 'ប្ដូរទៅរបៀបភ្លឺ',
    switchLanguage: 'ប្ដូរទៅភាសាអង់គ្លេស',
    nav: { home: 'ទំព័រដើម', projects: 'គម្រោង', notes: 'កំណត់ត្រា', academy: 'ថ្នាក់រៀន', about: 'អំពីយើង' },
    intro: `សូមស្វាគមន៍មកកាន់ ${brandName}`,
    headline: ['អភិវឌ្ឍគេហទំព័រ។', 'ចែករំលែកចំណេះដឹង។'],
    heroDescription: 'គម្រោង ការសាកល្បង និងកំណត់ត្រាអនុវត្តរបស់ខ្ញុំ អំពីការអភិវឌ្ឍគេហទំព័រ។',
    explore: 'មើលគម្រោង',
    heroImage: 'កុំព្យូទ័រយួរដៃបង្ហាញកូដនៅលើតុដែលបំភ្លឺដោយចង្កៀងពណ៌ក្រហម។',
    technologiesTitle: 'ភាសាសរសេរកម្មវិធី និងឧបករណ៍',
    projectsTitle: 'គម្រោងដែលបានជ្រើស',
    projectDetails: {
      'teavpiseth.github.io': { title: `គេហទំព័រ ${brandName}`, description: 'កូដសម្រាប់គេហទំព័រពីរភាសានេះ ដែលបង្កើតដោយ React និង Tailwind ហើយបង្ហោះតាម GitHub Pages។' },
      'course-react-05': { title: 'ឧទាហរណ៍មេរៀន React', description: 'បណ្ដុំឧទាហរណ៍ React សម្រាប់រៀន និងបង្រៀនការបង្កើតផ្ទៃប្រើប្រាស់ដោយ JavaScript។' },
      'back-end-02': { title: 'លំហាត់ Backend', description: 'ឃ្លាំងកូដ JavaScript សម្រាប់សាកល្បងការអភិវឌ្ឍផ្នែក Backend។' },
    },
    notesTitle: 'កំណត់ត្រាអ្នកអភិវឌ្ឍ',
    noteDetails: {
      'component-state': {
        title: 'តើគួរដាក់ State របស់ React នៅទីណា?',
        description: 'ទុក State នៅជិត Component ដែលប្រើវា។',
        body: 'ចាប់ផ្ដើមដោយប្រើ State ក្នុង Component ផ្ទាល់។ បើ Component ពីរត្រូវអាន ឬកែតម្លៃតែមួយ សូមផ្លាស់ទី State ទៅ Component មេរួមដែលនៅជិតបំផុត រួចបញ្ជូនតម្លៃតាម Props។ បើអាចគណនាតម្លៃពី Props ឬ State ដែលមានស្រាប់ សូមគណនាពេល Render ដើម្បីឱ្យតម្លៃនៅតែស៊ីគ្នា។',
      },
      'type-boundaries': {
        title: 'ការប្រើ TypeScript ជាមួយ API',
        description: 'ពិនិត្យទិន្នន័យពីខាងក្រៅមុននឹងប្រើវាក្នុងកម្មវិធី។',
        body: 'ព័ត៌មានប្រភេទរបស់ TypeScript ត្រូវបានលុបចេញពេលដំណើរការ។ ចាត់ទុកចម្លើយ JSON ជា unknown រហូតដល់អ្នកពិនិត្យរចនាសម្ព័ន្ធរបស់វាដោយ Type Guard ឬ Schema Validator។ បន្ទាប់ពីការពិនិត្យជោគជ័យ ផ្នែកផ្សេងទៀតនៃកម្មវិធីអាចប្រើទិន្នន័យជាមួយប្រភេទដែលបានផ្ទៀងផ្ទាត់។',
      },
      'pages-deployment': {
        title: 'បង្ហោះកម្មវិធី Vite លើ GitHub Pages',
        description: 'Build កម្មវិធី រួចបង្ហោះឯកសារដែលបានបង្កើត។',
        body: 'កំណត់ Base Path របស់ Vite ឱ្យត្រូវនឹង URL ដែលបង្ហោះ។ គេហទំព័រគណនី ឬដែនផ្ទាល់ខ្លួនជាទូទៅប្រើផ្លូវឫស ហើយគេហទំព័រគម្រោងប្រើផ្លូវតាមឈ្មោះ Repository។ ប្រើ GitHub Actions ដើម្បី Build កម្មវិធី រួចផ្ទុកថត dist ជា Pages Artifact។',
      },
    },
    aboutTitle: `អំពី ${brandName}`,
    aboutDescription: `${brandName} ប្រមូលផ្តុំវគ្គសិក្សាអភិវឌ្ឍគេហទំព័រ គម្រោង និងកំណត់ត្រាអនុវត្តអំពី React និង JavaScript។`,
    footerNavigation: 'ម៉ឺនុយនៅបាតទំព័រ',
  },
} as const

export type Language = keyof typeof copy
