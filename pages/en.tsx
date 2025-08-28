import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { InteractiveCard } from "@/components/interactive-card";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { PrintButton } from "@/components/print-button";
import { CaseGallery } from "@/components/case-gallery";

type EnglishProps = { certificates: string[] };

export default function EnglishPage({ certificates }: EnglishProps) {
  return (
    <DefaultLayout>
      <section id="resume" className="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
        <div className="inline-block max-w-3xl text-center justify-center relative">
          <div className="print-toolbar">
            <PrintButton />
          </div>
          <span className={title({ size: "lg" })}>Victoria Malykhina — Project & Sales Manager&nbsp;</span>
          <br />
          <span className={subtitle({ class: "mt-4" })}>
            <strong className="font-semibold">1,153</strong> projects in 3 years · <strong className="font-semibold">₽75M</strong> revenue · up to <strong className="font-semibold">200</strong> projects in parallel · <strong className="font-semibold">86%</strong> conversion
          </span>
        </div>

        <section id="about" className="w-full max-w-5xl">
          <div className="rounded-xl border border-default-200/50 bg-content1 p-6">
            <div className="space-y-3 text-default-700 leading-7">
              <p>Hello! I’m Victoria — a project manager with a commercial background and a passion for clear processes. Over 3 years, I delivered 1,153 projects with ₽75M revenue, handling up to 200 cases in parallel and keeping an 86% conversion rate.</p>
              <p>I turn chaos into a clear path: from lead and site measurement to design, estimate, delivery and installation. I combine visual taste (Ceramic 3D, Figma, Tilda) with a love for numbers: +₽3.6M to plan in 8 months, +23.4% revenue, x1.5 average check. The driver — standardization: the accessory table (scaled nationwide), a loyalty calculator with smart suggestions, and the “Always Handy” idea for the cart.</p>
              <p>I value empathy, transparent agreements, and on‑time delivery. I resolve escalations, negotiate with contractors, and teach teams via checklists and simple internal tools. Target roles: Project/Account/CSM in digital/interior/travel/e‑com; also open to Junior PM/BA or UX/UI — I learn fast and aim for measurable impact.</p>
              <p>Let’s talk about how my toolkit and approach can strengthen your team. The fastest way to reach me is on Telegram: <a className="text-primary hover:underline" href="https://t.me/mal_ina_victoria" target="_blank" rel="noreferrer">@mal_ina_victoria</a>.</p>
            </div>
          </div>
        </section>

        <section id="certificates" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Certificates</h2>
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
            <p className="text-default-500">No uploaded certificates yet.</p>
          )}
        </section>

        <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal>
            <InteractiveCard>
              <div className="text-3xl font-semibold">
                <Counter to={3.6} decimals={1} suffix="M ₽" />
              </div>
              <div className="text-default-500 mt-1">over plan in 8 months</div>
            </InteractiveCard>
          </Reveal>
          <Reveal delay={0.05}>
            <InteractiveCard borderFrom="from-violet-500" borderTo="to-sky-400" spotColor="rgba(99,102,241,0.22)">
              <div className="text-3xl font-semibold">x<Counter to={1.5} decimals={1} /></div>
              <div className="text-default-500 mt-1">average check growth</div>
            </InteractiveCard>
          </Reveal>
          <Reveal delay={0.1}>
            <InteractiveCard borderFrom="from-emerald-500" borderTo="to-teal-400" spotColor="rgba(16,185,129,0.22)">
              <div className="text-3xl font-semibold">+<Counter to={23.4} decimals={1} suffix="%" /></div>
              <div className="text-default-500 mt-1">revenue growth</div>
            </InteractiveCard>
          </Reveal>
        </div>

        <section id="skills" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Skills and tools</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Agile (Scrum/Kanban)",
              "CRM (1C, retail CRM)",
              "Excel/Sheets",
              "Ceramic 3D",
              "Figma",
              "Tilda",
              "Negotiation",
              "Training/Mentoring",
              "Documentation/Checklists",
              "SLA / WIP limits",
              "Planning & Prioritization",
              "Risk Management",
              "Backlog Management",
              "Contractor Management",
              "Client Onboarding",
              "Upsell / Cross‑sell",
              "Internal Analytics",
              "Presentations & Demos",
              "Conflict Resolution",
            ].map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">
                {s}
              </span>
            ))}
          </div>
        </section>
        
        

        <section id="education" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <h3 className="text-base font-semibold">North‑Caucasus Federal University, Stavropol</h3>
              <p className="text-default-700 mt-1">BSc in Management, 2021</p>
            </div>
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <h3 className="text-base font-semibold">North‑Caucasus Federal University, Stavropol</h3>
              <p className="text-default-700 mt-1">MSc in Business Development and Innovation, 2023</p>
            </div>
          </div>
        </section>

        

        <section id="metrics" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Key metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {k: "Projects", v: "1,153"},
              {k: "Revenue", v: "₽75M"},
              {k: "Conversion", v: "86%"},
              {k: "Parallel", v: "up to 200"},
              {k: "+vs plan", v: "+₽3.6M"},
              {k: "Revenue +", v: "+23.4%"},
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-default-200/50 bg-content1 p-4 hover-card">
                <div className="text-sm text-default-500">{m.k}</div>
                <div className="text-2xl font-semibold mt-1">{m.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="roles" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Roles & responsibilities</h2>
          <div className="flex flex-wrap gap-2">
            {["Lead management","Design & selection","Logistics/Contractors","Escalations","Documentation/Checklists","Training"]
              .map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">{s}</span>
            ))}
          </div>
        </section>

        <section id="cases" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <div className="text-base font-semibold">B2B: batch mismatch</div>
              <ul className="list-disc ml-5 mt-2 text-default-700 space-y-1 text-sm">
                <li>Challenge: risk of installation delay</li>
                <li>Action: rebuilt specification within 24h, approved replacement</li>
                <li>Result: deadline met, budget kept, +upsell of accessories goods</li>
              </ul>
            </div>
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <div className="text-base font-semibold">Accessory table</div>
              <ul className="list-disc ml-5 mt-2 text-default-700 space-y-1 text-sm">
                <li>Challenge: low completion of orders</li>
                <li>Action: standardized assortment and checklists</li>
                <li>Result: +31% lines per order, x1.5 average check, scaled across regions</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Case gallery</h3>
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
          <h2 className="text-xl font-semibold mb-3">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <h3 className="text-lg font-semibold">Le Monlid / Leroy Merlin Vostok</h3>
              <div className="text-default-500 mb-3">Jul 2022 — Aug 2025 · Project Sales Specialist</div>
              <ul className="list-disc ml-5 space-y-1 text-default-700">
                <li>End‑to‑end projects: lead → measurement → design → estimate → delivery → installation</li>
                <li>Ceramic 3D design, material selection, on‑time delivery and contractor coordination</li>
                <li>Site visits to new builds; participation in the "Novosel" client program</li>
                <li>Loyalty calculator: points calculation and smart prompts for high‑cashback items</li>
                <li>UX idea “Always Handy” (tape, gloves, knife, etc.) — increases average check and lines</li>
              </ul>
            </div>
            <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
              <h3 className="text-lg font-semibold">AO "Concern Energomera"</h3>
              <div className="text-default-500 mb-3">Nov 2021 — Feb 2022 · Economist Assistant</div>
              <ul className="list-disc ml-5 space-y-1 text-default-700">
                <li>Payment register checks, submissions and uploads from the bank</li>
                <li>Work with contractors, on‑site visits</li>
                <li>Document verification and collection</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="goals" className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-3">Goals</h2>
          <div className="rounded-xl border border-default-200/50 bg-content1 p-6 hover-card">
            <div className="space-y-5">
              <div>
                <div className="text-sm text-default-500 mb-2">Roles</div>
                <div className="flex flex-wrap gap-2">
                  {["Project Manager","Account Manager","Customer Success Manager","Junior PM/BA","Junior UX/UI"].map((s)=> (
                    <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-default-500 mb-2">Industries</div>
                <div className="flex flex-wrap gap-2">
                  {["Digital","Interior","Travel","E‑com"].map((s)=> (
                    <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-default-500 mb-2">Preferences</div>
                <div className="flex flex-wrap gap-2">
                  {["Remote","Fast upskilling for the task"].map((s)=> (
                    <span key={s} className="px-3 py-1 rounded-full bg-content2 text-foreground text-sm hover-chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="w-full max-w-5xl text-center">
          <p className="text-default-700">
            Contact: {" "}
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


