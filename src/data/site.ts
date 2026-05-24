export type Profession = {
  slug: string;
  title: string;
  category: string;
  qualification: string;
  duration: string;
  format: string;
  summary: string;
  skills: string[];
  image: string;
  sourceUrl: string;
};

export type StaffMember = {
  name: string;
  role: string;
  department: string;
  email?: string;
  focus: string;
  image?: string;
};

export const contact = {
  name: 'Львівський центр професійно-технічної освіти ДСЗ',
  shortName: 'ЛЦПТО ДСЗ',
  edrpou: '36738974',
  address: '79060, м. Львів, вул. Княгині Ольги, 122',
  phonePrimary: '(032) 232-22-62',
  phoneSecondary: '(032) 244-13-30',
  phoneMobile: '(067) 672-08-52',
  accountingPhone: '(032) 244-13-31',
  email: 'profc@locz.gov.ua',
  director: 'Плахотнюк Зоряна Іванівна',
  mapUrl: 'https://goo.gl/maps/zstjAYaHP922',
  embedMapUrl: 'https://www.google.com/maps?q=49.8002761,23.9965586&z=15&output=embed',
};

export const navItems = [
  { href: '/', label: 'Головна' },
  { href: '/courses', label: 'Професії' },
  { href: '/employers', label: 'Роботодавцям' },
  { href: '/team', label: 'Кадри' },
  { href: '/facilities', label: 'База' },
  { href: '/contacts', label: 'Контакти' },
];

export const professions: Profession[] = [
  {
    slug: 'elektrogazozvarnik',
    title: 'Електрогазозварник',
    category: 'Технічні професії',
    qualification: 'електрогазозварник 2-го розряду',
    duration: 'професійна підготовка',
    format: 'майстерні та практична база партнерів',
    summary: 'Підготовка до ручного та напівавтоматичного зварювання, роботи з металами, кресленнями й безпечними технологічними процесами.',
    skills: ['зварювання металів', 'охорона праці', 'читання креслень'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/elektrogazozvarnik-10-17-46-28-02-2019',
  },
  {
    slug: 'montazhnyk-santekh-system',
    title: 'Монтажник санітарно-технічних систем і устаткування',
    category: 'Будівництво та інженерія',
    qualification: 'робітнича кваліфікація',
    duration: 'професійна підготовка',
    format: 'практична база партнерських закладів',
    summary: 'Монтаж, обслуговування та ремонт санітарно-технічних систем, трубопроводів і устаткування.',
    skills: ['монтаж систем', 'інструменти', 'технічне обслуговування'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/montazhnik-sanitarnotehnichnih-sistem-i-ustatkuvannya-10-17-59-28-02-2019',
  },
  {
    slug: 'vodiy-tramvaya',
    title: 'Водій трамвая',
    category: 'Міський транспорт',
    qualification: 'водій трамвая',
    duration: 'за графіком груп',
    format: 'ЛКП «Львівелектротранс»',
    summary: 'Навчання керуванню трамваєм, правилам безпечного руху, роботі з пасажирами та міською інфраструктурою.',
    skills: ['керування трамваєм', 'ПДР', 'пасажирський сервіс'],
    image: 'https://images.unsplash.com/photo-1569230516306-5a8cb5586399?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/vodij-tramvaya-10-18-16-28-02-2019',
  },
  {
    slug: 'vodiy-troleybusa',
    title: 'Водій тролейбуса',
    category: 'Міський транспорт',
    qualification: 'водій тролейбуса',
    duration: 'за графіком груп',
    format: 'ЛКП «Львівелектротранс»',
    summary: 'Підготовка водіїв електротранспорту з практикою на рухомому складі й навчальних майданчиках.',
    skills: ['електротранспорт', 'безпека руху', 'маршрутна робота'],
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/vodij-trolejbusa-10-18-28-28-02-2019',
  },
  {
    slug: 'kasyr-torgovelnoho-zalu',
    title: 'Касир торговельного залу',
    category: 'Торгівля',
    qualification: 'касир торговельного залу',
    duration: 'професійна підготовка',
    format: 'лабораторія контрольно-касового обладнання',
    summary: 'Робота з РРО, касовими операціями, покупцями, товарними групами та правилами обліку.',
    skills: ['РРО', 'касові операції', 'клієнтський сервіс'],
    image: 'https://rada.info/upload/users_files/36738974/gallery/large/20190103_150225.jpg',
    sourceUrl: 'https://lcptodcz.lviv.ua/kasir-torgovelnogo-zalu-10-18-41-28-02-2019',
  },
  {
    slug: 'prodavec-prodovolchykh-tovariv',
    title: 'Продавець продовольчих товарів',
    category: 'Торгівля',
    qualification: 'продавець продовольчих товарів',
    duration: 'професійна підготовка',
    format: 'навчальна лабораторія та практика',
    summary: 'Товарознавство, викладка, робота з покупцями, касова дисципліна та стандарти продажів продовольчих товарів.',
    skills: ['товарознавство', 'викладка', 'обслуговування'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/prodavec-prodovolchih-tovariv-10-18-53-28-02-2019',
  },
  {
    slug: 'prodavec-neprodovolchykh-tovariv',
    title: 'Продавець непродовольчих товарів',
    category: 'Торгівля',
    qualification: 'продавець непродовольчих товарів',
    duration: 'професійна підготовка',
    format: 'навчальна лабораторія та практика',
    summary: 'Продаж, консультування, товарознавство непродовольчих груп і ведення торговельних процесів.',
    skills: ['консультації', 'торговельні процеси', 'облік'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/prodavec-neprodovolchih-tovariv-10-19-06-28-02-2019',
  },
  {
    slug: 'operator-kotelni',
    title: 'Оператор котельні',
    category: 'Енергетика та ЖКГ',
    qualification: 'оператор котельні',
    duration: 'професійна підготовка',
    format: 'навчальна та виробнича база',
    summary: 'Експлуатація котельного обладнання, контроль режимів, безпека праці й технічне обслуговування.',
    skills: ['котельне обладнання', 'режими роботи', 'безпека'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/operator-kotelni-10-19-16-28-02-2019',
  },
  {
    slug: 'mashynist-kochehar-kotelni',
    title: 'Машиніст (кочегар) котельні',
    category: 'Енергетика та ЖКГ',
    qualification: 'машиніст (кочегар) котельні',
    duration: 'професійна підготовка',
    format: 'виробнича практика',
    summary: 'Підготовка до роботи з теплогенеруючим обладнанням, контролем параметрів і безпечною експлуатацією котельні.',
    skills: ['теплотехніка', 'експлуатація', 'контроль параметрів'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/mashinist-kochegar-kotelni-10-19-28-28-02-2019',
  },
  {
    slug: 'traktoryst-mashynist',
    title: 'Тракторист-машиніст сільськогосподарського виробництва',
    category: 'Аграрний сектор',
    qualification: 'категорія А1',
    duration: 'професійна підготовка',
    format: 'машино-тракторні двори та полігони партнерів',
    summary: 'Керування сільськогосподарською технікою, технічне обслуговування, агротехнології та безпека робіт.',
    skills: ['керування технікою', 'агротехнології', 'ТО машин'],
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/traktoristmashinist-silskogospodarskogo-virobnictva-10-19-40-28-02-2019',
  },
  {
    slug: 'monter-kabelnoho-vyrobnytstva',
    title: 'Монтер кабельного виробництва',
    category: 'Промисловість',
    qualification: 'робітнича кваліфікація',
    duration: 'професійна підготовка',
    format: 'практичні заняття',
    summary: 'Робота з кабельною продукцією, монтажем, інструментами, технологічними операціями та якістю виробництва.',
    skills: ['кабельні роботи', 'монтаж', 'контроль якості'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/monter-kabelnogo-virobnictva-10-19-51-28-02-2019',
  },
  {
    slug: 'perukar-modelier',
    title: 'Перукар (перукар-модельєр)',
    category: 'Сфера послуг',
    qualification: 'перукар',
    duration: 'професійна підготовка',
    format: 'виробнича майстерня перукарів',
    summary: 'Стрижки, фарбування, зачіски, санітарія, матеріали, професійна етика та робота з клієнтом.',
    skills: ['стрижки', 'фарбування', 'клієнтський сервіс'],
    image: 'https://rada.info/upload/users_files/36738974/gallery/large/IMG_5861.jpg',
    sourceUrl: 'https://lcptodcz.lviv.ua/perukar-perukarmodeler-10-20-03-28-02-2019',
  },
  {
    slug: 'manikiurnyk',
    title: 'Манікюрник',
    category: 'Сфера послуг',
    qualification: 'манікюрник',
    duration: 'професійна підготовка',
    format: 'виробнича майстерня манікюрників',
    summary: 'Догляд за руками, сучасні техніки манікюру, санітарні вимоги, матеріали та стандарти сервісу.',
    skills: ['манікюр', 'гігієна', 'матеріали'],
    image: 'https://rada.info/upload/users_files/36738974/gallery/large/20190103_154914.jpg',
    sourceUrl: 'https://lcptodcz.lviv.ua/manikjurnik-10-20-18-28-02-2019',
  },
  {
    slug: 'vizazhist',
    title: 'Візажист',
    category: 'Сфера послуг',
    qualification: 'візажист',
    duration: 'професійна підготовка',
    format: 'виробнича майстерня візажистів',
    summary: 'Основи макіяжу, колористика, робота з клієнтом, косметичні матеріали та професійна гігієна.',
    skills: ['макіяж', 'колористика', 'гігієна'],
    image: 'https://rada.info/upload/users_files/36738974/gallery/large/20190103_154453.jpg',
    sourceUrl: 'https://lcptodcz.lviv.ua/vizazhist-10-20-30-28-02-2019',
  },
  {
    slug: 'fermer',
    title: 'Фермер',
    category: 'Аграрний сектор',
    qualification: 'фермер',
    duration: 'професійна підготовка',
    format: 'навчання та практичні аграрні модулі',
    summary: 'Основи фермерської справи, агровиробництво, підприємництво, планування й управління господарством.',
    skills: ['агробізнес', 'планування', 'виробництво'],
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/fermer-10-20-41-28-02-2019',
  },
  {
    slug: 'shvachka',
    title: 'Швачка',
    category: 'Легка промисловість',
    qualification: 'швачка 1-2-го розряду',
    duration: 'професійна підготовка',
    format: 'майстерні швейної справи',
    summary: 'Пошиття виробів, робота зі швейним обладнанням, матеріалами, машинною вишивкою та виробничою дисципліною.',
    skills: ['пошиття', 'обладнання', 'технології одягу'],
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/shvachka-14-49-31-11-10-2024',
  },
  {
    slug: 'operator-obrobky-informatsii',
    title: 'Оператор з обробки інформації та програмного забезпечення',
    category: 'IT та цифрові навички',
    qualification: 'оператор з обробки інформації та ПЗ',
    duration: 'професійна підготовка',
    format: 'компʼютерний клас / змішане навчання',
    summary: 'Компʼютерна обробка інформації, офісне ПЗ, цифрова безпека, базові IT-інструменти й робота з даними.',
    skills: ['офісне ПЗ', 'дані', 'цифрова безпека'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://lcptodcz.lviv.ua/operator-z-obrobki   informacii ta-programnogo-zabezpechennya-10-41-58-31-07-2020',
  },
];

export const courses = professions;

export const staff: StaffMember[] = [
  {
    name: 'Плахотнюк Зоряна Іванівна',
    role: 'Директор',
    department: 'Керівництво',
    email: 'zoryana.plakhotnyuk@gmail.com',
    focus: 'Психологія професійної діяльності, підприємництво, охорона праці',
    image: 'https://rada.info/upload/users_files/36738974/549dc366e3d9460305e3c20af53d07c2.jpg',
  },
  {
    name: 'Сапрука Ольга Йосифівна',
    role: 'Заступник директора з навчально-методичної роботи',
    department: 'Керівництво',
    email: 'olga.sapruka2016@gmail.com',
    focus: 'Підприємництво, галузева економіка, компʼютерна обробка інформації',
    image: 'https://rada.info/upload/users_files/36738974/42eb63b7e22e0d65e06e29bf7a9b4be1.jpg',
  },
  {
    name: 'Бубняк Роман Йосифович',
    role: 'Заступник директора з навчально-виховної роботи',
    department: 'Керівництво',
    email: 'romanbubnyak57@gmail.com',
    focus: 'Охорона праці, організація навчально-виховної роботи',
  },
  {
    name: 'Грушкевич Юрій Володимирович',
    role: 'Старший майстер',
    department: 'Навчально-виробничі підрозділи',
    focus: 'Спецтехнологія для трактористів-машиністів сільськогосподарського виробництва',
    image: 'https://rada.info/upload/users_files/36738974/c4f9dcd82754fbbff042f0ea364b3651.jpg',
  },
  {
    name: 'Лаба Оксана Ігорівна',
    role: 'Методист',
    department: 'Методичний відділ',
    focus: 'Медико-біологічні основи збереження життя та здоровʼя людини',
    image: 'https://rada.info/upload/users_files/36738974/39c34bbb00d13a753e088aa80f5d825d.jpg',
  },
  {
    name: 'Петрик Ірина Миколаївна',
    role: 'Методист',
    department: 'Методичний відділ',
    focus: 'Охорона праці',
    image: 'https://rada.info/upload/users_files/36738974/a119ac302039c006970fc95bdee2dfef.jpg',
  },
  {
    name: 'Сторожук Людмила Василівна',
    role: 'Методист',
    department: 'Методичний відділ',
    focus: 'Агротехнологія, охорона праці',
    image: 'https://rada.info/upload/users_files/36738974/0148b4f9e7328639499118d3438f0dcb.jpg',
  },
  {
    name: 'Головецька Лілія Євгенівна',
    role: 'Викладач економічних дисциплін',
    department: 'Викладачі',
    focus: 'Основи галузевої економіки, охорона праці',
    image: 'https://rada.info/upload/users_files/36738974/6ed60e4214e467b8d0f068fea1b47a63.jpg',
  },
  {
    name: 'Паращук Олег Леонідович',
    role: 'Викладач інформаційних технологій',
    department: 'Викладачі',
    focus: 'Компʼютерна обробка інформації, цифрова безпека, OSINT, основи вебдизайну',
    image: 'https://rada.info/upload/users_files/36738974/f5b8c8dc75ce38de99ffcdf1038536c9.jpg',
  },
  {
    name: 'Войтехівська Галина Михайлівна',
    role: 'Викладач будівельних спецдисциплін',
    department: 'Викладачі',
    focus: 'Матеріалознавство, технологія будівництва, будівельне креслення',
    image: 'https://rada.info/upload/users_files/36738974/037e0b5be82645deecf2487773bcb6ea.jpg',
  },
  {
    name: 'Полович Валентина Іванівна',
    role: 'Майстер виробничого навчання продавців',
    department: 'Майстри виробничого навчання',
    focus: 'Товарознавство, торговельні процеси, касові операції',
    image: 'https://rada.info/upload/users_files/36738974/d66f6c0192b4e9b62267bd8b65a38304.jpg',
  },
  {
    name: 'Енджиєвська Наталія Романівна',
    role: 'Майстер виробничого навчання швейної справи',
    department: 'Майстри виробничого навчання',
    focus: 'Швейна справа, машинна вишивка',
    image: 'https://rada.info/upload/users_files/36738974/6731bc16ee32c5174639d1dd6d1a9802.jpg',
  },
  {
    name: 'Павлюк Світлана Ярославівна',
    role: 'Майстер виробничого навчання перукарської справи',
    department: 'Майстри виробничого навчання',
    focus: 'Базовий курс перукарської майстерності',
    image: 'https://rada.info/upload/users_files/36738974/9f941f134cb6770cfa1bee3c564786c5.jpg',
  },
  {
    name: 'Чайковська Оксана Володимирівна',
    role: 'Практичний психолог',
    department: 'Інші спеціалісти',
    focus: 'Психологія, професійна етика, культура спілкування',
    image: 'https://rada.info/upload/users_files/36738974/17136400ab71ef05eb6813ccf5e81234.jpg',
  },
];

export const methodologyStats = [
  { value: '49,25', label: 'штатних одиниць у штатному розписі 2025 року' },
  { value: '18', label: 'штатних педагогічних працівників' },
  { value: '9', label: 'педагогів зі стажем понад 20 років' },
  { value: '2', label: 'кандидати технічних наук' },
];

export const facilities = [
  { value: '2634,3 м²', label: 'загальна площа приміщень на вул. Княгині Ольги, 122' },
  { value: '7', label: 'навчальних кабінетів' },
  { value: '3', label: 'навчально-виробничі майстерні' },
  { value: '1', label: 'лабораторія контрольно-касового обладнання' },
];

export const facilityPartners = [
  'ЛКП «Львівелектротранс» - навчальні полігони, рухомий склад трамваїв і тролейбусів',
  'ТзОВ «Агро ЛВ Лімітед» - навчальний клас, полігон, машино-тракторний двір',
  'ТзОВ «Львівелектромережбуд» - база технічного обслуговування',
  'ПАФ ім. М. Шашкевича, ТДВ «ШРБУ №65», ПП «Рома», ТзОВ «ПМК-2017» - практична база для технічних напрямів',
];

export const admissions = [
  'Оберіть професію або короткий курс цільового призначення.',
  'Зверніться до центру або до фахівця служби зайнятості, щоб уточнити фінансування та графік груп.',
  'Підготуйте документи для зарахування й погодьте формат навчання.',
  'Пройдіть навчання, виробничу практику та отримайте документ про завершення.',
];

export const news = [
  {
    title: 'Знання, що рятують життя',
    date: '13.05.2026',
    image: 'https://rada.info/upload/users_files/36738974/1221de5053f77b71db68bd0f0d925721.png',
  },
  {
    title: 'Перша група завершила навчання з використання агродронів',
    date: '11.05.2026',
    image: 'https://rada.info/upload/users_files/36738974/c37b8cb5296000c082baa3f6c88fabf1.jpg',
  },
  {
    title: 'Курс «Тестувальник програмного забезпечення» у Львові',
    date: '22.04.2026',
    image: 'https://rada.info/upload/users_files/36738974/8f6e3e4f3a5d6ac528cdb8e149486faa.jpg',
  },
];

export const gallery = [
  {
    src: 'https://rada.info/upload/users_files/36738974/slides/84351624_1382767518580781_5680015827152142336_n.jpg',
    alt: 'Практичне заняття у навчальному центрі',
  },
  {
    src: 'https://rada.info/upload/users_files/36738974/slides/20190523_144024.jpg',
    alt: 'Навчальна аудиторія Львівського центру ПТО ДСЗ',
  },
  {
    src: 'https://rada.info/upload/users_files/36738974/slides/447485363_1002670385199488_8051711866486572365_n.jpg',
    alt: 'Сучасне професійне навчання у центрі',
  },
];

export const documentGroups = [
  {
    title: 'Закони України',
    items: [
      'Про загальнообовʼязкове державне соціальне страхування на випадок безробіття',
      'Про зайнятість населення',
      'Про освіту',
      'Про професійну (професійно-технічну) освіту',
      'Про звернення громадян',
      'Про доступ до публічної інформації',
      'Про захист персональних даних',
    ],
  },
  {
    title: 'Постанови Кабінету Міністрів України',
    items: [
      'Про державні стандарти професійно-технічної освіти',
      'Про ступеневу професійно-технічну освіту',
      'Про ліцензування, атестацію та акредитацію навчальних закладів',
      'Про професійне навчання учасників бойових дій та осіб з інвалідністю внаслідок війни',
      'Про перелік платних послуг закладів освіти',
    ],
  },
  {
    title: 'Нормативні документи міністерств',
    items: [
      'Перелік професій і спеціальностей для навчання за ваучером',
      'Порядок професійної підготовки, перепідготовки та підвищення кваліфікації зареєстрованих безробітних',
      'Положення про професійне навчання працівників на виробництві',
      'Положення про дистанційне навчання',
      'Державний класифікатор професій',
    ],
  },
];

export const adminSeed = {
  professions,
  staff,
  news,
  documentGroups,
  contact,
};
