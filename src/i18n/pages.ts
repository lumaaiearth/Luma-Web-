// Routen-Slugs je Sprache (DE ohne Präfix, EN unter /en/)
export const routes = {
  services: { de: 'leistungen', en: 'services' },
  projects: { de: 'projekte', en: 'projects' },
  journal: { de: 'journal', en: 'journal' },
  about: { de: 'ueber-uns', en: 'about' },
  contact: { de: 'kontakt', en: 'contact' },
  imprint: { de: 'impressum', en: 'imprint' },
  privacy: { de: 'datenschutz', en: 'privacy' },
  terms: { de: 'agb', en: 'terms' },
} as const;

export type RouteKey = keyof typeof routes;

// Baut einen base-bewussten Pfad zu einer Unterseite
export function pageHref(base: string, lang: string, key: RouteKey) {
  const slug = lang === 'de' ? routes[key].de : routes[key].en;
  return lang === 'de' ? `${base}${slug}` : `${base}en/${slug}`;
}

export const pages = {
  de: {
    services: {
      eyebrow: 'Leistungen',
      title: 'Alles Grüne — aus einer Hand.',
      lead: 'Von der ersten Analyse bis zur Pflege über Jahre. Ein durchgängiger Prozess, ein Ansprechpartner — mit Data Science, Handwerk und Ökologie unter einem Dach.',
      groups: [
        {
          key: 'understand',
          title: 'Verstehen',
          intro: 'Bevor gepflanzt wird, verstehen wir den Ort. Standort, Boden, Klima und Ziel bestimmen jede Maßnahme.',
          items: [
            { h: 'Beratung & Konzept-Design', p: 'Standortanalyse, Machbarkeit, Fördermittel-Check und ein ökologisches Gestaltungskonzept, das zu Fläche und Nutzung passt.' },
            { h: 'Drohnen-Fernerkundung & NDVI', p: 'Luftbilder, Vegetationsindizes und Vermessung liefern eine belastbare Datengrundlage — vor, während und nach der Umsetzung.' },
            { h: 'Baumkontrolle & -bewertung', p: 'Fachgerechte Beurteilung von Vitalität, Stand- und Verkehrssicherheit als Basis für Pflege- und Erhaltungsentscheidungen.' },
          ],
        },
        {
          key: 'build',
          title: 'Umsetzen',
          intro: 'Handwerk trägt die Daten. Unsere Teams setzen um, was geplant wurde — sauber, termintreu, dauerhaft.',
          items: [
            { h: 'Installation & Pflanzung', p: 'Tiny Forests nach der Miyawaki-Methode, mehrschichtige heimische Pflanzungen und der Bau kompletter Habitate.' },
            { h: 'Gründächer & lebende Wände', p: 'Biodiverse Dach- und Fassadenbegrünung mit echter ökologischer Funktion — Kühlung, Wasserrückhalt, Lebensraum.' },
            { h: 'Klimaresilienz & Schwammstadt', p: 'Regenwassermanagement, Zwischenspeicher und Versickerungsmulden, die Starkregen aufnehmen statt ableiten.' },
            { h: 'Habitatstrukturen', p: 'Totholz, Sandwände und Nisthilfen — gezielt gebaute Lebensräume für Wildbienen, Vögel und Bodenorganismen.' },
            { h: 'Baumpflege', p: 'Fachgerechte Pflege, Kronensicherung und Erhaltung des wertvollsten Stadtgrüns.' },
          ],
        },
        {
          key: 'operate',
          title: 'Betreiben',
          intro: 'Der Erfolg entscheidet sich nach der Pflanzung. Wir begleiten Flächen über Jahre und belegen ihre Wirkung.',
          items: [
            { h: 'Langzeit-Pflege (Stewardship)', p: 'Ökologische Betreuung durch die entscheidenden ersten Jahre, bis sich die geplante Artenzusammensetzung etabliert hat.' },
            { h: 'BIOME-Monitoring', p: 'Sensorik und Daten — Health Score, Bodenfeuchte, Artenvielfalt, Hitzeinsel-Effekt — machen den Erfolg messbar.' },
          ],
        },
      ],
      ctaTitle: 'Passt eine dieser Leistungen zu Ihrer Fläche?',
      ctaBtn: 'Projekt anfragen',
    },
    projects: {
      eyebrow: 'Projekte',
      title: 'Über 35 Projekte in Berlin.',
      lead: 'Realisiert für öffentliche Hand, Energiewirtschaft und Immobilien — von Tiny Forests in Innenhöfen bis zu Biodiversitätsmaßnahmen auf Betriebsflächen.',
      clientsLabel: 'Auftraggeber',
      clients: [
        { n: 'BEW Berliner Energie und Wärme', c: '9 Projekte' },
        { n: 'JOPE AG', c: '8 Projekte' },
        { n: 'WISAG', c: '3 Projekte' },
        { n: 'Stadt Berlin', c: '2 Projektflächen' },
        { n: 'Stromnetz Berlin', c: '1 Projekt' },
        { n: 'Baumpflege u. a.', c: '15+ Auftraggeber' },
      ],
      featuredLabel: 'Ausgewählte Projekte',
      mapNote: 'Eine interaktive Karte aller Standorte folgt — Grundlage sind unsere georeferenzierten Projektdaten.',
      ctaTitle: 'Ihr Standort könnte der nächste sein.',
      ctaBtn: 'Projekt anfragen',
    },
    journal: {
      eyebrow: 'Journal',
      title: 'Wissen aus der Praxis.',
      lead: 'Fachartikel zu Stadtklima, Biodiversität und Methode — fundiert, mit Quellen, regelmäßig neu. Damit positionieren wir uns dort, wo wir arbeiten: an der Schnittstelle von Ökologie, Handwerk und Daten.',
      soon: 'Die ersten Artikel erscheinen in Kürze. Ein Vorgeschmack:',
    },
    about: {
      eyebrow: 'Über uns',
      title: 'Klein, senior, eigenfinanziert.',
      lead: 'LUMA ist die lebendige Infrastrukturebene der Städte von morgen — mit Vertrauen als Fundament, Daten als Sprache, Schönheit als Ziel und Handwerk als Seele.',
      missionLabel: 'Mission',
      mission: 'Mit Leidenschaft für handwerkliche Qualität und modularen, innovativen und intelligenten Lösungen verwandeln wir urbane Räume in klimaresiliente, artenreiche Oasen, die Menschen zum Verweilen einladen. Wir verbinden Data Science mit Handwerk und Ökologie, um All-in-One-Servicelösungen anzubieten.',
      visionLabel: 'Vision',
      vision: 'Unser großes Ziel ist es, die Lebensgrundlage, Resilienz und das Wohlbefinden möglichst vieler Lebewesen und Menschen zu verbessern und zu erhalten — um ein harmonisches Zusammenleben langfristig zu fördern.',
      storyLabel: 'Wie wir angefangen haben',
      story: [
        'Malte Larsen und Lukas Steingässer gründeten LUMA 2023, nach Jahren gemeinsamer Arbeit bei MIYA e.V. und an europäischen Aufforstungsprojekten. Beide haben einen M.Sc. in International Forest Ecosystem Management (HNEE Eberswalde).',
        'Ihre Überzeugung: Der beste Weg, die Biodiversitäts- und Klimakrise in Städten zu bewältigen, ist, ökologisches Handwerk, Bodenkunde und Software in einem Unternehmen zu vereinen — bewusst eigenfinanziert, ohne externe Investoren, mit voller Freiheit über Qualität und Ausrichtung.',
        'Das Team ist klein, erfahren und direkt. Wir leben von kritischem Feedback, nicht von Konsens — das beste Argument gewinnt.',
      ],
      teamLabel: 'Das Team',
      team: [
        { n: 'Malte Larsen', r: 'Co-Founder', p: 'Bodenmikrobiom- & Pilz-Kompost-Forschung, Produktentwicklung, Drohnen-Fernerkundung/NDVI, Partnerschaften und Außendarstellung. M.Sc. Forest Ecosystem Management (HNEE).' },
        { n: 'Lukas Steingässer', r: 'Co-Founder', p: 'Operations & Prozessdesign, Leitung komplexer Multi-Stakeholder-Projekte, kommunale und institutionelle Partnerschaften. M.Sc. Forest Ecosystem Management (HNEE).' },
        { n: 'Robert Boden', r: 'Projektleiter & Umweltingenieur', p: 'Regenwassermanagement & Schwammstadt-Infrastruktur, sensorbasiertes Monitoring, großflächige Installationen mit mehreren Gewerken.' },
        { n: 'Johanna Juncker', r: 'Leitung Ökologische Pflege', p: 'Langfristige Projektbetreuung und Etablierungsphase; erkennt über 400 Arten mitteleuropäischer Wildblumen.' },
        { n: 'Anselm', r: 'Ökologische Pflege & Standortbetrieb', p: 'Handwerk, Maschinenbedienung und Reparatur — hält den Betrieb vor Ort am Laufen und bringt fundierte Artenkenntnis ins Feld.' },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Erzählen Sie uns von Ihrer Fläche.',
      lead: 'Ob Innenhof, Dach, Betriebsgelände oder Straßenzug — wir melden uns mit einer ersten Einschätzung. Meist innerhalb von zwei Werktagen.',
    },
  },

  en: {
    services: {
      eyebrow: 'Services',
      title: 'Everything green — from one source.',
      lead: 'From the first analysis to years of care. One continuous process, one point of contact — with data science, craftsmanship and ecology under one roof.',
      groups: [
        {
          key: 'understand',
          title: 'Understand',
          intro: 'Before we plant, we understand the place. Site, soil, climate and goal shape every measure.',
          items: [
            { h: 'Consulting & concept design', p: 'Site analysis, feasibility, funding check and an ecological design concept that fits the site and its use.' },
            { h: 'Drone remote sensing & NDVI', p: 'Aerial imagery, vegetation indices and surveying provide a solid data base — before, during and after implementation.' },
            { h: 'Tree inspection & assessment', p: 'Professional evaluation of vitality, stability and traffic safety as a basis for care and preservation decisions.' },
          ],
        },
        {
          key: 'build',
          title: 'Build',
          intro: 'Craftsmanship carries the data. Our teams deliver what was planned — cleanly, on time, to last.',
          items: [
            { h: 'Installation & planting', p: 'Tiny forests using the Miyawaki method, multi-layered native plantings and the construction of complete habitats.' },
            { h: 'Green roofs & living walls', p: 'Biodiverse roof and façade greening with real ecological function — cooling, water retention, habitat.' },
            { h: 'Climate resilience & sponge city', p: 'Rainwater management, storage and bioretention cells that absorb heavy rain instead of shedding it.' },
            { h: 'Habitat structures', p: 'Deadwood, sand walls and nesting aids — purpose-built habitats for wild bees, birds and soil organisms.' },
            { h: 'Tree care', p: 'Professional care, crown securing and preservation of the most valuable urban green.' },
          ],
        },
        {
          key: 'operate',
          title: 'Operate',
          intro: 'Success is decided after planting. We accompany sites for years and prove their impact.',
          items: [
            { h: 'Long-term stewardship', p: 'Ecological care through the decisive first years, until the intended species composition establishes.' },
            { h: 'BIOME monitoring', p: 'Sensors and data — health score, soil moisture, biodiversity, heat-island effect — make success measurable.' },
          ],
        },
      ],
      ctaTitle: 'Does one of these services fit your site?',
      ctaBtn: 'Request a project',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Over 35 projects in Berlin.',
      lead: 'Delivered for the public sector, energy industry and real estate — from tiny forests in courtyards to biodiversity measures on operating sites.',
      clientsLabel: 'Clients',
      clients: [
        { n: 'BEW Berliner Energie und Wärme', c: '9 projects' },
        { n: 'JOPE AG', c: '8 projects' },
        { n: 'WISAG', c: '3 projects' },
        { n: 'City of Berlin', c: '2 sites' },
        { n: 'Stromnetz Berlin', c: '1 project' },
        { n: 'Tree care & more', c: '15+ clients' },
      ],
      featuredLabel: 'Selected projects',
      mapNote: 'An interactive map of all sites is coming — based on our geo-referenced project data.',
      ctaTitle: 'Your site could be next.',
      ctaBtn: 'Request a project',
    },
    journal: {
      eyebrow: 'Journal',
      title: 'Knowledge from the field.',
      lead: 'Articles on urban climate, biodiversity and method — well-founded, with sources, updated regularly. This positions us where we work: at the intersection of ecology, craftsmanship and data.',
      soon: 'The first articles are coming soon. A preview:',
    },
    about: {
      eyebrow: 'About',
      title: 'Small, senior, self-funded.',
      lead: 'LUMA is the living infrastructure layer of the cities of tomorrow — with trust as the foundation, data as the language, beauty as the goal and craftsmanship as the soul.',
      missionLabel: 'Mission',
      mission: 'With a passion for craftsmanship and modular, innovative, intelligent solutions, we transform urban spaces into climate-resilient, species-rich oases that invite people to linger. We combine data science with craftsmanship and ecology to deliver all-in-one service solutions.',
      visionLabel: 'Vision',
      vision: 'Our overarching goal is to improve and preserve the livelihoods, resilience and well-being of as many living beings and people as possible — to foster harmonious coexistence in the long term.',
      storyLabel: 'How we started',
      story: [
        'Malte Larsen and Lukas Steingässer founded LUMA in 2023, after years of working together at MIYA e.V. and on European reforestation projects. Both hold an M.Sc. in International Forest Ecosystem Management (HNEE Eberswalde).',
        'Their conviction: the best way to solve the biodiversity and climate crisis in cities is to combine ecological craftsmanship, soil science and software in one company — deliberately self-funded, without outside investors, with full freedom over quality and direction.',
        'The team is small, senior and direct. We run on critical feedback, not consensus — the best argument wins.',
      ],
      teamLabel: 'The team',
      team: [
        { n: 'Malte Larsen', r: 'Co-Founder', p: 'Soil-microbiome & fungal-compost research, product development, drone remote sensing/NDVI, partnerships and public representation. M.Sc. Forest Ecosystem Management (HNEE).' },
        { n: 'Lukas Steingässer', r: 'Co-Founder', p: 'Operations & process design, leadership of complex multi-stakeholder projects, municipal and institutional partnerships. M.Sc. Forest Ecosystem Management (HNEE).' },
        { n: 'Robert Boden', r: 'Project Manager & Environmental Engineer', p: 'Rainwater management & sponge-city infrastructure, sensor-based monitoring, large-scale installations across multiple trades.' },
        { n: 'Johanna Juncker', r: 'Head of Ecological Maintenance', p: 'Long-term project care and the establishment phase; identifies over 400 species of Central European wildflowers.' },
        { n: 'Anselm', r: 'Ecological Maintenance & Site Operations', p: 'Craftsmanship, machine operation and repair — keeps the site running and brings deep species knowledge to the field.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us about your site.',
      lead: 'Courtyard, roof, operating site or streetscape — we’ll get back to you with a first assessment. Usually within two business days.',
    },
  },
} as const;

export function useP(lang: string) {
  return (pages as any)[lang] ?? pages.de;
}
