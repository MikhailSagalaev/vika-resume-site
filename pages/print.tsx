import React from "react";

export default function PrintResume() {
  return (
    <div className="print-container">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Виктория Малыхина — Project & Sales Manager</h1>
        <p className="text-sm text-default-600">1 153 проектов · 75 млн ₽ · до 200 одновременно · конверсия 86%</p>
      </header>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="mt-1 text-sm leading-6">
          Менеджер проектов с сильным коммерческим бэкграундом и клиентским сервисом. Запускаю инструменты, которые
          масштабируются по сети (таблицы-сопровождения, калькуляторы лояльности), повышаю выручку и эффективность.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">Ключевые достижения</h2>
        <ul className="mt-1 text-sm leading-6 list-disc ml-5">
          <li>1 153 проекта / 75 млн ₽, до 200 параллельно, конверсия 86%</li>
          <li>+3.6 млн ₽ к плану за 8 мес.; +23.4% оборот; x1.5 средний чек</li>
          <li>Таблица сопутствующих товаров (масштабирована по регионам)</li>
          <li>Калькулятор программы лояльности (используется по сей день)</li>
          <li>UX-функция «Всегда пригодится» (на этапе внедрения)</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">Опыт</h2>
        <div className="mt-1">
          <h3 className="font-medium">Ле Монлид / Леруа Мерлен Восток — Специалист по продажам проектов</h3>
          <p className="text-sm text-default-600">Июл 2022 — Авг 2025</p>
          <ul className="text-sm leading-6 list-disc ml-5">
            <li>Проекты под ключ: лид → замер → дизайн → смета → поставка → монтаж</li>
            <li>Дизайн (Ceramic 3D), подбор материалов, выполнение в срок и взаимодействие с подрядчиками</li>
            <li>Выезды на новостройки; участие в «Новосёле» для привлечения клиентов</li>
            <li>Таблица сопутствующих: рост позиций/чека, команда +3 ранга; внедрено в регионах</li>
            <li>Калькулятор лояльности: подсчёт баллов и подбор выгодных позиций</li>
            <li>UX «Всегда пригодится»: идея для роста среднего чека (на согласовании)</li>
          </ul>
        </div>
        <div className="mt-3">
          <h3 className="font-medium">АО «Концерн Энергомера» — Ассистент экономиста</h3>
          <p className="text-sm text-default-600">Ноя 2021 — Фев 2022</p>
          <ul className="text-sm leading-6 list-disc ml-5">
            <li>Проверка реестра платежей, их отправка и загрузка из банка</li>
            <li>Работа с контрагентами, выезд к ним</li>
            <li>Проверка документов и их сбор</li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Навыки</h2>
          <ul className="mt-1 text-sm leading-6 list-disc ml-5">
            <li>Проектное сопровождение, B2B/B2C, переговоры</li>
            <li>Agile (Scrum/Kanban), SLA/WIP, приоритизация</li>
            <li>CRM, 1С, Excel/Sheets</li>
            <li>Ceramic 3D, Figma, Tilda</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Образование и курсы</h2>
          <ul className="mt-1 text-sm leading-6 list-disc ml-5">
            <li>СКФУ, Ставрополь — Менеджмент организаций, Бакалавриат, 2021</li>
            <li>СКФУ, Ставрополь — Управление развитием бизнеса и инновациями, Магистратура, 2023</li>
            <li>Scrum Foundation + Jira Essentials — [заполнить]</li>
            <li>UX/UI Starter (Figma, прототипирование) — [заполнить]</li>
            <li>Excel продвинутый (дашборды/Power Query) — [заполнить]</li>
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Контакты</h2>
        <p className="text-sm leading-6">Telegram: @mal_ina_victoria · Email: mal_ina-victoria@mail.ru</p>
      </section>
    </div>
  );
}


