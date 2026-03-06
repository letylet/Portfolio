
export const translations = {
  it: {
    home: {
      role: "Game Developer (Videogame/AR/VR) - Frontend Developer",
      description: "Sviluppatrice con esperienza in Unity ( Videogiochi, esperienze AR e VR) e frontend web. Sono appassionata di videogiochi e tecnologie immersive, credo nel loro potenziale nel risolvere problemi, trasmettere valori e insegnare. Il mio obiettivo è realizzare esperienze interattive che sorprendano, coinvolgano e ispirino.",
      cta: "Lista Progetti",
      immersiveBtn: "Esplorazione Interattiva",
      tooltips: {
        github: "Guarda il mio codice",
        linkedin: "Connettiamoci!",
        email: "Scrivimi una mail",
        projects: "Vedi lista completa dei progetti",
        immersive: "Un modo guidato e interattivo per conoscere i miei progetti e la mia visione"
      }
    },
    projects: {
      navHome: "Home",
      navPortfolio: "Portfolio",
      pageTitle: "I Miei Progetti",
      titleTooltip: "Cliccami per far brillare le idee",
      seeDetails: "Scopri di più",
      seeLess: "Vedi meno",
      detailsHeader: "Dettagli del progetto",
      visitWebsite: "Scopri di più",
      filterBy: "Filtra per tecnologia:",
      sortBy: "Ordina per:",
      sortNewest: "Più recenti",
      sortOldest: "Meno recenti",
      sortCategory: "Categoria",
      sortDefault: "Default",
      clearFilters: "Rimuovi filtri",
      noProjects: "Nessun progetto trovato con i filtri selezionati.",
      goToImmersive: "Vai all'esplorazione interattiva"
    },
    footer: {
      text: "© {year} Letizia Penné. Progettato con React & Tailwind."
    },
    immersive: {
      backToHub: "Torna alla home",
      hubTitle: "Scegli la stanza da esplorare",
      visitedCounter: "Stanze Esplorate: {count} / {total}",
      backButton: "Indietro",
      welcome: {
        step1: {
          title: "Benvenuto/a!",
          text: "Qui ti accompagnerò alla scoperta delle mie competenze e dei miei valori. \n Clicca sui pulsanti per visitare le 4 stanze tematiche.",
          button: "Come funziona?"
        },
        step2: {
          title: "Cosa troverai all'interno?",
          text: "Interagendo con gli oggetti scoprirai il progetto più significativo per me in quell’ambito, la mia vision e gli strumenti che utilizzo nel mio lavoro. \n Buona scoperta!",
          button: "Inizia l'esplorazione"
        }
      },
      rooms: {
        GAMES: "Videogiochi",
        IMMERSIVE: "Esperienze Immersive",
        WEB: "Sviluppo Web",
        EXTRA: "Extra"
      },
      objects: {
        // Games Room
        workstation: {
          label: "Workstation",
          mission: {
            problem: "Necessità di creare un gioco educativo per prevenire la radicalizzazione giovanile.",
            solution: "Sviluppo di 'Umbrella +', un'avventura narrativa con scelte morali impattanti.",
            resp: "Programmazione meccaniche C#, sistema dialoghi Ink, integrazione animazioni.",
            results: "Gioco utilizzato in programmi Erasmus+ con feedback positivo dagli studenti."
          }
        },
        unityIcon: {
          label: "Unity",
          text: "<b>Unity</b> è l'engine che conosco meglio. \nSono in grado anche di lavorare con <b>GDevelop</b> e ho una conoscenza base di <b>Godot</b> e <b>Unreal Engine</b>"
        },
        unityIcon2: {
          label: "Unity",
          text: "<b>Unity</b> è l'engine che conosco meglio e con il quale ho realizzato tutte le esperienze immersive."
        },
        gamesPoster: {
          label: "I miei giochi",
          title: "La mia esperienza con i videogiochi è varia:",
          list: "• Umbrella+ (Applied 2D Game)\n• SeaRing (Indie Puzzle/Action 2D)\n• Mascaria (2D Card game) \n• Food Devils (Rouglike/Adventure 3D Game) \n• Snake Multiplayer (Arcade 2D Game)"
        },
        lamp: {
          label: "Lampada",
          text: "Ciò che mi affascina dei videogiochi è la capacità di <b>coinvolgere</b> attivamente le persone, rendendoli un ottimo strumento per trasmettere emozioni, valori e nozioni. I giochi che preferisco sono gli <b>Applied Games</b>.",
        },
        console: {
          label: "Retro Console",
          text: "Il primo videogioco che ho creato è stato Snake con la possibilità di giocare in due giocatori. Realizzato interamente in Java"
        },
        // AR/VR Room
        mural: {
          label: "Murales",
          text: "Il mio primo progetto in questo ambito è stata un <b>app per smartphone/tablet che permette di interagire con dei murales tramite la realtà aumentata</b>."
        },
        IMMERSIVEPoster: {
          label: "Progetti AR/VR",
          title: "Esperienze Immersive",
          list: "• Museo Bagatti Valsecchi (Guida AR Web)\n• Tesi Murales (App AR)\n• simulazione guida moto in VR (Simulazione in VR)\n• Esperienza interattiva in VR"
        },
        museum: {
          label: "Museo",
          mission: {
            problem: "Rendere accessibile la guida museale senza hardware dedicato.",
            solution: "Web App AR con riconoscimento marker (MindAR) accessibile da browser.",
            resp: "UI/UX Design, implementazione WebAR, ottimizzazione asset.",
            results: "Esperienza fluida utilizzabile direttamente dallo smartphone dei visitatori."
          }
        },
        vrHeadset: {
          label: "Visore VR",
          text: "Ho sviluppato 2 esperienze in realtà virtuale: \n\n Un <b>simulatore di guida di una Vespa</b> e un' <b>esperienza immersiva</b> in cui l'utente può muoversi tramite teletrasporto e interagire con alcuni elementi."
        },
        portal: {
          label: "Portale Magico",
          text: "Sono affascinata dalle esperienze immersive perché rendono l’utente protagonista, permettendo un’<b>interazione naturale</b> con elementi digitali.\nPreferisco la <b>realtà aumentata e la realtà mista</b>, perché amplificano il mondo reale senza sostituirlo.\nConsidero la <b>realtà virtuale</b> uno strumento potente per simulazioni e apprendimento esperienziale." //todo: non mi interessa la preferenza ma dire che ti puoi immergere e impersonificare meglio
        },
        // Web Room
        screen: {
          label: "Questo Sito",
          mission: {
            problem: "Questo sito che stai navigando ora, il mio Portfolio, è il progetto che ho scelto come più significativo per me in questo ambito.",
            solution: "Un sito in cui cerco di raccontare me e ed il mio lavoro cercando di evidenziare sia la mia parte logica e responsabile sia quella creativa e innovativa. Le tecnologie utilizzate sono: Next, React e Tailwind.",
            resp: "Mi sono occupata della progettazione dell'esperienza dell'utente all'interno del sito. Volevo realizzare un Portfolio interattivo che mi potesse rappresentare al meglio, ma mantenendo l'esperienza intuitiva e abbastanza rapida. Mi sono occupata poi dello sviluppo: inizialmente ho utilizzato l'IA (Google AI Studio) per avere una base di partenza e ho poi messo mano al codice aggiungendo funzionalità mancanti e rifinendo la struttura",
            results: "Perché con questo sito ho cercato di rappresentarmi e ho curato ogni singolo aspetto. Ho cercato di mettere insieme le mie conoscenze per creare qualcosa di funzionale e di cui potermi ritenere soddisfatta. "
          }
        },
        laptop: {
          label: "Laptop",
          text: "Ho lavorato come <b>Frontend Developer</b> presso Open Reply s.r.l. per quasi 3 anni. \n Ho collaborato alla realizzazione e mantenimento di progetti grandi, imparando a <b>lavorare in gruppo</b> portando a termine il mio lavoro entro le scadenze."
        },
        shelf: {
          label: "Libreria Tech",
          text: "Queste sono le <b>tecnologie</b> che ho usato per lo sviluppo web fin'ora. \n \nOgni strumento ha delle opportunità e delle mancanze, se posso scegliere <b>cerco di capire il più adatto alla situazione</b>."
        },
        blind: {
          label: "Accessibilità",
          text: "Ho sviluppato app per non vedenti. L'accessibilità non è un optional, è una priorità."
        },
        magnifyingGlass: {
          label: "Dettagli",
          text: "Sono molto attenta ai dettagli. \n Mi piace scrivere <b>codice pulito e mantenibile</b>."
        },
        // Misc Room
        robot: {
          label: "Robot 3D",
          mission: {
            problem: "Creare un robot fisico che naviga autonomamente.",
            solution: "Robot basato su Arduino con sensori a ultrasuoni.",
            resp: "Assemblaggio hardware, programmazione C++ embedded.",
            results: "Rappresenta la mia capacità di problem solving, curiosità ad esplorare nuove tecnologie e creatività"
          }
        },
        camera: {
          label: "Fotocamera",
          text: "Fotografia e video editing sono altre due mie passioni. All'università ho avuto modo di studiare strumenti di video editing, photo editing e anche modellazione 3D"
        },
        bulb: {
          label: "Creatività",
          text: "Problem solving creativo: trovare soluzioni eleganti a problemi complessi."
        },
        crossStitch: {
          label: "Punto Croce",
          text: "Mi piace unire le mie competenze creative e tecnologiche, per questo ho creato un <b>software in Python</b> che converte immagini in schemi per punto croce."
        },
        turing: {
          label: "Macchina di Turing",
          text: "Partecipazione alla Gara Nazionale di programmazione della Macchina di Turing (Univ. Pisa)."
        },
        solarSystem: {
          label: "Esperienza immersiva in C++",
          text: "Interamente realizzata in c++ con OpenGl, programmando shader personalizzati"
        },
        tech: {
          label: "Tecnologie",
          text: "Altri linguaggi di programmazione e programmi che so utilizzare!"
        }
      },
      missionLabels: {
        problem: "Presentazione",
        solution: "Cos'è?",
        responsibilities: "Le mie responsabilità",
        results: "Perché ho scelto questo progetto?"
      }
    }
  },
  en: {
    home: {
      role: "Game Developer",
      description: "Game Developer with experience in Unity, AR, VR, and web frontend. I am passionate about video games and immersive technologies, believing in their potential to solve problems, convey values, and teach. My goal is to create interactive experiences that surprise, engage, and inspire.",
      cta: "Explore Projects",
      immersiveBtn: "Interactive Exploration",
      tooltips: {
        github: "Check my code",
        linkedin: "Let's connect!",
        email: "Send me an email",
        projects: "Full Project List",
        immersive: "A guided, interactive way to explore my vision and projects"
      }
    },
    projects: {
      navHome: "Home",
      navPortfolio: "Portfolio",
      pageTitle: "My Projects",
      titleTooltip: "Click me to spark ideas",
      seeDetails: "See details",
      seeLess: "See less",
      detailsHeader: "Project Details",
      visitWebsite: "See more",
      filterBy: "Filter by technology:",
      sortBy: "Sort by:",
      sortNewest: "Newest",
      sortOldest: "Oldest",
      sortCategory: "Category",
      sortDefault: "Default",
      clearFilters: "Clear filters",
      noProjects: "No projects found with selected filters.",
      goToImmersive: "Go to interactive experience"
    },
    footer: {
      text: "© {year} Letizia Penné. Designed with React & Tailwind."
    },
    immersive: {
      backToHub: "Back to Home",
      hubTitle: "Choose a room to explore",
      visitedCounter: "Visited rooms: {count} / {total}",
      backButton: "Back",
      welcome: {
        step1: {
          title: "Welcome!",
          text: "Explore my skills through an interactive experience. Click the buttons to enter the themed rooms (Video Games, Web, AR/VR), and once inside, interact with the objects to discover content, projects, and insights.",
          button: "How it works?"
        },
        step2: {
          title: "Navigation Instructions",
          text: "In each room, you can explore the project that is most meaningful to me in that area by clicking on the central object. The other objects will let you discover additional projects, specific skills, or personal ideas.",
          button: "Start Exploring"
        }
      },
      rooms: {
        GAMES: "Videogames",
        IMMERSIVE: "Immersive Experiences",
        WEB: "Web Development",
        EXTRA: "Extra"
      },
      objects: {
        // Games Room
        workstation: {
          label: "Workstation",
          mission: {
            problem: "Need to create an educational game to prevent youth radicalization.",
            solution: "Development of 'Umbrella +', a narrative adventure with impactful moral choices.",
            resp: "C# mechanics programming, Ink dialogue system, animation integration.",
            results: "Game used in Erasmus+ programs with positive feedback from students."
          }
        },
        unityIcon: {
          label: "Unity",
          text: "Unity is the engine I know best. I am also able to work with GDevelop and have basic knowledge of Godot and Unreal Engine."
        },
        unityIcon2: {
          label: "Unity",
          text: "Unity is the engine I know best.I used it to develop all the immersive experiences."
        },
        gamesPoster: {
          label: "Games",
          title: "I have worked on different kinds of videogames:",
          list: "• Umbrella+ (Serious Game, 2D, Platform)\n• SeaRing (Indie Puzzle/Action, 2D)\n• Food Devils (3D)\n• Bubbleship Escape (Global Game Jam 2025, Labirinth, 2D) \n• Mascaria (Global Game Jam 2026, Card Game, 2D)\n• Snake Multiplayer (Arcade, 2D)"
        },
        lamp: {
          label: "Lamp",
          text: "I love creating worlds that light up players' minds!",
        },
        console: {
          label: "Retro Console",
          text: "My passion started with classics. I recreated Snake in Java to understand game loop basics."
        },
        // AR/VR Room
        mural: {
          label: "Murals",
          text: "Thesis project: An AR app to bring urban murals to life and tell their history."
        },
        IMMERSIVEPoster: {
          label: "AR/VR Projects",
          title: "Immersive Experiences",
          list: "• Bagatti Valsecchi Museum (Web AR Guide)\n• Murals Thesis (Vuforia)\n• VR Training (DIY Simulation)\n• Solar System VR (Educational)"
        },
        museum: {
          label: "Museum",
          mission: {
            problem: "Make museum guides accessible without dedicated hardware.",
            solution: "Web AR App with marker recognition (MindAR) accessible via browser.",
            resp: "UI/UX Design, WebAR implementation, asset optimization.",
            results: "Fluid experience usable directly from visitors' smartphones."
          }
        },
        vrHeadset: {
          label: "VR Headset",
          text: "Developing immersive VR experiences for training and education (Unity + Oculus/OpenXR)."
        },
        portal: {
          label: "Magic Portal",
          text: "Extended Reality is for me a portal to new ways of learning and exploring."
        },
        // Web Room
        screen: {
          label: "This Website",
          mission: {
            problem: "This website you are browsing right now, my Portfolio, is the project I chose as the most meaningful for me in this field.",
            solution: "A website where I try to tell my story and present my work, highlighting both my logical and responsible side and my creative and innovative one. The technologies used are: Next, React, and Tailwind.",
            resp: "I initially worked on designing the user experience within the website. I wanted to create an interactive portfolio that could represent me as best as possible, while keeping the experience intuitive and fairly quick to navigate. I then moved on to the development phase: I initially used AI (Google AI Studio) to get a starting base, and then I worked directly on the code, adding missing features and refining the structure.",
            results: "Because with this website I tried to represent myself and I took care of every single aspect. I tried to bring together my knowledge to create something functional and something I can feel satisfied with."
          }
        },
        laptop: {
          label: "Laptop",
          text: "I worked as a <b>Frontend Developer</b> at Open Reply S.r.l. for almost three years. I contributed to the development and maintenance of large projects, learning how to <b>work in a team</b> and deliver my work within the established deadlines."
        },
        shelf: {
          label: "Tech Shelf",
          text: "These are the <b>technologies</b> I’ve used for web development so far. Each tool has its own strengths and limitations, so when I have the choice, I try to understand which one is <b>the most suitable for the situation</b>."
        },
        blind: {
          label: "Accessibility",
          text: "I developed apps for the blind. Accessibility is not an option, it's a priority."
        },
        magnifyingGlass: {
          label: "Details",
          text: "I am very attentive to detail. \nI enjoy writing <b>clean and maintainable code</b>."
        },
        // Misc Room
        robot: {
          label: "3D Robot",
          mission: {
            problem: "Create a physical robot that navigates autonomously.",
            solution: "Arduino-based robot with ultrasonic sensors.",
            resp: "Hardware assembly, embedded C++ programming.",
            results: "The robot avoids complex obstacles in real-time."
          }
        },
        camera: {
          label: "Camera",
          text: "'Characters' photography project. I love telling stories through static images too."
        },
        bulb: {
          label: "Creatività",
          text: "Creative problem solving: finding elegant solutions to complex problems."
        },
        crossStitch: {
          label: "Cross Stitch",
          text: "I created Python software that converts images into cross-stitch patterns!"
        },
        turing: {
          label: "Turing Machine",
          text: "Participation in the National Turing Machine Programming Competition (Univ. Pisa)."
        },
        solarSystem: {
          label: "Immersive experience with c++",
          text:"text to do"
        },
        tech: {
          label: "Technologies",
          text: ""
        }
      },
      missionLabels: {
        problem: "Problem",
        solution: "Solution",
        responsibilities: "Responsibilities",
        results: "Results"
      }
    }
  }
};
