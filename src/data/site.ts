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

export type DocumentLink = {
  title: string;
  href: string;
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
    image: '/images/professions/elektrogazozvarnik.jpg',
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
    image: '/images/professions/montazhnyk-santekh-system.jpg',
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
    image: '/images/professions/vodiy-tramvaya.jpg',
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
    image: '/images/professions/vodiy-troleybusa.jpg',
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
    image: '/images/professions/kasyr-torgovelnoho-zalu.jpg',
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
    image: '/images/professions/prodavec-prodovolchykh-tovariv.jpg',
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
    image: '/images/professions/prodavec-neprodovolchykh-tovariv.jpg',
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
    image: '/images/professions/operator-kotelni.jpg',
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
    image: '/images/professions/mashynist-kochehar-kotelni.jpg',
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
    image: '/images/professions/traktoryst-mashynist.jpg',
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
    image: '/images/professions/monter-kabelnoho-vyrobnytstva.jpg',
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
    image: '/images/professions/perukar-modelier.jpg',
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
    image: '/images/professions/manikiurnyk.jpg',
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
    image: '/images/professions/vizazhist.jpg',
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
    image: '/images/professions/fermer.jpg',
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
    image: '/images/professions/shvachka.jpg',
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
    image: '/images/professions/operator-obrobky-informatsii.jpg',
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
    name: 'Єнджиєвська Тетяна Романівна',
    role: 'Майстер виробничого навчання швейної справи',
    department: 'Майстри виробничого навчання',
    focus: 'Швейна справа',
    image: 'https://rada.info/upload/users_files/36738974/a4a69ed31317b0f004850ce613a36e9c.jpg',
  },
  {
    name: 'Павлюк Світлана Ярославівна',
    role: 'Майстер виробничого навчання перукарської справи',
    department: 'Майстри виробничого навчання',
    focus: 'Базовий курс перукарської майстерності',
    image: 'https://rada.info/upload/users_files/36738974/9f941f134cb6770cfa1bee3c564786c5.jpg',
  },
  {
    name: 'Левко Степан Іванович',
    role: 'Майстер виробничого навчання',
    department: 'Майстри виробничого навчання',
    focus: 'Спецтехнологія, тракторист-машиніст сільськогосподарського виробництва категорії А1',
    image: 'https://rada.info/upload/users_files/36738974/d3c0f8ddcecc14880361adc5cbae0f5f.jpg',
  },
  {
    name: 'Власов Вадим Валерійович',
    role: 'Майстер виробничого навчання',
    department: 'Майстри виробничого навчання',
    focus: 'Обчислювальні машини, комплекси, системи та мережі',
    image: 'https://rada.info/upload/users_files/36738974/751b8df45347a33cebd6ed52bd12daf3.jpg',
  },
  {
    name: 'Чайковська Оксана Володимирівна',
    role: 'Практичний психолог',
    department: 'Інші спеціалісти',
    focus: 'Психологія, професійна етика, культура спілкування',
    image: 'https://rada.info/upload/users_files/36738974/17136400ab71ef05eb6813ccf5e81234.jpg',
  },
];

export const administrativeStaff = [
  { name: 'Штогрин Лілія Володимирівна', role: 'Провідний юрисконсульт', department: 'Адміністрація' },
  { name: "Хом'як Надія Степанівна", role: 'Спеціаліст з кадрів', department: 'Адміністрація' },
  { name: 'Костів Артур Романович', role: 'Інженер з охорони праці', department: 'Адміністрація' },
  { name: 'Маюк Вікторія Володимирівна', role: 'Головний бухгалтер', department: 'Бухгалтерія', email: 'maiuk@locz.gov.ua' },
  { name: 'Оліярчик Галина Володимирівна', role: 'Провідний бухгалтер', department: 'Бухгалтерія' },
  { name: 'Стельмах Ірина Михайлівна', role: 'Провідний бухгалтер', department: 'Бухгалтерія' },
  { name: 'Цвек Марія Степанівна', role: 'Провідний економіст', department: 'Бухгалтерія' },
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
  {
    name: 'ЛКП «Львівелектротранс»',
    detail: 'навчальні полігони на вул. Тролейбусній і вул. Городоцькій, навчальні трамваї та тролейбуси',
  },
  {
    name: 'ТзОВ «Агро ЛВ Лімітед»',
    detail: 'навчальний клас, полігон, машино-тракторний двір, пост технічного обслуговування й майстерня',
  },
  {
    name: 'ТзОВ «Львівелектромережбуд»',
    detail: 'пункт технічного обслуговування та пост налагоджування машин',
  },
  {
    name: 'ПАФ ім. М. Шашкевича, ТДВ «ШРБУ №65», ПП «Рома», ТзОВ «ПМК-2017»',
    detail: 'виробничі майстерні, машинні двори та майданчики для практичного навчання',
  },
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
      { title: 'Про загальнообовʼязкове державне соціальне страхування на випадок безробіття', href: 'https://zakon.rada.gov.ua/laws/show/1533-14' },
      { title: 'Про зайнятість населення', href: 'https://zakon.rada.gov.ua/laws/show/5067-17' },
      { title: 'Про освіту', href: 'https://zakon.rada.gov.ua/laws/show/2145-19' },
      { title: 'Про професійну (професійно-технічну) освіту', href: 'https://zakon.rada.gov.ua/laws/show/103/98-%D0%B2%D1%80' },
      { title: 'Про звернення громадян', href: 'https://zakon.rada.gov.ua/laws/show/393/96-%D0%B2%D1%80' },
      { title: 'Про доступ до публічної інформації', href: 'https://zakon.rada.gov.ua/laws/show/2939-17' },
      { title: 'Про захист персональних даних', href: 'https://zakon.rada.gov.ua/laws/show/2297-17' },
    ],
  },
  {
    title: 'Постанови Кабінету Міністрів України',
    items: [
      { title: 'Про державні стандарти професійно-технічної освіти', href: 'https://zakon.rada.gov.ua/laws/show/1135-2002-%D0%BF' },
      { title: 'Про ступеневу професійно-технічну освіту', href: 'https://zakon.rada.gov.ua/laws/show/956-99-%D0%BF' },
      { title: 'Про ліцензування, атестацію та акредитацію навчальних закладів', href: 'https://zakon.rada.gov.ua/laws/show/200-96-%D0%BF' },
      { title: 'Про професійне навчання учасників бойових дій та осіб з інвалідністю внаслідок війни', href: 'https://zakon.rada.gov.ua/laws/show/432-2017-%D0%BF' },
      { title: 'Про перелік платних послуг закладів освіти', href: 'https://zakon.rada.gov.ua/laws/show/796-2010-%D0%BF' },
    ],
  },
  {
    title: 'Нормативні документи міністерств',
    items: [
      { title: 'Перелік професій і спеціальностей для навчання за ваучером', href: 'https://zakon.rada.gov.ua/laws/show/z0690-17' },
      { title: 'Порядок професійної підготовки, перепідготовки та підвищення кваліфікації зареєстрованих безробітних', href: 'https://zakon.rada.gov.ua/laws/show/z1029-13' },
      { title: 'Положення про професійне навчання працівників на виробництві', href: 'https://zakon.rada.gov.ua/laws/show/z0446-08' },
      { title: 'Положення про дистанційне навчання', href: 'https://zakon.rada.gov.ua/laws/show/z0703-13' },
      { title: 'Державний класифікатор професій', href: 'https://zakon.rada.gov.ua/rada/show/va327609-10' },
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
