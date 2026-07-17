export const languages = { de: 'Deutsch', en: 'English' } as const;
export const defaultLang = 'de';
export type Lang = keyof typeof languages;

export const ui = {
  de: {
    meta: {
      title: 'LUMA — Wir machen Städte messbar grün',
      description:
        'LUMA verbindet Data Science, Handwerk und Ökologie und verwandelt urbane Räume in klimaresiliente, artenreiche Oasen. Beratung, Planung, Umsetzung, Pflege — aus einer Hand.',
    },
    nav: { services: 'Leistungen', projects: 'Projekte', journal: 'Journal', about: 'Über uns', contact: 'Kontakt', ops: 'LUMA-Ops' },
    hero: {
      eyebrow: 'Stadtökologie · seit 2023 · Berlin',
      title: 'Wir machen Städte messbar grün.',
      sub: 'LUMA verbindet Data Science, Handwerk und Ökologie und verwandelt urbane Räume in klimaresiliente, artenreiche Oasen — Biodiversität, die man belegen kann.',
      ctaPrimary: 'Projekt anfragen',
      ctaSecondary: 'Projekte ansehen',
      scroll: 'scrollen',
      video: '▶ hier läuft später ein Drohnenvideo',
      stats: [
        { b: '2023', s: 'gegründet' },
        { b: '35+', s: 'Projekte' },
        { b: '5.000+', s: 'Pflanzen' },
        { b: '7', s: 'inst. Partner' },
      ],
    },
    logos: { label: 'Vertrauen aus öffentlicher Hand, Energiewirtschaft & Immobilien' },
    problem: {
      eyebrow: 'Die Aufgabe',
      quote: '„Der Asphalt hält die Hitze. Die Gebäude halten die Hitze. Die Stadt ist zu ihrem eigenen Backofen geworden."',
      body: 'Hitzeinseln, Starkregen und Artenschwund treffen Städte immer härter. Lebendige Infrastruktur wirkt dagegen — messbar. Wir planen, bauen und überwachen sie.',
      cards: [
        { b: '−4–5 °C', p: 'kühlere Luft unter einem dichten urbanen Mikrowald.' },
        { b: 'Schwamm', p: 'mikrobiom-aktivierter Boden speichert Starkregen in Minuten statt ihn abzuleiten.' },
        { b: '100te Arten', p: 'Lebensraum pro Fläche — Wildbienen, Vögel, Bodenleben.' },
      ],
    },
    approach: {
      eyebrow: 'Unser Ansatz',
      title: 'Drei Disziplinen, ein Unternehmen.',
      sub: 'Wir sind bewusst keine reine Gärtnerei und keine reine Software-Firma. Der Wert entsteht an den Schnittstellen.',
      trio: [
        { n: '01 — Daten', h: 'Data Science', p: 'Drohnen-Fernerkundung, NDVI-Analyse und die BIOME-Plattform machen Wirkung belegbar.' },
        { n: '02 — Seele', h: 'Handwerk', p: 'Kletternde Baumpfleger, Gärtnerinnen, Bodenwissenschaft — die Arbeit im Feld trägt die Daten.' },
        { n: '03 — Wissen', h: 'Ökologie', p: 'Heimische, mehrschichtige Pflanzungen und Bodenmikrobiom-Forschung schaffen echte Habitate.' },
      ],
      manifesto: '„Wir sind kein Garten- und Landschaftsbauunternehmen. Wir sind kein Softwareunternehmen. Wir sind die lebendige Infrastrukturebene der Städte von morgen."',
      manifestoSrc: 'LUMA · Vision & Mission',
    },
    services: {
      eyebrow: 'Leistungen',
      title: 'Alles Grüne — aus einer Hand.',
      sub: 'Von der ersten Analyse bis zur Pflege über Jahre. Ein durchgängiger Prozess, ein Ansprechpartner.',
      groups: { understand: 'Verstehen', build: 'Umsetzen', operate: 'Betreiben' },
      items: [
        { g: 'understand', h: 'Beratung & Konzept', p: 'Standortanalyse, Machbarkeit, Förderung und ökologisches Design.' },
        { g: 'understand', h: 'Drohnen-Fernerkundung', p: 'Luftbild, NDVI & Vegetationsanalyse als Planungsgrundlage.' },
        { g: 'build', h: 'Installation & Pflanzung', p: 'Tiny Forests, mehrschichtige heimische Pflanzungen, Habitatbau.' },
        { g: 'build', h: 'Gründächer & lebende Wände', p: 'Biodiverse Dach- und Fassadenbegrünung mit echter ökologischer Funktion.' },
        { g: 'build', h: 'Klimaresilienz', p: 'Schwammstadt, Regenwassermanagement, Versickerungsmulden.' },
        { g: 'build', h: 'Baumpflege & -kontrolle', p: 'Fachgerechte Baumpflege, Bewertung und Verkehrssicherung.' },
        { g: 'operate', h: 'Langzeit-Pflege', p: 'Ökologische Betreuung durch die entscheidenden ersten Jahre.' },
        { g: 'operate', h: 'BIOME-Monitoring', p: 'Sensorik & Daten: Health Score, Artenvielfalt, Erfolg belegt.' },
        { g: 'operate', h: 'Habitatstrukturen', p: 'Totholz, Sandwände, Wildbienen — gezielt gebaute Lebensräume.' },
      ],
    },
    solutions: {
      eyebrow: 'In der Praxis',
      title: 'Lebensräume, die wirken.',
      items: [
        { img: 'aerial', tg: 'Tiny Forest', h: 'Urbane Mikrowälder', p: 'Dichte, mehrschichtige heimische Pflanzung als lebende Klimaanlage.' },
        { img: 'greenroof', tg: 'Gründach', h: 'Biodiverse Dächer', p: 'Ungenutzte Flächen werden zu Habitat, Dämmung und Wasserspeicher.' },
        { img: 'facade', tg: 'Lebende Wand', h: 'Fassadenbegrünung', p: 'Grüne Wände kühlen, filtern Luft und schaffen vertikalen Lebensraum.' },
        { img: 'macro', tg: 'Habitat', h: 'Wildbienen & Arten', p: 'Gezielte Strukturen für bestäubende Insekten und Bodenleben.' },
        { img: 'arborist', tg: 'Baumpflege', h: 'Fachgerechte Pflege', p: 'Erhalt und Sicherung des wertvollsten Stadtgrüns — der Bäume.' },
        { img: 'planting', tg: 'Boden', h: 'Mikrobiom & Pflanzung', p: 'Gesunder, lebendiger Boden ist das Fundament jedes Projekts.' },
      ],
    },
    references: {
      eyebrow: 'Referenzen',
      title: 'Über 35 Projekte in Berlin.',
      sub: 'Realisiert für öffentliche Hand, Energiewirtschaft und Immobilien — hier drei Beispiele.',
      items: [
        { img: 'aerial', cl: 'JOPE AG · Immobilien', h: 'Tiny Forests in Innenhöfen', p: 'Aus tristen, „clean" gestalteten Innenhöfen werden artenreiche Rückzugsorte — fester Bestandteil der Außenanlagen-Konzepte.', kpi: [ { b: '8', s: 'Projekte' }, { b: '5.000+', s: 'Pflanzen' } ] },
        { img: 'greenroof', cl: 'BEW · Energie & Wärme', h: 'Biodiversität auf Betriebsflächen', p: 'Wissenschaftliche Bewertung des Biodiversitätspotenzials dezentraler Anlagen — und Umsetzung passender Maßnahmen.', kpi: [ { b: '9', s: 'Projekte' }, { b: 'lfd.', s: 'Partnerschaft' } ] },
        { img: 'hero', cl: 'Stadt Berlin · Öffentlich', h: 'Grün im öffentlichen Raum', p: 'Projektflächen im Auftrag der öffentlichen Hand — Aufenthaltsqualität und Klimaanpassung für alle.', kpi: [ { b: '2', s: 'Flächen' }, { b: '+15', s: 'Baumpflege-Kunden' } ] },
      ],
    },
    biome: {
      eyebrow: 'Die BIOME-Plattform',
      title: 'Wir messen, was wir schaffen.',
      body1: 'Jedes Projekt wird dokumentiert und überwacht: Health Score, Artenvielfalt, Bodenfeuchte, Hitzeinsel-Effekt. Belege statt Behauptungen — und eine offene Datenbasis für die ganze Branche.',
      body2: 'Gestaffelter Zugang: kostenlos für Community & Citizen Science, professionell für Kommunen und Eigentümer.',
      cta: 'Plattform öffnen (Gastzugang)',
      dashTitle: 'BIOME · Projekt-Monitoring',
      tiles: [ { b: '35+', s: 'Projekte' }, { b: '4.8', s: 'Ø Health' }, { b: '100te', s: 'Arten' } ],
      rows: [
        { nm: 'Tiny Forest · Innenhof S3', pct: 92 },
        { nm: 'Gründach · BEW-Anlage', pct: 88 },
        { nm: 'Wildbienenwiese · Kreuzberg', pct: 95 },
        { nm: 'Fassade · Prinzenallee', pct: 84 },
      ],
    },
    testimonials: {
      eyebrow: 'Stimmen',
      title: 'Andere reden gut über uns.',
      items: [
        { q: '„Dank LUMA ist der Tiny Forest fester Bestandteil unserer Außenanlagen geworden … In den letzten 5 Bauprojekten haben wir über 5.000 Pflanzen gesetzt — ein Vielfaches des Geforderten. Danke an Lukas und Malte — mehr davon!"', av: 'JK', n: 'Johannes Klar', r: 'Vorstand, JOPE AG' },
        { q: '„Wir haben mit LUMA das Biodiversitätspotenzial unserer Anlagen wissenschaftlich ausgewertet und Maßnahmen umgesetzt … ein sehr kompetenter Partner. Wir werden die Partnerschaft fortsetzen."', av: 'GR', n: 'Gissela Riccio', r: 'Biodiversity Managerin, BEW Berliner Energie und Wärme AG' },
      ],
    },
    journal: {
      eyebrow: 'Journal',
      title: 'Wissen aus der Praxis.',
      sub: 'Fachartikel zu Stadtklima, Biodiversität und Methode — mit Quellen, regelmäßig neu.',
      note: '(Vorschau)',
      items: [
        { img: 'macro', m: 'Biodiversität · 6 Min', h: 'Warum Wildbienen mehr brauchen als Blühstreifen', p: 'Habitatstrukturen, die wirklich Nist- und Nahrungsraum schaffen.' },
        { img: 'greenroof', m: 'Stadtklima · 8 Min', h: 'Gründächer als Baustein der Schwammstadt', p: 'Wie Dachbegrünung Starkregen puffert und Gebäude kühlt.' },
        { img: 'arborist', m: 'Methode · 5 Min', h: 'Die Miyawaki-Methode im urbanen Raum', p: 'Dichte, heimische Pflanzung für schnelles, stabiles Wachstum.' },
      ],
    },
    ctaband: { title: 'Lassen Sie uns Ihren Stadtraum grüner machen.', cta: 'Projekt anfragen' },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Erzählen Sie uns von Ihrer Fläche.',
      sub: 'Ob Innenhof, Dach, Betriebsgelände oder Straßenzug — wir melden uns mit einer ersten Einschätzung.',
      name: 'Name', namePh: 'Ihr Name',
      email: 'E-Mail', emailPh: 'name@firma.de',
      msg: 'Ihr Anliegen', msgPh: 'Kurz zur Fläche und zum Ziel …',
      send: 'Anfrage senden',
      address: 'Schillerstraße 15 · Eberswalde',
    },
    footer: {
      tagline: 'Die lebendige Infrastrukturebene der Städte von morgen. Data Science, Handwerk und Ökologie aus einer Hand.',
      colServices: 'Leistungen', colCompany: 'Unternehmen', colLegal: 'Rechtliches',
      opsLogin: 'LUMA-Ops Login',
      imprint: 'Impressum', privacy: 'Datenschutz', terms: 'AGB', cookies: 'Cookie-Einstellungen',
      rights: '© 2026 LUMA · Eberswalde',
    },
    cookie: {
      text: 'Wir verwenden nur essenzielle Cookies. Optionale Dienste (z. B. Statistik) aktivieren wir erst mit Ihrer Einwilligung.',
      accept: 'Akzeptieren', decline: 'Nur essenzielle',
    },
  },

  en: {
    meta: {
      title: 'LUMA — Making cities measurably green',
      description:
        'LUMA combines data science, craftsmanship and ecology to turn urban spaces into climate-resilient, species-rich oases. Consulting, planning, installation, care — from a single source.',
    },
    nav: { services: 'Services', projects: 'Projects', journal: 'Journal', about: 'About', contact: 'Contact', ops: 'LUMA-Ops' },
    hero: {
      eyebrow: 'Urban ecology · since 2023 · Berlin',
      title: 'We make cities measurably green.',
      sub: 'LUMA combines data science, craftsmanship and ecology to turn urban spaces into climate-resilient, species-rich oases — biodiversity you can prove.',
      ctaPrimary: 'Request a project',
      ctaSecondary: 'View projects',
      scroll: 'scroll',
      video: '▶ drone video coming here',
      stats: [
        { b: '2023', s: 'founded' },
        { b: '35+', s: 'projects' },
        { b: '5,000+', s: 'plants' },
        { b: '7', s: 'inst. partners' },
      ],
    },
    logos: { label: 'Trusted by the public sector, energy industry & real estate' },
    problem: {
      eyebrow: 'The challenge',
      quote: '“The asphalt holds the heat. The buildings hold the heat. The city has become its own oven.”',
      body: 'Heat islands, heavy rain and species loss hit cities ever harder. Living infrastructure works against it — measurably. We plan, build and monitor it.',
      cards: [
        { b: '−4–5 °C', p: 'cooler air beneath a dense urban micro-forest.' },
        { b: 'Sponge', p: 'microbiome-activated soil stores heavy rain in minutes instead of shedding it.' },
        { b: '100s species', p: 'habitat per site — wild bees, birds, soil life.' },
      ],
    },
    approach: {
      eyebrow: 'Our approach',
      title: 'Three disciplines, one company.',
      sub: 'We are deliberately neither a pure gardening firm nor a pure software company. The value emerges at the intersections.',
      trio: [
        { n: '01 — Data', h: 'Data Science', p: 'Drone remote sensing, NDVI analysis and the BIOME platform make impact provable.' },
        { n: '02 — Soul', h: 'Craftsmanship', p: 'Climbing arborists, gardeners, soil science — the field work carries the data.' },
        { n: '03 — Knowledge', h: 'Ecology', p: 'Native, multi-layered plantings and soil microbiome research create real habitat.' },
      ],
      manifesto: '“We are not a landscaping company. We are not a software company. We are the living infrastructure layer of the cities of tomorrow.”',
      manifestoSrc: 'LUMA · Vision & Mission',
    },
    services: {
      eyebrow: 'Services',
      title: 'Everything green — from one source.',
      sub: 'From the first analysis to years of care. One continuous process, one point of contact.',
      groups: { understand: 'Understand', build: 'Build', operate: 'Operate' },
      items: [
        { g: 'understand', h: 'Consulting & concept', p: 'Site analysis, feasibility, funding and ecological design.' },
        { g: 'understand', h: 'Drone remote sensing', p: 'Aerial imagery, NDVI & vegetation analysis as a planning basis.' },
        { g: 'build', h: 'Installation & planting', p: 'Tiny forests, multi-layered native plantings, habitat construction.' },
        { g: 'build', h: 'Green roofs & living walls', p: 'Biodiverse roof and façade greening with real ecological function.' },
        { g: 'build', h: 'Climate resilience', p: 'Sponge city, rainwater management, bioretention cells.' },
        { g: 'build', h: 'Tree care & assessment', p: 'Professional arboriculture, evaluation and traffic safety.' },
        { g: 'operate', h: 'Long-term care', p: 'Ecological stewardship through the decisive first years.' },
        { g: 'operate', h: 'BIOME monitoring', p: 'Sensors & data: health score, biodiversity, success proven.' },
        { g: 'operate', h: 'Habitat structures', p: 'Deadwood, sand walls, wild bees — purpose-built habitats.' },
      ],
    },
    solutions: {
      eyebrow: 'In practice',
      title: 'Habitats that work.',
      items: [
        { img: 'aerial', tg: 'Tiny Forest', h: 'Urban micro-forests', p: 'Dense, multi-layered native planting as a living air conditioner.' },
        { img: 'greenroof', tg: 'Green roof', h: 'Biodiverse roofs', p: 'Unused surfaces become habitat, insulation and water storage.' },
        { img: 'facade', tg: 'Living wall', h: 'Façade greening', p: 'Green walls cool, filter air and create vertical habitat.' },
        { img: 'macro', tg: 'Habitat', h: 'Wild bees & species', p: 'Targeted structures for pollinating insects and soil life.' },
        { img: 'arborist', tg: 'Tree care', h: 'Professional care', p: 'Preserving and securing the most valuable urban green — the trees.' },
        { img: 'planting', tg: 'Soil', h: 'Microbiome & planting', p: 'Healthy, living soil is the foundation of every project.' },
      ],
    },
    references: {
      eyebrow: 'References',
      title: 'Over 35 projects in Berlin.',
      sub: 'Delivered for the public sector, energy industry and real estate — three examples.',
      items: [
        { img: 'aerial', cl: 'JOPE AG · Real estate', h: 'Tiny forests in courtyards', p: 'Bleak, “clean” courtyards become species-rich retreats — a fixed part of the outdoor design concepts.', kpi: [ { b: '8', s: 'projects' }, { b: '5,000+', s: 'plants' } ] },
        { img: 'greenroof', cl: 'BEW · Energy & heat', h: 'Biodiversity on operating sites', p: 'Scientific assessment of the biodiversity potential of decentralized facilities — and implementation of fitting measures.', kpi: [ { b: '9', s: 'projects' }, { b: 'ongoing', s: 'partnership' } ] },
        { img: 'hero', cl: 'City of Berlin · Public', h: 'Green in public space', p: 'Project sites on behalf of the public sector — quality of stay and climate adaptation for everyone.', kpi: [ { b: '2', s: 'sites' }, { b: '+15', s: 'tree-care clients' } ] },
      ],
    },
    biome: {
      eyebrow: 'The BIOME platform',
      title: 'We measure what we create.',
      body1: 'Every project is documented and monitored: health score, biodiversity, soil moisture, heat-island effect. Evidence instead of claims — and an open data base for the whole industry.',
      body2: 'Tiered access: free for community & citizen science, professional for municipalities and owners.',
      cta: 'Open the platform (guest access)',
      dashTitle: 'BIOME · Project monitoring',
      tiles: [ { b: '35+', s: 'projects' }, { b: '4.8', s: 'avg health' }, { b: '100s', s: 'species' } ],
      rows: [
        { nm: 'Tiny Forest · Courtyard S3', pct: 92 },
        { nm: 'Green roof · BEW site', pct: 88 },
        { nm: 'Wild-bee meadow · Kreuzberg', pct: 95 },
        { nm: 'Façade · Prinzenallee', pct: 84 },
      ],
    },
    testimonials: {
      eyebrow: 'Voices',
      title: 'Others speak well of us.',
      items: [
        { q: '“Thanks to LUMA, the Tiny Forest has become a fixed part of our outdoor designs … Across our last 5 construction projects we planted over 5,000 plants — many times more than required. Thank you Lukas and Malte — more of this!”', av: 'JK', n: 'Johannes Klar', r: 'Board Member, JOPE AG' },
        { q: '“Together with LUMA we scientifically assessed the biodiversity potential of our facilities and implemented measures … a highly competent partner. We will continue the partnership.”', av: 'GR', n: 'Gissela Riccio', r: 'Biodiversity Manager, BEW Berliner Energie und Wärme AG' },
      ],
    },
    journal: {
      eyebrow: 'Journal',
      title: 'Knowledge from the field.',
      sub: 'Articles on urban climate, biodiversity and method — with sources, updated regularly.',
      note: '(preview)',
      items: [
        { img: 'macro', m: 'Biodiversity · 6 min', h: 'Why wild bees need more than flower strips', p: 'Habitat structures that truly create nesting and foraging space.' },
        { img: 'greenroof', m: 'Urban climate · 8 min', h: 'Green roofs as a building block of the sponge city', p: 'How roof greening buffers heavy rain and cools buildings.' },
        { img: 'arborist', m: 'Method · 5 min', h: 'The Miyawaki method in the urban realm', p: 'Dense, native planting for fast, stable growth.' },
      ],
    },
    ctaband: { title: 'Let’s make your urban space greener.', cta: 'Request a project' },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us about your site.',
      sub: 'Courtyard, roof, operating site or streetscape — we’ll get back to you with a first assessment.',
      name: 'Name', namePh: 'Your name',
      email: 'Email', emailPh: 'name@company.com',
      msg: 'Your request', msgPh: 'Briefly about the site and the goal …',
      send: 'Send request',
      address: 'Schillerstraße 15 · Eberswalde, Germany',
    },
    footer: {
      tagline: 'The living infrastructure layer of the cities of tomorrow. Data science, craftsmanship and ecology from a single source.',
      colServices: 'Services', colCompany: 'Company', colLegal: 'Legal',
      opsLogin: 'LUMA-Ops login',
      imprint: 'Imprint', privacy: 'Privacy', terms: 'Terms', cookies: 'Cookie settings',
      rights: '© 2026 LUMA · Eberswalde',
    },
    cookie: {
      text: 'We only use essential cookies. Optional services (e.g. statistics) are activated only with your consent.',
      accept: 'Accept', decline: 'Essential only',
    },
  },
} as const;

export function useT(lang: string) {
  return (ui as any)[lang] ?? ui.de;
}
