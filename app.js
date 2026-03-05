// ===== War Echo — Scene Engine =====
// Interactive VR historical event experience powered by A-Frame

(function () {
  'use strict';

  // =========================================================
  //  SCENE DATA — 4 Historical Events
  // =========================================================
  const SCENES = {
    thermopylae: {
      title: 'Battle of Thermopylae',
      year: '480 BC',
      sky: 'assets/sky_thermopylae.png',
      ambientColor: '#5a4a2a',
      lightColor: '#ffe8b0',
      phases: [
        {
          id: 'arrival',
          label: 'The Arrival',
          narration: 'King Leonidas leads 300 Spartans and 7,000 Greek allies to the narrow coastal pass of Thermopylae — the "Hot Gates" — to halt the Persian invasion.',
          skyRotation: '0 0 0',
          hotspots: [
            {
              position: '-6 2.5 -8',
              color: '#c9a84c',
              tag: 'Geography',
              title: 'The Hot Gates',
              text: 'Thermopylae was a narrow coastal pass barely 12 meters wide, flanked by mountains and the sea. This geography allowed a small force to hold back a much larger army.',
              fact: 'The name "Thermopylae" means "Hot Gates" in Greek, named after the hot springs in the area.'
            },
            {
              position: '5 3 -10',
              color: '#e74c3c',
              tag: 'Forces',
              title: 'The Persian Army',
              text: 'King Xerxes I assembled an army estimated between 100,000–300,000 soldiers from across the vast Persian Empire — the largest military force the ancient world had ever seen.',
              fact: 'Ancient historian Herodotus claimed Xerxes had 2.6 million soldiers, though modern historians estimate 100,000–300,000.'
            }
          ]
        },
        {
          id: 'battle',
          label: 'The Stand',
          narration: 'For two days, the Greeks hold the pass, repelling wave after wave of Persian infantry. The Spartans\' superior training and the narrow terrain nullify Persia\'s numerical advantage.',
          skyRotation: '0 90 0',
          hotspots: [
            {
              position: '-4 2 -7',
              color: '#c9a84c',
              tag: 'Tactics',
              title: 'The Phalanx Formation',
              text: 'The Spartans fought in a tight phalanx — a wall of overlapping shields and protruding spears. In the narrow pass, this formation was nearly impenetrable.',
              fact: 'Spartan boys began military training at age 7 in the agoge system, dedicating their entire lives to warfare.'
            },
            {
              position: '7 2.5 -6',
              color: '#3498db',
              tag: 'Weapons',
              title: 'Spartan Armament',
              text: 'Each Spartan carried a dory (spear), xiphos (short sword), and the iconic hoplon — a large bronze-faced shield weighing about 7 kg. Their crimson cloaks were said to hide bloodstains.',
              fact: 'Spartan mothers famously told their sons: "Come back with your shield, or on it."'
            }
          ]
        },
        {
          id: 'betrayal',
          label: 'The Betrayal',
          narration: 'A local Greek named Ephialtes betrays the defenders, revealing a secret mountain path that allows the Persians to outflank the Greek position.',
          skyRotation: '0 180 0',
          hotspots: [
            {
              position: '0 3 -9',
              color: '#e74c3c',
              tag: 'Treachery',
              title: 'Ephialtes\' Betrayal',
              text: 'Ephialtes of Trachis showed Xerxes the hidden Anopaea path through the mountains. When Leonidas learned of the betrayal, he dismissed most of the Greek army to save them.',
              fact: 'The name "Ephialtes" became synonymous with "nightmare" in modern Greek — a lasting punishment for his treachery.'
            }
          ]
        },
        {
          id: 'laststand',
          label: 'The Last Stand',
          narration: 'Leonidas and his 300 Spartans, along with 700 Thespians and 400 Thebans, make their final stand. They fight to the last man, buying time for Greece to mobilize.',
          skyRotation: '0 270 0',
          hotspots: [
            {
              position: '-3 2 -8',
              color: '#c9a84c',
              tag: 'Legacy',
              title: 'The Epitaph',
              text: 'A stone monument was erected with the famous inscription by Simonides: "Go tell the Spartans, stranger passing by, that here obedient to their laws we lie."',
              fact: 'The sacrifice at Thermopylae gave Athens time to evacuate and prepare the fleet that would win the decisive Battle of Salamis.'
            },
            {
              position: '5 2.5 -7',
              color: '#9b59b6',
              tag: 'Impact',
              title: 'Shaping Western Civilization',
              text: 'The stand at Thermopylae became the supreme symbol of courage against overwhelming odds. It inspired the Greek city-states to unite and ultimately defeat Persia, preserving the birth of democracy.',
              fact: 'Without the delay at Thermopylae, historians believe Xerxes would have conquered all of Greece, potentially preventing the rise of Athenian democracy.'
            }
          ]
        }
      ]
    },

    dday: {
      title: 'D-Day: Normandy Landing',
      year: '1944',
      sky: 'assets/sky_dday.png',
      ambientColor: '#3a4a5a',
      lightColor: '#c8d8e8',
      phases: [
        {
          id: 'embark',
          label: 'The Embarkation',
          narration: 'June 5, 1944. Over 156,000 Allied troops board 5,000 ships and landing craft in England. General Eisenhower gives the order: "OK, let\'s go." Operation Overlord begins.',
          skyRotation: '0 0 0',
          hotspots: [
            {
              position: '-8 2 -6',
              color: '#3498db',
              tag: 'Planning',
              title: 'Operation Overlord',
              text: 'D-Day was the largest seaborne invasion in history, taking over a year to plan. The Allies chose Normandy over Calais to surprise the Germans, who expected the invasion at the narrowest Channel crossing.',
              fact: 'The "D" in D-Day simply stands for "Day" — it\'s military jargon for the start date of any operation.'
            },
            {
              position: '6 3 -8',
              color: '#c9a84c',
              tag: 'Deception',
              title: 'Operation Bodyguard',
              text: 'The Allies created an elaborate deception using inflatable tanks, fake radio traffic, and even a fictional army under General Patton to convince Hitler the invasion would target Calais.',
              fact: 'Double agents fed false intelligence to the Germans for months, keeping major Panzer divisions positioned at Calais even after the Normandy landings began.'
            }
          ]
        },
        {
          id: 'landing',
          label: 'The Beach Assault',
          narration: 'Dawn, June 6. Under heavy fire, troops storm five beaches code-named Utah, Omaha, Gold, Juno, and Sword. At Omaha, casualties are devastating — the Americans nearly pull back.',
          skyRotation: '0 90 0',
          hotspots: [
            {
              position: '-5 2 -9',
              color: '#e74c3c',
              tag: 'Combat',
              title: 'Bloody Omaha',
              text: 'Omaha Beach was the most heavily defended. The first wave suffered over 50% casualties. Strong currents swept landing craft off course, and many soldiers drowned under the weight of their equipment.',
              fact: 'Of the roughly 34,000 troops that landed at Omaha, approximately 2,400 were killed or wounded — the highest casualty rate of any D-Day beach.'
            },
            {
              position: '4 2.5 -7',
              color: '#27ae60',
              tag: 'Heroism',
              title: 'Pointe du Hoc',
              text: '225 U.S. Army Rangers scaled the 100-foot cliffs of Pointe du Hoc under enemy fire to destroy German gun emplacements threatening the beaches. Only 90 Rangers were still able to fight after two days.',
              fact: 'The Rangers used rocket-propelled grappling hooks and extension ladders borrowed from the London Fire Department to scale the cliffs.'
            }
          ]
        },
        {
          id: 'airborne',
          label: 'The Airborne Drop',
          narration: 'In the pre-dawn darkness, 13,000 Allied paratroopers jump behind enemy lines to secure bridges, disrupt communications, and prevent German reinforcements from reaching the beaches.',
          skyRotation: '0 180 0',
          hotspots: [
            {
              position: '0 3 -8',
              color: '#9b59b6',
              tag: 'Airborne',
              title: 'The Paratroopers',
              text: 'The 82nd and 101st Airborne Divisions dropped into Normandy in the early hours. High winds and anti-aircraft fire scattered paratroopers across the countryside — some landed miles from their targets.',
              fact: 'Private John Steele\'s parachute snagged on the church steeple in Sainte-Mère-Église. He hung there for two hours, playing dead, while a battle raged below.'
            }
          ]
        },
        {
          id: 'foothold',
          label: 'The Foothold',
          narration: 'By nightfall on June 6, the Allies have established a foothold in France. Despite heavy losses, the invasion succeeds. The liberation of Western Europe from Nazi occupation has begun.',
          skyRotation: '0 270 0',
          hotspots: [
            {
              position: '-4 2 -7',
              color: '#c9a84c',
              tag: 'Outcome',
              title: 'The Beachhead Secured',
              text: 'By the end of D-Day, approximately 156,000 Allied troops had landed in Normandy. Though casualties were heavy — over 10,000 Allied soldiers — all five beaches were secured.',
              fact: 'Within a month, over 850,000 troops, 148,000 vehicles, and 570,000 tons of supplies had crossed the English Channel to France.'
            },
            {
              position: '6 2.5 -6',
              color: '#3498db',
              tag: 'Legacy',
              title: 'Turning the Tide',
              text: 'D-Day opened the Western Front that would eventually crush Nazi Germany between two advancing Allied armies. Paris was liberated 79 days later, on August 25, 1944.',
              fact: 'The Normandy American Cemetery overlooks Omaha Beach and contains 9,387 graves — a lasting tribute to those who gave their lives for liberation.'
            }
          ]
        }
      ]
    },

    moonlanding: {
      title: 'Apollo 11: Moon Landing',
      year: '1969',
      sky: 'assets/sky_moonlanding.png',
      ambientColor: '#1a1a2e',
      lightColor: '#e8e8ff',
      phases: [
        {
          id: 'launch',
          label: 'The Launch',
          narration: 'July 16, 1969. Saturn V — the most powerful rocket ever built — lifts off from Kennedy Space Center carrying three astronauts: Neil Armstrong, Buzz Aldrin, and Michael Collins.',
          skyRotation: '0 0 0',
          hotspots: [
            {
              position: '-6 3 -8',
              color: '#3498db',
              tag: 'Technology',
              title: 'Saturn V Rocket',
              text: 'The Saturn V stood 363 feet tall — taller than the Statue of Liberty. Its five F-1 engines produced 7.5 million pounds of thrust, burning 20 tons of fuel per second at launch.',
              fact: 'The Saturn V\'s onboard computer had less processing power than a modern smartphone calculator app.'
            },
            {
              position: '5 2 -7',
              color: '#c9a84c',
              tag: 'Mission',
              title: 'The Crew',
              text: 'Commander Neil Armstrong was a civilian test pilot, Buzz Aldrin was an Air Force Colonel with a PhD from MIT, and Michael Collins piloted the Command Module in lunar orbit — alone for 28 hours.',
              fact: 'Michael Collins later said he was "not at all lonely" orbiting the Moon alone, describing the far side as "awe-inspiring."'
            }
          ]
        },
        {
          id: 'descent',
          label: 'The Descent',
          narration: 'July 20. The Lunar Module "Eagle" separates and begins its descent. Alarms sound — the computer is overloaded. Armstrong takes manual control with only 25 seconds of fuel remaining.',
          skyRotation: '0 90 0',
          hotspots: [
            {
              position: '-4 2.5 -9',
              color: '#e74c3c',
              tag: 'Crisis',
              title: '1202 Alarm',
              text: 'During descent, the guidance computer triggered multiple "1202" and "1201" program alarms — executive overflow errors. 26-year-old engineer Steve Bales made the call: "GO." The landing continued.',
              fact: 'Margaret Hamilton, who led the software team, designed the system to prioritize critical tasks — her code literally saved the mission during these alarms.'
            },
            {
              position: '3 2 -7',
              color: '#c9a84c',
              tag: 'Piloting',
              title: 'Manual Landing',
              text: 'Armstrong saw the planned landing site was strewn with boulders. With fuel running critically low, he flew the Eagle manually, skimming the surface until he found a clear spot in the Sea of Tranquility.',
              fact: 'When Eagle finally landed, only about 25 seconds of hover fuel remained. Armstrong\'s heart rate hit 150 bpm during the landing.'
            }
          ]
        },
        {
          id: 'firststep',
          label: 'One Small Step',
          narration: '"That\'s one small step for man, one giant leap for mankind." At 10:56 PM EDT, Neil Armstrong becomes the first human to set foot on another world. Over 600 million people watch live on television.',
          skyRotation: '0 180 0',
          hotspots: [
            {
              position: '0 2 -8',
              color: '#c9a84c',
              tag: 'Historic Moment',
              title: 'The First Footprint',
              text: 'Armstrong spent 2 hours 31 minutes on the lunar surface. The first thing he did was collect a contingency soil sample — in case they had to leave quickly, they\'d at least have Moon material.',
              fact: 'Armstrong\'s famous quote was intended to be "one small step for A man" — the "a" was lost in transmission, changing the meaning slightly.'
            },
            {
              position: '-5 2.5 -6',
              color: '#9b59b6',
              tag: 'Science',
              title: 'Experiments on the Moon',
              text: 'Armstrong and Aldrin deployed a seismometer, a laser reflector, and a solar wind collector. They also planted the American flag — which Aldrin later admitted fell over from the Eagle\'s engine blast at liftoff.',
              fact: 'The laser reflector is still used today. Scientists bounce lasers off it to measure the Moon\'s distance to within millimeter accuracy.'
            }
          ]
        },
        {
          id: 'return',
          label: 'Return to Earth',
          narration: 'The astronauts return safely on July 24, splashing down in the Pacific Ocean. Humanity has walked on another world and returned to tell the tale.',
          skyRotation: '0 270 0',
          hotspots: [
            {
              position: '4 2 -8',
              color: '#27ae60',
              tag: 'Achievement',
              title: 'Mission Accomplished',
              text: 'Apollo 11 fulfilled President Kennedy\'s 1961 challenge to land on the Moon "before this decade is out." The total cost of the Apollo program was about $25.4 billion (~$175 billion in today\'s dollars).',
              fact: 'Upon return, the astronauts were quarantined for 21 days in case they brought back "Moon germs" — a concern that was later deemed unnecessary.'
            },
            {
              position: '-6 3 -7',
              color: '#c9a84c',
              tag: 'Legacy',
              title: 'Humanity\'s Greatest Achievement',
              text: 'Apollo 11 remains one of humanity\'s proudest accomplishments. It proved that with determination and ingenuity, even the impossible is achievable. Only 12 humans have ever walked on the Moon.',
              fact: 'The Apollo 11 command module "Columbia" is on display at the National Air and Space Museum in Washington, D.C., seen by millions of visitors each year.'
            }
          ]
        }
      ]
    },

    berlinwall: {
      title: 'Fall of the Berlin Wall',
      year: '1989',
      sky: 'assets/sky_berlinwall.png',
      ambientColor: '#3a3025',
      lightColor: '#ffd699',
      phases: [
        {
          id: 'division',
          label: 'A City Divided',
          narration: 'August 13, 1961. East German soldiers begin constructing a barbed-wire barrier through the heart of Berlin. Within weeks, it becomes a concrete wall — splitting families, friends, and a nation for 28 years.',
          skyRotation: '0 0 0',
          hotspots: [
            {
              position: '-5 2 -8',
              color: '#e74c3c',
              tag: 'Origins',
              title: 'Why the Wall Was Built',
              text: 'Between 1949 and 1961, approximately 3.5 million East Germans fled to the West through Berlin — a devastating "brain drain." The Wall was the Communist regime\'s drastic solution to stop the exodus.',
              fact: 'The Wall was built overnight. Berliners woke on August 13, 1961 to find their city literally cut in half. Families were separated for decades.'
            },
            {
              position: '6 2.5 -7',
              color: '#3498db',
              tag: 'Structure',
              title: 'The Death Strip',
              text: 'The Wall was actually two walls with a "death strip" between them — a 160-yard no-man\'s-land with guard towers, anti-vehicle trenches, floodlights, trip-wire alarms, and armed guards with shoot-to-kill orders.',
              fact: 'At least 140 people were killed trying to cross the Berlin Wall. The youngest was a 1-year-old child; the oldest was 80.'
            }
          ]
        },
        {
          id: 'coldwar',
          label: 'Cold War Tension',
          narration: 'For 28 years, the Wall stands as the ultimate symbol of the Iron Curtain. Checkpoint Charlie becomes the most famous crossing point, where East meets West in a frozen standoff.',
          skyRotation: '0 90 0',
          hotspots: [
            {
              position: '0 3 -9',
              color: '#c9a84c',
              tag: 'Geopolitics',
              title: 'Checkpoint Charlie',
              text: 'Checkpoint Charlie was the best-known Berlin Wall crossing point between East and West Berlin. In 1961, American and Soviet tanks faced each other here — one of the tensest moments of the Cold War.',
              fact: 'The name "Charlie" comes from the NATO phonetic alphabet (Alpha, Bravo, Charlie). It was the third checkpoint established by the Western Allies.'
            },
            {
              position: '-7 2 -6',
              color: '#9b59b6',
              tag: 'Escape',
              title: 'Daring Escapes',
              text: 'East Germans used incredible methods to escape: hot air balloons, tunnels, hidden car compartments, ziplines, even a modified submarine. Tunnel 57 allowed 57 people to escape through a 145-meter underground passage.',
              fact: 'In 1979, two families escaped in a homemade hot air balloon, flying 28 minutes over the border at 8,000 feet altitude.'
            }
          ]
        },
        {
          id: 'pressure',
          label: 'The Pressure Builds',
          narration: 'By 1989, the Soviet Union is weakening under Gorbachev\'s reforms. Across Eastern Europe, people are demanding freedom. In East Germany, massive protests erupt — half a million march in East Berlin.',
          skyRotation: '0 180 0',
          hotspots: [
            {
              position: '4 2.5 -8',
              color: '#27ae60',
              tag: 'Revolution',
              title: 'The Monday Demonstrations',
              text: 'Starting in Leipzig in September 1989, citizens held peaceful Monday demonstrations that grew exponentially. On October 9, 70,000 marched in Leipzig. By November, half a million protested in East Berlin.',
              fact: 'The protesters chanted "Wir sind das Volk!" ("We are the people!") — a powerful claim of democratic sovereignty against the Communist state.'
            }
          ]
        },
        {
          id: 'fall',
          label: 'The Wall Falls',
          narration: 'November 9, 1989. After a confused press conference where an East German official accidentally announces immediate border opening, thousands of Berliners rush to the Wall. Overwhelmed guards open the gates. The Wall falls.',
          skyRotation: '0 270 0',
          hotspots: [
            {
              position: '-4 2 -7',
              color: '#c9a84c',
              tag: 'The Moment',
              title: 'The Accidental Announcement',
              text: 'Spokesman Günter Schabowski was handed a note about new travel regulations. When asked when they took effect, he fumbled and said "immediately, without delay." This was not the plan — but it changed history.',
              fact: 'Schabowski later admitted he hadn\'t read the note properly. His improvised answer triggered the most joyful night in Berlin\'s history.'
            },
            {
              position: '5 3 -8',
              color: '#e74c3c',
              tag: 'Celebration',
              title: 'The Night of Joy',
              text: 'East and West Berliners celebrated together atop the Wall, embracing strangers, sharing champagne, and chipping away at the concrete with hammers. "Mauerspechte" (wall woodpeckers) became a symbol of the night.',
              fact: 'Cellist Mstislav Rostropovich flew to Berlin and gave an impromptu concert at the Wall — one of the most moving musical performances in history.'
            },
            {
              position: '0 2 -10',
              color: '#3498db',
              tag: 'Legacy',
              title: 'A World Transformed',
              text: 'The fall of the Berlin Wall triggered the end of the Cold War, the reunification of Germany on October 3, 1990, and the collapse of Communist regimes across Eastern Europe.',
              fact: 'Pieces of the Berlin Wall can be found in over 50 countries today, from the Reagan Library in California to a men\'s restroom in a Las Vegas casino.'
            }
          ]
        }
      ]
    }
  };

  // =========================================================
  //  STATE
  // =========================================================
  let currentScene = null;
  let currentPhaseIndex = 0;
  let infoPanelOpen = false;

  // =========================================================
  //  INIT
  // =========================================================
  function init() {
    const params = new URLSearchParams(window.location.search);
    const sceneId = params.get('scene');

    if (!sceneId || !SCENES[sceneId]) {
      window.location.href = 'index.html';
      return;
    }

    currentScene = SCENES[sceneId];
    document.getElementById('sceneTitle').textContent = `${currentScene.title} · ${currentScene.year}`;
    document.getElementById('loaderText').textContent = `Loading ${currentScene.title}...`;
    document.title = `War Echo — ${currentScene.title}`;

    // Preload sky image
    const skyImg = new Image();
    skyImg.onload = () => {
      document.getElementById('sky').setAttribute('src', currentScene.sky);
      buildTimeline();
      loadPhase(0);

      // Set scene lighting
      const ambient = document.querySelector('a-light[type="ambient"]');
      const directional = document.querySelector('a-light[type="directional"]');
      if (ambient) ambient.setAttribute('color', currentScene.ambientColor);
      if (directional) directional.setAttribute('color', currentScene.lightColor);

      // Hide loader
      setTimeout(() => {
        document.getElementById('vrLoader').classList.add('hidden');
      }, 1500);
    };

    skyImg.onerror = () => {
      // Still load scene even if sky image fails
      document.getElementById('sky').setAttribute('color', '#1a1a2e');
      buildTimeline();
      loadPhase(0);
      setTimeout(() => {
        document.getElementById('vrLoader').classList.add('hidden');
      }, 1500);
    };

    skyImg.src = currentScene.sky;
  }

  // =========================================================
  //  TIMELINE
  // =========================================================
  function buildTimeline() {
    const container = document.getElementById('timeline');
    container.innerHTML = '';

    currentScene.phases.forEach((phase, i) => {
      if (i > 0) {
        const connector = document.createElement('div');
        connector.className = 'timeline-connector';
        connector.id = `connector-${i}`;
        container.appendChild(connector);
      }

      const dot = document.createElement('div');
      dot.className = 'timeline-dot';
      dot.id = `dot-${i}`;
      dot.dataset.label = phase.label;
      dot.addEventListener('click', () => loadPhase(i));
      container.appendChild(dot);
    });

    // Phase label
    const label = document.createElement('span');
    label.className = 'timeline-phase-label';
    label.id = 'phaseLabel';
    container.appendChild(label);

    updateTimelineUI();
  }

  function updateTimelineUI() {
    currentScene.phases.forEach((_, i) => {
      const dot = document.getElementById(`dot-${i}`);
      dot.classList.toggle('active', i === currentPhaseIndex);

      if (i > 0) {
        const conn = document.getElementById(`connector-${i}`);
        conn.classList.toggle('filled', i <= currentPhaseIndex);
      }
    });

    const label = document.getElementById('phaseLabel');
    label.textContent = currentScene.phases[currentPhaseIndex].label;
  }

  // =========================================================
  //  LOAD PHASE
  // =========================================================
  function loadPhase(index) {
    if (index < 0 || index >= currentScene.phases.length) return;
    currentPhaseIndex = index;
    const phase = currentScene.phases[index];

    // Close info panel
    closeInfoPanel();

    // Update sky rotation for a sense of "moving"
    const sky = document.getElementById('sky');
    sky.setAttribute('animation', {
      property: 'rotation',
      to: phase.skyRotation,
      dur: 1500,
      easing: 'easeInOutQuad'
    });

    // Clear old hotspots
    const hotspotContainer = document.getElementById('hotspots');
    hotspotContainer.innerHTML = '';

    // Create narration entity
    createNarrationPanel(phase.narration);

    // Create hotspots
    phase.hotspots.forEach((hs, i) => {
      createHotspot(hs, i);
    });

    updateTimelineUI();
  }

  // =========================================================
  //  NARRATION PANEL (in-VR)
  // =========================================================
  function createNarrationPanel(text) {
    const hotspotContainer = document.getElementById('hotspots');

    // Background plane
    const bg = document.createElement('a-plane');
    bg.setAttribute('position', '0 3.5 -6');
    bg.setAttribute('width', '6');
    bg.setAttribute('height', '1.2');
    bg.setAttribute('color', '#0a0b10');
    bg.setAttribute('opacity', '0.85');
    bg.setAttribute('material', 'shader: flat');

    // Border
    const border = document.createElement('a-plane');
    border.setAttribute('position', '0 3.5 -6.01');
    border.setAttribute('width', '6.06');
    border.setAttribute('height', '1.26');
    border.setAttribute('color', '#c9a84c');
    border.setAttribute('opacity', '0.3');
    border.setAttribute('material', 'shader: flat');

    // Text
    const textEl = document.createElement('a-text');
    textEl.setAttribute('position', '0 3.5 -5.98');
    textEl.setAttribute('value', text);
    textEl.setAttribute('color', '#e8e6e3');
    textEl.setAttribute('width', '5');
    textEl.setAttribute('align', 'center');
    textEl.setAttribute('wrap-count', '60');
    textEl.setAttribute('font', 'mozillavr');

    // Phase label
    const phaseLabel = document.createElement('a-text');
    phaseLabel.setAttribute('position', '0 4.3 -5.98');
    phaseLabel.setAttribute('value', `Phase ${currentPhaseIndex + 1}: ${currentScene.phases[currentPhaseIndex].label}`);
    phaseLabel.setAttribute('color', '#c9a84c');
    phaseLabel.setAttribute('width', '4');
    phaseLabel.setAttribute('align', 'center');
    phaseLabel.setAttribute('font', 'mozillavr');

    // Animate in
    [bg, border, textEl, phaseLabel].forEach(el => {
      el.setAttribute('animation', {
        property: 'scale',
        from: '0.8 0.8 0.8',
        to: '1 1 1',
        dur: 600,
        easing: 'easeOutQuad'
      });
      el.setAttribute('animation__opacity', {
        property: 'opacity',
        from: 0,
        to: el.getAttribute('opacity') || 1,
        dur: 600
      });
    });

    hotspotContainer.appendChild(border);
    hotspotContainer.appendChild(bg);
    hotspotContainer.appendChild(textEl);
    hotspotContainer.appendChild(phaseLabel);
  }

  // =========================================================
  //  HOTSPOTS
  // =========================================================
  function createHotspot(data, index) {
    const hotspotContainer = document.getElementById('hotspots');

    // Outer ring (animated)
    const ring = document.createElement('a-ring');
    ring.setAttribute('position', data.position);
    ring.setAttribute('radius-inner', '0.22');
    ring.setAttribute('radius-outer', '0.32');
    ring.setAttribute('color', data.color);
    ring.setAttribute('opacity', '0.7');
    ring.setAttribute('material', 'shader: flat; side: double');
    ring.setAttribute('look-at', '#camera');
    ring.setAttribute('animation', {
      property: 'rotation',
      to: '0 0 360',
      dur: 8000,
      loop: true,
      easing: 'linear'
    });
    ring.setAttribute('animation__pulse', {
      property: 'scale',
      from: '1 1 1',
      to: '1.2 1.2 1.2',
      dur: 1500,
      loop: true,
      dir: 'alternate',
      easing: 'easeInOutSine'
    });

    // Center dot
    const dot = document.createElement('a-circle');
    dot.setAttribute('position', data.position);
    dot.setAttribute('radius', '0.15');
    dot.setAttribute('color', data.color);
    dot.setAttribute('opacity', '0.9');
    dot.setAttribute('material', 'shader: flat; side: double');
    dot.setAttribute('class', 'clickable');
    dot.setAttribute('look-at', '#camera');
    dot.setAttribute('data-hotspot-index', index);

    // Label
    const label = document.createElement('a-text');
    const pos = data.position.split(' ').map(Number);
    label.setAttribute('position', `${pos[0]} ${pos[1] - 0.5} ${pos[2]}`);
    label.setAttribute('value', data.title);
    label.setAttribute('color', '#e8e6e3');
    label.setAttribute('width', '3');
    label.setAttribute('align', 'center');
    label.setAttribute('font', 'mozillavr');
    label.setAttribute('look-at', '#camera');

    // Click handler
    dot.addEventListener('click', () => {
      openInfoPanel(data);
    });

    // Hover effects via mouseenter/mouseleave
    dot.addEventListener('mouseenter', () => {
      dot.setAttribute('scale', '1.3 1.3 1.3');
      dot.setAttribute('opacity', '1');
      document.getElementById('crosshair').style.borderColor = data.color;
    });

    dot.addEventListener('mouseleave', () => {
      dot.setAttribute('scale', '1 1 1');
      dot.setAttribute('opacity', '0.9');
      document.getElementById('crosshair').style.borderColor = '';
    });

    // Animate in (staggered)
    [ring, dot, label].forEach(el => {
      el.setAttribute('animation__fadein', {
        property: 'opacity',
        from: 0,
        to: el.getAttribute('opacity') || 1,
        dur: 500,
        delay: 800 + index * 200
      });
    });

    hotspotContainer.appendChild(ring);
    hotspotContainer.appendChild(dot);
    hotspotContainer.appendChild(label);
  }

  // =========================================================
  //  INFO PANEL
  // =========================================================
  function openInfoPanel(data) {
    const panel = document.getElementById('infoPanel');
    const content = document.getElementById('infoPanelContent');

    content.innerHTML = `
      <div class="info-panel-tag">${data.tag}</div>
      <h3>${data.title}</h3>
      <p>${data.text}</p>
      <div class="fact-box">
        <strong>💡 Did You Know?</strong>
        <span>${data.fact}</span>
      </div>
    `;

    panel.classList.add('visible');
    infoPanelOpen = true;
  }

  window.closeInfoPanel = function () {
    document.getElementById('infoPanel').classList.remove('visible');
    infoPanelOpen = false;
  };

  // =========================================================
  //  KEYBOARD SHORTCUTS
  // =========================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && infoPanelOpen) {
      closeInfoPanel();
    }
    if (e.key === 'ArrowRight' || e.key === 'e') {
      loadPhase(currentPhaseIndex + 1);
    }
    if (e.key === 'ArrowLeft' || e.key === 'q') {
      loadPhase(currentPhaseIndex - 1);
    }
  });

  // =========================================================
  //  A-FRAME LOOK-AT COMPONENT
  // =========================================================
  if (typeof AFRAME !== 'undefined' && !AFRAME.components['look-at']) {
    AFRAME.registerComponent('look-at', {
      schema: { type: 'selector' },
      tick: function () {
        if (this.data) {
          const target = this.data.object3D.position;
          this.el.object3D.lookAt(target);
        }
      }
    });
  }

  // =========================================================
  //  AMBIENT PARTICLES IN VR
  // =========================================================
  function createAmbientParticles() {
    const hotspotContainer = document.getElementById('hotspots');

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('a-sphere');
      const x = (Math.random() - 0.5) * 30;
      const y = Math.random() * 6 + 0.5;
      const z = (Math.random() - 0.5) * 30;
      const size = 0.02 + Math.random() * 0.04;

      particle.setAttribute('position', `${x} ${y} ${z}`);
      particle.setAttribute('radius', size);
      particle.setAttribute('color', '#c9a84c');
      particle.setAttribute('opacity', 0.3 + Math.random() * 0.3);
      particle.setAttribute('material', 'shader: flat');
      particle.setAttribute('animation', {
        property: 'position',
        to: `${x + (Math.random() - 0.5) * 4} ${y + Math.random() * 3} ${z + (Math.random() - 0.5) * 4}`,
        dur: 6000 + Math.random() * 8000,
        loop: true,
        dir: 'alternate',
        easing: 'easeInOutSine'
      });

      hotspotContainer.appendChild(particle);
    }
  }

  // =========================================================
  //  START
  // =========================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init();
      createAmbientParticles();
    });
  } else {
    init();
    createAmbientParticles();
  }

})();
