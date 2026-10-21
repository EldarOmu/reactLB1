// Все личные данные — только здесь. Меняйте значения, остальное подтянется само.

export const profile = {
  name: 'Омурзаков Элдар',
  initials: 'ЭО',
  role: 'Java-разработчик, студент',
  // ВЫМЫШЛЕННЫЕ контакты — замените на свои
  email: 'eldar.omurzakov.dev@gmail.com',
  phone: '+996 555 014 827',
  // Вставьте ссылку на свой GitHub, например 'https://github.com/ваш-ник'. Пусто — ссылка не показывается.
  github: '',
  city: 'Бишкек, Кыргызстан',
  // Положите фото в папку public (например public/photo.jpg) и впишите './photo.jpg'. Пусто — покажутся инициалы.
  photo: '',
}

export const statement = 'Высокоуровневое программирование'

export const lead =
  'Пишу backend на Java 21 и Spring Boot: от схемы базы данных и REST API до запуска в Docker. Занимаюсь тем, что должна делать система, а память и железо оставляю платформе.'

// Схема «стека»: верхние слои — моя работа, нижние берёт на себя платформа
export const myLayers = [
  { title: 'Бизнес-задачи', note: 'что должна делать система' },
  { title: 'Spring Boot, REST API, JPA', note: 'сервисы и работа с данными' },
  { title: 'Java 21', note: 'язык и стандартная библиотека' },
]

export const platformLayers = [
  { title: 'JVM и память', note: 'сборка мусора, JIT' },
  { title: 'Операционная система и железо', note: '' },
]

export const about = [
  'Студент Кыргызско-Немецкого института прикладной информатики (KGIAI) в Бишкеке. Параллельно с учёбой делаю реальные backend-проекты на Java.',
  'Проектирую схемы баз данных, пишу сервисный слой и REST API, настраиваю запуск через Docker Compose. Сейчас углубляюсь в многопоточность и Stream API.',
]

export const skills = [
  { group: 'Язык', items: 'Java 21, Stream API, коллекции, enum, многопоточность (ExecutorService, Future, Callable)' },
  { group: 'Backend', items: 'Spring Boot, REST API, JPA, сервисный слой, глобальная обработка ошибок' },
  { group: 'Данные', items: 'PostgreSQL, SQL, проектирование реляционных схем' },
  { group: 'Инструменты', items: 'Docker, Docker Compose, Git, Postman, WSL' },
  { group: 'Frontend', items: 'HTML, CSS, JavaScript — для админ-панелей и простых интерфейсов' },
]

export const projects = [
  {
    name: 'MegaLab',
    kind: 'Админ-панель для школы программирования',
    description:
      'Внутренняя система учёта: студенты, менторы, курсы, группы, платежи и история контактов со студентами. Шаблоны сообщений с подстановкой данных. Прошёл весь цикл разработки: от схемы из 9 таблиц до развёртывания в Docker Compose с проверками состояния.',
    technologies: 'Java 21, Spring Boot, PostgreSQL, JPA, Docker Compose, REST API',
  },
  {
    name: 'Soft Collection',
    kind: 'Система работы с просроченной задолженностью',
    description:
      'Командный проект для финансовой организации Кыргызстана по формальному техническому заданию. Реляционная схема (клиенты, карточки должников, история контактов, уведомления, шаблоны сообщений, журнал аудита) и сервис скоринга по взвешенным факторам.',
    technologies: 'Java, Spring Boot, PostgreSQL, JPA, Docker',
  },
]

export const education = {
  place: 'Кыргызско-Немецкий институт прикладной информатики (KGIAI)',
  detail: 'Бишкек. Группа AIN-1-25',
}

export const languages = [
  { name: 'Русский', level: 'C1' },
  { name: 'Кыргызский', level: 'B2' },
  { name: 'Английский', level: 'A2–B1' },
  { name: 'Немецкий', level: 'A1–A2' },
]
