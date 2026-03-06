
import { Project, ProjectType, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'museo-ar',
    title: {
      it: 'Guida in AR per museo - Applicazione web ',
      en: 'Museum AR Guide - Web App'
    },
    subtitle: {
      it: 'Unity Developer | Netengine srl',
      en: 'Unity Developer | Netengine srl'
    },
    shortDescription: {
      it: 'Analisi e sviluppo di una guida interattiva in AR accessibile da sito web per il museo Bagatti Valsecchi di Milano. Gli utenti possono inquadrare gli elementi della stanza per visualizzare contenuti aumentati e fruire di un audioguida.',
      en: 'Analysis and development of an interactive AR guide accessible via web. Users can scan room elements to view augmented content.'
    },
    fullDescription: {
      it: 'Ho collaborato alla creazione di un audioguida in realtà aumentata accessibile da web per il Museo Bagatti Valsecchi di Milano. L’esperienza prevede che inquadrando dei marker (delle foto dei vari elementi di interesse presenti nel museo), compaia un interfaccia che permette la visione di fotografie antiche e la possibilità di ascoltare o leggere la guida relativa al punto di interesse inquadrato. \n\nRESPONSABILITÀ: Mi sono occupata dello sviluppo dell’interfaccia grafica, della gestione di MindAR per la realtà aumentata e delle interazioni dell’utente.',
      en: 'I collaborated on the creation of an augmented reality audio guide accessible via web for the Bagatti Valsecchi Museum in Milan. The experience involves scanning markers (photos of various elements of interest in the museum) to reveal an interface allowing the viewing of ancient photographs and the ability to listen to or read the guide related to the point of interest. Responsibilities: I was responsible for the development of the graphical interface and the management of MindAR for augmented reality.'
    },
    tags: ['Unity', 'C#', 'WebGL', 'MindAR'],
    date: {
      it: 'Aprile 2025 - Giugno 2025',
      en: 'April 2025 - June 2025'
    },
    sortDate: '2025-04-01',
    type: ProjectType.EXPANDABLE,
    category: ProjectCategory.IMMERSIVE
  },
  {
    id: 'food-devils',
    title: {
      it: 'Videogioco 3D: Food Devils',
      en: '3D vidogame. Food Devils'
    },
    subtitle: {
      it: 'Unity Developer | Studio Daimon',
      en: 'Unity Developer | Studio Daimon'
    },
    shortDescription: {
      it: 'Collaborazione nello svilupo di un videogioco 3D con Unity',
      en: ''
    },
    fullDescription: {
      it: 'IL GIOCO: Costruisci e gestisci un ristorante tutto tuo per attirare nuovi avventurieri e potenziare Diavoli e umani con del cibo mostruoso. unisce la profondità strategica dei classici RPG-tattici a elementi del genere roguelike. \n\nRESPONSABILITÀ: sviluppo schermate di UI, meccaniche di gioco e bug fixing \n\nCOSA HO IMPARATO: \n- importazione modelli Spline in Unity \n- Gestione della UI con Rect Transform \n- Gestione progetto complesso \n',
      en: ''
    },
    tags: ['Unity', 'C#', '3D'],
    date: {
      it: 'Gennaio 2026 - Attualmente',
      en: 'January 2026 - Now'
    },
    sortDate: '2026-01-01',
    type: ProjectType.EXPANDABLE,
    category: ProjectCategory.GAME
  },
  {
    id: 'tesi-ar',
    title: {
      it: 'Applicazione in AR per la valorizzazione di murales',
      en: 'AR app to interact with murales'
    },
    subtitle: {
      it: 'Unity developer | tesi utiversitaria',
      en: 'Unity developer | University thesis'
    },
    shortDescription: {
      it: 'Applicazione che permette di interagire con dei murales inquadrandoli con il proprio dispositivo. ',
      en: 'Augmented reality application for the enhancement of Murals.'
    },
    fullDescription: {
      it: "Ho progettato e realizzato l'applicazione con Unity e Vuforia. L'esperienza prevede l'interazione con dei Murales che si trovano nel paese di Sant'Angelo di Roccalvecce. \n\nOBIETTIVO: Permettere ai visitatori di scoprire più informazioni riguardo il dipinto e sulla storia che racconta in modo interattivo",
      en: 'I designed and developed an AR application using Unity and Vuforia. The experience features interactive engagement with the murals located in the village of Sant’Angelo di Roccalvecce. \nGOAL: To enable visitors to discover in-depth information about the paintings and the stories they describe, through an immersive and interactive interface.'
    },
    tags: ['Unity', 'C#', 'Vuforia', 'AR', 'Game Design'],
    link:"https://drive.google.com/file/d/1_dqF819JV5IGSrOSbAOpxKRDmAT5Ieh-/view",
    date: {
      it: '2022',
      en: '2022'
    },
    sortDate: '2022-01-01',
    type: ProjectType.EXPANDABLE,
    category: ProjectCategory.IMMERSIVE
  },
  {
    id: 'umbrella-plus',
    title: {
      it: 'Videogioco 2D: Umbrella +',
      en: '2D videogame: Umbrella +'
    },
    subtitle: {
      it: 'Unity Developer | Plumesoft Games',
      en: 'Unity Developer | Plumesoft Games'
    },
    shortDescription: {
      it: 'Applied game platform 2D per il progetto Erasmus+ KA2 "Edugaming vs. Radicalisation".',
      en: 'Applied game part of the Erasmus+ KA2 project "Edugaming vs. Radicalisation".'
    },
    fullDescription: {
      it: "Ho partecipato allo sviluppo di alcune meccaniche del gioco e alla realizzazione di alcune animazioni realizzate tramite Bone Editor di Unity.\n\n IL GIOCO: \nUn platform 2d in cui il giocatore va alla ricerca di parole positive, mentre evita una pioggia di parole negative ruotando il suo ombrello. \n\nCOSA HO IMPARATO: \n - Come viene gestito un progetto dall'inizio alla fine. \n- Lo strumento Ink per la gestione dei dialoghi. \n- Come realizzare animazioni in 2D con il Bone Editor. Come utilizzare lo Shader Graph di Unity per realizzare degli effetti visivi. \n- Come gestire e a animare testi con Text Mesh Pro. \n - Come utilizzare e modificare i Particle System. \n- L'utilizzo degli Scriptable Object. \n- Come creare un sistema di Spawn e riutilizzo di Prefab",
      en: 'I was involved in developing several core gameplay mechanics and handled the character animations using the Unity Bone Editor tool.'
    },
    tags: ['Unity','C#', 'Ink', 'Bone Editor'],
    images: ['umbrellaPlus.png'],
    date: {
      it: 'Sett 2022 - Dic 2022',
      en: 'Sep 2022 - Dec 2022'
    },
    sortDate: '2022-09-01',
    type: ProjectType.EXPANDABLE,
    link: 'https://www.plumesoft.games',
    category: ProjectCategory.GAME
  },
  {
    id: 'ggj-2025',
    title: {
      it: 'Global Game Jam 2026',
      en: 'Global Game Jam 2026'
    },
    subtitle: {
      it: 'Videogioco 2D: Mascaria',
      en: '2D videogame: Mascaria'
    },
    shortDescription: {
      it: 'Gioco di carte in 2D ispirato al gioco "Scopa". Un rouglike in cui si possono usare delle maschere per cambiare il seme o il valore delle carte in mano in modo da fare le prese migliori e sconfiggere la maschera ',
      en: '2D video game where the player guides a bubble through a maze avoiding obstacles using their breath.'
    },
    tags: ['Unity', 'C#', 'Game Design'],
    images: ['mascaria.png'],
    date: {
      it: 'Gennaio 2026',
      en: 'January 2026'
    },
    sortDate: '2026-01-01',
    type: ProjectType.FIXED,
    link: 'https://globalgamejam.org/games/2026/mascaria-8',
    category: ProjectCategory.GAME
  },
  {
    id: 'searing',
    title: {
      it: 'Videogioco 2D: SeaRing',
      en: '2D videogame: SeaRing'
    },
    subtitle: {
      it: 'Unity developer',
      en: 'Unity developer'
    },
    shortDescription: {
      it: 'Sviluppo meccaniche di gioco per gioco indie d\'azione/puzzle in 2D.',
      en: 'Development of game mechanics for an indie 2D action/puzzle game.'
    },
    tags: ['C#', 'Unity'],
    images: ['searing.jpg'],
    date: {
      it: '2024',
      en: '2024'
    },
    sortDate: '2024-02-01',
    type: ProjectType.FIXED,
    category: ProjectCategory.GAME
  },
  {
    id: 'Esperienza interattiva con C++ e OpenGL',
    title: {
      it: 'Esperienza interattiva con C++ e OpenGL',
      en: 'Interactive experience with C++ and OpenGL'
    },
    shortDescription: {
      it: "Applicazione realizzata in C++ e OpenGL. Lavoro di gruppo in cui abbiamo realizzato una stanza (usando una cube map) e la possibilità di muoversi all'interno fino al raggiungimento di un portale che ti trasporta in un modello 3d del sistema solare. Abbiamo creato la libreria matematica da zero e abbiamo creato e gestito la scena scrivendo i codici per il Vertex e il Fragment shader usando glsl",
      en: 'Development of game mechanics for an indie 2D action/puzzle game.'
    },
    tags: ['C++', 'OpenGL', 'GLSL'],
    sortDate: '2022-02-01',
    type: ProjectType.FIXED,
    category: ProjectCategory.OTHER
  },
  {
    id: 'snake',
    title: {
      it: 'Videogioco 2D: Snake Multiplayer',
      en: '2D Videogame: Snake Multiplayer'
    },
    shortDescription: {
      it: 'Videogioco Snake con modalità a 2 giocatori e classifica realizzato in Java.',
      en: 'Snake video game with 2-player mode and leaderboard.'
    },
    tags: ['Java'],
    images: ['snake2players.png'],
    type: ProjectType.COMPACT,
    sortDate: '2020-01-01',
    category: ProjectCategory.GAME
  },
  {
    id: 'python',
    title: {
      it: 'Convertitore di immagini in schemi per il punto croce',
      en: 'Image to cross-stitch pattern converter'
    },
    shortDescription: {
      it: 'Ideazione e sviluppo in Python di un app che convertire delle immagini in schemi per il punto croce e ti crea una lista di filati da comprare in base ai colori necessari.',
      en: 'Python program that converts images into cross-stitch patterns.'
    },
    tags: ['Python'],
    images: ['puntoCroce.png'],
    type: ProjectType.COMPACT,
    sortDate: '2020-01-01',
    category: ProjectCategory.OTHER
  },
  {
    id: 'robot',
    title: {
      it: 'Robot con sensori ad ultrasuoni',
      en: 'Obstacle that avoid obstacles'
    },
    shortDescription: {
      it: 'Ideazione e realizzazione con Arduino di un robot che si muove ed è in grado di identificare se ci sono ostacoli tramite sensori ad ultrasuoni e nel caso evitarli.',
      en: 'Robot that walks and avoids obstacles using ultrasonic sensors.'
    },
    tags: ['Arduino', 'C++'],
    images: ["robot.png"],
    type: ProjectType.COMPACT,
    sortDate: '2019-06-01',
    category: ProjectCategory.OTHER
  },
  {
    id: 'coding-girls',
    title: {
      it: 'Coding Girls: videogioco con Scratch',
      en: 'Coding Girls'
    },
    shortDescription: {
      it: "Animazione e gioco sulla raccolta differenziata realizzato con Scratch nell'ambito del progetto Coding Girls.",
      en: 'Animation and game about waste sorting created with Scratch as part of the Coding Girls project.'
    },
    tags: ['Scratch'],
    type: ProjectType.COMPACT,
    sortDate: '2018-01-01',
    category: ProjectCategory.GAME
  }
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/letizia-penn%C3%A9-10b69b261/',
  github: 'https://github.com/letylet',
  email: 'mailto:letizia.penne@gmail.com'
};
