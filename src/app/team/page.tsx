import Image from 'next/image';
import { BriefcaseBusiness, Mail, UsersRound } from 'lucide-react';
import { administrativeStaff, methodologyStats, staff } from '../../data/site';
import styles from './team.module.css';

export const metadata = {
  title: 'Кадрове забезпечення',
  description: 'Керівництво, педагогічні працівники, майстри виробничого навчання та адміністративні спеціалісти Львівського центру ПТО ДСЗ.',
};

const departments = Array.from(new Set(staff.map((member) => member.department)));
const adminDepartments = Array.from(new Set(administrativeStaff.map((member) => member.department)));

export default function TeamPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Кадри</span>
          <h1>Кадрове та навчально-методичне забезпечення</h1>
          <p>
            Педагогічний склад, методичний відділ, майстри виробничого навчання
            та адміністративні спеціалісти центру.
          </p>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {methodologyStats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.methodology}>
        <div className="container">
          <div className={styles.methodologyGrid}>
            <div>
              <UsersRound size={34} aria-hidden="true" />
              <h2>Педагогічний склад відповідає вимогам професійної освіти</h2>
            </div>
            <div className={styles.copy}>
              <p>
                Штатний розпис Центру на 2025 рік затверджено в кількості 49,25 штатних одиниць.
                У центрі працюють 18 штатних педагогічних працівників: керівництво, старший майстер,
                методисти, майстри виробничого навчання, викладачі та практичний психолог.
              </p>
              <p>
                Педагоги підвищують професійну майстерність через післядипломну освіту,
                стажування на підприємствах і залучення фахівців із закладів освіти та організацій Львівщини.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.directory}>
        <div className="container">
          {departments.map((department) => (
            <div className={styles.department} key={department}>
              <div className={styles.departmentHeader}>
                <BriefcaseBusiness size={20} aria-hidden="true" />
                <h2>{department}</h2>
              </div>
              <div className={styles.grid}>
                {staff.filter((member) => member.department === department).map((member) => (
                  <article className={styles.card} key={member.name}>
                    {member.image ? (
                      <Image src={member.image} alt={member.name} width={360} height={360} />
                    ) : (
                      <div className={styles.placeholder} aria-hidden="true">{member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div>
                    )}
                    <div>
                      <h3>{member.name}</h3>
                      <strong>{member.role}</strong>
                      <p>{member.focus}</p>
                      {member.email ? (
                        <a href={`mailto:${member.email}`}>
                          <Mail size={16} aria-hidden="true" />
                          {member.email}
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.admin}>
        <div className="container">
          <span className="eyebrow">Адміністративні підрозділи</span>
          <h2>Фахівці, які забезпечують щоденну роботу центру</h2>
          <div className={styles.adminGrid}>
            {adminDepartments.map((department) => (
              <div className={styles.adminGroup} key={department}>
                <h3>{department}</h3>
                <ul>
                  {administrativeStaff.filter((member) => member.department === department).map((member) => (
                    <li key={member.name}>
                      <span>{member.name}</span>
                      <strong>{member.role}</strong>
                      {'email' in member && member.email ? <a href={`mailto:${member.email}`}>{member.email}</a> : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
