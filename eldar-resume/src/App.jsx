import {
  profile,
  statement,
  lead,
  myLayers,
  platformLayers,
  about,
  skills,
  projects,
  education,
  languages,
} from './data.js'

function Contacts() {
  const { email, phone, github, city } = profile
  return (
    <ul className="contacts">
      <li>
        <a href={`mailto:${email}`}>{email}</a>
      </li>
      <li>
        <a href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</a>
      </li>
      {github && (
        <li>
          <a href={github} target="_blank" rel="noreferrer">
            {github.replace('https://', '')}
          </a>
        </li>
      )}
      <li>{city}</li>
    </ul>
  )
}

function Stack() {
  return (
    <figure className="stack" aria-label="Схема уровней абстракции: я работаю на верхних слоях">
      <figcaption className="stack-caption stack-caption--mine">Здесь я работаю</figcaption>
      <ul className="layers layers--mine">
        {myLayers.map((layer, i) => (
          <li className="layer" key={layer.title} style={{ '--i': i }}>
            <strong>{layer.title}</strong>
            <span>{layer.note}</span>
          </li>
        ))}
      </ul>
      <figcaption className="stack-caption">Берёт на себя платформа</figcaption>
      <ul className="layers layers--platform">
        {platformLayers.map((layer, i) => (
          <li className="layer" key={layer.title} style={{ '--i': i + myLayers.length }}>
            <strong>{layer.title}</strong>
            {layer.note && <span>{layer.note}</span>}
          </li>
        ))}
      </ul>
    </figure>
  )
}

function Row({ title, children }) {
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="row-body">{children}</div>
    </section>
  )
}

function App() {
  return (
    <main className="sheet">
      <header className="top">
        {profile.photo ? (
          <img className="avatar" src={profile.photo} alt={`Фотография: ${profile.name}`} />
        ) : (
          <div className="avatar avatar--initials" aria-hidden="true">
            {profile.initials}
          </div>
        )}
        <div className="who">
          <h1>{profile.name}</h1>
          <p>{profile.role}</p>
        </div>
        <button className="print-button no-print" type="button" onClick={() => window.print()}>
          Сохранить в PDF
        </button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="statement">{statement}</p>
          <p className="lead">{lead}</p>
          <Contacts />
        </div>
        <Stack />
      </section>

      <Row title="Обо мне">
        {about.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </Row>

      <Row title="Навыки">
        <dl className="skills">
          {skills.map((skill) => (
            <div className="skill" key={skill.group}>
              <dt>{skill.group}</dt>
              <dd>{skill.items}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row title="Проекты">
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <h3>{project.name}</h3>
              <p className="project-kind">{project.kind}</p>
              <p>{project.description}</p>
              <p className="tech">
                <strong>Технологии:</strong> {project.technologies}
              </p>
            </article>
          ))}
        </div>
      </Row>

      <Row title="Образование">
        <p className="edu-place">{education.place}</p>
        <p className="muted">{education.detail}</p>
      </Row>

      <Row title="Языки">
        <ul className="languages">
          {languages.map((lang) => (
            <li key={lang.name}>
              {lang.name} <span>{lang.level}</span>
            </li>
          ))}
        </ul>
      </Row>

      <footer className="foot">
        <span>{profile.name}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </main>
  )
}

export default App
