const fs = require('fs');

const file = 'lib/i18n.js';
let content = fs.readFileSync(file, 'utf8');

const resumeData = {
  en: {
    contact: "Contact",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    title: "Full Stack Developer",
    location: "City, State",
    summary: "A highly adaptable Full Stack Developer and AI Engineer with a robust background in digital media and brand strategy. Proven track record in designing scalable web architectures, integrating complex backend systems, and crafting responsive, high-performance user interfaces. Adept at leveraging both technical acumen and creative marketing experience to drive user engagement and deliver impactful digital products.",
    download: "Download PDF",
    myResumeLabel: "My ",
    myResumeHighlight: "Resume",
    profSummary: "Professional Summary",
    jobs: [
      {
        date: "2016 - Present",
        company: "Orchard Beach Community Group",
        title: "Software Developer",
        desc1: "Spearheaded the end-to-end development of a comprehensive community portal. Engineered a robust, scalable backend architecture using MongoDB to handle complex data relationships and real-time synchronisation.",
        desc2: "Architected a secure automated billing system and an intuitive administrative dashboard, driving significant operational efficiency. Developed a custom CRM solution tailored to unique member management workflows, ultimately improving community engagement and data organization."
      },
      {
        date: "2019 - 2021",
        company: "The Evil Burrito",
        title: "Javascript Developer",
        desc1: "Conceptualized, designed, and deployed a highly performant and visually striking responsive website that elevated the brand's digital presence and user experience.",
        desc2: "Devised and executed data-driven marketing strategies to increase customer acquisition. Produced compelling digital and physical marketing collateral, and led innovative guerilla marketing campaigns that successfully amplified brand awareness in key target demographics."
      },
      {
        date: "2008 - 2012",
        company: "Pirate's Booty",
        title: "Area Brand Manager",
        desc1: "Directed regional brand strategy and experiential marketing initiatives. Cultivated B2B relationships and negotiated high-visibility retail placements. Designed and implemented custom in-store displays to maximize product visibility and drive point-of-sale conversions, significantly expanding market share within the territory."
      },
      {
        date: "2008 - 2012",
        company: "Encore Nationwide",
        title: "Brand Ambassador, Team Lead",
        desc1: "Led cross-functional promotional teams in executing high-impact experiential marketing events. Managed on-site operations, trained personnel on brand messaging, and ensured seamless consumer interactions to elevate brand affinity and drive targeted engagement metrics."
      },
      {
        date: "2008 - 2012",
        company: "Level 1 Promotion",
        title: "Brand Ambassador",
        desc1: "Acted as a dynamic frontline representative for diverse client portfolios. Executed grassroots marketing campaigns, facilitated direct consumer engagement, and gathered actionable field data to refine future marketing strategies and optimize event ROI."
      }
    ],
    edu: [
      {
        date: "2026",
        school: "Google AI Professional Certificate",
        degree: "Certified Professional",
        desc: "Demonstrated proficiency in artificial intelligence concepts, prompt engineering, and modern AI development workflows to solve complex technical problems."
      },
      {
        date: "2011",
        school: "SAE/Ex'pression College for Digital Arts",
        degree: "Bachelor of Applied Science",
        desc: "Specialized in digital media, interactive design, and multimedia production, establishing a rigorous foundation in creative technology and digital experiences."
      },
      {
        date: "2011",
        school: "Apple Certified Pro / Logic Pro",
        degree: "Apple Certified Master Pro",
        desc: "Recognized expertise in professional audio engineering, sound design, and advanced digital audio workstation processing."
      }
    ]
  },
  de: {
    contact: "Kontakt",
    skills: "Fähigkeiten",
    experience: "Erfahrung",
    education: "Bildung",
    title: "Full Stack Entwickler",
    location: "Stadt, Bundesland",
    summary: "Ein äußerst anpassungsfähiger Full-Stack-Entwickler und KI-Ingenieur mit fundiertem Hintergrund in digitalen Medien und Markenstrategie. Nachgewiesene Erfolge bei der Entwicklung skalierbarer Web-Architekturen, der Integration komplexer Backend-Systeme und der Gestaltung reaktionsschneller, hochleistungsfähiger Benutzeroberflächen. Erfahren darin, sowohl technisches Verständnis als auch kreative Marketingerfahrung zu nutzen, um die Nutzerbindung zu fördern und wirkungsvolle digitale Produkte zu liefern.",
    download: "PDF Herunterladen",
    myResumeLabel: "Mein ",
    myResumeHighlight: "Lebenslauf",
    profSummary: "Zusammenfassung",
    jobs: [
      {
        date: "2016 - Heute",
        company: "Orchard Beach Community Group",
        title: "Softwareentwickler",
        desc1: "Leitete die End-to-End-Entwicklung eines umfassenden Community-Portals. Entwickelte eine robuste, skalierbare Backend-Architektur mit MongoDB, um komplexe Datenbeziehungen und Echtzeitsynchronisation zu handhaben.",
        desc2: "Entwarf ein sicheres, automatisiertes Abrechnungssystem und ein intuitives administratives Dashboard, was die betriebliche Effizienz erheblich steigerte. Entwickelte eine maßgeschneiderte CRM-Lösung, die auf einzigartige Workflows im Mitgliedermanagement zugeschnitten ist und letztendlich das Community-Engagement und die Datenorganisation verbesserte."
      },
      {
        date: "2019 - 2021",
        company: "The Evil Burrito",
        title: "Javascript Entwickler",
        desc1: "Konzipierte, entwarf und implementierte eine hochperformante und visuell ansprechende responsive Website, die die digitale Präsenz und das Nutzererlebnis der Marke aufwertete.",
        desc2: "Entwarf und führte datengesteuerte Marketingstrategien zur Steigerung der Kundenakquise aus. Produzierte überzeugendes digitales und physisches Marketingmaterial und leitete innovative Guerilla-Marketing-Kampagnen, die die Markenbekanntheit in wichtigen Zielgruppen erfolgreich steigerten."
      },
      {
        date: "2008 - 2012",
        company: "Pirate's Booty",
        title: "Area Brand Manager",
        desc1: "Leitete regionale Markenstrategie und erlebnisorientierte Marketinginitiativen. Pflegte B2B-Beziehungen und verhandelte gut sichtbare Einzelhandelsplatzierungen. Entwarf und implementierte maßgeschneiderte In-Store-Displays, um die Produktsichtbarkeit zu maximieren und Point-of-Sale-Konversionen voranzutreiben, was den Marktanteil in der Region deutlich ausbaute."
      },
      {
        date: "2008 - 2012",
        company: "Encore Nationwide",
        title: "Brand Ambassador, Teamleiter",
        desc1: "Leitete funktionsübergreifende Promotion-Teams bei der Durchführung wirkungsvoller erlebnisorientierter Marketing-Events. Verwaltete den Vor-Ort-Betrieb, schulte das Personal in Markenbotschaften und sorgte für nahtlose Verbraucherinteraktionen, um die Markenaffinität zu steigern und gezielte Engagement-Metriken zu fördern."
      },
      {
        date: "2008 - 2012",
        company: "Level 1 Promotion",
        title: "Brand Ambassador",
        desc1: "Agierte als dynamischer Repräsentant an vorderster Front für vielfältige Kundenportfolios. Führte Grassroots-Marketing-Kampagnen durch, erleichterte die direkte Einbindung von Verbrauchern und sammelte verwertbare Felddaten, um zukünftige Marketingstrategien zu verfeinern und den Event-ROI zu optimieren."
      }
    ],
    edu: [
      {
        date: "2026",
        school: "Google AI Professional Certificate",
        degree: "Zertifizierter Experte",
        desc: "Nachgewiesene Fachkenntnisse in Konzepten der künstlichen Intelligenz, Prompt-Engineering und modernen KI-Entwicklungsabläufen zur Lösung komplexer technischer Probleme."
      },
      {
        date: "2011",
        school: "SAE/Ex'pression College for Digital Arts",
        degree: "Bachelor of Applied Science",
        desc: "Spezialisiert auf digitale Medien, interaktives Design und Multimedia-Produktion. Schaffung eines rigorosen Fundaments in kreativer Technologie und digitalen Erlebnissen."
      },
      {
        date: "2011",
        school: "Apple Certified Pro / Logic Pro",
        degree: "Apple Certified Master Pro",
        desc: "Anerkannte Expertise in professioneller Audiotechnik, Sounddesign und fortgeschrittener Verarbeitung in digitalen Audio-Workstations."
      }
    ]
  },
  es: {
    contact: "Contacto",
    skills: "Habilidades",
    experience: "Experiencia",
    education: "Educación",
    title: "Desarrollador Full Stack",
    location: "Ciudad, Estado",
    summary: "Desarrollador Full Stack e Ingeniero de IA altamente adaptable con una sólida formación en medios digitales y estrategia de marca. Historial probado en el diseño de arquitecturas web escalables, la integración de sistemas backend complejos y la creación de interfaces de usuario responsivas y de alto rendimiento. Experto en aprovechar tanto la perspicacia técnica como la experiencia en marketing creativo para impulsar la participación del usuario y ofrecer productos digitales impactantes.",
    download: "Descargar PDF",
    myResumeLabel: "Mi ",
    myResumeHighlight: "Currículum",
    profSummary: "Resumen Profesional",
    jobs: [
      {
        date: "2016 - Presente",
        company: "Orchard Beach Community Group",
        title: "Desarrollador de Software",
        desc1: "Lideró el desarrollo integral de un portal comunitario exhaustivo. Diseñó una arquitectura backend robusta y escalable utilizando MongoDB para manejar relaciones de datos complejas y sincronización en tiempo real.",
        desc2: "Ideó un sistema de facturación automatizado seguro y un panel administrativo intuitivo, impulsando una eficiencia operativa significativa. Desarrolló una solución CRM personalizada adaptada a los flujos de trabajo únicos de gestión de miembros, mejorando en última instancia la participación de la comunidad y la organización de datos."
      },
      {
        date: "2019 - 2021",
        company: "The Evil Burrito",
        title: "Desarrollador Javascript",
        desc1: "Conceptualizó, diseñó e implementó una web responsiva de alto rendimiento y visualmente impactante que elevó la presencia digital de la marca y la experiencia del usuario.",
        desc2: "Ideó y ejecutó estrategias de marketing basadas en datos para aumentar la adquisición de clientes. Produjo material de marketing digital y físico convincente, y lideró campañas innovadoras de marketing de guerrilla que amplificaron con éxito la conciencia de marca en grupos demográficos objetivo clave."
      },
      {
        date: "2008 - 2012",
        company: "Pirate's Booty",
        title: "Gerente de Marca de Área",
        desc1: "Dirigió la estrategia de marca regional y las iniciativas de marketing experiencial. Cultivó relaciones B2B y negoció ubicaciones minoristas de alta visibilidad. Diseñó e implementó exhibidores personalizados en las tiendas para maximizar la visibilidad del producto e impulsar las conversiones en el punto de venta, expandiendo significativamente la participación de mercado dentro del territorio."
      },
      {
        date: "2008 - 2012",
        company: "Encore Nationwide",
        title: "Embajador de Marca, Líder de Equipo",
        desc1: "Lideró equipos promocionales multifuncionales en la ejecución de eventos de marketing experiencial de alto impacto. Gestionó las operaciones en el sitio, capacitó al personal sobre los mensajes de la marca y aseguró interacciones fluidas con los consumidores para elevar la afinidad de la marca e impulsar métricas de participación específicas."
      },
      {
        date: "2008 - 2012",
        company: "Level 1 Promotion",
        title: "Embajador de Marca",
        desc1: "Actuó como representante dinámico de primera línea para diversas carteras de clientes. Ejecutó campañas de marketing de base, facilitó el compromiso directo del consumidor y recopiló datos de campo procesables para refinar futuras estrategias de marketing y optimizar el ROI de los eventos."
      }
    ],
    edu: [
      {
        date: "2026",
        school: "Google AI Professional Certificate",
        degree: "Profesional Certificado",
        desc: "Demostró competencia en conceptos de inteligencia artificial, ingeniería rápida (prompt engineering) y flujos de trabajo modernos de desarrollo de IA para resolver problemas técnicos complejos."
      },
      {
        date: "2011",
        school: "SAE/Ex'pression College for Digital Arts",
        degree: "Licenciatura en Ciencias Aplicadas",
        desc: "Especializado en medios digitales, diseño interactivo y producción multimedia, estableciendo una base rigurosa en tecnología creativa y experiencias digitales."
      },
      {
        date: "2011",
        school: "Apple Certified Pro / Logic Pro",
        degree: "Apple Certified Master Pro",
        desc: "Experiencia reconocida en ingeniería de audio profesional, diseño de sonido y procesamiento avanzado en estaciones de trabajo de audio digital."
      }
    ]
  },
  fr: {
    contact: "Contact",
    skills: "Compétences",
    experience: "Expérience",
    education: "Éducation",
    title: "Développeur Full Stack",
    location: "Ville, État",
    summary: "Développeur Full Stack et Ingénieur IA très adaptable avec une solide formation dans les médias numériques et la stratégie de marque. Expérience confirmée dans la conception d'architectures web évolutives, l'intégration de systèmes backend complexes et la création d'interfaces utilisateur réactives et très performantes. Expert dans l'exploitation de la perspicacité technique et de l'expérience en marketing créatif pour stimuler l'engagement des utilisateurs et proposer des produits numériques percutants.",
    download: "Télécharger le PDF",
    myResumeLabel: "Mon ",
    myResumeHighlight: "CV",
    profSummary: "Résumé Professionnel",
    jobs: [
      {
        date: "2016 - Présent",
        company: "Orchard Beach Community Group",
        title: "Développeur Logiciel",
        desc1: "A dirigé le développement de bout en bout d'un portail communautaire complet. A conçu une architecture backend robuste et évolutive utilisant MongoDB pour gérer des relations de données complexes et une synchronisation en temps réel.",
        desc2: "A conçu un système de facturation automatisé sécurisé et un tableau de bord administratif intuitif, favorisant une efficacité opérationnelle significative. A développé une solution CRM personnalisée adaptée aux flux de travail uniques de gestion des membres, améliorant en fin de compte l'engagement de la communauté et l'organisation des données."
      },
      {
        date: "2019 - 2021",
        company: "The Evil Burrito",
        title: "Développeur Javascript",
        desc1: "A conceptualisé, conçu et déployé un site web réactif hautement performant et visuellement frappant qui a élevé la présence numérique de la marque et l'expérience utilisateur.",
        desc2: "A conçu et exécuté des stratégies de marketing basées sur les données pour accroître l'acquisition de clients. A produit des supports marketing numériques et physiques convaincants, et a dirigé des campagnes innovantes de guérilla marketing qui ont amplifié avec succès la notoriété de la marque dans des groupes démographiques cibles clés."
      },
      {
        date: "2008 - 2012",
        company: "Pirate's Booty",
        title: "Responsable de Marque de Secteur",
        desc1: "A dirigé la stratégie de marque régionale et les initiatives de marketing expérientiel. A cultivé les relations B2B et négocié des placements de vente au détail à haute visibilité. A conçu et mis en œuvre des présentoirs en magasin personnalisés pour maximiser la visibilité des produits et stimuler les conversions sur le point de vente, élargissant considérablement la part de marché sur le territoire."
      },
      {
        date: "2008 - 2012",
        company: "Encore Nationwide",
        title: "Ambassadeur de Marque, Chef d'Équipe",
        desc1: "A dirigé des équipes promotionnelles interfonctionnelles dans l'exécution d'événements de marketing expérientiel à fort impact. A géré les opérations sur site, formé le personnel aux messages de la marque et assuré des interactions fluides avec les consommateurs pour élever l'affinité avec la marque et stimuler les mesures d'engagement ciblées."
      },
      {
        date: "2008 - 2012",
        company: "Level 1 Promotion",
        title: "Ambassadeur de Marque",
        desc1: "A agi en tant que représentant dynamique de première ligne pour divers portefeuilles de clients. A exécuté des campagnes de marketing de base, facilité l'engagement direct des consommateurs et recueilli des données de terrain exploitables pour affiner les futures stratégies de marketing et optimiser le retour sur investissement des événements."
      }
    ],
    edu: [
      {
        date: "2026",
        school: "Google AI Professional Certificate",
        degree: "Professionnel Certifié",
        desc: "A démontré sa compétence dans les concepts d'intelligence artificielle, l'ingénierie des prompts et les flux de travail modernes de développement de l'IA pour résoudre des problèmes techniques complexes."
      },
      {
        date: "2011",
        school: "SAE/Ex'pression College for Digital Arts",
        degree: "Licence en Sciences Appliquées",
        desc: "Spécialisé dans les médias numériques, le design interactif et la production multimédia, établissant une base rigoureuse dans la technologie créative et les expériences numériques."
      },
      {
        date: "2011",
        school: "Apple Certified Pro / Logic Pro",
        degree: "Apple Certified Master Pro",
        desc: "Expertise reconnue dans l'ingénierie audio professionnelle, le design sonore et le traitement avancé sur les stations de travail audio numériques."
      }
    ]
  },
  nl: {
    contact: "Contact",
    skills: "Vaardigheden",
    experience: "Ervaring",
    education: "Opleiding",
    title: "Full Stack Ontwikkelaar",
    location: "Stad, Provincie",
    summary: "Een zeer aanpasbare Full Stack Ontwikkelaar en AI-ingenieur met een sterke achtergrond in digitale media en merkstrategie. Bewezen staat van dienst in het ontwerpen van schaalbare webarchitecturen, het integreren van complexe backend-systemen en het maken van responsieve, hoogwaardige gebruikersinterfaces. Bedreven in het benutten van zowel technisch inzicht als creatieve marketingervaring om gebruikersbetrokkenheid te stimuleren en impactvolle digitale producten te leveren.",
    download: "PDF Downloaden",
    myResumeLabel: "Mijn ",
    myResumeHighlight: "CV",
    profSummary: "Professionele Samenvatting",
    jobs: [
      {
        date: "2016 - Heden",
        company: "Orchard Beach Community Group",
        title: "Softwareontwikkelaar",
        desc1: "Leidde de end-to-end ontwikkeling van een uitgebreid communityportaal. Ontwikkelde een robuuste, schaalbare backend-architectuur met MongoDB om complexe data-relaties en real-time synchronisatie af te handelen.",
        desc2: "Ontwierp een veilig geautomatiseerd factureringssysteem en een intuïtief administratief dashboard, wat de operationele efficiëntie aanzienlijk verhoogde. Ontwikkelde een op maat gemaakte CRM-oplossing, afgestemd op unieke workflows voor ledenbeheer, wat uiteindelijk de betrokkenheid van de community en de data-organisatie verbeterde."
      },
      {
        date: "2019 - 2021",
        company: "The Evil Burrito",
        title: "Javascript Ontwikkelaar",
        desc1: "Conceptualiseerde, ontwierp en implementeerde een hoogwaardige en visueel opvallende responsieve website die de digitale aanwezigheid van het merk en de gebruikerservaring naar een hoger niveau tilde.",
        desc2: "Bedacht en voerde datagestuurde marketingstrategieën uit om de klantenwerving te vergroten. Produceerde overtuigend digitaal en fysiek marketingmateriaal en leidde innovatieve guerrillamarketingcampagnes die de naamsbekendheid bij belangrijke doelgroepen met succes vergrootten."
      },
      {
        date: "2008 - 2012",
        company: "Pirate's Booty",
        title: "Area Brand Manager",
        desc1: "Stuurde regionale merkstrategie en belevingsgerichte marketinginitiatieven aan. Onderhield B2B-relaties en onderhandelde over goed zichtbare winkelplaatsingen. Ontwierp en implementeerde aangepaste in-store displays om de zichtbaarheid van producten te maximaliseren en conversies op het verkooppunt te stimuleren, waardoor het marktaandeel in de regio aanzienlijk werd vergroot."
      },
      {
        date: "2008 - 2012",
        company: "Encore Nationwide",
        title: "Brand Ambassador, Teamleider",
        desc1: "Leidde cross-functionele promotieteams bij het uitvoeren van impactvolle belevingsgerichte marketingevenementen. Beheerde de activiteiten ter plaatse, trainde personeel in merkboodschappen en zorgde voor naadloze interacties met consumenten om de merkaffiniteit te vergroten en gerichte engagement-statistieken te stimuleren."
      },
      {
        date: "2008 - 2012",
        company: "Level 1 Promotion",
        title: "Brand Ambassador",
        desc1: "Fungeerde als een dynamische frontlijnvertegenwoordiger voor diverse klantportfolio's. Voerde grassroots marketingcampagnes uit, faciliteerde directe betrokkenheid van consumenten en verzamelde bruikbare velddata om toekomstige marketingstrategieën te verfijnen en de ROI van evenementen te optimaliseren."
      }
    ],
    edu: [
      {
        date: "2026",
        school: "Google AI Professional Certificate",
        degree: "Gecertificeerd Professional",
        desc: "Kennis gedemonstreerd van kunstmatige intelligentie-concepten, prompt engineering en moderne AI-ontwikkelingsworkflows om complexe technische problemen op te lossen."
      },
      {
        date: "2011",
        school: "SAE/Ex'pression College for Digital Arts",
        degree: "Bachelor of Applied Science",
        desc: "Gespecialiseerd in digitale media, interactief ontwerp en multimediaproductie, met een solide basis in creatieve technologie en digitale ervaringen."
      },
      {
        date: "2011",
        school: "Apple Certified Pro / Logic Pro",
        degree: "Apple Certified Master Pro",
        desc: "Erkende expertise in professionele audiotechniek, sound design en geavanceerde verwerking op digitale audiowerkstations."
      }
    ]
  }
};

const regexps = [
  { re: /(footer:\s*['"]Built with Next\.js & GSAP['"])(,*)/, lang: 'en' },
  { re: /(footer:\s*['"]Gebaut mit Next\.js & GSAP['"])(,*)/, lang: 'de' },
  { re: /("footer":\s*"Construido con Next\.js y GSAP")([^]*?)/, lang: 'es' },
  { re: /("footer":\s*"Créé avec Next\.js & GSAP")([^]*?)/, lang: 'fr' },
  { re: /("footer":\s*"Gebouwd met Next\.js & GSAP")([^]*?)/, lang: 'nl' },
];

for (const { re, lang } of regexps) {
  content = content.replace(re, (match, p1) => {
    return p1 + ',\n    resume: ' + JSON.stringify(resumeData[lang], null, 4).replace(/\n/g, '\n    ');
  });
}

fs.writeFileSync(file, content, 'utf8');
console.log('Done injecting resume into i18n.js');
