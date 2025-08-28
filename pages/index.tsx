import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { InteractiveCard } from "@/components/interactive-card";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { PrintButton } from "@/components/print-button";
// import { SkillMeter } from "@/components/skill-meter";
import { CaseGallery } from "@/components/case-gallery";

type IndexProps = { certificates: string[] };

export default function IndexPage({ certificates }: IndexProps) {
  return (
    <DefaultLayout>
      <section id="resume" className="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
        <div className="inline-block max-w-3xl text-center justify-center relative">
          <div className="print-toolbar">
            <PrintButton />
          </div>
          <span className={title({ size: "lg" })}>Виктория Малыхина — Project & Sales Manager&nbsp;</span>
          <br />
          <span className={subtitle({ class: "mt-4" })}>
            <strong className="font-semibold">1 153</strong> проектов за 3 года · <strong className="font-semibold">75 млн ₽</strong> оборота · одновременно до <strong className="font-semibold">200</strong> проектов · конверсия <strong className="font-semibold">86%</strong>
          </span>
        </div>

        <section id="about" className="w-full max-w-5xl">
          <div className="rounded-xl border border-default-200/50 bg-content1 p-6">
            <div className="space-y-3 text-default-700 leading-7">
              <p>Привет! Меня зовут Вика. Я проектный менеджер с коммерческим бэкграундом и любовью к понятным процессам. За 3 года я сопроводила 1 153 проекта на сумму 75 млн ₽, вела одновременно до 200 кейсов и держала конверсию 86%.</p>
              <p>Мне нравится превращать хаос в ясный путь: от заявки и замера до дизайна, сметы, поставки и установки. Я сочетаю вкус к визуалу (Ceramic 3D, Figma, Tilda) и дисциплину к цифрам: +3,6 млн ₽ к плану за 8 месяцев, +23,4% оборота, чек x1,5. Эти результаты дала стандартизация: таблица сопутствующих (масштабирована на регионы), калькулятор лояльности с подсказками выгодных позиций и идея «Всегда пригодится» для корзины.</p>
              <p>Ценю эмпатию к клиенту, прозрачные договорённости и работу в срок. Умею решать спорные ситуации, договариваться с подрядчиками и обучать коллег через чек‑листы и простые инструменты. Вижу себя в ролях Project/Account/CSM в digital/interior/travel/e‑com, также открыта к Junior PM/BA или UX/UI — быстро учусь и люблю доводить решения до измеримого эффекта.</p>
              <p>Буду рада познакомиться и обсудить, как мои инструменты и подход могут усилить вашу команду. Связаться удобно в Telegram: <a className="text-primary hover:underline" href="https://t.me/mal_ina_victoria" target="_blank" rel="noreferrer">@mal_ina_victoria</a>.</p>
          </div>
        </div>
        </section>

        <section id="certificates" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Сертификаты</h2>
          {certificates && certificates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certificates.map((name) => (
                <a
                  key={name}
                  href={`/docs/certificate/${encodeURIComponent(name)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-xl border border-default-200/50 bg-content1 p-4 hover-card flex items-center justify-between"
                >
                  <span className="text-default-700">
                    {name.replace(/\.[^/.]+$/, "")}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-content2 text-foreground">PDF/Doc</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-default-500">Пока нет загруженных сертификатов.</p>
          )}
        </section>

        <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal>
            <InteractiveCard>
              <div className="text-3xl font-semibold">
                <Counter to={3.6} decimals={1} suffix=" млн ₽" />
              </div>
              <div className="text-default-500 mt-1">перевыполнение плана за 8 мес.</div>
            </InteractiveCard>
          </Reveal>
          <Reveal delay={0.05}>
            <InteractiveCard borderFrom="from-violet-500" borderTo="to-sky-400" spotColor="rgba(99,102,241,0.22)">
              <div className="text-3xl font-semibold">x<Counter to={1.5} decimals={1} /></div>
              <div className="text-default-500 mt-1">рост среднего чека</div>
            </InteractiveCard>
          </Reveal>
          <Reveal delay={0.1}>
            <InteractiveCard borderFrom="from-emerald-500" borderTo="to-teal-400" spotColor="rgba(16,185,129,0.22)">
              <div className="text-3xl font-semibold">+<Counter to={23.4} decimals={1} suffix="%" /></div>
              <div className="text-default-500 mt-1">рост товарооборота</div>
            </InteractiveCard>
          </Reveal>
        </div>

        <section id="skills" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Компетенции и инструменты</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Agile (Scrum/Kanban)",
              "CRM (1С, retail CRM)",
              "Excel/Sheets",
              "Ceramic 3D",
              "Figma",
              "Tilda",
              "Переговоры",
              "Обучение/наставничество",
              "Документация/чек‑листы",
              "SLA / WIP‑лимиты",
              "Планирование и приоритизация",
              "Управление рисками",
              "Ведение бэклога",
              "Работа с подрядчиками",
              "Онбординг клиентов",
              "Upsell / Cross‑sell",
              "Внутренняя аналитика",
              "Презентации и демо",
              "Разрешение конфликтов",
            ].map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">
                {s}
            </span>
            ))}
          </div>
        </section>
        
        

        <section id="education" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Образование</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <h3 className="text-base font-semibold">Северо-Кавказский федеральный университет, Ставрополь</h3>
              <p className="text-default-700 mt-1">Менеджмент организаций — Бакалавриат, 2021</p>
            </div>
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <h3 className="text-base font-semibold">Северо-Кавказский федеральный университет, Ставрополь</h3>
              <p className="text-default-700 mt-1">Управление развитием бизнеса и инновациями — Магистратура, 2023</p>
            </div>
          </div>
        </section>

        

        <section id="metrics" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Ключевые метрики</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {k: "Проекты", v: "1 153"},
              {k: "Оборот", v: "75 млн ₽"},
              {k: "Конверсия", v: "86%"},
              {k: "Параллельно", v: "до 200"},
              {k: "+к плану", v: "+3,6 млн ₽"},
              {k: "Оборот +", v: "+23,4%"},
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-default-200/50 bg-content1 p-4 hover-card">
                <div className="text-sm text-default-500">{m.k}</div>
                <div className="text-2xl font-semibold mt-1">{m.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="roles" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Роли и ответственность</h2>
          <div className="flex flex-wrap gap-2">
            {["Лид-менеджмент","Дизайн‑подбор","Логистика/подрядчики","Эскалации","Документация/чек‑листы","Обучение"]
              .map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">{s}</span>
            ))}
          </div>
        </section>

        <section id="cases" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Кейсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <div className="text-base font-semibold">B2B: несоответствие партии</div>
              <ul className="list-disc ml-5 mt-2 text-default-700 space-y-1 text-sm">
                <li>Задача: риск срыва установки</li>
                <li>Действия: ресборка спецификации за 24 ч, согласование замены</li>
                <li>Результат: дедлайн сохранён, бюджет удержан, +upsell сопутствующих товаров</li>
              </ul>
            </div>
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <div className="text-base font-semibold">Таблица сопутствующих товаров</div>
              <ul className="list-disc ml-5 mt-2 text-default-700 space-y-1 text-sm">
                <li>Задача: низкая комплектация</li>
                <li>Действия: стандартизация ассортимента и чек‑листов</li>
                <li>Результат: +31% позиций, чек x1.5, масштабирование на регионы</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Галерея кейсов</h3>
            <CaseGallery
              images={[
                {src: "/img_cases/photo_1_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_2_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_3_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_4_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_5_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_6_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_7_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_8_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_9_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_10_2025-08-13_21-45-15.jpg"},
                {src: "/img_cases/photo_1_2025-08-13_21-45-52.jpg"},
                {src: "/img_cases/photo_2_2025-08-13_21-45-52.jpg"},
              ]}
            />
          </div>
        </section>
        <section id="experience" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Опыт работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
            <h3 className="text-lg font-semibold">Ле Монлид / Леруа Мерлен Восток</h3>
            <div className="text-default-500 mb-3">Июл 2022 — Авг 2025 · Специалист по продажам проектов</div>
            <ul className="list-disc ml-5 space-y-1 text-default-700">
              <li>Проекты под ключ: лид → замер → дизайн → смета → поставка → монтаж</li>
              <li>Дизайн в Ceramic 3D, подбор материалов, выполнение в срок и взаимодействие с подрядчиками</li>
              <li>Выезды на новостройки; участие в программе «Новосёл» для привлечения клиентов</li>
              <li>Калькулятор лояльности: расчёт баллов и подбор позиций с повышенным кешбэком</li>
              <li>Идея UX «Всегда пригодится» (скотч, перчатки, нож и т.д.) — рост среднего чека и количества позиций (на согласовании)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
            <h3 className="text-lg font-semibold">АО «Концерн Энергомера»</h3>
            <div className="text-default-500 mb-3">Ноя 2021 — Фев 2022 · Ассистент экономиста</div>
            <ul className="list-disc ml-5 space-y-1 text-default-700">
              <li>Проверка реестра платежей, их отправка и загрузка из банка</li>
              <li>Работа с контрагентами, выезд к ним</li>
              <li>Проверка документов и их сбор</li>
            </ul>
          </div>
          </div>
        </section>

        <section id="goals" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Цели</h2>
          <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
            <div className="space-y-5">
              <div>
                <div className="text-sm text-default-500 mb-2">Роли</div>
                <div className="flex flex-wrap gap-2">
                  {["Project Manager","Account Manager","Customer Success Manager","Junior PM/BA","Junior UX/UI"].map((s)=> (
                    <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-default-500 mb-2">Отрасли</div>
                <div className="flex flex-wrap gap-2">
                  {["Digital","Interior","Travel","E‑com"].map((s)=> (
                    <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-default-500 mb-2">Предпочтения</div>
                <div className="flex flex-wrap gap-2">
                  {["Удалённо","Быстрое обучение под задачу"].map((s)=> (
                    <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>
        </div>
        </section>

        <section id="contacts" className="w-full max-w-5xl text-center">
          <p className="text-default-700">
            Связаться:
            {" "}
            <a className="text-primary hover:underline" href="https://t.me/mal_ina_victoria" target="_blank" rel="noreferrer">Telegram — @mal_ina_victoria</a>
            {" "}·{" "}
            <a className="text-primary hover:underline" href="mailto:mal_ina-victoria@mail.ru">Email — mal_ina-victoria@mail.ru</a>
          </p>
        </section>
      </section>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const fs = await import('fs');
  const path = await import('path');
  const dir = path.join(process.cwd(), 'public', 'docs', 'certificate');
  let certificates: string[] = [];
  try {
    certificates = fs.readdirSync(dir).filter((f: string) => !f.startsWith('.'));
  } catch (e) {
    certificates = [];
  }
  return { props: { certificates } };
}
