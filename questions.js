/**
 * Dynamic Planet: Oceanography Question Database
 * Based on Science Olympiad 2026 Rules and Study Materials
 * 
 * Topics (a-h):
 * a. Seawater Properties (seawater)
 * b. Surface Circulation (surface-circulation)
 * c. Large-Scale Circulation (large-scale-circulation)
 * d. Waves (waves)
 * e. Tides (tides)
 * f. Coastal Features (coastal)
 * g. Geological Oceanography (geological)
 * h. Climate Variability (climate)
 * 
 * Difficulty: easy, medium, tough, extra-hard
 * Type: mc, short, long, data
 */

const QUESTIONS = [
    // ========== SEAWATER PROPERTIES (a) ==========
    {
        id: 1,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "easy",
        type: "mc",
        question: "Seawater contains approximately what percentage of dissolved salts?",
        options: [
            { label: "A", text: "0.35%" },
            { label: "B", text: "2.5%" },
            { label: "C", text: "3.5%" },
            { label: "D", text: "7.5%" }
        ],
        correctAnswer: "C",
        explanation: "Seawater has an average salinity of about 35 parts per thousand (35‰), which equals 3.5%. This is often expressed as 35 PSU (Practical Salinity Units). The most abundant dissolved ions are chloride and sodium."
    },
    {
        id: 2,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "easy",
        type: "mc",
        question: "Which two ions make up approximately 85% of the dissolved salts in seawater?",
        options: [
            { label: "A", text: "Magnesium and Sulfate" },
            { label: "B", text: "Calcium and Potassium" },
            { label: "C", text: "Chlorine and Sodium" },
            { label: "D", text: "Bicarbonate and Bromide" }
        ],
        correctAnswer: "C",
        explanation: "Chloride (Cl⁻) and Sodium (Na⁺) together comprise about 85.4% of all dissolved ions in seawater. Chloride alone accounts for about 55%, while sodium accounts for about 30.6%."
    },
    {
        id: 3,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "easy",
        type: "short",
        question: "Name the three main layers of the ocean based on temperature, and briefly describe the thermocline.",
        correctAnswer: "mixed layer, thermocline, deep water",
        acceptableAnswers: ["surface layer", "mixed layer", "thermocline", "deep layer", "deep water", "main thermocline"],
        explanation: "The three layers are: (1) Surface/Mixed Layer - warm, well-mixed by wind and waves; (2) Thermocline - zone where temperature decreases rapidly with depth; (3) Deep Water Layer - cold, relatively uniform temperature. The thermocline acts as a barrier preventing mixing between surface and deep waters."
    },
    {
        id: 4,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "medium",
        type: "mc",
        question: "The layer in the ocean where density changes rapidly with depth is called the:",
        options: [
            { label: "A", text: "Thermocline" },
            { label: "B", text: "Halocline" },
            { label: "C", text: "Pycnocline" },
            { label: "D", text: "Chemocline" }
        ],
        correctAnswer: "C",
        explanation: "The pycnocline is where density changes rapidly with depth. The thermocline is where temperature changes rapidly, and the halocline is where salinity changes rapidly. Together, these contribute to the pycnocline, which acts as a density barrier."
    },
    {
        id: 5,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "medium",
        type: "mc",
        question: "At constant temperature, as the salinity of seawater increases, density:",
        options: [
            { label: "A", text: "Increases" },
            { label: "B", text: "Decreases" },
            { label: "C", text: "Remains the same" },
            { label: "D", text: "First increases, then decreases" }
        ],
        correctAnswer: "A",
        explanation: "At constant temperature, increasing salinity increases density because more dissolved salts add mass without significantly changing volume. This relationship is critical for understanding thermohaline circulation."
    },
    {
        id: 6,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "medium",
        type: "data",
        question: `Consider a typical temperature-depth profile for a temperate ocean:
        
| Depth | Temperature |
|-------|-------------|
| Surface | 20°C |
| 200m | 18°C |
| 500m | 8°C |
| 1000m | 4°C |
| 4000m | 2°C |

At what depth range does the thermocline occur? Explain how the thermocline acts as a barrier to mixing between surface and deep waters.`,
        correctAnswer: "200-1000m",
        acceptableAnswers: ["200-1000", "200m to 1000m", "between 200 and 1000", "thermocline between 200-1000m"],
        explanation: "The thermocline occurs between approximately 200-1000m depth, where temperature drops rapidly from 18°C to 4°C. The thermocline creates a density difference that prevents vertical mixing. Cold, dense deep water cannot easily rise through the warmer, less dense surface layer, and vice versa. This stratification isolates the deep ocean from the atmosphere."
    },
    {
        id: 7,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "tough",
        type: "short",
        question: "Explain how the water cycle (evaporation and precipitation) affects ocean salinity distribution globally. Why is salinity highest in subtropical regions and lower near the equator and poles?",
        correctAnswer: "Subtropical regions have high evaporation and low precipitation, concentrating salts. Equatorial regions have high rainfall diluting salts. Polar regions receive freshwater from ice melt.",
        explanation: "Salinity distribution is controlled by the balance of evaporation (removes freshwater, increases salinity) and precipitation (adds freshwater, decreases salinity). Subtropical regions (~30° latitude) are dominated by high-pressure systems with dry, sinking air, causing high evaporation and low rainfall → highest salinity. Equatorial regions have high rainfall from the ITCZ → diluted salinity. Polar regions receive freshwater from melting ice and runoff → lower salinity."
    },
    {
        id: 8,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "extra-hard",
        type: "data",
        question: `Consider the following T-S (Temperature-Salinity) diagram data for three water masses:

| Water Mass | Temperature | Salinity |
|------------|-------------|----------|
| A | 2°C | 34.9‰ |
| B | 15°C | 35.5‰ |
| C | 8°C | 35.1‰ |

Which water mass would be densest? Explain your reasoning using the relationship between temperature, salinity, and density. If Water Mass A encounters Water Mass B, describe what would happen at their boundary.`,
        correctAnswer: "Water Mass A is densest",
        explanation: "Water Mass A is densest due to its cold temperature (2°C). While its salinity (34.9‰) is slightly lower than B's (35.5‰), temperature has a stronger effect on density in this range. Cold water is denser than warm water. When A encounters B, A would sink below B due to its higher density, creating a stratified water column. The boundary between them would form a sharp density gradient (pycnocline), limiting mixing."
    },
    
    // ========== SURFACE CIRCULATION (b) ==========
    {
        id: 9,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "easy",
        type: "mc",
        question: "Ocean surface currents in the Northern Hemisphere tend to circulate:",
        options: [
            { label: "A", text: "Clockwise" },
            { label: "B", text: "Counterclockwise" },
            { label: "C", text: "Directly toward the equator" },
            { label: "D", text: "In random directions based on wind patterns" }
        ],
        correctAnswer: "A",
        explanation: "Due to the Coriolis effect, surface currents in the Northern Hemisphere are deflected to the right, causing subtropical gyres to rotate clockwise. In the Southern Hemisphere, gyres rotate counterclockwise."
    },
    {
        id: 10,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "easy",
        type: "mc",
        question: "What is the primary cause of surface ocean currents?",
        options: [
            { label: "A", text: "Density differences" },
            { label: "B", text: "Wind" },
            { label: "C", text: "Tidal forces" },
            { label: "D", text: "Volcanic activity" }
        ],
        correctAnswer: "B",
        explanation: "Surface ocean currents are primarily driven by wind. Prevailing winds such as trade winds and westerlies create friction on the ocean surface, transferring momentum and generating currents. Density differences drive deep currents (thermohaline circulation)."
    },
    {
        id: 11,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "Western intensification refers to the fact that western boundary currents are:",
        options: [
            { label: "A", text: "Cooler and slower than eastern boundary currents" },
            { label: "B", text: "Narrower, deeper, and faster than eastern boundary currents" },
            { label: "C", text: "Wider and shallower than eastern boundary currents" },
            { label: "D", text: "Found only in the Pacific Ocean" }
        ],
        correctAnswer: "B",
        explanation: "Western intensification causes western boundary currents (like the Gulf Stream) to be narrower, deeper, and faster than eastern boundary currents. This is caused by the variation of the Coriolis effect with latitude (beta effect) and conservation of vorticity."
    },
    {
        id: 12,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The Ekman spiral describes how:",
        options: [
            { label: "A", text: "Waves break at an angle to the shoreline" },
            { label: "B", text: "Wind-driven water layers are deflected at angles due to the Coriolis effect" },
            { label: "C", text: "Cold water upwells along the equator" },
            { label: "D", text: "Tidal currents rotate around amphidromic points" }
        ],
        correctAnswer: "B",
        explanation: "The Ekman spiral describes how surface water is deflected 45° from wind direction (right in NH, left in SH), and each successive layer below is deflected further. The net Ekman transport is 90° to the wind direction, which drives upwelling and downwelling."
    },
    {
        id: 13,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "Which of the following is an example of the Coriolis effect?",
        options: [
            { label: "A", text: "Coral slowly bleaching in the water over time" },
            { label: "B", text: "Waves breaking when they hit shore" },
            { label: "C", text: "Rocks being turned into sand over time" },
            { label: "D", text: "Hurricane winds deflecting left in the Southern Hemisphere" }
        ],
        correctAnswer: "D",
        explanation: "The Coriolis effect deflects moving objects to the right in the Northern Hemisphere and to the left in the Southern Hemisphere. This affects hurricane rotation (counterclockwise in NH, clockwise in SH) and ocean current patterns."
    },
    {
        id: 14,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "tough",
        type: "mc",
        question: "An eddy that spins off from a western boundary current and rotates clockwise in the Northern Hemisphere contains water that is:",
        options: [
            { label: "A", text: "Warmer than surrounding water (warm-core ring)" },
            { label: "B", text: "Colder than surrounding water (cold-core ring)" },
            { label: "C", text: "The same temperature as surrounding water" },
            { label: "D", text: "Alternating between warm and cold" }
        ],
        correctAnswer: "A",
        explanation: "In the Northern Hemisphere, a clockwise-rotating eddy spun off from a western boundary current (like the Gulf Stream) is a warm-core ring. It traps warm Sargasso Sea water and moves into cooler slope water. Cold-core rings rotate counterclockwise and trap cold slope water inside."
    },
    {
        id: 15,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "extra-hard",
        type: "mc",
        question: "The net water transport in the Ekman layer is directed at what angle relative to the wind direction in the Northern Hemisphere?",
        options: [
            { label: "A", text: "45° to the right" },
            { label: "B", text: "90° to the right" },
            { label: "C", text: "45° to the left" },
            { label: "D", text: "90° to the left" }
        ],
        correctAnswer: "B",
        explanation: "While surface water is deflected 45° to the right of the wind in the NH, the integrated net Ekman transport over the entire Ekman layer is 90° to the right. This 90° transport is crucial for coastal upwelling—when wind blows parallel to a west coast, water moves offshore, drawing up deep water."
    },
    
    // ========== LARGE-SCALE CIRCULATION (c) ==========
    {
        id: 16,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "medium",
        type: "short",
        question: "Explain the process of thermohaline circulation and identify where deep water formation primarily occurs.",
        correctAnswer: "Density-driven circulation caused by temperature and salinity differences. Deep water forms in North Atlantic (Norwegian/Labrador Seas) and around Antarctica.",
        explanation: "Thermohaline circulation is driven by density differences caused by temperature (thermo) and salinity (haline). Cold, salty water is dense and sinks. Primary deep water formation occurs: (1) North Atlantic - Norwegian and Labrador Seas form North Atlantic Deep Water (NADW); (2) Antarctica - forms Antarctic Bottom Water (AABW), the densest water mass."
    },
    {
        id: 17,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "tough",
        type: "long",
        question: "Explain how the global thermohaline circulation (the \"global conveyor belt\") transports heat around the planet. Include: (1) locations of major deep water formation, (2) the role of salinity and temperature in driving circulation, and (3) how this affects climate in different regions.",
        correctAnswer: "The conveyor belt transports heat from equator to poles. NADW forms in North Atlantic when Gulf Stream water cools and sinks. AABW forms around Antarctica. Warm surface water replaces sinking water, moderating European climate.",
        explanation: "The global conveyor belt: (1) Deep water formation: NADW forms in Norwegian/Labrador Seas when warm, salty Gulf Stream water cools, becomes dense, and sinks. AABW forms around Antarctica from very cold, saline water. (2) Driving forces: Cold water is denser; high salinity increases density. Sinking water creates a 'pull' that draws warm surface water poleward. (3) Climate effects: Warm Gulf Stream water traveling north releases heat, keeping Western Europe ~5-10°C warmer than similar latitudes. The complete circuit takes ~1000 years."
    },
    {
        id: 18,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "tough",
        type: "mc",
        question: "North Atlantic Deep Water (NADW) forms primarily in which location(s)?",
        options: [
            { label: "A", text: "The Gulf of Mexico and Caribbean Sea" },
            { label: "B", text: "The Norwegian and Labrador Seas" },
            { label: "C", text: "The Mediterranean Sea" },
            { label: "D", text: "The equatorial Atlantic" }
        ],
        correctAnswer: "B",
        explanation: "NADW forms primarily in the Norwegian Sea and Labrador Sea where warm, salty Gulf Stream water cools, increases in density, and sinks to form a distinct water mass. Mediterranean water is warm and salty but forms a different intermediate water mass."
    },
    {
        id: 19,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "extra-hard",
        type: "data",
        question: `A CTD (Conductivity-Temperature-Depth) device records the following profile at a station in the North Atlantic:

| Depth (m) | Temp (°C) | Salinity (‰) |
|-----------|-----------|--------------|
| 0 | 18 | 36.5 |
| 200 | 15 | 36.2 |
| 800 | 8 | 35.5 |
| 1500 | 4 | 34.9 |
| 3000 | 2.5 | 34.8 |
| 4500 | 1.8 | 34.7 |

Identify the water mass likely present at 1500m depth based on its T-S characteristics. Describe how this water mass formed and explain why it's found at that particular depth. What research tools besides CTD devices are used to track deep water masses?`,
        correctAnswer: "North Atlantic Deep Water (NADW)",
        explanation: "At 1500m with T=4°C and S=34.9‰, this is characteristic of North Atlantic Deep Water (NADW). NADW forms when warm, salty Gulf Stream water reaches the Norwegian/Labrador Seas, cools (releasing heat to atmosphere), becomes dense, and sinks. It settles at mid-depths (1500-4000m) because it's denser than surface water but less dense than Antarctic Bottom Water below. Research tools include: Argo floats (autonomous profilers), chemical tracers (CFCs, tritium), acoustic current meters, satellite altimetry (for surface), and sediment cores for historical circulation patterns."
    },
    
    // ========== WAVES (d) ==========
    {
        id: 20,
        topic: "waves",
        topicName: "Waves",
        difficulty: "easy",
        type: "mc",
        question: "The opposite of a wave crest is called a wave:",
        options: [
            { label: "A", text: "Height" },
            { label: "B", text: "Period" },
            { label: "C", text: "Trough" },
            { label: "D", text: "Length" }
        ],
        correctAnswer: "C",
        explanation: "A wave trough is the lowest point of a wave, opposite to the crest (highest point). Wave height is measured from trough to crest. Wavelength is the distance between successive crests (or troughs), and period is the time for one complete wave to pass."
    },
    {
        id: 21,
        topic: "waves",
        topicName: "Waves",
        difficulty: "easy",
        type: "mc",
        question: "A region where waves break is called a:",
        options: [
            { label: "A", text: "Break zone" },
            { label: "B", text: "Surf zone" },
            { label: "C", text: "Crash region" },
            { label: "D", text: "Swash zone" }
        ],
        correctAnswer: "B",
        explanation: "The surf zone is the area where waves break as they approach the shore. As waves enter shallow water, they slow down and steepen until they become unstable and break. The swash zone is where water rushes up the beach after waves break."
    },
    {
        id: 22,
        topic: "waves",
        topicName: "Waves",
        difficulty: "medium",
        type: "mc",
        question: "The unobstructed distance over which wind blows across the water surface is called:",
        options: [
            { label: "A", text: "Wave period" },
            { label: "B", text: "Fetch" },
            { label: "C", text: "Wavelength" },
            { label: "D", text: "Amplitude" }
        ],
        correctAnswer: "B",
        explanation: "Fetch is the unobstructed distance over which wind blows to generate waves. Larger fetch means more energy transfer and larger waves. Wave size depends on three factors: wind speed, wind duration, and fetch."
    },
    {
        id: 23,
        topic: "waves",
        topicName: "Waves",
        difficulty: "tough",
        type: "mc",
        question: "Storm surge differs from a tsunami in that storm surge is primarily caused by:",
        options: [
            { label: "A", text: "Underwater earthquakes displacing large volumes of water" },
            { label: "B", text: "Low atmospheric pressure and wind stress pushing water toward shore" },
            { label: "C", text: "Submarine landslides on continental slopes" },
            { label: "D", text: "Volcanic eruptions creating displacement waves" }
        ],
        correctAnswer: "B",
        explanation: "Storm surge is caused by low atmospheric pressure (causing water to rise) and strong onshore winds pushing water toward the coast during hurricanes and intense storms. Tsunamis are caused by sudden seafloor displacement from earthquakes, submarine landslides, or volcanic eruptions."
    },
    {
        id: 24,
        topic: "waves",
        topicName: "Waves",
        difficulty: "extra-hard",
        type: "long",
        question: `A tsunami is generated by an earthquake 5000 km offshore. The average ocean depth along its path is 4000 m.

Using the formula for shallow-water wave velocity: v = √(g × d), where g = 9.8 m/s² and d = depth:

a) Calculate the tsunami's approximate velocity in m/s and km/hr
b) Estimate how long before the tsunami reaches shore
c) Explain why the tsunami's wave height increases dramatically as it approaches the coast (wave shoaling)
d) Compare the wavelength and period of a tsunami to ordinary wind-generated waves`,
        correctAnswer: "v ≈ 198 m/s or 713 km/hr; arrival time ≈ 7 hours",
        explanation: `a) v = √(9.8 × 4000) = √39,200 ≈ 198 m/s = 713 km/hr (similar to jet aircraft!)

b) Time = distance/velocity = 5000 km ÷ 713 km/hr ≈ 7 hours

c) Wave shoaling occurs because wave energy must be conserved. As water depth decreases, wave velocity decreases (v = √(gd)). Since energy flux must remain constant, and wavelength decreases, wave height must increase dramatically. A 1m open-ocean tsunami can become 10-30m at shore.

d) Tsunamis have:
- Wavelength: 100-200 km (vs. wind waves: 100-300 m)
- Period: 10-60 minutes (vs. wind waves: 5-20 seconds)
- Speed: 500-900 km/hr in deep water (vs. wind waves: 8-100 km/hr)
Tsunamis are shallow-water waves even in deep ocean because wavelength >> water depth.`
    },
    
    // ========== TIDES (e) ==========
    {
        id: 25,
        topic: "tides",
        topicName: "Tides",
        difficulty: "easy",
        type: "mc",
        question: "Spring tides occur when:",
        options: [
            { label: "A", text: "The Sun and Moon are at right angles to Earth" },
            { label: "B", text: "The Moon is at first quarter phase" },
            { label: "C", text: "The Sun, Moon, and Earth are aligned during new or full moon" },
            { label: "D", text: "The Moon is at its farthest point from Earth" }
        ],
        correctAnswer: "C",
        explanation: "Spring tides occur during new and full moons when the Sun, Moon, and Earth are aligned (syzygy). The gravitational pulls add together, creating higher high tides and lower low tides. The name 'spring' refers to 'springing forth,' not the season."
    },
    {
        id: 26,
        topic: "tides",
        topicName: "Tides",
        difficulty: "easy",
        type: "mc",
        question: "A location experiencing one high tide and one low tide per day has what type of tidal pattern?",
        options: [
            { label: "A", text: "Semidiurnal" },
            { label: "B", text: "Diurnal" },
            { label: "C", text: "Mixed" },
            { label: "D", text: "Neap" }
        ],
        correctAnswer: "B",
        explanation: "Diurnal tides have one high and one low tide per day (period of ~24 hours 50 minutes). Semidiurnal tides have two roughly equal highs and lows per day. Mixed tides have two unequal highs and lows per day."
    },
    {
        id: 27,
        topic: "tides",
        topicName: "Tides",
        difficulty: "medium",
        type: "mc",
        question: "How long does it take for a semidiurnal tide to go from high to low?",
        options: [
            { label: "A", text: "12 hrs 25 minutes" },
            { label: "B", text: "3 hrs 14.5 minutes" },
            { label: "C", text: "24 hrs 50 minutes" },
            { label: "D", text: "6 hrs 12.5 minutes" }
        ],
        correctAnswer: "D",
        explanation: "A semidiurnal tide has two high and two low tides in about 24 hours 50 minutes (one lunar day). Therefore, from high to low is approximately 24:50 ÷ 4 = 6 hours 12.5 minutes."
    },
    {
        id: 28,
        topic: "tides",
        topicName: "Tides",
        difficulty: "medium",
        type: "short",
        question: "Explain what causes the phenomenon of tidal resonance and provide an example of where this produces extremely high tidal ranges.",
        correctAnswer: "Tidal resonance occurs when a basin's natural frequency matches tidal forcing period. Example: Bay of Fundy has 12-16m tides due to resonance.",
        explanation: "Tidal resonance occurs when the natural oscillation period of a bay or basin closely matches the tidal period (~12.42 hours for semidiurnal). Water sloshes back and forth, amplifying tides with each cycle. The Bay of Fundy (Canada) has the world's highest tides (12-16m range) because its natural period (~12 hours) nearly matches the semidiurnal tidal period, creating resonant amplification."
    },
    {
        id: 29,
        topic: "tides",
        topicName: "Tides",
        difficulty: "tough",
        type: "data",
        question: `A tidal station records the following data over 25 hours:

| Time | Water Level |
|------|-------------|
| 0:00 | 1.8 m |
| 6:15 | 0.3 m |
| 12:25 | 1.9 m |
| 18:40 | 0.2 m |
| 24:50 | 1.7 m |

What type of tidal pattern does this station experience? Calculate the tidal range and the approximate tidal period. How would this pattern differ at a location with mixed semidiurnal tides?`,
        correctAnswer: "Semidiurnal; tidal range ≈ 1.6m; period ≈ 12 hrs 25 min",
        explanation: "This is a semidiurnal tidal pattern with two nearly equal high tides (~1.8m) and two nearly equal low tides (~0.25m) per day. Tidal range = 1.8 - 0.2 = 1.6m (approximately). Tidal period from high to high = 12:25 - 0:00 = 12 hrs 25 min. Mixed semidiurnal tides would show two highs and two lows per day, but with significantly unequal heights (e.g., highs of 1.9m and 1.2m, creating 'higher high water' and 'lower high water')."
    },
    {
        id: 30,
        topic: "tides",
        topicName: "Tides",
        difficulty: "tough",
        type: "mc",
        question: "What is an ebb current?",
        options: [
            { label: "A", text: "Offshore flows of water found at beaches where waves break across the surf zone" },
            { label: "B", text: "A flow of water going east to west usually found near rivers with waterfalls nearby" },
            { label: "C", text: "When the tide is advancing and the current is strengthening" },
            { label: "D", text: "When the tide is receding and the current is directed back out to sea" }
        ],
        correctAnswer: "D",
        explanation: "An ebb current (or ebb tide) occurs when the tide is falling and water flows seaward. The opposite is a flood current, when the tide is rising and water flows landward. Slack water occurs at the transition between ebb and flood when currents are minimal."
    },
    
    // ========== COASTAL FEATURES (f) ==========
    {
        id: 31,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "easy",
        type: "short",
        question: "Define an estuary and explain why these environments are ecologically important.",
        correctAnswer: "An estuary is a partially enclosed coastal body where freshwater from rivers mixes with saltwater from the ocean. They are important nursery habitats with high productivity.",
        explanation: "An estuary is a semi-enclosed coastal body of water where freshwater from rivers mixes with saltwater from the ocean, creating brackish water with variable salinity. Ecological importance: (1) High productivity from nutrient inputs; (2) Critical nursery habitat for fish, shellfish, and birds; (3) Filter pollutants and sediments; (4) Protect coastlines from storms."
    },
    {
        id: 32,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "short",
        question: "Describe the difference between rip currents and longshore currents, and explain why rip currents are dangerous for swimmers.",
        correctAnswer: "Longshore currents flow parallel to shore; rip currents flow perpendicular to shore (seaward). Rip currents are dangerous because they can quickly carry swimmers offshore.",
        explanation: "Longshore currents flow parallel to the beach, caused by waves approaching at an angle. They transport sediment along the coast (littoral drift). Rip currents are narrow, powerful flows moving perpendicular to the beach, carrying water seaward through breaks in sandbars. Danger: Rip currents can reach 8+ ft/sec, faster than Olympic swimmers. They pull swimmers away from shore rapidly. Safety: Swim parallel to shore to escape, then return at an angle."
    },
    {
        id: 33,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "mc",
        question: "Which process is primarily responsible for the formation of coral atolls?",
        options: [
            { label: "A", text: "Volcanic island subsidence combined with continued coral growth" },
            { label: "B", text: "Rising sea levels flooding existing barrier reefs" },
            { label: "C", text: "Sediment accumulation from longshore drift" },
            { label: "D", text: "Tectonic uplift of fringing reefs" }
        ],
        correctAnswer: "A",
        explanation: "Darwin's theory of atoll formation: (1) Fringing reef forms around a volcanic island; (2) As the island subsides (or sea level rises), coral grows upward to stay in sunlight; (3) A barrier reef forms with a lagoon; (4) The island completely submerges, leaving a ring-shaped atoll with a central lagoon."
    },
    {
        id: 34,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "tough",
        type: "mc",
        question: "Coastal upwelling occurs when:",
        options: [
            { label: "A", text: "Storm surge pushes surface water onto the shore" },
            { label: "B", text: "Ekman transport moves surface water offshore, allowing deep water to rise" },
            { label: "C", text: "Tidal currents bring deep water to the surface twice daily" },
            { label: "D", text: "Thermohaline circulation reaches the continental shelf" }
        ],
        correctAnswer: "B",
        explanation: "Coastal upwelling occurs when winds blow parallel to a coastline (equatorward along west coasts), and Ekman transport moves surface water offshore (90° to the wind). Cold, nutrient-rich deep water rises to replace it. This creates highly productive fishing grounds (e.g., Peru, California coast)."
    },
    {
        id: 35,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "extra-hard",
        type: "long",
        question: `A coastal management team is studying a barrier island system that has been experiencing significant erosion. Explain:
1) How longshore drift and littoral transport contribute to barrier island dynamics
2) The role of sea level rise in accelerating barrier island erosion
3) How engineering structures like groins and jetties can both help and harm adjacent coastal areas
4) The concept of coastal downwelling versus upwelling and its effects on local ecosystems`,
        correctAnswer: "Comprehensive answer addressing all four points with specific mechanisms and examples.",
        explanation: `1) Longshore drift moves sediment parallel to shore, constantly reshaping barrier islands. Inlets migrate, and islands naturally roll over themselves landward. Sediment budget must balance: if more leaves than arrives, erosion occurs.

2) Sea level rise accelerates erosion by: (a) increasing wave energy reaching the island, (b) drowning backbarrier marshes that anchor islands, (c) narrowing the island as it cannot migrate landward fast enough, (d) increasing storm surge flooding frequency.

3) Groins (perpendicular to shore) trap sand on updrift side but starve downdrift beaches of sediment. Jetties protect inlets but interrupt natural sand bypassing, causing severe downdrift erosion. Seawalls reflect wave energy, often increasing erosion at adjacent unprotected areas.

4) Upwelling brings cold, nutrient-rich water up → high productivity, abundant fisheries. Downwelling pushes surface water down → low nutrients, lower productivity but delivers oxygen to deep water and transports organic material downward.`
    },
    
    // ========== GEOLOGICAL OCEANOGRAPHY (g) ==========
    {
        id: 36,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "easy",
        type: "mc",
        question: "What type of rock primarily composes the oceanic crust?",
        options: [
            { label: "A", text: "Granite" },
            { label: "B", text: "Basalt" },
            { label: "C", text: "Limestone" },
            { label: "D", text: "Sandstone" }
        ],
        correctAnswer: "B",
        explanation: "Oceanic crust is primarily composed of basalt, a dense, dark-colored igneous rock formed from rapid cooling of magma at mid-ocean ridges. Continental crust is primarily granite, which is less dense. This density difference is why oceanic crust subducts beneath continental crust at convergent boundaries."
    },
    {
        id: 37,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "easy",
        type: "mc",
        question: "Which ocean floor feature represents the deepest parts of the ocean?",
        options: [
            { label: "A", text: "Abyssal plains" },
            { label: "B", text: "Mid-ocean ridges" },
            { label: "C", text: "Trenches" },
            { label: "D", text: "Continental shelves" }
        ],
        correctAnswer: "C",
        explanation: "Oceanic trenches are the deepest features, formed at subduction zones where oceanic crust descends into the mantle. The Mariana Trench reaches nearly 11,000m depth. Abyssal plains (4000-6000m) are flat seafloor regions; mid-ocean ridges rise above the abyssal plains."
    },
    {
        id: 38,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "A flat-topped seamount that was eroded at sea level before subsiding is called a:",
        options: [
            { label: "A", text: "Atoll" },
            { label: "B", text: "Guyot" },
            { label: "C", text: "Abyssal hill" },
            { label: "D", text: "Volcanic arc" }
        ],
        correctAnswer: "B",
        explanation: "A guyot (or tablemount) is a flat-topped seamount. Originally a volcanic island, it was eroded flat by wave action at sea level, then subsided below the surface as the oceanic plate moved away from the spreading ridge. Atolls are coral reef structures; seamounts with peaks are not guyots."
    },
    {
        id: 39,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "short",
        question: "Describe three types of evidence that support seafloor spreading, including the pattern of magnetic anomalies on the ocean floor.",
        correctAnswer: "Evidence includes: symmetric magnetic stripes, age of ocean floor increasing away from ridges, sediment thickness increasing away from ridges, heat flow highest at ridges.",
        explanation: "Evidence for seafloor spreading: (1) Magnetic anomalies: Symmetric 'zebra stripes' of normal/reversed polarity parallel to ridges record Earth's magnetic reversals as new crust forms and moves away. (2) Age patterns: Oceanic crust is youngest at ridges and progressively older toward continents. (3) Sediment thickness: Increases away from ridges (more time to accumulate). (4) Heat flow: Highest at ridges where hot magma rises. (5) Earthquake patterns: Shallow earthquakes along ridges, deeper earthquakes at subduction zones."
    },
    {
        id: 40,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "long",
        question: "Describe the major features you would encounter traveling from the shoreline of a passive continental margin to a mid-ocean ridge. Include at least six distinct features and explain how each was formed.",
        correctAnswer: "Continental shelf → slope → rise → abyssal plain → abyssal hills → mid-ocean ridge. Each has distinct formation process.",
        explanation: `Journey from shore to ridge:

1) **Continental Shelf**: Shallow, flat extension of the continent (0-200m depth). Formed by sediment deposition and shaped during past sea level changes.

2) **Continental Slope**: Steep drop-off (200-4000m). Marks the true edge of the continent; often cut by submarine canyons carved by turbidity currents.

3) **Continental Rise**: Gentle slope at base of continental slope. Formed by accumulated sediment from turbidity currents (submarine fans).

4) **Abyssal Plain**: Flat, sediment-covered seafloor (4000-6000m). The flattest places on Earth, formed by layers of fine sediment burying underlying topography.

5) **Abyssal Hills**: Low, rolling hills of volcanic origin on oceanic crust. Formed at the ridge and moved away; partially buried by sediment near continents.

6) **Mid-Ocean Ridge**: Underwater mountain range (rising to 2000-3000m depth). Formed by volcanic activity at divergent plate boundary where new oceanic crust is created.`
    },
    {
        id: 41,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "extra-hard",
        type: "mc",
        question: "Turbidity currents are significant because they:",
        options: [
            { label: "A", text: "Create the thermocline by mixing surface and deep waters" },
            { label: "B", text: "Transport large volumes of sediment to abyssal plains, forming turbidites" },
            { label: "C", text: "Erode mid-ocean ridges, creating transform faults" },
            { label: "D", text: "Generate tsunamis that affect coastal regions" }
        ],
        correctAnswer: "B",
        explanation: "Turbidity currents are underwater 'avalanches' of sediment-laden water that flow down continental slopes at high speeds. They carve submarine canyons and deposit characteristic graded beds called turbidites on the abyssal plain. These deposits make abyssal plains the flattest surfaces on Earth."
    },
    
    // ========== CLIMATE VARIABILITY (h) ==========
    {
        id: 42,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "medium",
        type: "mc",
        question: "During an El Niño event, which of the following typically occurs in the eastern Pacific?",
        options: [
            { label: "A", text: "Stronger trade winds and cooler surface temperatures" },
            { label: "B", text: "Weaker trade winds and warmer surface temperatures" },
            { label: "C", text: "Increased upwelling and higher productivity" },
            { label: "D", text: "Formation of more hurricanes in the eastern Pacific" }
        ],
        correctAnswer: "B",
        explanation: "During El Niño, trade winds weaken or reverse, allowing warm water to slosh eastward across the Pacific. Eastern Pacific SST rises, suppressing upwelling and reducing productivity. This causes fishery collapses in Peru and altered weather patterns globally."
    },
    {
        id: 43,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "medium",
        type: "mc",
        question: "Why is there less upwelling during El Niño?",
        options: [
            { label: "A", text: "Increase of the transition zone between surface and deep ocean" },
            { label: "B", text: "Weak winds" },
            { label: "C", text: "More trade winds" },
            { label: "D", text: "Both A and B" }
        ],
        correctAnswer: "D",
        explanation: "During El Niño, trade winds weaken (reducing Ekman transport that drives upwelling) AND the thermocline deepens in the eastern Pacific (so even if some upwelling occurs, it brings up warm thermocline water instead of cold, nutrient-rich deep water)."
    },
    {
        id: 44,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "tough",
        type: "mc",
        question: "The Pacific Decadal Oscillation (PDO) differs from ENSO primarily because:",
        options: [
            { label: "A", text: "PDO affects only the Southern Hemisphere" },
            { label: "B", text: "PDO operates on a longer time scale (20-30 years vs. 2-7 years)" },
            { label: "C", text: "PDO involves changes in salinity rather than temperature" },
            { label: "D", text: "PDO causes cooling rather than warming" }
        ],
        correctAnswer: "B",
        explanation: "The PDO is a long-lived pattern of Pacific climate variability with phases lasting 20-30 years, compared to ENSO's 2-7 year cycles. PDO affects North Pacific SST patterns and modulates the intensity of ENSO events. Both involve temperature changes, and PDO has both warm and cool phases."
    },
    {
        id: 45,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "extra-hard",
        type: "short",
        question: "Explain the Southern Annular Mode (SAM) and its effects on ocean circulation and climate in the Southern Hemisphere. How does SAM influence the strength of the Antarctic Circumpolar Current?",
        correctAnswer: "SAM is the north-south movement of westerly wind belt around Antarctica. Positive SAM strengthens westerlies, intensifies ACC, and affects Southern Ocean upwelling.",
        explanation: "The Southern Annular Mode (SAM) describes the north-south movement of the westerly wind belt around Antarctica. Positive SAM: Westerlies contract toward Antarctica, strengthening winds → intensifies the Antarctic Circumpolar Current (ACC), increases Southern Ocean upwelling, draws up more CO₂-rich deep water. Negative SAM: Westerlies expand northward, weakening winds around Antarctica. SAM affects Australian rainfall (positive SAM = drier), Antarctic sea ice extent, and the Southern Ocean's role in global carbon cycling. It's the dominant mode of variability in Southern Hemisphere extratropics."
    },
    {
        id: 46,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "extra-hard",
        type: "long",
        question: `Ocean acidification is one major consequence of increasing atmospheric CO₂. Explain:
1) The chemical process by which CO₂ absorption lowers ocean pH
2) How acidification affects marine organisms, particularly those with calcium carbonate shells
3) The relationship between acidification, thermal expansion, and sea level rise as interconnected climate change effects`,
        correctAnswer: "CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻, lowering pH. Affects calcifying organisms. All are interconnected ocean climate impacts.",
        explanation: `1) **Chemical process**: CO₂ + H₂O → H₂CO₃ (carbonic acid) → H⁺ + HCO₃⁻ → 2H⁺ + CO₃²⁻. Added H⁺ ions lower pH (more acidic). Ocean pH has dropped from 8.2 to 8.1 since pre-industrial times—a 30% increase in acidity.

2) **Effects on organisms**: Lower pH reduces carbonate ion (CO₃²⁻) availability needed for calcification. Organisms affected include: corals, pteropods, coccolithophores, oysters, mussels. Shell dissolution occurs when pH drops below saturation horizon. Food web disruption as base of food chain is affected.

3) **Interconnected effects**: 
- Acidification: CO₂ absorption changes ocean chemistry
- Thermal expansion: Warming water expands, raising sea level
- Ice melt: Warming melts glaciers/ice sheets → sea level rise
- Deoxygenation: Warmer water holds less O₂
All stem from excess CO₂/warming, and all stress marine ecosystems simultaneously. Coral reefs face the triple threat of warming (bleaching), acidification (reduced calcification), and sea level rise (drowning if growth can't keep pace).`
    },
    
    // ========== ADDITIONAL QUESTIONS TO REACH 60+ ==========
    {
        id: 47,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "easy",
        type: "mc",
        question: "When does upwelling happen?",
        options: [
            { label: "A", text: "When wind moves warm, nutrient-poor water, prompting it to be replaced by cooler, nutrient-rich water" },
            { label: "B", text: "When water is displaced due to disturbances and the ecosystem fails to thrive" },
            { label: "C", text: "When the water gets very polluted and the top water starts to sink" },
            { label: "D", text: "When murky water meets fresh water and they mix" }
        ],
        correctAnswer: "A",
        explanation: "Upwelling occurs when surface water is pushed away by wind (via Ekman transport), and cold, nutrient-rich deep water rises to replace it. This creates highly productive zones for phytoplankton and fisheries."
    },
    {
        id: 48,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "easy",
        type: "mc",
        question: "What growth does coastal upwelling directly support?",
        options: [
            { label: "A", text: "Sharks" },
            { label: "B", text: "Seaweed and plankton" },
            { label: "C", text: "Coral" },
            { label: "D", text: "All of the above" }
        ],
        correctAnswer: "B",
        explanation: "Coastal upwelling brings nutrient-rich water to the surface, directly supporting the growth of phytoplankton (microscopic plants) and seaweed/kelp. These form the base of the food chain, indirectly supporting fish, marine mammals, and seabirds."
    },
    {
        id: 49,
        topic: "tides",
        topicName: "Tides",
        difficulty: "medium",
        type: "mc",
        question: "What is the difference between mixed and semidiurnal tides?",
        options: [
            { label: "A", text: "They are the same thing" },
            { label: "B", text: "One of these tides occurs in the ocean and the other occurs in a sea" },
            { label: "C", text: "One has more high tides in a day than the other" },
            { label: "D", text: "One of these tides rises and falls at the same levels but the other rises and falls at unequal levels" }
        ],
        correctAnswer: "D",
        explanation: "Both mixed and semidiurnal tides have two highs and two lows per day. The difference: semidiurnal tides have roughly equal high tides and equal low tides, while mixed semidiurnal tides have unequal highs (higher high water, lower high water) and unequal lows."
    },
    {
        id: 50,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "Ocean-ocean convergence can cause what?",
        options: [
            { label: "A", text: "The formation of coral reefs" },
            { label: "B", text: "Earthquakes and tsunamis to form" },
            { label: "C", text: "Rip currents to form" },
            { label: "D", text: "All of the above" }
        ],
        correctAnswer: "B",
        explanation: "When two oceanic plates converge, one subducts beneath the other. This creates deep ocean trenches, volcanic island arcs, and frequent earthquakes. Major earthquakes at these boundaries can trigger devastating tsunamis."
    },
    {
        id: 51,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "Is oceanic or continental crust denser?",
        options: [
            { label: "A", text: "Oceanic" },
            { label: "B", text: "Continental" },
            { label: "C", text: "Around the same" },
            { label: "D", text: "It varies by location" }
        ],
        correctAnswer: "A",
        explanation: "Oceanic crust (basalt, ~3.0 g/cm³) is denser than continental crust (granite, ~2.7 g/cm³). This density difference explains why oceanic crust always subducts beneath continental crust at convergent boundaries, and why continents 'float' higher on the mantle."
    },
    {
        id: 52,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "short",
        question: "What is a submarine canyon and how is it formed?",
        correctAnswer: "A submarine canyon is a steep-sided valley cutting through the continental shelf and slope, formed primarily by turbidity currents.",
        explanation: "Submarine canyons are deep, V-shaped valleys that cut across the continental shelf and slope. They form primarily through erosion by turbidity currents—dense, sediment-laden flows that rush down the slope like underwater avalanches. Some canyons (like Monterey Canyon) may have originated as river valleys during lower sea levels and were later deepened by turbidity currents."
    },
    {
        id: 53,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "easy",
        type: "mc",
        question: "How are deep ocean currents caused?",
        options: [
            { label: "A", text: "By a large amount of sinking surface water" },
            { label: "B", text: "By upwelling" },
            { label: "C", text: "By oceanic crust disturbances" },
            { label: "D", text: "By the Coriolis effect alone" }
        ],
        correctAnswer: "A",
        explanation: "Deep ocean currents (thermohaline circulation) are caused by the sinking of dense surface water in polar regions. When surface water becomes cold and/or salty enough to become denser than the water below, it sinks and flows along the ocean bottom."
    },
    {
        id: 54,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "easy",
        type: "mc",
        question: "Brianna goes swimming in the ocean. She notices that the surface water is much warmer than the water at her feet in deeper water. What Earth process explains how the surface water was heated?",
        options: [
            { label: "A", text: "Gravity" },
            { label: "B", text: "Radiation from the sun" },
            { label: "C", text: "Convection cells in the ocean" },
            { label: "D", text: "Conduction of heat from Earth's crust" }
        ],
        correctAnswer: "B",
        explanation: "Solar radiation heats the ocean surface. Sunlight penetrates only the upper layers of the ocean (photic zone), warming the surface water. This heat doesn't easily mix with deeper, colder water due to the thermocline barrier."
    },
    {
        id: 55,
        topic: "tides",
        topicName: "Tides",
        difficulty: "medium",
        type: "mc",
        question: "What force drives tidal resonance?",
        options: [
            { label: "A", text: "Gravitational pull of the Moon" },
            { label: "B", text: "Wind" },
            { label: "C", text: "Tides (tidal forcing)" },
            { label: "D", text: "The Coriolis Effect" }
        ],
        correctAnswer: "C",
        explanation: "Tidal resonance is driven by tidal forcing—the regular tidal cycle acting on a basin whose natural oscillation period matches the tidal period. The gravitational pull creates the tides, but resonance amplifies them when the forcing frequency matches the basin's natural frequency."
    },
    {
        id: 56,
        topic: "waves",
        topicName: "Waves",
        difficulty: "medium",
        type: "mc",
        question: "A series of long waves that are created far from shore in deeper water is also known as what?",
        options: [
            { label: "A", text: "Wave chain" },
            { label: "B", text: "Long wave group" },
            { label: "C", text: "Swell" },
            { label: "D", text: "Storming wave cluster" }
        ],
        correctAnswer: "C",
        explanation: "Swell consists of long-period, long-wavelength waves that have traveled far from their origin (the storm that generated them). As waves travel away from a storm, shorter waves die out, leaving smooth, regular swell that can travel thousands of kilometers across oceans."
    },
    {
        id: 57,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "medium",
        type: "mc",
        question: "Which of the following is NOT one of the first signs of an El Niño?",
        options: [
            { label: "A", text: "Fall in air pressure over the Indian Ocean" },
            { label: "B", text: "Fall in air pressure over Tahiti" },
            { label: "C", text: "Rain in the northern Peruvian deserts" },
            { label: "D", text: "Trade winds in the south Pacific weaken" }
        ],
        correctAnswer: "A",
        explanation: "El Niño is characterized by: falling pressure at Tahiti (eastern Pacific), rising pressure at Darwin (western Pacific), weakening trade winds, warming eastern Pacific, and unusual rain in normally dry Peru. The Indian Ocean has its own oscillation (Indian Ocean Dipole) that may interact with ENSO but isn't a primary indicator."
    },
    {
        id: 58,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "short",
        question: "What are the four main types of marine sediments? Provide one example of each.",
        correctAnswer: "Lithogenous (from land/rock), biogenous (from organisms), hydrogenous (from seawater), cosmogenous (from space).",
        explanation: "Four sediment types: (1) Lithogenous/Terrigenous: eroded from continents (clay, sand, volcanic ash). (2) Biogenous: from organisms (calcareous ooze from foraminifera, siliceous ooze from diatoms/radiolarians). (3) Hydrogenous/Authigenic: precipitated from seawater (manganese nodules, evaporites). (4) Cosmogenous: from space (micrometeorites, cosmic spherules)—rarest type."
    },
    {
        id: 59,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "tough",
        type: "mc",
        question: "Mediterranean Water is found at intermediate depths in the Atlantic because it is:",
        options: [
            { label: "A", text: "Cold and fresh" },
            { label: "B", text: "Warm and salty" },
            { label: "C", text: "Cold and salty" },
            { label: "D", text: "Warm and fresh" }
        ],
        correctAnswer: "B",
        explanation: "Mediterranean Water is warm (12-13°C) and very salty (36.5‰) due to high evaporation in the Mediterranean Sea. When it flows into the Atlantic through the Strait of Gibraltar, its high salinity makes it denser than Atlantic surface water but less dense than cold deep water, so it spreads at intermediate depths (1000-1500m)."
    },
    {
        id: 60,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "tough",
        type: "short",
        question: "What is a tombolo and how does it form?",
        correctAnswer: "A tombolo is a sand bar connecting an island to the mainland. It forms when waves refract around an island, depositing sediment in the wave shadow.",
        explanation: "A tombolo is a depositional landform—a sand or gravel bar that connects an offshore island to the mainland. Formation: Waves approaching an island refract (bend) around it, creating a 'wave shadow' zone of reduced energy behind the island. Sediment carried by longshore drift accumulates in this low-energy zone, eventually building a connection to shore."
    },
    {
        id: 61,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "tough",
        type: "mc",
        question: "As water cools from 4°C to 0°C, its density:",
        options: [
            { label: "A", text: "Increases" },
            { label: "B", text: "Decreases" },
            { label: "C", text: "Remains the same" },
            { label: "D", text: "Fluctuates randomly" }
        ],
        correctAnswer: "B",
        explanation: "Freshwater has maximum density at 4°C. Below 4°C, water becomes LESS dense as hydrogen bonds form a more open crystalline structure approaching ice formation. This unusual property allows ice to float and lakes to freeze from the top down, protecting aquatic life. (Note: High salinity seawater behaves slightly differently, with maximum density closer to the freezing point.)"
    },
    {
        id: 62,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "tough",
        type: "short",
        question: "What is the Southern Oscillation and how is it related to El Niño?",
        correctAnswer: "The Southern Oscillation is the atmospheric pressure seesaw between the eastern and western Pacific. It's the atmospheric component of ENSO; El Niño is the oceanic component.",
        explanation: "The Southern Oscillation is measured by the pressure difference between Tahiti (eastern Pacific) and Darwin, Australia (western Pacific). Normally, pressure is low at Darwin and high at Tahiti. During El Niño, this reverses. The Southern Oscillation Index (SOI) tracks this pattern. ENSO (El Niño-Southern Oscillation) combines the ocean warming (El Niño) with the atmospheric pressure pattern (Southern Oscillation) as a coupled ocean-atmosphere phenomenon."
    },
    {
        id: 63,
        topic: "waves",
        topicName: "Waves",
        difficulty: "easy",
        type: "mc",
        question: "Ocean waves move water:",
        options: [
            { label: "A", text: "Long distances horizontally" },
            { label: "B", text: "In a circular motion" },
            { label: "C", text: "Only vertically" },
            { label: "D", text: "Toward the shore at all depths" }
        ],
        correctAnswer: "B",
        explanation: "In deep water, wave energy moves water particles in circular orbital paths. Water particles return nearly to their original position after each wave passes—the wave transmits energy, not water mass. This is why a floating object bobs up and down but doesn't travel with the wave until it reaches shallow water."
    },
    {
        id: 64,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "extra-hard",
        type: "short",
        question: "Explain the concept of the Calcium Carbonate Compensation Depth (CCD) and its importance in marine sediment distribution.",
        correctAnswer: "The CCD is the depth below which calcium carbonate dissolves faster than it accumulates. Below this depth, only siliceous and clay sediments exist.",
        explanation: "The CCD (Calcium Carbonate Compensation Depth) is typically 4000-5000m depth. Below this level, the cold, CO₂-rich, high-pressure water dissolves CaCO₃ faster than it can accumulate from settling shells. Above the CCD: calcareous ooze (foraminifera, coccolithophores) accumulates. Below the CCD: only siliceous ooze (diatoms, radiolarians) and clay accumulate. The CCD is shallower in productive areas and deeper in low-productivity regions. This explains why abyssal plains below the CCD have different sediment than shallower seafloor."
    },
    {
        id: 65,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "medium",
        type: "short",
        question: "Name three research tools used in oceanographic studies and describe what each measures.",
        correctAnswer: "CTD (conductivity, temperature, depth); Argo floats (temperature/salinity profiles); sediment cores (historical climate records).",
        explanation: "Oceanographic research tools: (1) CTD devices: measure Conductivity (→salinity), Temperature, and Depth in real-time water column profiles. (2) Argo floats: autonomous profilers that drift and periodically surface to transmit T/S data via satellite. (3) Sediment cores: reveal historical climate, productivity, and circulation patterns from layered seafloor sediments. (4) Acoustic sensors/sonar: map seafloor bathymetry and track currents. (5) Satellites: measure sea surface temperature, height, and color (chlorophyll)."
    },

    // ========== BATCH 2: EXPANDED QUESTIONS (66-90) ==========
    
    // --- SURFACE CIRCULATION: Named Currents ---
    {
        id: 66,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "easy",
        type: "mc",
        question: "The Gulf Stream is an example of a:",
        options: [
            { label: "A", text: "Cold eastern boundary current" },
            { label: "B", text: "Warm western boundary current" },
            { label: "C", text: "Deep thermohaline current" },
            { label: "D", text: "Wind-driven upwelling current" }
        ],
        correctAnswer: "B",
        explanation: "The Gulf Stream is a warm western boundary current in the North Atlantic. It carries warm water from the Gulf of Mexico northward along the east coast of North America. Western boundary currents are characteristically warm, fast, narrow, and deep due to western intensification."
    },
    {
        id: 67,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "Which of the following is a cold eastern boundary current?",
        options: [
            { label: "A", text: "Gulf Stream" },
            { label: "B", text: "Kuroshio Current" },
            { label: "C", text: "California Current" },
            { label: "D", text: "Brazil Current" }
        ],
        correctAnswer: "C",
        explanation: "The California Current is a cold eastern boundary current flowing southward along the west coast of North America. Eastern boundary currents are cold, slow, wide, and shallow. Other cold eastern boundary currents include the Canary Current (Atlantic), Benguela Current (South Atlantic), and Peru/Humboldt Current (South Pacific)."
    },
    {
        id: 68,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "short",
        question: "What is geostrophic flow and what two forces must be in balance for it to occur?",
        correctAnswer: "Geostrophic flow occurs when the Coriolis force balances the horizontal pressure gradient force, causing water to flow parallel to pressure contours.",
        acceptableAnswers: ["Coriolis", "pressure gradient", "balance", "parallel", "geostrophic"],
        explanation: "Geostrophic flow is the steady-state flow that results when the Coriolis force exactly balances the horizontal pressure gradient force. Instead of flowing directly from high to low pressure, water flows parallel to isobars (pressure contours). In the Northern Hemisphere, geostrophic currents flow with high pressure on their right. This explains why subtropical gyres have elevated centers with water circulating around them."
    },
    {
        id: 69,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "tough",
        type: "mc",
        question: "The Kuroshio Current is the western boundary current of which ocean gyre?",
        options: [
            { label: "A", text: "North Atlantic Subtropical Gyre" },
            { label: "B", text: "South Pacific Subtropical Gyre" },
            { label: "C", text: "North Pacific Subtropical Gyre" },
            { label: "D", text: "Indian Ocean Gyre" }
        ],
        correctAnswer: "C",
        explanation: "The Kuroshio ('Black Stream' in Japanese) is the warm western boundary current of the North Pacific Subtropical Gyre. It's the Pacific equivalent of the Gulf Stream, flowing northward along Japan before turning eastward across the Pacific. Like all western boundary currents, it's warm, fast, narrow, and deep."
    },

    // --- ATMOSPHERIC CIRCULATION ---
    {
        id: 70,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "easy",
        type: "mc",
        question: "The region near 30° latitude where winds are calm and sailing ships historically became stranded is called the:",
        options: [
            { label: "A", text: "Doldrums" },
            { label: "B", text: "Horse latitudes" },
            { label: "C", text: "Trade wind belt" },
            { label: "D", text: "Polar front" }
        ],
        correctAnswer: "B",
        explanation: "The horse latitudes (~30°N and 30°S) are regions of calm winds and high pressure where air descends after rising at the equator. Legend says ships carrying horses to the New World would throw them overboard when stranded. The doldrums (ITCZ) are near the equator where trade winds converge."
    },
    {
        id: 71,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "Trade winds in the Northern Hemisphere blow from the:",
        options: [
            { label: "A", text: "Northeast" },
            { label: "B", text: "Southeast" },
            { label: "C", text: "Northwest" },
            { label: "D", text: "Southwest" }
        ],
        correctAnswer: "A",
        explanation: "In the Northern Hemisphere, trade winds blow from the northeast toward the southwest (called Northeast Trade Winds). They're deflected to the right by the Coriolis effect as they flow from the subtropical high toward the equatorial low. In the Southern Hemisphere, trade winds blow from the southeast."
    },

    // --- WAVES: Refraction and Types ---
    {
        id: 72,
        topic: "waves",
        topicName: "Waves",
        difficulty: "easy",
        type: "mc",
        question: "The smallest wind-generated waves, with wavelengths less than 1.7 cm, are called:",
        options: [
            { label: "A", text: "Ripples or capillary waves" },
            { label: "B", text: "Swell" },
            { label: "C", text: "Tsunamis" },
            { label: "D", text: "Whitecaps" }
        ],
        correctAnswer: "A",
        explanation: "Capillary waves (ripples) are the smallest wind-generated waves, with wavelengths under 1.7 cm. Surface tension, not gravity, is the primary restoring force. As wind continues, these grow into gravity waves. Swell refers to mature waves that have traveled far from their source."
    },
    {
        id: 73,
        topic: "waves",
        topicName: "Waves",
        difficulty: "medium",
        type: "mc",
        question: "Wave refraction causes wave energy to be:",
        options: [
            { label: "A", text: "Concentrated on headlands and dispersed in bays" },
            { label: "B", text: "Concentrated in bays and dispersed on headlands" },
            { label: "C", text: "Evenly distributed along all coastlines" },
            { label: "D", text: "Directed offshore rather than toward shore" }
        ],
        correctAnswer: "A",
        explanation: "Wave refraction bends wave crests as they approach shore at an angle. Waves slow in shallow water, so the part of the wave over shallow water near a headland slows first, bending the wave toward the headland. This concentrates energy on headlands (causing erosion) and disperses energy in bays (allowing deposition)."
    },
    {
        id: 74,
        topic: "waves",
        topicName: "Waves",
        difficulty: "tough",
        type: "short",
        question: "Explain the difference between wave refraction and wave diffraction. How does each affect wave patterns near coastal obstacles?",
        correctAnswer: "Refraction is wave bending due to depth changes; diffraction is wave spreading around obstacles. Refraction concentrates energy on headlands; diffraction allows waves to bend into harbors.",
        acceptableAnswers: ["refraction", "bending", "depth", "diffraction", "spreading", "obstacles", "harbor"],
        explanation: "Wave refraction: Waves bend as they approach shore because the portion in shallower water slows down. Waves refract toward shallower areas, concentrating energy on headlands. Wave diffraction: Waves spread laterally into the geometric shadow zone behind an obstacle (like a breakwater or island). This allows wave energy to enter harbors and reach areas that would otherwise be protected. Both processes redistribute wave energy along coastlines."
    },

    // --- TIDES: Advanced ---
    {
        id: 75,
        topic: "tides",
        topicName: "Tides",
        difficulty: "tough",
        type: "mc",
        question: "An amphidromic point is a location where:",
        options: [
            { label: "A", text: "Tidal range is maximum due to resonance" },
            { label: "B", text: "There is no tidal range and tides rotate around it" },
            { label: "C", text: "Spring and neap tides occur simultaneously" },
            { label: "D", text: "Diurnal and semidiurnal tides combine" }
        ],
        correctAnswer: "B",
        explanation: "An amphidromic point (or node) is a location with zero tidal range. Tidal crests rotate around these points like spokes on a wheel. The tidal range increases with distance from the amphidromic point. Cotidal lines connect points that experience high tide simultaneously and radiate outward from amphidromic points."
    },
    {
        id: 76,
        topic: "tides",
        topicName: "Tides",
        difficulty: "extra-hard",
        type: "data",
        question: `The diagram below shows cotidal lines (hours after moon's transit) radiating from an amphidromic point in the North Atlantic:

Amphidromic Point (center): 0 tidal range
Cotidal lines: 0h, 2h, 4h, 6h, 8h, 10h (rotating counterclockwise)
Coast A: 500 km from amphidromic point, on 4h line
Coast B: 200 km from amphidromic point, on 8h line

a) Which coast experiences higher tides and why?
b) How many hours after Coast A experiences high tide will Coast B experience high tide?
c) In which direction do tides rotate around amphidromic points in the Northern Hemisphere?`,
        correctAnswer: "Coast A has higher tides (farther from node); Coast B high tide 4 hours after Coast A; counterclockwise in NH",
        explanation: "a) Coast A experiences higher tides because it is farther (500 km) from the amphidromic point. Tidal amplitude increases with distance from the node. b) Coast B is on the 8h line while Coast A is on the 4h line, so Coast B experiences high tide 4 hours after Coast A. c) In the Northern Hemisphere, tides rotate counterclockwise around amphidromic points due to the Coriolis effect. In the Southern Hemisphere, they rotate clockwise."
    },

    // --- COASTAL FEATURES: Erosion Landforms ---
    {
        id: 77,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "easy",
        type: "mc",
        question: "A sea stack is formed when:",
        options: [
            { label: "A", text: "Sand accumulates behind an offshore island" },
            { label: "B", text: "A sea arch collapses, leaving an isolated pillar of rock" },
            { label: "C", text: "Coral grows around a subsiding volcanic island" },
            { label: "D", text: "Waves deposit sediment in a protected bay" }
        ],
        correctAnswer: "B",
        explanation: "Sea stacks are isolated pillars of rock standing offshore. They form when wave erosion creates a sea arch in a headland, and the arch eventually collapses. The remaining pillar (stack) continues to erode until it becomes a stump. This is part of the headland erosion sequence: cliff → cave → arch → stack → stump."
    },
    {
        id: 78,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "mc",
        question: "A wave-cut platform (terrace) is found:",
        options: [
            { label: "A", text: "At the base of an eroding sea cliff" },
            { label: "B", text: "On top of barrier islands" },
            { label: "C", text: "In the center of coral atolls" },
            { label: "D", text: "At the mouths of estuaries" }
        ],
        correctAnswer: "A",
        explanation: "A wave-cut platform (or terrace) is a flat, rocky surface at the base of a retreating sea cliff. It forms as waves erode the cliff base, causing the cliff to collapse and retreat landward. The platform is exposed at low tide and extends seaward, widening as the cliff continues to erode."
    },
    {
        id: 79,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "short",
        question: "What is a spit and what conditions favor its formation?",
        correctAnswer: "A spit is a narrow ridge of sand extending from the shore into open water. It forms where longshore drift carries sediment past a change in coastline direction.",
        acceptableAnswers: ["spit", "sand", "ridge", "longshore drift", "coastline", "extends"],
        explanation: "A spit is a depositional feature—an elongated ridge of sand or gravel extending from the shore into a bay or open water. Spits form where longshore drift transports sediment past a point where the coastline changes direction (like at a bay entrance). The deposited sediment builds outward. If a spit grows across a bay, it becomes a baymouth bar."
    },
    {
        id: 80,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "tough",
        type: "mc",
        question: "A flooded glacial valley along a coastline is called a:",
        options: [
            { label: "A", text: "Estuary" },
            { label: "B", text: "Fjord" },
            { label: "C", text: "Ria" },
            { label: "D", text: "Lagoon" }
        ],
        correctAnswer: "B",
        explanation: "A fjord is a long, narrow, deep inlet formed when rising sea levels flood a U-shaped glacially carved valley. Fjords have steep walls and can be very deep (over 1000m). A ria is a flooded river valley (V-shaped). An estuary is where freshwater meets saltwater. Famous fjords are found in Norway, New Zealand, and Chile."
    },

    // --- BEACH ZONES ---
    {
        id: 81,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "mc",
        question: "The berm on a beach is:",
        options: [
            { label: "A", text: "The area constantly underwater beyond the breakers" },
            { label: "B", text: "A flat, elevated platform formed by wave deposition at high tide" },
            { label: "C", text: "The zone where waves break" },
            { label: "D", text: "A deep channel cut by rip currents" }
        ],
        correctAnswer: "B",
        explanation: "The berm is a flat or gently sloping platform on the upper beach, formed by sediment deposited by waves at the high tide line. It marks the transition from the active beach face to the backshore. Storm waves may build higher berms or erode existing ones. Most beaches have at least one berm visible."
    },

    // --- GEOLOGICAL: Hydrothermal & Seafloor ---
    {
        id: 82,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "Hydrothermal vents are most commonly found at:",
        options: [
            { label: "A", text: "Mid-ocean ridges" },
            { label: "B", text: "Abyssal plains" },
            { label: "C", text: "Continental shelves" },
            { label: "D", text: "Ocean trenches" }
        ],
        correctAnswer: "A",
        explanation: "Hydrothermal vents are concentrated along mid-ocean ridges where hot magma is close to the seafloor. Cold seawater seeps into cracks, is heated by magma, dissolves minerals, and erupts back through vents. Black smokers emit mineral-rich water up to 400°C. Unique chemosynthetic ecosystems thrive around vents."
    },
    {
        id: 83,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "short",
        question: "Explain chemosynthesis and why it is important for ecosystems around hydrothermal vents.",
        correctAnswer: "Chemosynthesis uses chemical energy (not sunlight) to produce food. Bacteria convert hydrogen sulfide into organic matter, forming the base of vent ecosystems in total darkness.",
        acceptableAnswers: ["chemosynthesis", "chemical energy", "hydrogen sulfide", "bacteria", "no sunlight", "vent"],
        explanation: "Chemosynthesis is the production of organic compounds using energy from chemical reactions rather than sunlight. At hydrothermal vents, bacteria oxidize hydrogen sulfide (H₂S) from vent fluids to produce energy and fix carbon. These chemosynthetic bacteria form the base of a unique food web supporting tube worms, giant clams, crabs, and fish—all in complete darkness at depths of 2000-3000m."
    },
    {
        id: 84,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "mc",
        question: "What is the difference between a transform fault and a fracture zone?",
        options: [
            { label: "A", text: "Transform faults are seismically active; fracture zones are seismically inactive extensions" },
            { label: "B", text: "Fracture zones create new crust; transform faults destroy crust" },
            { label: "C", text: "Transform faults are underwater; fracture zones are on land" },
            { label: "D", text: "There is no difference; they are the same feature" }
        ],
        correctAnswer: "A",
        explanation: "Transform faults are the seismically ACTIVE portions between offset mid-ocean ridge segments, where plates slide past each other. Fracture zones are the seismically INACTIVE extensions beyond the ridge segments—the plates on both sides move in the same direction, so there's no relative motion and no earthquakes."
    },
    {
        id: 85,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "extra-hard",
        type: "long",
        question: `Compare and contrast calcareous ooze and siliceous ooze:
1) What organisms produce each type?
2) At what depths is each typically found and why?
3) How does the Calcium Carbonate Compensation Depth (CCD) affect their distribution?
4) In what ocean regions would you expect to find each type most abundantly?`,
        correctAnswer: "Calcareous from forams/coccolithophores, found above CCD; Siliceous from diatoms/radiolarians, found below CCD or in productive polar regions.",
        explanation: `1) **Organisms**: Calcareous ooze is from foraminifera, coccolithophores, and pteropods (CaCO₃ shells). Siliceous ooze is from diatoms and radiolarians (SiO₂ shells).

2) **Depths**: Calcareous ooze is found above the CCD (typically <4000-5000m) because CaCO₃ dissolves in deep, cold, CO₂-rich water. Siliceous ooze can be found at any depth because silica dissolves more slowly.

3) **CCD effect**: The CCD is the depth below which CaCO₃ dissolves faster than it accumulates. Above CCD: calcareous ooze dominates. Below CCD: only siliceous ooze and clay accumulate because CaCO₃ has dissolved.

4) **Regional distribution**: Calcareous ooze: tropical/subtropical mid-ocean ridges and shallow areas. Siliceous ooze: high-productivity polar regions (diatom ooze) and equatorial Pacific (radiolarian ooze) where productivity is high and/or seafloor is below CCD.`
    },

    // --- LARGE-SCALE CIRCULATION: Water Masses ---
    {
        id: 86,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "tough",
        type: "mc",
        question: "Antarctic Bottom Water (AABW) is characterized by being:",
        options: [
            { label: "A", text: "Warm and salty" },
            { label: "B", text: "Cold and relatively fresh" },
            { label: "C", text: "Cold and salty, making it the densest water mass" },
            { label: "D", text: "Warm and fresh" }
        ],
        correctAnswer: "C",
        explanation: "Antarctic Bottom Water (AABW) is the densest water mass in the ocean. It forms around Antarctica where extremely cold air cools surface water, and sea ice formation expels salt, increasing salinity. This cold, salty water sinks to the ocean floor and spreads northward along the bottom of all major ocean basins."
    },
    {
        id: 87,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The Antarctic Circumpolar Current (ACC) is significant because it:",
        options: [
            { label: "A", text: "Is the only current that flows completely around the Earth" },
            { label: "B", text: "Flows exclusively at the ocean surface" },
            { label: "C", text: "Is blocked by continental landmasses" },
            { label: "D", text: "Carries warm tropical water to Antarctica" }
        ],
        correctAnswer: "A",
        explanation: "The Antarctic Circumpolar Current (ACC) is the world's largest current, flowing eastward around Antarctica. It's the ONLY current that completely encircles the globe, unimpeded by continents. The ACC connects all major ocean basins, mixing their waters, and isolates Antarctica thermally—contributing to its extreme cold."
    },
    {
        id: 88,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "extra-hard",
        type: "data",
        question: `Water mass analysis shows these characteristics in the Atlantic Ocean:

| Water Mass | Depth (m) | Temp (°C) | Salinity (‰) |
|------------|-----------|-----------|--------------|
| Surface Water | 0-200 | 15-25 | 35.0-36.5 |
| Antarctic Intermediate Water | 500-1000 | 3-6 | 34.2-34.5 |
| North Atlantic Deep Water | 1500-4000 | 2-4 | 34.9-35.0 |
| Antarctic Bottom Water | >4000 | -0.5-2 | 34.6-34.7 |

a) Explain why Antarctic Intermediate Water has LOWER salinity than the water masses above and below it.
b) Why does NADW lie above AABW despite both being cold?
c) What would happen to global circulation if NADW formation significantly weakened?`,
        correctAnswer: "AAIW is fresher from melting ice/precipitation; NADW is less dense than AABW due to higher temperature; weakened NADW would slow conveyor belt and cool Europe.",
        explanation: `a) Antarctic Intermediate Water (AAIW) has low salinity because it forms from surface water diluted by precipitation and melting sea ice around Antarctica. It sinks at the Antarctic Convergence to intermediate depths because its low salinity reduces density.

b) Although both are cold, NADW (2-4°C) is warmer than AABW (-0.5-2°C), and AABW's extreme cold makes it denser despite similar salinity. Temperature has a stronger effect on density than the small salinity differences.

c) Weakened NADW formation would slow the global thermohaline circulation ("conveyor belt"). This would reduce heat transport to the North Atlantic, potentially cooling Europe significantly. Deep ocean ventilation would decrease, and the ocean's ability to absorb CO₂ would change.`
    },

    // --- CLIMATE: La Niña and Deoxygenation ---
    {
        id: 89,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "medium",
        type: "mc",
        question: "During a La Niña event, conditions in the eastern Pacific include:",
        options: [
            { label: "A", text: "Weaker trade winds and warmer surface temperatures" },
            { label: "B", text: "Stronger trade winds and cooler surface temperatures" },
            { label: "C", text: "No change from normal conditions" },
            { label: "D", text: "Decreased upwelling and lower productivity" }
        ],
        correctAnswer: "B",
        explanation: "La Niña is the opposite of El Niño. Trade winds strengthen, pushing warm water toward the western Pacific. This enhances upwelling in the eastern Pacific, bringing cold, nutrient-rich water to the surface. Sea surface temperatures drop below normal, and productivity increases. La Niña often brings drought to the American Southwest and increased Atlantic hurricane activity."
    },
    {
        id: 90,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "tough",
        type: "short",
        question: "What is ocean deoxygenation and what causes it? How does it relate to climate change?",
        correctAnswer: "Ocean deoxygenation is the loss of dissolved oxygen in seawater. It's caused by warming (reduces oxygen solubility) and increased stratification (reduces mixing). It creates expanding 'dead zones.'",
        acceptableAnswers: ["deoxygenation", "oxygen", "warming", "solubility", "stratification", "dead zones", "hypoxia"],
        explanation: "Ocean deoxygenation is the decline of dissolved oxygen levels in the ocean. Causes: (1) Warming water holds less dissolved oxygen (lower solubility); (2) Increased stratification from warming reduces vertical mixing that brings oxygen to deep water; (3) Increased respiration of organic matter from higher productivity. Effects: Expanding oxygen minimum zones (OMZs), coastal 'dead zones' where marine life cannot survive, and compression of habitable depth ranges for fish. This is one of the 'deadly trio' of climate change impacts along with warming and acidification."
    },

    // ========== BATCH 3: QUESTIONS 91-115 ==========

    // --- SEAWATER: Light, Sound, Pressure ---
    {
        id: 91,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "easy",
        type: "mc",
        question: "The photic zone extends from the surface to approximately:",
        options: [
            { label: "A", text: "50 meters" },
            { label: "B", text: "200 meters" },
            { label: "C", text: "1000 meters" },
            { label: "D", text: "4000 meters" }
        ],
        correctAnswer: "B",
        explanation: "The photic (euphotic) zone extends from the surface to about 200 meters depth, where enough sunlight penetrates for photosynthesis. Below this is the dysphotic zone (dim light, 200-1000m) and the aphotic zone (no light, >1000m). Most marine primary production occurs in the photic zone."
    },
    {
        id: 92,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "medium",
        type: "mc",
        question: "Sound travels fastest in water that is:",
        options: [
            { label: "A", text: "Cold, shallow, and fresh" },
            { label: "B", text: "Warm, deep, and salty" },
            { label: "C", text: "Cold, deep, and salty" },
            { label: "D", text: "Warm, shallow, and fresh" }
        ],
        correctAnswer: "B",
        explanation: "Sound speed in seawater increases with temperature, salinity, and pressure (depth). Warm water molecules vibrate faster; salt ions transmit vibrations efficiently; high pressure compresses water. Sound travels about 1500 m/s in seawater, much faster than in air (~340 m/s)."
    },
    {
        id: 93,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "tough",
        type: "mc",
        question: "The SOFAR channel (Sound Fixing and Ranging) is located at approximately what depth?",
        options: [
            { label: "A", text: "Surface to 100m" },
            { label: "B", text: "600-1200m" },
            { label: "C", text: "3000-4000m" },
            { label: "D", text: "At the seafloor" }
        ],
        correctAnswer: "B",
        explanation: "The SOFAR channel is at 600-1200m depth where sound speed is minimum. Above this depth, temperature dominates (warmer = faster); below, pressure dominates (deeper = faster). Sound refracts toward low-speed zones, so the SOFAR channel acts as a waveguide, allowing sounds (like whale calls) to travel thousands of kilometers."
    },
    {
        id: 94,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "medium",
        type: "short",
        question: "What is the residence time of an element in seawater, and why do sodium and chloride have long residence times?",
        correctAnswer: "Residence time is how long an element stays in seawater before being removed. Sodium and chloride have long residence times because they are chemically unreactive.",
        acceptableAnswers: ["residence time", "stays", "removed", "unreactive", "conservative", "sodium", "chloride"],
        explanation: "Residence time = (amount in ocean) / (rate of input or removal). Sodium (~260 million years) and chloride (~100 million years) have long residence times because they are chemically unreactive (conservative elements). They don't precipitate or get incorporated into organisms easily. In contrast, iron and aluminum have short residence times (100-200 years) because they react quickly and are removed by biological uptake or precipitation."
    },

    // --- WAVES: Tsunamis ---
    {
        id: 95,
        topic: "waves",
        topicName: "Waves",
        difficulty: "easy",
        type: "mc",
        question: "Tsunamis are classified as:",
        options: [
            { label: "A", text: "Deep-water waves" },
            { label: "B", text: "Shallow-water waves" },
            { label: "C", text: "Internal waves" },
            { label: "D", text: "Capillary waves" }
        ],
        correctAnswer: "B",
        explanation: "Tsunamis are shallow-water waves because their wavelength (100-200 km) is much greater than ocean depth. Even in the deep ocean, tsunamis 'feel' the bottom. Their speed depends on depth: speed = √(g × depth). In 4000m depth, tsunamis travel about 700 km/h (jet speed!)."
    },
    {
        id: 96,
        topic: "waves",
        topicName: "Waves",
        difficulty: "medium",
        type: "mc",
        question: "Which of the following can generate a tsunami?",
        options: [
            { label: "A", text: "Submarine earthquakes" },
            { label: "B", text: "Underwater landslides" },
            { label: "C", text: "Volcanic eruptions" },
            { label: "D", text: "All of the above" }
        ],
        correctAnswer: "D",
        explanation: "Tsunamis can be generated by any event that displaces a large volume of water: submarine earthquakes (most common, especially at subduction zones), underwater landslides, volcanic eruptions (like Krakatoa 1883), and even asteroid impacts. The 2004 Indian Ocean tsunami was caused by a magnitude 9.1 earthquake."
    },
    {
        id: 97,
        topic: "waves",
        topicName: "Waves",
        difficulty: "tough",
        type: "data",
        question: `A tsunami with wavelength 200 km travels across the Pacific Ocean (average depth 4000m).

Using the shallow-water wave speed formula: Speed = √(g × depth), where g = 10 m/s²

a) Calculate the tsunami's speed in m/s and km/h.
b) How long would it take to travel 5000 km?
c) In the open ocean, if this tsunami has a height of 0.5m, explain why ships rarely notice it passing.`,
        correctAnswer: "Speed ≈ 200 m/s or 720 km/h; Time ≈ 7 hours; Ships don't notice because wavelength is huge compared to height (very gentle slope).",
        explanation: `a) Speed = √(10 × 4000) = √40,000 = 200 m/s = 720 km/h

b) Time = Distance/Speed = 5000 km / 720 km/h ≈ 6.9 hours (about 7 hours)

c) In deep water, the tsunami's wavelength (200 km) is enormous compared to its height (0.5m). This creates an extremely gentle slope—the wave rises only 0.5m over 100 km (half wavelength). Ships experience this as a gradual 30-second rise and fall, indistinguishable from normal ocean swells. As tsunamis approach shore and depth decreases, wavelength shortens and height increases dramatically (shoaling).`
    },

    // --- TIDES: Calculations and Applications ---
    {
        id: 98,
        topic: "tides",
        topicName: "Tides",
        difficulty: "easy",
        type: "mc",
        question: "The tidal range is defined as:",
        options: [
            { label: "A", text: "The time between high and low tide" },
            { label: "B", text: "The vertical difference between high and low tide" },
            { label: "C", text: "The horizontal distance water moves during a tide" },
            { label: "D", text: "The speed of tidal currents" }
        ],
        correctAnswer: "B",
        explanation: "Tidal range is the vertical difference between high tide and low tide water levels. It varies by location (from nearly zero at amphidromic points to over 16m in the Bay of Fundy) and by lunar phase (greater at spring tides, less at neap tides)."
    },
    {
        id: 99,
        topic: "tides",
        topicName: "Tides",
        difficulty: "medium",
        type: "mc",
        question: "Tidal currents are strongest during:",
        options: [
            { label: "A", text: "High tide and low tide (slack water)" },
            { label: "B", text: "Mid-tide, between high and low" },
            { label: "C", text: "Only during spring tides" },
            { label: "D", text: "Only during neap tides" }
        ],
        correctAnswer: "B",
        explanation: "Tidal currents are strongest at mid-tide when water is actively flowing in (flood) or out (ebb). At high and low tide, the water momentarily stops moving (slack water) before reversing direction. This is why fishermen and boaters time activities around slack water."
    },
    {
        id: 100,
        topic: "tides",
        topicName: "Tides",
        difficulty: "tough",
        type: "short",
        question: "Explain why the Bay of Fundy has the world's highest tidal range (over 16 meters).",
        correctAnswer: "The Bay of Fundy's shape and length create resonance—its natural oscillation period matches the tidal period, amplifying the tide.",
        acceptableAnswers: ["resonance", "natural period", "matches", "amplify", "funnel", "shape"],
        explanation: "The Bay of Fundy has extreme tides due to tidal resonance. The bay's length (~270 km) and depth give it a natural oscillation period of about 12-13 hours, very close to the 12.42-hour semidiurnal tidal period. When the forcing frequency matches the natural frequency, waves amplify (like pushing a swing at the right time). Additionally, the funnel shape concentrates water into narrowing space, further increasing height."
    },

    // --- COASTAL: Estuaries and Deltas ---
    {
        id: 101,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "mc",
        question: "In a salt wedge estuary, freshwater flows:",
        options: [
            { label: "A", text: "Along the bottom, under the saltwater" },
            { label: "B", text: "On top, over the denser saltwater" },
            { label: "C", text: "Mixed uniformly with saltwater" },
            { label: "D", text: "Only during low tide" }
        ],
        correctAnswer: "B",
        explanation: "In a salt wedge estuary, the denser saltwater forms a wedge along the bottom, while less dense freshwater flows seaward on top. This stratification occurs in estuaries with high river flow and low tidal mixing (like the Mississippi River mouth). Well-mixed estuaries have stronger tidal currents that blend the layers."
    },
    {
        id: 102,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "mc",
        question: "A bird's-foot delta, like the Mississippi River delta, forms when:",
        options: [
            { label: "A", text: "Wave energy is high and redistributes sediment" },
            { label: "B", text: "River sediment deposition dominates over wave/tidal reworking" },
            { label: "C", text: "Tidal currents shape the delta into symmetrical lobes" },
            { label: "D", text: "Glacial erosion carves channels into the coastline" }
        ],
        correctAnswer: "B",
        explanation: "Bird's-foot deltas form when river sediment output is high and wave/tidal energy is low. Sediment builds along distributary channels extending seaward like fingers or bird's feet. Wave-dominated deltas (like the Nile) are more triangular; tide-dominated deltas have linear sandbars perpendicular to the coast."
    },
    {
        id: 103,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "tough",
        type: "short",
        question: "Describe the three main types of estuaries based on water circulation: salt wedge, partially mixed, and well-mixed. What controls which type develops?",
        correctAnswer: "Salt wedge: stratified, high river flow, low tides. Partially mixed: moderate mixing. Well-mixed: strong tidal mixing homogenizes water. River flow vs. tidal energy determines type.",
        acceptableAnswers: ["salt wedge", "stratified", "partially mixed", "well-mixed", "tidal", "river flow"],
        explanation: "Three estuary types based on mixing: (1) Salt wedge: Strong river flow, weak tides → two distinct layers with saltwater wedge on bottom. (2) Partially mixed: Moderate river flow and tidal mixing → some stratification but with mixing at the interface. (3) Well-mixed: Strong tidal currents overwhelm river flow → water is homogeneous from top to bottom, salinity increases toward the sea. The ratio of river discharge to tidal prism (volume exchanged each tidal cycle) determines estuary type."
    },

    // --- GEOLOGICAL: Coral Reefs ---
    {
        id: 104,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "easy",
        type: "mc",
        question: "Coral reefs require which of the following conditions to thrive?",
        options: [
            { label: "A", text: "Cold, nutrient-rich water" },
            { label: "B", text: "Warm, clear, shallow water with sunlight" },
            { label: "C", text: "Deep, high-pressure environments" },
            { label: "D", text: "Brackish water near river mouths" }
        ],
        correctAnswer: "B",
        explanation: "Reef-building corals need: warm water (20-28°C), clear water for sunlight to reach zooxanthellae (symbiotic algae), shallow depths (<50m typically), normal salinity (~35‰), and stable substrate. Corals struggle in turbid, nutrient-rich, or cold waters. This is why coral reefs are found in tropical/subtropical clear waters."
    },
    {
        id: 105,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "According to Darwin's theory of atoll formation, the correct sequence is:",
        options: [
            { label: "A", text: "Barrier reef → Fringing reef → Atoll" },
            { label: "B", text: "Fringing reef → Barrier reef → Atoll" },
            { label: "C", text: "Atoll → Barrier reef → Fringing reef" },
            { label: "D", text: "Fringing reef → Atoll → Barrier reef" }
        ],
        correctAnswer: "B",
        explanation: "Darwin proposed that atolls form as volcanic islands subside: (1) Fringing reef grows along the shore of a volcanic island. (2) As the island subsides, coral grows upward and a lagoon forms between reef and island → barrier reef. (3) The island fully submerges, leaving a ring of coral reef (atoll) surrounding a lagoon. This theory was confirmed by deep drilling at atolls."
    },
    {
        id: 106,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "short",
        question: "What is coral bleaching and what environmental stressors cause it? Is bleaching always fatal to corals?",
        correctAnswer: "Coral bleaching occurs when corals expel their symbiotic zooxanthellae due to stress (high temperature, pollution, etc.). Bleached corals can recover if conditions improve quickly, but prolonged stress causes death.",
        acceptableAnswers: ["bleaching", "zooxanthellae", "expel", "stress", "temperature", "recover", "fatal"],
        explanation: "Coral bleaching occurs when stressed corals expel their zooxanthellae—symbiotic algae that provide 90% of coral energy and give them color. Stressors include: elevated water temperature (most common), pollution, sedimentation, freshwater influx, and disease. White skeleton shows through transparent tissue (hence 'bleaching'). Bleaching is not immediately fatal—if stressors are removed within weeks, zooxanthellae can recolonize. However, prolonged bleaching leads to starvation and death. Mass bleaching events have become more frequent due to climate change."
    },

    // --- CLIMATE: Ocean Acidification ---
    {
        id: 107,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "medium",
        type: "mc",
        question: "Ocean acidification is primarily caused by:",
        options: [
            { label: "A", text: "Volcanic eruptions releasing sulfuric acid" },
            { label: "B", text: "Absorption of atmospheric CO₂" },
            { label: "C", text: "Runoff from agricultural fertilizers" },
            { label: "D", text: "Decomposition of organic matter on the seafloor" }
        ],
        correctAnswer: "B",
        explanation: "Ocean acidification occurs when atmospheric CO₂ dissolves in seawater, forming carbonic acid (H₂CO₃), which releases H⁺ ions, lowering pH. Ocean pH has dropped from ~8.2 to ~8.1 since pre-industrial times (a 30% increase in acidity). This threatens shell-building organisms by reducing carbonate ion availability."
    },
    {
        id: 108,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "tough",
        type: "mc",
        question: "Ocean acidification most directly threatens organisms that:",
        options: [
            { label: "A", text: "Use photosynthesis" },
            { label: "B", text: "Build calcium carbonate shells or skeletons" },
            { label: "C", text: "Live in the deep ocean" },
            { label: "D", text: "Are warm-blooded" }
        ],
        correctAnswer: "B",
        explanation: "Acidification reduces carbonate ion (CO₃²⁻) concentration, making it harder for organisms to build CaCO₃ structures. Threatened organisms include: corals, pteropods (sea butterflies), oysters, mussels, sea urchins, and coccolithophores. In severe cases, acidified water can dissolve existing shells. This disrupts marine food webs and ecosystems."
    },
    {
        id: 109,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "extra-hard",
        type: "long",
        question: `The 'deadly trio' of ocean stressors from climate change are warming, acidification, and deoxygenation.

a) Explain how each stressor impacts marine ecosystems.
b) How are these three stressors connected—does one cause or worsen the others?
c) Which marine organisms or ecosystems are most vulnerable to these combined stressors?
d) What regions of the ocean are experiencing the most rapid changes?`,
        correctAnswer: "Warming affects metabolism/distribution, acidification affects shell-builders, deoxygenation creates dead zones. They are interconnected—warming drives both others. Coral reefs and polar ecosystems are most vulnerable.",
        explanation: `a) **Impacts**:
- Warming: Shifts species ranges poleward, increases metabolic rates, triggers coral bleaching, melts sea ice
- Acidification: Reduces calcification in shell-builders, affects fish behavior and sensory systems
- Deoxygenation: Creates dead zones, compresses habitable depth ranges, increases stress

b) **Connections**:
- Warming drives both others: warm water holds less oxygen AND absorbs CO₂ (initially) which acidifies
- Warming increases stratification → reduces mixing → worsens deoxygenation
- Deoxygenation + acidification often co-occur in the same locations

c) **Vulnerable organisms/ecosystems**:
- Coral reefs (sensitive to all three)
- Polar ecosystems (fastest warming, cold water already low in carbonate)
- Oxygen minimum zones (expanding)
- Shell-building zooplankton at base of food webs

d) **Rapid change regions**:
- Arctic Ocean (fastest warming, freshening, acidification)
- Eastern boundary upwelling regions (expanding OMZs)
- Tropical coral reef areas`
    },

    // --- SURFACE CIRCULATION: Upwelling ---
    {
        id: 110,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "Coastal upwelling along the west coast of South America is caused by:",
        options: [
            { label: "A", text: "Trade winds blowing offshore combined with Ekman transport" },
            { label: "B", text: "Warm currents from the equator" },
            { label: "C", text: "Tidal forces pulling water away from shore" },
            { label: "D", text: "River discharge pushing surface water offshore" }
        ],
        correctAnswer: "A",
        explanation: "Along South America's west coast, southeast trade winds blow northward parallel to shore. Ekman transport moves surface water 90° to the right of wind direction (in SH, to the LEFT), pushing water offshore. Cold, nutrient-rich deep water rises to replace it—this is coastal upwelling. It supports the Peru anchovy fishery, one of the world's most productive."
    },
    {
        id: 111,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "tough",
        type: "short",
        question: "Explain equatorial upwelling. How do trade winds create upwelling at the equator without a coast?",
        correctAnswer: "Trade winds from both hemispheres create Ekman transport away from the equator (right in NH, left in SH), causing divergence and upwelling of cold water along the equator.",
        acceptableAnswers: ["trade winds", "Ekman", "divergence", "equator", "opposite directions", "upwelling"],
        explanation: "At the equator, trade winds blow westward. In the Northern Hemisphere, Ekman transport deflects surface water to the right (northward). In the Southern Hemisphere, deflection is to the left (also away from equator, southward). This creates surface divergence along the equator—water moves away from the equator in both directions. Cold, nutrient-rich water upwells to replace it. This equatorial upwelling creates a band of high productivity along the equator, visible as a cooler 'tongue' in satellite SST images."
    },

    // --- LARGE-SCALE CIRCULATION: Conveyor Belt ---
    {
        id: 112,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "easy",
        type: "mc",
        question: "The global thermohaline circulation is often called the:",
        options: [
            { label: "A", text: "Gulf Stream" },
            { label: "B", text: "Global conveyor belt" },
            { label: "C", text: "Walker circulation" },
            { label: "D", text: "Coriolis cycle" }
        ],
        correctAnswer: "B",
        explanation: "The global thermohaline circulation is nicknamed the 'global conveyor belt' because it moves water through all ocean basins in a continuous loop. Warm surface water flows to polar regions, sinks as cold deep water, flows through the deep ocean, and eventually rises back to the surface—a journey taking about 1000 years."
    },
    {
        id: 113,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The primary location where North Atlantic Deep Water (NADW) forms is:",
        options: [
            { label: "A", text: "The Mediterranean Sea" },
            { label: "B", text: "The Labrador Sea and Nordic Seas" },
            { label: "C", text: "The Gulf of Mexico" },
            { label: "D", text: "The Sargasso Sea" }
        ],
        correctAnswer: "B",
        explanation: "NADW forms in the Labrador Sea (between Canada and Greenland) and Nordic Seas (Norwegian, Greenland, and Iceland Seas). Cold, dry winter air cools surface water, and sea ice formation increases salinity. This cold, salty water becomes dense enough to sink to depths of 2000-4000m, driving the conveyor belt."
    },
    {
        id: 114,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "extra-hard",
        type: "data",
        question: `A T-S (Temperature-Salinity) diagram shows three water masses:

Point A: T = 18°C, S = 36.5‰
Point B: T = 4°C, S = 34.9‰  
Point C: T = 0°C, S = 34.7‰

a) Identify each water mass (choose from: North Atlantic Central Water, North Atlantic Deep Water, Antarctic Bottom Water).
b) Rank these water masses by density (most dense to least dense).
c) If you found all three at one location in the Atlantic, at what relative depths would each be found?
d) Explain why water mass B lies above water mass C despite B having higher salinity.`,
        correctAnswer: "A=NACW, B=NADW, C=AABW. Density: C>B>A. Depths: A surface, B mid-deep, C bottom. Temperature effect on density exceeds salinity effect.",
        explanation: `a) **Identification**:
- Point A (warm, salty): North Atlantic Central Water—surface/upper water
- Point B (cold, moderate salinity): North Atlantic Deep Water—forms in Labrador/Nordic Seas
- Point C (coldest, lower salinity): Antarctic Bottom Water—densest, forms around Antarctica

b) **Density ranking**: C > B > A (coldest is densest, warmest is least dense)

c) **Depths**: A at surface (0-500m), B at mid-depths (1500-4000m), C at bottom (>4000m)

d) **Temperature vs. salinity**: Although B has higher salinity (34.9‰ vs 34.7‰), C is much colder (0°C vs 4°C). In cold water, temperature has a stronger effect on density than small salinity differences. The 4°C temperature difference makes C denser than B despite B's higher salinity.`
    },
    {
        id: 115,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "extra-hard",
        type: "long",
        question: `The equation of state for seawater relates density to temperature, salinity, and pressure.

a) Explain why maximum density of freshwater occurs at 4°C, but for typical seawater (~35‰) maximum density occurs at approximately -2°C (near freezing point).
b) How does this difference affect ice formation in freshwater lakes vs. the ocean?
c) Why is it significant that ice is less dense than liquid water? What would happen to aquatic life if ice sank?`,
        correctAnswer: "High salinity shifts max density toward freezing. Lakes stratify at 4°C with ice on top; ocean water keeps cooling until it freezes. Floating ice insulates and protects life below.",
        explanation: `a) **Density maximum shift**:
In freshwater, hydrogen bonding creates an open lattice structure below 4°C that decreases density. At 35‰ salinity, dissolved ions disrupt this structure, so water keeps getting denser as it cools until it freezes. The higher the salinity, the closer maximum density is to the freezing point.

b) **Ice formation differences**:
- Freshwater lakes: Water cools to 4°C (max density), sinks. Surface cools further to 0°C but doesn't sink—ice forms on top while bottom stays at 4°C.
- Ocean: Seawater keeps sinking as it cools toward freezing (~-1.9°C at 35‰). Ice forms only when surface water reaches freezing point, and the brine rejection makes remaining water denser, driving deep water formation.

c) **Significance of floating ice**:
Ice floats because of hydrogen bonding creating an open hexagonal crystal structure less dense than liquid water. If ice sank:
- Water bodies would freeze from the bottom up
- Entire lakes/oceans could freeze solid
- Aquatic organisms would have no refuge from freezing
- Climate would be drastically different (ice-covered oceans wouldn't reflect sunlight the same way)
- Spring melting patterns would be completely different`
    },

    // ========== BATCH 4: QUESTIONS 116-140 ==========

    // --- SEAWATER: Gases and Nutrients ---
    {
        id: 116,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "medium",
        type: "mc",
        question: "The ocean's oxygen minimum zone (OMZ) typically occurs at what depth?",
        options: [
            { label: "A", text: "0-50 meters" },
            { label: "B", text: "200-1000 meters" },
            { label: "C", text: "3000-4000 meters" },
            { label: "D", text: "At the seafloor" }
        ],
        correctAnswer: "B",
        explanation: "The oxygen minimum zone (OMZ) typically occurs at 200-1000m depth. Surface water has oxygen from the atmosphere and photosynthesis. Deep water has oxygen from sinking polar water. The mid-depth OMZ develops because organisms consume oxygen (respiration) faster than it's replenished, and there's no photosynthesis or mixing with surface water."
    },
    {
        id: 117,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "tough",
        type: "short",
        question: "What is the biological pump and how does it affect the distribution of carbon dioxide in the ocean?",
        correctAnswer: "The biological pump transfers carbon from surface to deep ocean. Phytoplankton fix CO₂, and when they die, organic carbon sinks, removing CO₂ from surface waters.",
        acceptableAnswers: ["biological pump", "carbon", "phytoplankton", "sinks", "deep", "surface", "CO2"],
        explanation: "The biological pump is the ocean's biological carbon transport system: (1) Phytoplankton in the photic zone absorb CO₂ through photosynthesis. (2) When they die or are eaten, organic carbon sinks as 'marine snow.' (3) This transfers carbon from surface to deep ocean. (4) Respiration at depth releases CO₂, creating a CO₂ gradient (low at surface, high at depth). The biological pump helps the ocean absorb ~25% of human CO₂ emissions."
    },
    {
        id: 118,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "easy",
        type: "mc",
        question: "Which color of light penetrates deepest into clear ocean water?",
        options: [
            { label: "A", text: "Red" },
            { label: "B", text: "Orange" },
            { label: "C", text: "Blue" },
            { label: "D", text: "Green" }
        ],
        correctAnswer: "C",
        explanation: "Blue light penetrates deepest in clear ocean water. Red and orange light are absorbed within the first few meters. This is why the ocean appears blue—blue light scatters back to our eyes after penetrating deep. In coastal waters with more particles, green light penetrates best."
    },

    // --- WAVES: Advanced Mechanics ---
    {
        id: 119,
        topic: "waves",
        topicName: "Waves",
        difficulty: "medium",
        type: "mc",
        question: "The wave base, below which water particles no longer experience orbital motion from surface waves, is approximately:",
        options: [
            { label: "A", text: "Half the wavelength" },
            { label: "B", text: "Equal to the wavelength" },
            { label: "C", text: "Twice the wavelength" },
            { label: "D", text: "One quarter the wavelength" }
        ],
        correctAnswer: "A",
        explanation: "Wave base is approximately half the wavelength (L/2). Above this depth, water particles move in circular orbits that decrease in size with depth. Below wave base, the water is essentially undisturbed by surface waves. For example, a 100m wavelength wave affects water to about 50m depth."
    },
    {
        id: 120,
        topic: "waves",
        topicName: "Waves",
        difficulty: "tough",
        type: "data",
        question: `A deep-water wave has:
- Wavelength: 156 meters
- Period: 10 seconds

Using the formula: Speed = Wavelength / Period

a) Calculate the wave speed.
b) What is the approximate wave base (depth below which motion stops)?
c) If this wave enters water 30 meters deep, is it still a deep-water wave? Explain.
d) What happens to the wave's speed and wavelength as it enters shallow water?`,
        correctAnswer: "Speed = 15.6 m/s; Wave base = 78m; At 30m it becomes transitional/shallow; Speed and wavelength decrease in shallow water.",
        explanation: `a) Speed = 156m / 10s = **15.6 m/s** (about 56 km/h)

b) Wave base ≈ L/2 = 156/2 = **78 meters**

c) **No, it's no longer deep water.** Deep water requires depth > L/2 (78m). At 30m depth, it's in transitional or intermediate water territory. The wave now 'feels' the bottom.

d) In shallow water:
- Speed decreases (waves slow down)
- Wavelength shortens (compressed)
- Period stays constant
- Wave height increases (conservation of energy)
This is why waves steepen and break as they approach shore.`
    },
    {
        id: 121,
        topic: "waves",
        topicName: "Waves",
        difficulty: "medium",
        type: "mc",
        question: "Significant wave height (H₁/₃) is defined as:",
        options: [
            { label: "A", text: "The height of the largest wave recorded" },
            { label: "B", text: "The average height of all waves" },
            { label: "C", text: "The average height of the highest one-third of waves" },
            { label: "D", text: "The most common wave height observed" }
        ],
        correctAnswer: "C",
        explanation: "Significant wave height (H₁/₃ or Hs) is the average height of the highest one-third (33%) of waves over a given period. It corresponds roughly to what an experienced observer would estimate as the 'wave height.' It's the standard measure used in forecasts. Maximum wave height in a sea state can be about twice the significant height."
    },

    // --- TIDES: Unusual Patterns ---
    {
        id: 122,
        topic: "tides",
        topicName: "Tides",
        difficulty: "medium",
        type: "mc",
        question: "A diurnal tide pattern means:",
        options: [
            { label: "A", text: "Two equal high tides and two equal low tides per day" },
            { label: "B", text: "One high tide and one low tide per day" },
            { label: "C", text: "Two unequal high tides and two unequal low tides per day" },
            { label: "D", text: "No predictable pattern" }
        ],
        correctAnswer: "B",
        explanation: "Diurnal tides have only ONE high tide and ONE low tide per tidal day (~24h 50min). This pattern is found in the Gulf of Mexico, some parts of Southeast Asia, and along the Caribbean. It results from the geometry of the basin and how it responds to tidal forcing."
    },
    {
        id: 123,
        topic: "tides",
        topicName: "Tides",
        difficulty: "tough",
        type: "short",
        question: "What is a tidal bore and under what conditions does it form?",
        correctAnswer: "A tidal bore is a wave that travels up a river as the tide rises. It forms when a rising tide enters a shallow, funnel-shaped river or estuary.",
        acceptableAnswers: ["tidal bore", "wave", "river", "rising tide", "funnel", "shallow", "estuary"],
        explanation: "A tidal bore is a dramatic wave that travels up a river or estuary with the incoming tide. Conditions needed: (1) Large tidal range (typically >6m); (2) Shallow, funnel-shaped estuary that concentrates tidal energy; (3) River flow opposite to tide. Famous bores: Qiantang River (China) can reach 9m height, Severn Bore (UK), Amazon Pororoca (can be surfed for miles). The bore represents the leading edge of the flood tide."
    },

    // --- COASTAL: Human Interactions ---
    {
        id: 124,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "easy",
        type: "mc",
        question: "A groin (or groyne) is a coastal structure designed to:",
        options: [
            { label: "A", text: "Block waves from reaching the shore" },
            { label: "B", text: "Trap sediment moving along the beach by longshore drift" },
            { label: "C", text: "Allow ships to dock safely" },
            { label: "D", text: "Prevent flooding during storm surges" }
        ],
        correctAnswer: "B",
        explanation: "Groins are walls built perpendicular to the shoreline to trap sand moving by longshore drift. Sand accumulates on the updrift side. However, groins cause erosion on the downdrift side (starving it of sand), often requiring a series of groins. This is called the 'groin field' effect."
    },
    {
        id: 125,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "mc",
        question: "Beach nourishment (replenishment) involves:",
        options: [
            { label: "A", text: "Building concrete walls to protect the beach" },
            { label: "B", text: "Adding sand from another source to widen the beach" },
            { label: "C", text: "Planting vegetation to stabilize dunes" },
            { label: "D", text: "Removing sediment to deepen the water" }
        ],
        correctAnswer: "B",
        explanation: "Beach nourishment is a 'soft' engineering approach where sand is dredged from offshore or trucked from another location and deposited on an eroding beach. It's considered more environmentally friendly than hard structures, but it's temporary—waves continue to erode the new sand, requiring repeated nourishment."
    },
    {
        id: 126,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "tough",
        type: "short",
        question: "Explain the difference between hard stabilization and soft stabilization approaches to coastal erosion. Give two examples of each.",
        correctAnswer: "Hard stabilization uses structures (seawalls, groins, jetties, breakwaters). Soft stabilization works with natural processes (beach nourishment, dune restoration, managed retreat).",
        acceptableAnswers: ["hard stabilization", "soft stabilization", "seawall", "groin", "jetty", "nourishment", "dune", "retreat"],
        explanation: "**Hard stabilization** uses permanent structures to protect coastlines: seawalls (parallel to shore, prevent cliff erosion), groins (perpendicular, trap sand), jetties (protect harbor entrances), breakwaters (offshore, reduce wave energy). Problem: they often shift erosion elsewhere.\n\n**Soft stabilization** works with natural processes: beach nourishment (adding sand), dune restoration (planting vegetation), living shorelines (using natural materials like oyster reefs), managed retreat (relocating infrastructure). These are often more sustainable but require ongoing maintenance."
    },

    // --- GEOLOGICAL: Plate Boundaries ---
    {
        id: 127,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "easy",
        type: "mc",
        question: "New oceanic crust is created at:",
        options: [
            { label: "A", text: "Subduction zones" },
            { label: "B", text: "Mid-ocean ridges" },
            { label: "C", text: "Transform faults" },
            { label: "D", text: "Ocean trenches" }
        ],
        correctAnswer: "B",
        explanation: "New oceanic crust forms at mid-ocean ridges (divergent boundaries) where plates pull apart and magma rises from the mantle. As magma solidifies, it creates new basaltic crust that spreads away from the ridge. Crust is destroyed at subduction zones (convergent boundaries) where it sinks back into the mantle."
    },
    {
        id: 128,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "The oldest oceanic crust is approximately:",
        options: [
            { label: "A", text: "4.5 billion years old" },
            { label: "B", text: "1 billion years old" },
            { label: "C", text: "200 million years old" },
            { label: "D", text: "50 million years old" }
        ],
        correctAnswer: "C",
        explanation: "The oldest oceanic crust is about 200 million years old (Jurassic Period), found in the western Pacific. Continental crust can be 4+ billion years old, but oceanic crust is constantly recycled—created at ridges and destroyed at subduction zones. The entire ocean floor is replaced roughly every 200 million years."
    },
    {
        id: 129,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "mc",
        question: "A hot spot volcanic chain like the Hawaiian Islands shows:",
        options: [
            { label: "A", text: "Increasing age of islands toward the active volcano" },
            { label: "B", text: "Increasing age of islands away from the active volcano" },
            { label: "C", text: "All islands forming simultaneously" },
            { label: "D", text: "Random ages with no pattern" }
        ],
        correctAnswer: "B",
        explanation: "Hot spot chains show increasing island age away from the currently active volcano. The hot spot (mantle plume) is stationary while the Pacific Plate moves northwest over it. Hawaii (Big Island) is currently over the hot spot, while Kauai (5 million years) and islands extending to Midway are progressively older. This proves plate motion."
    },
    {
        id: 130,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "extra-hard",
        type: "data",
        question: `The Hawaiian-Emperor seamount chain extends from Hawaii to the Aleutian Trench. Data shows:

| Island/Seamount | Distance from Hawaii (km) | Age (million years) |
|-----------------|---------------------------|---------------------|
| Hawaii | 0 | 0 (active) |
| Kauai | 600 | 5.1 |
| Midway | 2400 | 28 |
| Emperor Seamounts (oldest) | 5800 | 70 |

a) Calculate the average rate of Pacific Plate motion (km/million years) based on Kauai's data.
b) The chain shows a bend at about 43 million years ago. What does this suggest?
c) Why do the oldest seamounts disappear into the Aleutian Trench?`,
        correctAnswer: "Plate motion ≈ 117 km/million years (≈12 cm/year); Bend indicates plate direction changed 43 Ma; Oldest seamounts subducted.",
        explanation: `a) **Plate motion rate**: 600 km / 5.1 million years = **117 km/million years = 11.7 cm/year**
(Different points give slightly different rates due to variations over time)

b) **Significance of the bend**: About 43 million years ago, the chain bends from nearly north-south (Emperor chain) to northwest-southeast (Hawaiian chain). This indicates the Pacific Plate changed its direction of motion. The cause may have been the collision of India with Asia or reorganization of plate boundaries.

c) **Seamount disappearance**: The oldest seamounts (~70-80 million years) have been subducted beneath the North American Plate at the Aleutian Trench. Oceanic crust is recycled—seamounts ride the plate until it reaches a subduction zone. Even older Hawaiian hot spot products have been completely subducted and no longer exist.`
    },

    // --- CLIMATE: PDO and NAO ---
    {
        id: 131,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "medium",
        type: "mc",
        question: "The Pacific Decadal Oscillation (PDO) differs from El Niño in that it:",
        options: [
            { label: "A", text: "Occurs only in the Atlantic Ocean" },
            { label: "B", text: "Has a cycle of 20-30 years rather than 2-7 years" },
            { label: "C", text: "Only affects fish populations" },
            { label: "D", text: "Is not related to sea surface temperature" }
        ],
        correctAnswer: "B",
        explanation: "The Pacific Decadal Oscillation (PDO) is a longer-term pattern of climate variability, with phases lasting 20-30 years (compared to El Niño's 2-7 year cycles). It involves a horseshoe pattern of warm/cool SST anomalies in the North Pacific. PDO phases influence salmon populations, drought patterns, and can amplify or reduce El Niño/La Niña impacts."
    },
    {
        id: 132,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "tough",
        type: "short",
        question: "What is the North Atlantic Oscillation (NAO) and how does it affect weather patterns in Europe and eastern North America?",
        correctAnswer: "The NAO is the pressure difference between the Icelandic Low and Azores High. Positive NAO brings mild, wet winters to northern Europe; negative NAO brings cold winters.",
        acceptableAnswers: ["NAO", "Icelandic Low", "Azores High", "pressure difference", "positive", "negative", "winters"],
        explanation: "The North Atlantic Oscillation (NAO) is the fluctuation in atmospheric pressure between the Icelandic Low and the Azores High. **Positive NAO**: Strong pressure gradient → strong westerlies → mild, wet winters in northern Europe, cold winters in eastern Canada, warm winters in eastern US. **Negative NAO**: Weak pressure gradient → weak westerlies → cold winters in Europe, milder winters in eastern US. The NAO is strongest in winter and affects storm tracks, precipitation, and temperatures across the North Atlantic region."
    },

    // --- LARGE-SCALE CIRCULATION: Mixing ---
    {
        id: 133,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The Ekman spiral describes how:",
        options: [
            { label: "A", text: "Wind transfers energy to deeper water layers with decreasing speed and changing direction" },
            { label: "B", text: "Tides rotate around amphidromic points" },
            { label: "C", text: "Deep water rises to the surface in upwelling zones" },
            { label: "D", text: "The global conveyor belt circulates through ocean basins" }
        ],
        correctAnswer: "A",
        explanation: "The Ekman spiral describes how wind-driven motion transfers through the water column. Surface water moves 45° to the right of the wind (Northern Hemisphere). Each deeper layer moves slower and at an increasing angle until motion dies out (~100m depth). Net water transport (Ekman transport) is 90° to the wind direction."
    },
    {
        id: 134,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "tough",
        type: "mc",
        question: "Western intensification causes western boundary currents to be:",
        options: [
            { label: "A", text: "Wider, slower, and shallower than eastern boundary currents" },
            { label: "B", text: "Narrower, faster, and deeper than eastern boundary currents" },
            { label: "C", text: "Similar in all properties to eastern boundary currents" },
            { label: "D", text: "Warm near the equator and cold near the poles" }
        ],
        correctAnswer: "B",
        explanation: "Western intensification, caused by the variation of Coriolis parameter with latitude, makes western boundary currents (Gulf Stream, Kuroshio) narrow (100km), fast (up to 2 m/s), deep (>1000m), and transport large volumes. Eastern boundary currents (California, Canary) are wide (1000km), slow, shallow, and carry less water."
    },

    // --- SURFACE CIRCULATION: Gyres ---
    {
        id: 135,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "easy",
        type: "mc",
        question: "Subtropical gyres in the Northern Hemisphere rotate:",
        options: [
            { label: "A", text: "Clockwise" },
            { label: "B", text: "Counterclockwise" },
            { label: "C", text: "In random directions" },
            { label: "D", text: "They do not rotate" }
        ],
        correctAnswer: "A",
        explanation: "Northern Hemisphere subtropical gyres rotate clockwise due to the Coriolis effect and prevailing wind patterns. Trade winds push water westward near the equator, and westerlies push water eastward at mid-latitudes. In the Southern Hemisphere, subtropical gyres rotate counterclockwise."
    },
    {
        id: 136,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The Sargasso Sea is located:",
        options: [
            { label: "A", text: "Along the coast of Florida" },
            { label: "B", text: "In the center of the North Atlantic subtropical gyre" },
            { label: "C", text: "Near the equator in the Pacific Ocean" },
            { label: "D", text: "In the Southern Ocean near Antarctica" }
        ],
        correctAnswer: "B",
        explanation: "The Sargasso Sea is in the center of the North Atlantic subtropical gyre, bounded by currents rather than land. It's characterized by calm waters, low productivity, clear blue water, and floating Sargassum seaweed. The gyre's clockwise circulation concentrates floating debris here (similar to the Great Pacific Garbage Patch)."
    },

    // --- WAVES: Rogue Waves and Internal Waves ---
    {
        id: 137,
        topic: "waves",
        topicName: "Waves",
        difficulty: "tough",
        type: "mc",
        question: "Internal waves form at:",
        options: [
            { label: "A", text: "The air-water interface" },
            { label: "B", text: "Boundaries between water layers of different density" },
            { label: "C", text: "Only in shallow coastal waters" },
            { label: "D", text: "The ocean floor due to tidal motion" }
        ],
        correctAnswer: "B",
        explanation: "Internal waves form at pycnoclines—boundaries between water layers of different density. They can be much larger than surface waves (amplitudes of 100+ meters) but move slowly because the density difference between layers is small compared to air-water. Internal waves affect submarine navigation, mix nutrients, and can appear as 'slicks' on the surface."
    },
    {
        id: 138,
        topic: "waves",
        topicName: "Waves",
        difficulty: "extra-hard",
        type: "long",
        question: `Rogue waves (also called freak waves or monster waves) can be extremely dangerous to ships.

a) Define what makes a wave a 'rogue wave' (use the standard definition).
b) Describe three mechanisms that can cause rogue wave formation.
c) Why were rogue waves considered mythical until recently, and what evidence changed scientific opinion?
d) In what ocean conditions are rogue waves most likely to occur?`,
        correctAnswer: "Rogue wave: height >2× significant wave height. Causes: constructive interference, current-wave interaction, focusing. Satellite data proved their existence.",
        explanation: `a) **Definition**: A rogue wave has height exceeding 2.2× the significant wave height (H > 2.2 × Hs). Some definitions use 2×. A 'hole in the sea' (deep trough) also qualifies.

b) **Formation mechanisms**:
1. **Constructive interference**: Multiple wave trains combine, momentarily doubling amplitude
2. **Current-wave interaction**: Opposing currents (like the Agulhas Current) steepen and focus waves
3. **Wave focusing**: Seafloor topography or current patterns focus wave energy into one area
4. **Nonlinear dynamics**: Under certain conditions, energy transfers from smaller waves to create monsters

c) **Historical skepticism**: Sailors' tales were dismissed as exaggeration. Scientific change came from:
- 1995: Draupner oil platform recorded a 26m rogue wave (first direct measurement)
- Satellite data confirmed they occur worldwide more frequently than models predicted
- Ship damage analysis supported wave heights far exceeding predictions

d) **Conditions favoring rogue waves**:
- Where strong currents oppose wave direction (Agulhas Current off South Africa)
- During storms with high sea states
- Where swells from different directions cross
- Areas with complex seafloor topography
- Along the Gulf Stream`
    },

    // --- GEOLOGICAL: Ocean Basin Features ---
    {
        id: 139,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "Turbidity currents are responsible for:",
        options: [
            { label: "A", text: "Creating mid-ocean ridges" },
            { label: "B", text: "Forming submarine canyons and depositing deep-sea fans" },
            { label: "C", text: "Generating tsunamis" },
            { label: "D", text: "Upwelling of cold water" }
        ],
        correctAnswer: "B",
        explanation: "Turbidity currents are underwater avalanches of sediment-laden water. They erode submarine canyons and deposit sediment at the base of the continental slope as deep-sea fans (abyssal fans). Triggered by earthquakes, storms, or slope failure, they can travel over 100 km/h and break undersea cables."
    },
    {
        id: 140,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "short",
        question: "Describe the structure and formation of a continental margin, including the three main divisions: shelf, slope, and rise.",
        correctAnswer: "Continental shelf: shallow, flat extension of continent. Slope: steep drop to deep ocean. Rise: gradual transition formed by sediment accumulation at slope base.",
        acceptableAnswers: ["continental shelf", "slope", "rise", "shallow", "steep", "sediment", "transition"],
        explanation: "**Continental shelf**: Shallow (0-200m), flat, flooded extension of the continent. Width varies (10-400 km). Rich fishing grounds, oil/gas deposits. Exposed during ice ages.\n\n**Continental slope**: Steep (3-6°) transition from shelf to deep ocean. Depths 200-3000m. Cut by submarine canyons.\n\n**Continental rise**: Gentle slope (0.5°) at base of continental slope. Formed by sediment accumulating from turbidity currents. Grades into abyssal plain.\n\n**Active margins** (subduction) have narrow shelves and no rise; **passive margins** (no plate boundary) have wide shelves and prominent rises."
    },

    // ========== BATCH 5: QUESTIONS 141-165 ==========

    // --- SEAWATER: Nutrients and Biogeochemistry ---
    {
        id: 141,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "easy",
        type: "mc",
        question: "The two nutrients that most commonly limit primary productivity in the ocean are:",
        options: [
            { label: "A", text: "Sodium and chloride" },
            { label: "B", text: "Nitrogen and phosphorus" },
            { label: "C", text: "Calcium and magnesium" },
            { label: "D", text: "Oxygen and carbon dioxide" }
        ],
        correctAnswer: "B",
        explanation: "Nitrogen (as nitrate, NO₃⁻) and phosphorus (as phosphate, PO₄³⁻) are the primary limiting nutrients for phytoplankton growth. They're depleted in surface waters by biological uptake and regenerated at depth by decomposition. The Redfield ratio (C:N:P = 106:16:1) describes typical nutrient ratios in marine organisms."
    },
    {
        id: 142,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "medium",
        type: "mc",
        question: "High-Nutrient, Low-Chlorophyll (HNLC) regions exist because:",
        options: [
            { label: "A", text: "Temperatures are too cold for photosynthesis" },
            { label: "B", text: "Iron is limiting, preventing phytoplankton from using available nutrients" },
            { label: "C", text: "Light cannot penetrate the water" },
            { label: "D", text: "Salinity is too high for plankton" }
        ],
        correctAnswer: "B",
        explanation: "HNLC regions (Southern Ocean, subarctic Pacific, equatorial Pacific) have abundant nitrogen and phosphorus but low phytoplankton biomass. Iron—a micronutrient needed for photosynthesis and nitrogen fixation—is limiting. Iron fertilization experiments have shown dramatic phytoplankton blooms when iron is added."
    },
    {
        id: 143,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "tough",
        type: "short",
        question: "Explain the Redfield ratio and its significance in oceanography. What happens when this ratio is disturbed?",
        correctAnswer: "Redfield ratio (C:N:P = 106:16:1) is the average elemental ratio in marine plankton. It indicates which nutrient limits growth and helps trace water mass origins.",
        acceptableAnswers: ["Redfield", "106:16:1", "C:N:P", "ratio", "nitrogen", "phosphorus", "limiting"],
        explanation: "The Redfield ratio describes the atomic ratio of carbon, nitrogen, and phosphorus in marine phytoplankton: C:N:P = 106:16:1. Significance: (1) Predicts which nutrient limits growth—if N:P ratio in water differs from 16:1, the scarcer nutrient limits production. (2) Links nutrient cycles—decomposition releases nutrients in this ratio. (3) Water mass tracer—helps identify water masses. When disturbed (e.g., excess nitrogen from pollution), it can cause harmful algal blooms or shift species composition."
    },

    // --- SURFACE CIRCULATION: Monsoons ---
    {
        id: 144,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The Indian Ocean monsoon causes the Somali Current to:",
        options: [
            { label: "A", text: "Flow northward year-round" },
            { label: "B", text: "Reverse direction seasonally" },
            { label: "C", text: "Flow only during El Niño events" },
            { label: "D", text: "Remain stationary" }
        ],
        correctAnswer: "B",
        explanation: "The Somali Current is the only major current that reverses direction seasonally. During the southwest monsoon (June-September), it flows strongly northward as a western boundary current. During the northeast monsoon (December-February), it reverses to flow southward. This reversal is driven by the changing monsoon winds over the Indian Ocean."
    },
    {
        id: 145,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "tough",
        type: "short",
        question: "Explain how monsoons form and why the Asian monsoon is particularly strong.",
        correctAnswer: "Monsoons result from seasonal heating differences between land and ocean. Asia's large landmass creates extreme temperature contrasts, producing strong pressure gradients and monsoon winds.",
        acceptableAnswers: ["monsoon", "land", "ocean", "heating", "temperature", "pressure", "seasonal"],
        explanation: "Monsoon formation: (1) Summer: Land heats faster than ocean → low pressure over land, high over ocean → winds blow from ocean to land (wet monsoon). (2) Winter: Land cools faster → high pressure over land, low over ocean → winds blow from land to ocean (dry monsoon). Asia has the strongest monsoon because: (1) Huge landmass (largest continent) creates extreme temperature contrasts. (2) Tibetan Plateau acts as an elevated heat source. (3) No mountain barriers to block moist air from the Indian Ocean."
    },
    {
        id: 146,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The Labrador Current is a cold current that flows:",
        options: [
            { label: "A", text: "Northward along the east coast of North America" },
            { label: "B", text: "Southward from the Arctic along eastern Canada" },
            { label: "C", text: "Eastward across the North Atlantic" },
            { label: "D", text: "Around Antarctica" }
        ],
        correctAnswer: "B",
        explanation: "The Labrador Current carries cold, low-salinity water southward from the Arctic along the coast of Labrador and Newfoundland. It meets the warm Gulf Stream near the Grand Banks, creating fog and dangerous icebergs (the Titanic sank in this region). The current also brings nutrients that support productive fisheries."
    },

    // --- TIDES: Storm Surge and Tidal Energy ---
    {
        id: 147,
        topic: "tides",
        topicName: "Tides",
        difficulty: "easy",
        type: "mc",
        question: "A storm surge is caused primarily by:",
        options: [
            { label: "A", text: "Gravitational pull of the Moon" },
            { label: "B", text: "Strong winds and low atmospheric pressure from a storm" },
            { label: "C", text: "Underwater earthquakes" },
            { label: "D", text: "High tides during full moon" }
        ],
        correctAnswer: "B",
        explanation: "Storm surge is a rise in sea level caused by: (1) Strong onshore winds pushing water toward the coast, and (2) Low atmospheric pressure allowing the sea surface to bulge upward. During hurricanes, storm surge can exceed 6 meters and causes most hurricane-related deaths through coastal flooding."
    },
    {
        id: 148,
        topic: "tides",
        topicName: "Tides",
        difficulty: "medium",
        type: "mc",
        question: "If a storm surge coincides with high tide during a spring tide, this is called a:",
        options: [
            { label: "A", text: "Tidal bore" },
            { label: "B", text: "Storm tide" },
            { label: "C", text: "Neap surge" },
            { label: "D", text: "Seiche" }
        ],
        correctAnswer: "B",
        explanation: "A storm tide is the combination of storm surge plus the astronomical tide. When storm surge coincides with a spring high tide, the flooding can be catastrophic. For example, if spring high tide is 2m above mean sea level and storm surge adds 4m, the storm tide is 6m—far worse than either alone."
    },
    {
        id: 149,
        topic: "tides",
        topicName: "Tides",
        difficulty: "tough",
        type: "short",
        question: "What is a seiche and how does it form? Where are seiches most commonly observed?",
        correctAnswer: "A seiche is a standing wave oscillation in an enclosed or semi-enclosed body of water. It forms when wind, pressure changes, or seismic activity sets water sloshing back and forth.",
        acceptableAnswers: ["seiche", "standing wave", "oscillation", "enclosed", "wind", "pressure", "sloshing"],
        explanation: "A seiche is a standing wave that oscillates back and forth in a lake, bay, or harbor. Formation: Wind, atmospheric pressure changes, earthquakes, or sudden changes in water input cause water to 'slosh' at the basin's natural resonant period. The water rocks back and forth like water in a bathtub. Common locations: Great Lakes (Lake Erie especially), harbors, fjords. Lake Geneva's seiche was the first scientifically studied (18th century). Seiches can cause unexpected flooding and strong currents."
    },

    // --- COASTAL: Barrier Islands and Sea Level ---
    {
        id: 150,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "easy",
        type: "mc",
        question: "Barrier islands are typically found along:",
        options: [
            { label: "A", text: "Steep, rocky coastlines" },
            { label: "B", text: "Gently sloping coastal plains with abundant sediment" },
            { label: "C", text: "Deep fjords" },
            { label: "D", text: "Volcanic coastlines" }
        ],
        correctAnswer: "B",
        explanation: "Barrier islands form along gently sloping continental shelves with abundant sediment supply. They're common on the U.S. Atlantic and Gulf coasts. The shallow gradient allows waves to build sand bars that eventually emerge. They protect the mainland from storms but are dynamic and migrate landward over time."
    },
    {
        id: 151,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "mc",
        question: "As sea level rises, barrier islands typically:",
        options: [
            { label: "A", text: "Grow seaward by accumulating sediment" },
            { label: "B", text: "Migrate landward through overwash processes" },
            { label: "C", text: "Remain stationary" },
            { label: "D", text: "Sink below the water surface immediately" }
        ],
        correctAnswer: "B",
        explanation: "Barrier islands naturally migrate landward ('rollover') as sea level rises. Storms wash sand from the beach over the island (overwash), building up the back side while the front erodes. This allows islands to maintain themselves if sediment supply is adequate and migration isn't blocked by development."
    },
    {
        id: 152,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "tough",
        type: "mc",
        question: "Mangrove forests provide coastal protection by:",
        options: [
            { label: "A", text: "Reflecting wave energy back to sea" },
            { label: "B", text: "Absorbing wave energy, trapping sediment, and reducing erosion" },
            { label: "C", text: "Raising the land surface through volcanic activity" },
            { label: "D", text: "Cooling the water to reduce storm intensity" }
        ],
        correctAnswer: "B",
        explanation: "Mangroves protect coastlines through: (1) Wave energy absorption—tangled roots dissipate up to 66% of wave energy. (2) Sediment trapping—roots slow water flow, allowing sediment to settle. (3) Erosion reduction—root networks stabilize sediment. (4) Storm surge reduction—mangrove forests can reduce surge height significantly. They also provide nursery habitat for fish and sequester carbon."
    },
    {
        id: 153,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "extra-hard",
        type: "long",
        question: `Sea level rise has both eustatic (global) and isostatic (local) components.

a) Define eustatic and isostatic sea level change and give one cause of each.
b) Why might a region like Scandinavia experience relative sea level FALL even as global sea level rises?
c) How do tide gauge records and satellite altimetry differ in measuring sea level change?
d) Current global sea level rise is about 3.7 mm/year. What are the main contributors?`,
        correctAnswer: "Eustatic: global change (thermal expansion, ice melt). Isostatic: local land movement (post-glacial rebound). Scandinavia rises from rebound faster than sea level rises.",
        explanation: `a) **Definitions**:
- Eustatic: Global sea level change affecting all oceans equally. Causes: thermal expansion of warming water, melting ice sheets/glaciers, changes in ocean basin volume.
- Isostatic: Local/regional change from land movement. Causes: post-glacial rebound (land rising after ice sheet removed), tectonic subsidence, groundwater extraction causing compaction.

b) **Scandinavia**: The Scandinavian Peninsula is still rebounding from the weight of ice sheets that melted ~10,000 years ago. Land is rising 9-10 mm/year in some areas—faster than global sea level rise (~3.7 mm/year)—so relative sea level is falling.

c) **Measurement differences**:
- Tide gauges: Measure sea level relative to land (capture both eustatic and isostatic changes). Long records but sparse coverage.
- Satellite altimetry: Measures absolute sea surface height from space. Global coverage but shorter records (since 1992).

d) **Contributors to current rise**:
- Thermal expansion (~40%): Ocean absorbs heat and expands
- Glacier melt (~21%): Mountain glaciers worldwide
- Greenland ice sheet (~17%): Accelerating melt
- Antarctic ice sheet (~8%): Increasingly unstable
- Land water storage changes (~14%): Groundwater extraction`
    },

    // --- GEOLOGICAL: Deep Sea Features ---
    {
        id: 154,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "Manganese nodules form on the seafloor through:",
        options: [
            { label: "A", text: "Rapid volcanic eruptions" },
            { label: "B", text: "Extremely slow precipitation of metals from seawater around a nucleus" },
            { label: "C", text: "Compression of sediments over millions of years" },
            { label: "D", text: "Biological secretion by deep-sea organisms" }
        ],
        correctAnswer: "B",
        explanation: "Manganese nodules (polymetallic nodules) form incredibly slowly—a few millimeters per million years—by precipitation of dissolved manganese, iron, nickel, copper, and cobalt from seawater. They grow concentrically around a nucleus (shark tooth, rock fragment). Found on abyssal plains where sedimentation is slow. They're a potential mining resource."
    },
    {
        id: 155,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "mc",
        question: "The Wilson Cycle describes:",
        options: [
            { label: "A", text: "The annual temperature cycle in the ocean" },
            { label: "B", text: "The opening and closing of ocean basins over hundreds of millions of years" },
            { label: "C", text: "The daily tidal cycle" },
            { label: "D", text: "El Niño and La Niña oscillations" }
        ],
        correctAnswer: "B",
        explanation: "The Wilson Cycle describes the cyclical opening and closing of ocean basins: (1) Continental rifting begins (East African Rift). (2) Narrow sea forms (Red Sea). (3) Wide ocean develops (Atlantic). (4) Subduction begins as ocean ages. (5) Ocean narrows (Mediterranean). (6) Continents collide (Himalayas). The cycle takes 300-500 million years. We can identify ancient ocean closures by ophiolites—pieces of oceanic crust caught in collision zones."
    },
    {
        id: 156,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "extra-hard",
        type: "data",
        question: `Seafloor spreading rates can be calculated from magnetic anomaly patterns.

A research ship crosses a mid-ocean ridge and records magnetic anomalies. The pattern shows:
- Anomaly age 2.5 million years (Gauss-Matuyama reversal): 60 km from ridge axis
- Anomaly age 5.0 million years: 120 km from ridge axis
- Anomaly age 10 million years: 250 km from ridge axis

a) Calculate the half-spreading rate in km/million years and cm/year for the 0-2.5 Ma period.
b) Has the spreading rate been constant? How do you know?
c) If this rate continues, how far apart will the two plates be in 1 million years?
d) The Atlantic is approximately 5000 km wide. Estimate when it began to open.`,
        correctAnswer: "Half-rate = 24 km/Ma = 2.4 cm/yr for 0-2.5 Ma. Rate changed (faster 0-5 Ma than 5-10 Ma). Full separation rate = 4.8 cm/yr. Atlantic opened ~100 Ma ago.",
        explanation: `a) **Half-spreading rate (0-2.5 Ma)**:
60 km / 2.5 Ma = **24 km/million years = 2.4 cm/year**

b) **Rate constancy check**:
- 0-2.5 Ma: 60km/2.5Ma = 24 km/Ma
- 2.5-5.0 Ma: 60km/2.5Ma = 24 km/Ma (constant)
- 5.0-10 Ma: 130km/5Ma = 26 km/Ma (slightly faster)
Rate has varied slightly—it was faster in the earlier period.

c) **Future separation**:
Full spreading rate = 2 × half rate = 4.8 cm/year = 48 km/Ma
In 1 million years: plates separate by **48 km** (24 km on each side)

d) **Atlantic opening estimate**:
Half-width ≈ 2500 km. At 24 km/Ma: 2500/24 ≈ **104 million years** (Cretaceous Period)
(Actual opening began ~180 Ma in the south, ~130 Ma in the north—rates have varied)`
    },

    // --- CLIMATE: Ocean Heat and Paleoceanography ---
    {
        id: 157,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "easy",
        type: "mc",
        question: "The ocean stores more heat than the atmosphere because:",
        options: [
            { label: "A", text: "The ocean is closer to the Sun" },
            { label: "B", text: "Water has a much higher heat capacity than air" },
            { label: "C", text: "The ocean is darker in color" },
            { label: "D", text: "Ocean currents generate heat" }
        ],
        correctAnswer: "B",
        explanation: "Water has a specific heat capacity about 4× higher than air (4.18 vs ~1.0 J/g·°C), meaning it can store much more heat per unit mass for the same temperature change. The ocean's huge volume and high heat capacity mean it stores about 1000× more heat than the atmosphere. This buffers climate and slows climate change."
    },
    {
        id: 158,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "medium",
        type: "mc",
        question: "Ocean heat content has increased primarily in which layer?",
        options: [
            { label: "A", text: "The deep ocean below 2000m" },
            { label: "B", text: "The upper 700 meters" },
            { label: "C", text: "The thermocline only" },
            { label: "D", text: "Only at the surface" }
        ],
        correctAnswer: "B",
        explanation: "Most ocean heat uptake occurs in the upper 700m, where the ocean directly interacts with the atmosphere. About 90% of the extra heat trapped by greenhouse gases has gone into the ocean. Increasingly, warming is penetrating to 700-2000m depths as surface heat mixes downward. Deep ocean warming is slower but detectable."
    },
    {
        id: 159,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "tough",
        type: "short",
        question: "How do oxygen isotope ratios (δ¹⁸O) in marine sediments reveal past climate? What do they indicate about ice ages?",
        correctAnswer: "δ¹⁸O in foram shells reflects ice volume and temperature. High δ¹⁸O indicates ice ages (more ¹⁸O in ocean because ¹⁶O locked in ice sheets).",
        acceptableAnswers: ["oxygen isotope", "δ18O", "foraminifera", "ice volume", "temperature", "ice age", "heavier"],
        explanation: "Oxygen isotope paleothermometry: Foraminifera (tiny shelled organisms) incorporate oxygen from seawater into their CaCO₃ shells. The ratio of ¹⁸O to ¹⁶O (δ¹⁸O) depends on: (1) Temperature—colder water → higher δ¹⁸O in shells. (2) Ice volume—ice sheets preferentially lock up lighter ¹⁶O, leaving seawater enriched in ¹⁸O. During ice ages, both effects combine to produce high δ¹⁸O values in marine sediments. Sediment cores provide a continuous climate record spanning millions of years."
    },
    {
        id: 160,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "extra-hard",
        type: "long",
        question: `Milankovitch cycles are orbital variations that affect Earth's climate over tens of thousands of years.

a) Name and describe the three main Milankovitch cycles and their periods.
b) How do these cycles affect the amount and distribution of solar radiation reaching Earth?
c) Which cycle has the strongest influence on initiating ice ages, and why?
d) How do marine sediment records confirm the influence of Milankovitch cycles?`,
        correctAnswer: "Eccentricity (100,000 yr), Obliquity (41,000 yr), Precession (23,000 yr). They affect insolation distribution. ~100,000 yr ice age cycles match eccentricity.",
        explanation: `a) **Three Milankovitch cycles**:
1. **Eccentricity** (~100,000 years): Earth's orbit varies from nearly circular to more elliptical. Affects total annual solar radiation by ~0.2%.
2. **Obliquity/Tilt** (~41,000 years): Earth's axial tilt varies from 22.1° to 24.5° (currently 23.4°). Affects seasonality and polar insolation.
3. **Precession** (~23,000 years): Earth's axis wobbles like a top, changing which hemisphere is tilted toward the Sun at perihelion. Affects timing of seasons.

b) **Effects on radiation**:
- Eccentricity changes total insolation slightly
- Obliquity affects the contrast between polar and equatorial regions
- Precession determines whether Northern or Southern Hemisphere has warmer summers
- Combined effects change summer insolation at high latitudes—critical for ice sheet growth/melt

c) **Dominant cycle**:
The ~100,000-year glacial-interglacial cycle correlates with **eccentricity**, though its direct radiation effect is small. Scientists believe eccentricity modulates the amplitude of precession effects, and feedbacks (CO₂, ice albedo) amplify the signal.

d) **Sediment confirmation**:
δ¹⁸O records from sediment cores show clear periodicities at 100,000, 41,000, and 23,000 years when analyzed with spectral analysis. The match between orbital calculations and sediment records strongly supports Milankovitch theory.`
    },

    // --- LARGE-SCALE CIRCULATION: Overturning ---
    {
        id: 161,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The Atlantic Meridional Overturning Circulation (AMOC) transports:",
        options: [
            { label: "A", text: "Cold water northward at the surface" },
            { label: "B", text: "Warm water northward at the surface, cold water southward at depth" },
            { label: "C", text: "Water only along the equator" },
            { label: "D", text: "Warm water southward at all depths" }
        ],
        correctAnswer: "B",
        explanation: "AMOC transports warm surface water northward in the upper ocean (including the Gulf Stream system), releases heat to the atmosphere in the North Atlantic, sinks as North Atlantic Deep Water, and returns southward at depth. This 'overturning' transports roughly 1 petawatt of heat northward, significantly warming Western Europe."
    },
    {
        id: 162,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "tough",
        type: "mc",
        question: "Evidence suggests the AMOC has weakened by approximately what percentage since the mid-20th century?",
        options: [
            { label: "A", text: "1-2%" },
            { label: "B", text: "15-20%" },
            { label: "C", text: "50%" },
            { label: "D", text: "No change has been detected" }
        ],
        correctAnswer: "B",
        explanation: "Studies using proxy data and direct measurements suggest AMOC has weakened by approximately 15-20% since the mid-20th century. This is attributed to freshwater input from Greenland ice melt and Arctic sea ice loss, which reduces the density of surface water and inhibits sinking. A 'cold blob' in the North Atlantic, where SSTs have bucked the global warming trend, supports this."
    },
    {
        id: 163,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "tough",
        type: "short",
        question: "What is ventilation in oceanography, and why is it important for deep ocean oxygen levels and carbon storage?",
        correctAnswer: "Ventilation is the process of surface water sinking and carrying oxygen and atmospheric gases to the deep ocean. It oxygenates deep water and transfers carbon to depth.",
        acceptableAnswers: ["ventilation", "sinking", "oxygen", "surface water", "deep ocean", "carbon", "atmospheric gases"],
        explanation: "Ocean ventilation occurs when surface water—equilibrated with the atmosphere (rich in oxygen, carrying absorbed CO₂)—sinks to depth and spreads horizontally. Importance: (1) Delivers oxygen to deep ocean—without ventilation, deep water becomes anoxic. (2) Sequesters atmospheric carbon—CO₂ absorbed at the surface is transported to depth where it can remain for centuries. (3) 'Age' of water masses—ventilation rate determines how long since water was at the surface. Reduced ventilation from climate change could lead to expanding oxygen minimum zones and reduced ocean CO₂ uptake."
    },

    // --- WAVES: Storm Waves ---
    {
        id: 164,
        topic: "waves",
        topicName: "Waves",
        difficulty: "medium",
        type: "mc",
        question: "Wave setup is defined as:",
        options: [
            { label: "A", text: "The formation of waves by wind" },
            { label: "B", text: "The increase in mean water level at the shoreline due to breaking waves" },
            { label: "C", text: "The arrangement of waves in a wave train" },
            { label: "D", text: "The building of sand berms by waves" }
        ],
        correctAnswer: "B",
        explanation: "Wave setup is the increase in mean water level at the shore caused by breaking waves pushing water landward. As waves break, momentum is transferred shoreward, 'piling up' water against the coast. Setup can add 0.5-1.5m to water level during storms, contributing to coastal flooding on top of storm surge and tides."
    },
    {
        id: 165,
        topic: "waves",
        topicName: "Waves",
        difficulty: "tough",
        type: "data",
        question: `A storm generates waves with the following characteristics in deep water:
- Wind speed: 80 km/h
- Fetch (distance over which wind blows): 500 km
- Duration: 12 hours

Wave height can be estimated using: H = 0.21 × (wind speed)² / g × [factor based on fetch and duration]

For this storm, the significant wave height is measured at 6 meters with a period of 10 seconds.

a) As these waves propagate away from the storm, what happens to wave height and why?
b) If the waves reach a coastline 2000 km away, would you expect them to arrive as 'sea' or 'swell'?
c) Calculate the approximate deep-water wavelength using L = 1.56 × T² (where T is period in seconds).
d) If these waves enter water 20m deep, are they still deep-water waves?`,
        correctAnswer: "Height decreases as waves disperse. They arrive as swell. L = 156m. At 20m depth (< L/2 = 78m), they are shallow/intermediate water waves.",
        explanation: `a) **Height decrease with distance**:
Wave height decreases as waves travel from the storm due to: (1) Angular spreading—wave energy spreads over larger area. (2) Dispersion—waves of different periods travel at different speeds, separating the wave train. (3) Energy loss—some energy lost to friction and whitecapping. This is why distant swells are lower than local storm waves.

b) **Sea vs. Swell**:
They arrive as **swell**. 'Sea' refers to chaotic, locally-generated waves still under wind influence. 'Swell' is organized, long-period waves that have traveled away from the generating storm. After 2000 km, short waves have died out leaving smooth, regular swell.

c) **Wavelength calculation**:
L = 1.56 × T² = 1.56 × 10² = **156 meters**

d) **Deep vs. shallow water**:
Deep water requires depth > L/2 = 156/2 = 78m
At 20m depth: 20m < 78m, so these are **transitional or shallow-water waves**. The waves will slow down, shorten, and steepen as they 'feel' the bottom.`
    },

    // ========== BATCH 6: QUESTIONS 166-200 ==========

    // --- SEAWATER: Advanced Properties ---
    {
        id: 166,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "easy",
        type: "mc",
        question: "The six major ions that make up over 99% of dissolved salts in seawater are:",
        options: [
            { label: "A", text: "Chloride, sodium, sulfate, magnesium, calcium, potassium" },
            { label: "B", text: "Nitrogen, oxygen, carbon, hydrogen, helium, argon" },
            { label: "C", text: "Iron, manganese, copper, zinc, nickel, cobalt" },
            { label: "D", text: "Nitrate, phosphate, silicate, ammonia, iron, carbon" }
        ],
        correctAnswer: "A",
        explanation: "The 'big six' ions: Chloride (Cl⁻, 55%), Sodium (Na⁺, 31%), Sulfate (SO₄²⁻, 8%), Magnesium (Mg²⁺, 4%), Calcium (Ca²⁺, 1%), and Potassium (K⁺, 1%). These are conservative elements—their ratios remain constant regardless of total salinity. This is called the Principle of Constant Proportions."
    },
    {
        id: 167,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "medium",
        type: "mc",
        question: "The Principle of Constant Proportions states that:",
        options: [
            { label: "A", text: "Ocean salinity is the same everywhere" },
            { label: "B", text: "The relative proportions of major ions in seawater are nearly constant worldwide" },
            { label: "C", text: "Temperature and salinity are always inversely related" },
            { label: "D", text: "Nutrient concentrations are uniform throughout the ocean" }
        ],
        correctAnswer: "B",
        explanation: "The Principle of Constant Proportions (Marcet's Principle) states that while total salinity varies, the RATIOS of major dissolved ions remain nearly constant in open ocean water. This allows oceanographers to measure just one property (like chlorinity or conductivity) to calculate total salinity. This principle applies to conservative ions, not nutrients."
    },
    {
        id: 168,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "tough",
        type: "short",
        question: "What is the halocline and how does it differ from the thermocline and pycnocline?",
        correctAnswer: "Halocline: zone of rapid salinity change with depth. Thermocline: rapid temperature change. Pycnocline: rapid density change. Pycnocline often coincides with thermocline or halocline.",
        acceptableAnswers: ["halocline", "salinity", "thermocline", "temperature", "pycnocline", "density", "depth"],
        explanation: "Three important ocean layers: (1) **Thermocline**: Zone where temperature decreases rapidly with depth (typically 200-1000m). (2) **Halocline**: Zone where salinity changes rapidly with depth. Common in polar regions where freshwater sits atop saltier water. (3) **Pycnocline**: Zone of rapid density increase with depth. Since density depends on both T and S, the pycnocline usually coincides with the thermocline (low/mid latitudes) or halocline (high latitudes). These layers resist vertical mixing, isolating surface from deep water."
    },

    // --- SURFACE CIRCULATION: Eddies ---
    {
        id: 169,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "Mesoscale eddies are important because they:",
        options: [
            { label: "A", text: "Transport heat, salt, and nutrients across ocean basins" },
            { label: "B", text: "Only occur near coastlines" },
            { label: "C", text: "Are too small to affect ocean circulation" },
            { label: "D", text: "Are easily visible from space as permanent features" }
        ],
        correctAnswer: "A",
        explanation: "Mesoscale eddies (10-500 km diameter, lasting weeks to months) are spinning water masses that transport significant amounts of heat, salt, nutrients, and marine organisms across the ocean. They're the 'weather' of the ocean, containing more kinetic energy than mean currents. They form from instabilities in major currents like the Gulf Stream."
    },
    {
        id: 170,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "tough",
        type: "mc",
        question: "A warm-core ring forms when:",
        options: [
            { label: "A", text: "A meander of the Gulf Stream pinches off to the south, trapping Sargasso Sea water" },
            { label: "B", text: "A meander of the Gulf Stream pinches off to the north, trapping slope water" },
            { label: "C", text: "Upwelling brings warm water to the surface" },
            { label: "D", text: "Two cold currents collide" }
        ],
        correctAnswer: "A",
        explanation: "Gulf Stream rings form when meanders pinch off: **Warm-core rings** form on the NORTH (cold) side of the Gulf Stream, containing trapped warm Sargasso Sea water. They rotate clockwise. **Cold-core rings** form on the SOUTH side, containing cold slope water, rotating counterclockwise. These rings can persist for months and transport water masses hundreds of kilometers."
    },
    {
        id: 171,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The Agulhas Current is significant because it:",
        options: [
            { label: "A", text: "Is the weakest western boundary current" },
            { label: "B", text: "Leaks warm Indian Ocean water into the Atlantic via rings and filaments" },
            { label: "C", text: "Flows northward along Africa" },
            { label: "D", text: "Is entirely driven by tides" }
        ],
        correctAnswer: "B",
        explanation: "The Agulhas Current flows southward along southeastern Africa as a strong western boundary current. At its terminus, it retroflects (turns back toward the Indian Ocean), but some water 'leaks' into the Atlantic as warm, salty rings and filaments. This Agulhas leakage may be important for AMOC stability and has increased with climate change."
    },

    // --- WAVES: Breaking and Surf Zone ---
    {
        id: 172,
        topic: "waves",
        topicName: "Waves",
        difficulty: "easy",
        type: "mc",
        question: "Waves break when:",
        options: [
            { label: "A", text: "Water depth is less than about 1.3 times the wave height" },
            { label: "B", text: "Wind speed exceeds wave speed" },
            { label: "C", text: "The Moon is full" },
            { label: "D", text: "Water temperature drops below 10°C" }
        ],
        correctAnswer: "A",
        explanation: "Waves break when water depth ≈ 1.3 × wave height (the breaking criterion). As waves enter shallow water, the bottom slows the base while the crest continues at original speed. The wave steepens until it becomes unstable and breaks. A 2m wave breaks in about 2.6m of water."
    },
    {
        id: 173,
        topic: "waves",
        topicName: "Waves",
        difficulty: "medium",
        type: "mc",
        question: "A plunging breaker forms on a:",
        options: [
            { label: "A", text: "Very gentle beach slope" },
            { label: "B", text: "Moderately steep beach slope" },
            { label: "C", text: "Beach slope has no effect" },
            { label: "D", text: "Only in very deep water" }
        ],
        correctAnswer: "B",
        explanation: "Beach slope determines breaker type: **Spilling breakers**: Gentle slopes—wave gradually crumbles, white foam cascades down the face. **Plunging breakers**: Moderate slopes—wave curls and crashes dramatically (surfers' favorite). **Surging breakers**: Steep slopes—wave surges up the beach without fully breaking. Collapsing breakers are intermediate."
    },
    {
        id: 174,
        topic: "waves",
        topicName: "Waves",
        difficulty: "tough",
        type: "short",
        question: "Describe the three main zones of the surf zone from offshore to shore: breaker zone, surf zone, and swash zone.",
        correctAnswer: "Breaker zone: where waves first break. Surf zone: area of broken wave bores moving shoreward. Swash zone: wave run-up and backwash on beach face.",
        acceptableAnswers: ["breaker zone", "surf zone", "swash zone", "break", "bore", "run-up", "backwash"],
        explanation: "Three zones from offshore to shore: (1) **Breaker zone**: Where waves first become unstable and break. Location depends on wave height and beach slope. (2) **Surf zone**: Between breaker zone and beach. Broken waves travel shoreward as turbulent bores (walls of white water). Strong currents, rip currents form here. (3) **Swash zone**: The beach face alternately covered and exposed by waves. Swash runs up the beach; backwash drains back. This is where most sediment transport occurs."
    },

    // --- TIDES: Navigation and Applications ---
    {
        id: 175,
        topic: "tides",
        topicName: "Tides",
        difficulty: "easy",
        type: "mc",
        question: "Slack water occurs:",
        options: [
            { label: "A", text: "Only during storms" },
            { label: "B", text: "At the turn of the tide when current temporarily stops" },
            { label: "C", text: "In the middle of the ocean only" },
            { label: "D", text: "When waves are highest" }
        ],
        correctAnswer: "B",
        explanation: "Slack water is the brief period when tidal current stops before reversing direction—occurring near high and low tide. It's important for navigation (easier to maneuver in harbors), diving (best visibility, easiest swimming), and fishing (some species feed actively as currents resume)."
    },
    {
        id: 176,
        topic: "tides",
        topicName: "Tides",
        difficulty: "medium",
        type: "mc",
        question: "Tidal power plants work best in locations with:",
        options: [
            { label: "A", text: "Low tidal range and wide bays" },
            { label: "B", text: "High tidal range and restricted embayments" },
            { label: "C", text: "Diurnal tides only" },
            { label: "D", text: "Minimal tidal currents" }
        ],
        correctAnswer: "B",
        explanation: "Tidal power is most efficient where: (1) High tidal range provides large head (energy potential)—sites like Bay of Fundy (16m), Severn Estuary (14m). (2) Restricted embayments concentrate tidal flow through narrows. Power generation methods include barrage dams (like La Rance, France), tidal stream turbines, and tidal lagoons."
    },

    // --- COASTAL: Deltas and Wetlands ---
    {
        id: 177,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "mc",
        question: "Salt marshes are characterized by:",
        options: [
            { label: "A", text: "Tropical location with mangrove trees" },
            { label: "B", text: "Temperate location with salt-tolerant grasses and regular tidal flooding" },
            { label: "C", text: "High wave energy and sandy beaches" },
            { label: "D", text: "Permanent freshwater flooding" }
        ],
        correctAnswer: "B",
        explanation: "Salt marshes are coastal wetlands in temperate and high latitudes dominated by salt-tolerant grasses (Spartina, Juncus). They're flooded regularly by tides, creating distinct zonation from low marsh (flooded daily) to high marsh (flooded only on spring tides). They provide nursery habitat, filter pollutants, store carbon, and buffer storm surges."
    },
    {
        id: 178,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "tough",
        type: "mc",
        question: "The Mississippi River delta is losing land primarily due to:",
        options: [
            { label: "A", text: "Excessive sediment deposition" },
            { label: "B", text: "Subsidence, sea level rise, reduced sediment supply from dams and levees" },
            { label: "C", text: "Increased river flow" },
            { label: "D", text: "Volcanic activity" }
        ],
        correctAnswer: "B",
        explanation: "The Mississippi Delta loses a football field of land every 100 minutes due to: (1) Natural subsidence—delta sediments compact. (2) Accelerated subsidence—oil/gas extraction. (3) Reduced sediment—dams trap sediment upstream; levees prevent overbank flooding that built wetlands. (4) Sea level rise. (5) Channelization—sediment shoots into deep Gulf instead of building marshes. These factors outpace natural delta growth."
    },
    {
        id: 179,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "extra-hard",
        type: "long",
        question: `Coastal zones face multiple hazards that will intensify with climate change.

a) List four major coastal hazards and explain how each is expected to change with climate change.
b) What is the concept of 'compound flooding' and why is it particularly dangerous?
c) Describe three adaptation strategies for coastal communities facing increased flood risk.
d) What is 'managed retreat' and when might it be the most appropriate response?`,
        correctAnswer: "Hazards: sea level rise, storms, erosion, flooding—all intensifying. Compound flooding combines multiple sources. Adaptations: seawalls, nature-based solutions, managed retreat.",
        explanation: `a) **Four coastal hazards and climate change**:
1. **Sea level rise**: Accelerating from thermal expansion and ice melt—permanent inundation of low-lying areas
2. **Storm surge**: Higher baseline + potentially stronger storms = worse flooding
3. **Coastal erosion**: Rising seas and stronger storms increase erosion rates
4. **Nuisance flooding**: High tide flooding becoming more frequent and reaching further inland

b) **Compound flooding**: Multiple flood sources occurring simultaneously—e.g., storm surge + river flooding + heavy rainfall + high tide. The combined effect exceeds what any single source would cause. Drainage systems designed for one source fail when overwhelmed by multiple sources.

c) **Adaptation strategies**:
1. **Hard protection**: Seawalls, levees, storm surge barriers (expensive, can fail catastrophically)
2. **Nature-based solutions**: Restoring wetlands, dunes, mangroves, oyster reefs (provide co-benefits)
3. **Accommodation**: Elevating buildings, flood-proofing, improved drainage, early warning systems
4. **Managed retreat**: Relocating people and infrastructure away from hazard zones

d) **Managed retreat**: Planned relocation of communities and infrastructure from high-risk coastal areas. Most appropriate when: protection costs exceed property values, natural barriers are gone, hazard frequency is very high, or community chooses relocation over repeated damage.`
    },

    // --- GEOLOGICAL: Ocean Resources ---
    {
        id: 180,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "easy",
        type: "mc",
        question: "Which of the following is a non-renewable ocean resource?",
        options: [
            { label: "A", text: "Fish populations" },
            { label: "B", text: "Offshore oil and natural gas" },
            { label: "C", text: "Seaweed" },
            { label: "D", text: "Wave energy" }
        ],
        correctAnswer: "B",
        explanation: "Oil and natural gas are non-renewable—formed over millions of years and not replenished on human timescales. Fish, seaweed, and marine organisms are renewable if managed sustainably. Wave, tidal, and thermal energy are renewable. About 30% of world oil production comes from offshore drilling."
    },
    {
        id: 181,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "Methane hydrates are:",
        options: [
            { label: "A", text: "Dissolved methane in warm surface water" },
            { label: "B", text: "Ice-like crystals of methane trapped in water molecules, found in cold deep sediments" },
            { label: "C", text: "Methane produced by whales" },
            { label: "D", text: "A type of coral reef" }
        ],
        correctAnswer: "B",
        explanation: "Methane hydrates (clathrates) are ice-like compounds where methane molecules are trapped in cages of water molecules. They form in cold, high-pressure environments: deep ocean sediments and permafrost. They contain more carbon than all other fossil fuels combined. Concerns: destabilization from warming could release methane (potent greenhouse gas); potential energy resource but extraction is challenging."
    },
    {
        id: 182,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "short",
        question: "What are the environmental concerns associated with deep-sea mining, particularly for polymetallic nodules?",
        correctAnswer: "Concerns include: destruction of slow-recovering habitats, sediment plumes smothering organisms, noise pollution, disruption of unknown ecosystems, and loss of species before discovery.",
        acceptableAnswers: ["habitat destruction", "sediment plumes", "slow recovery", "unknown species", "ecosystem", "noise"],
        explanation: "Deep-sea mining concerns: (1) **Habitat destruction**: Nodule fields host unique ecosystems; recovery takes centuries. (2) **Sediment plumes**: Mining stirs up sediment that can smother filter feeders over large areas. (3) **Slow recovery**: Deep-sea organisms grow slowly; nodules take millions of years to form. (4) **Unknown biodiversity**: Most deep-sea species are undiscovered; we may lose species before knowing they exist. (5) **Noise and light pollution**: Affects deep-sea animals adapted to quiet, dark environments. (6) **Uncertain cumulative impacts**: Lack of baseline data makes impact assessment difficult."
    },

    // --- CLIMATE: Monitoring and Prediction ---
    {
        id: 183,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "medium",
        type: "mc",
        question: "The Argo float program monitors the ocean by:",
        options: [
            { label: "A", text: "Using satellites to measure sea surface temperature only" },
            { label: "B", text: "Deploying thousands of autonomous floats that profile temperature and salinity to 2000m" },
            { label: "C", text: "Tracking whale migrations" },
            { label: "D", text: "Measuring tides at coastal stations" }
        ],
        correctAnswer: "B",
        explanation: "Argo is a global array of ~4000 autonomous floats that drift at 1000m depth, periodically descend to 2000m then rise to surface while measuring temperature and salinity. Data is transmitted via satellite. Argo revolutionized oceanography by providing continuous, global subsurface observations—critical for climate monitoring and ocean heat content estimates."
    },
    {
        id: 184,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "tough",
        type: "mc",
        question: "Marine heatwaves are defined as:",
        options: [
            { label: "A", text: "Any water warmer than 25°C" },
            { label: "B", text: "Periods when sea surface temperature exceeds the 90th percentile for at least 5 consecutive days" },
            { label: "C", text: "Volcanic heating of the seafloor" },
            { label: "D", text: "Seasonal warming during summer" }
        ],
        correctAnswer: "B",
        explanation: "Marine heatwaves (MHWs) are defined as periods when SST exceeds the local 90th percentile (based on 30-year climatology) for at least 5 consecutive days. They can persist for weeks to months. Impacts include coral bleaching, harmful algal blooms, fishery disruptions, and altered species distributions. MHWs have become more frequent and intense with climate change."
    },
    {
        id: 185,
        topic: "climate",
        topicName: "Climate Variability",
        difficulty: "extra-hard",
        type: "data",
        question: `A marine heatwave affects a region from June 1 to August 15, 2025.

Temperature data:
- Normal June-Aug average SST: 22°C
- 90th percentile threshold: 24°C
- Peak temperature during event: 27°C
- Average temperature during event: 25.5°C

a) Calculate the duration of this marine heatwave.
b) Calculate the cumulative intensity (degree-days above threshold).
c) If a similar event now occurs every 5 years instead of every 50 years, by what factor has its frequency increased?
d) What ecological impacts might result from a 75-day, 3°C above threshold marine heatwave?`,
        correctAnswer: "Duration: 75 days. Cumulative intensity: 112.5 degree-days. Frequency increased 10×. Impacts: coral bleaching, fish kills, HABs, migration.",
        explanation: `a) **Duration**: 
June 1 to August 15 = 30 days (June) + 31 days (July) + 15 days (August) = **75 days**

b) **Cumulative intensity**:
Average temp above threshold: 25.5°C - 24°C = 1.5°C
Degree-days = 1.5°C × 75 days = **112.5 degree-days**
(This measures total heat stress; higher values = worse impacts)

c) **Frequency change**:
Previously: once per 50 years. Now: once per 5 years.
Factor increase = 50/5 = **10× more frequent**

d) **Ecological impacts of severe MHW**:
- Mass coral bleaching and mortality
- Fish kills and/or migration to cooler waters
- Harmful algal blooms (HABs) from warm, stratified conditions
- Seabird and marine mammal die-offs (prey unavailable)
- Kelp forest die-back
- Disease outbreaks in stressed populations
- Long-term ecosystem shifts`
    },

    // --- LARGE-SCALE CIRCULATION: Mixing Processes ---
    {
        id: 186,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "medium",
        type: "mc",
        question: "Double diffusion in the ocean occurs because:",
        options: [
            { label: "A", text: "Heat and salt diffuse at different rates through water" },
            { label: "B", text: "Waves mix water of different temperatures" },
            { label: "C", text: "The Coriolis effect separates hot and cold water" },
            { label: "D", text: "Photosynthesis produces oxygen gradients" }
        ],
        correctAnswer: "A",
        explanation: "Double diffusion exploits the fact that heat diffuses ~100× faster than salt in seawater. This can create instabilities: (1) **Salt fingers**: Warm, salty water over cold, fresh—heat diffuses out faster, leaving dense salty fingers that sink. (2) **Diffusive convection**: Cold, fresh water over warm, salty—creates layered 'staircases.' These processes enhance vertical mixing in the ocean."
    },
    {
        id: 187,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "tough",
        type: "short",
        question: "What is diapycnal mixing and why is it important for the global overturning circulation?",
        correctAnswer: "Diapycnal mixing is mixing across density surfaces (isopycnals). It's essential for returning deep water to the surface, completing the overturning circulation.",
        acceptableAnswers: ["diapycnal", "across density", "isopycnals", "mixing", "deep water", "return", "overturning"],
        explanation: "Diapycnal mixing moves water across density (isopycnal) surfaces—essentially mixing heavy and light water. Importance: Deep water formed by surface cooling must eventually return to the surface. Without diapycnal mixing, dense water would simply accumulate at the bottom. Mixing gradually lightens deep water, allowing it to rise. Sources of mixing energy: internal wave breaking, tides over rough topography, double diffusion. The amount of diapycnal mixing affects the strength of the overturning circulation."
    },

    // --- TIDES: Biological Effects ---
    {
        id: 188,
        topic: "tides",
        topicName: "Tides",
        difficulty: "medium",
        type: "mc",
        question: "The intertidal zone is divided into regions based on:",
        options: [
            { label: "A", text: "Water temperature only" },
            { label: "B", text: "Exposure time—how long each zone is submerged or exposed during tidal cycles" },
            { label: "C", text: "Sediment type only" },
            { label: "D", text: "Distance from the equator" }
        ],
        correctAnswer: "B",
        explanation: "Intertidal zonation reflects exposure gradients: **Spray zone** (above high tide): rarely submerged, harsh conditions. **High intertidal**: exposed most of the time. **Mid intertidal**: exposed roughly half the time. **Low intertidal**: mostly submerged, resembles subtidal. Organisms are distributed according to their tolerance for desiccation, temperature swings, and wave exposure."
    },
    {
        id: 189,
        topic: "tides",
        topicName: "Tides",
        difficulty: "tough",
        type: "mc",
        question: "Grunion spawning in California is synchronized with:",
        options: [
            { label: "A", text: "The daily high tide" },
            { label: "B", text: "The full moon spring tides when highest tides occur" },
            { label: "C", text: "New moon only" },
            { label: "D", text: "Random timing unrelated to tides" }
        ],
        correctAnswer: "B",
        explanation: "California grunion spawn on beaches on nights following the full and new moon spring tides (when high tides are highest). Females bury eggs in sand at the high tide line. The eggs develop in moist sand for ~10 days until the next spring tide, when high water reaches them, triggering hatching. This timing ensures eggs won't be disturbed by waves during development."
    },

    // --- GEOLOGICAL: Paleoceanography ---
    {
        id: 190,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "medium",
        type: "mc",
        question: "Ocean Drilling Program (ODP) and IODP sediment cores are valuable because they:",
        options: [
            { label: "A", text: "Only contain sand and gravel" },
            { label: "B", text: "Preserve continuous records of past climate, ocean chemistry, and life spanning millions of years" },
            { label: "C", text: "Are limited to the last 1000 years" },
            { label: "D", text: "Only show volcanic activity" }
        ],
        correctAnswer: "B",
        explanation: "Deep-sea sediment cores provide continuous records spanning millions of years. They contain: fossils (foraminifera, diatoms) indicating past temperature, productivity, and circulation; chemical signals (isotopes, trace elements) recording ice volume, weathering, and ocean chemistry; magnetic reversals for dating; volcanic ash layers from eruptions. They're archives of Earth's climate history."
    },
    {
        id: 191,
        topic: "geological",
        topicName: "Geological Oceanography",
        difficulty: "tough",
        type: "short",
        question: "What was the Paleocene-Eocene Thermal Maximum (PETM) and what can it tell us about modern climate change?",
        correctAnswer: "PETM was a rapid warming event ~56 Ma ago caused by massive carbon release. It shows ocean acidification, extinction, and recovery timescales relevant to today.",
        acceptableAnswers: ["PETM", "warming", "carbon release", "acidification", "56 million", "analog", "recovery"],
        explanation: "The PETM (~56 million years ago) was a rapid (~10,000 years) global warming of 5-8°C caused by massive carbon release (possibly from methane hydrates or volcanism). Ocean effects: warming, acidification, deoxygenation, extinctions of deep-sea organisms. Relevance to today: (1) Shows how ocean ecosystems respond to rapid carbon input. (2) Recovery took ~100,000 years. (3) Modern carbon release is ~10× faster than PETM. (4) Demonstrates long-term consequences of carbon emissions. It's our best analog for current anthropogenic carbon release."
    },

    // --- SURFACE CIRCULATION: Climate Connections ---
    {
        id: 192,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "medium",
        type: "mc",
        question: "The Indian Ocean Dipole (IOD) is similar to ENSO in that it:",
        options: [
            { label: "A", text: "Only affects weather in North America" },
            { label: "B", text: "Involves sea surface temperature anomalies that affect rainfall patterns in surrounding regions" },
            { label: "C", text: "Occurs with a 100-year cycle" },
            { label: "D", text: "Is caused by tides" }
        ],
        correctAnswer: "B",
        explanation: "The Indian Ocean Dipole (IOD) is an ocean-atmosphere climate mode similar to ENSO. Positive IOD: cooler western Indian Ocean, warmer eastern—brings drought to Indonesia/Australia, floods to East Africa. Negative IOD: reverse pattern. IOD can interact with ENSO, sometimes amplifying or counteracting its effects. It influences monsoons, cyclones, and marine ecosystems."
    },
    {
        id: 193,
        topic: "surface-circulation",
        topicName: "Surface Circulation",
        difficulty: "tough",
        type: "mc",
        question: "The 'great ocean garbage patches' form in:",
        options: [
            { label: "A", text: "Areas of strong coastal upwelling" },
            { label: "B", text: "Convergence zones at the centers of subtropical gyres" },
            { label: "C", text: "Along the equator" },
            { label: "D", text: "In the deepest parts of ocean trenches" }
        ],
        correctAnswer: "B",
        explanation: "Garbage patches form in subtropical gyre convergence zones where surface currents spiral inward. Floating debris accumulates because there's no outward flow. The Great Pacific Garbage Patch (GPGP) is between California and Hawaii in the North Pacific Gyre. Similar patches exist in all five subtropical gyres. They're not solid islands but diffuse zones of elevated plastic concentration."
    },

    // --- SEAWATER: Dissolved Gases ---
    {
        id: 194,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "medium",
        type: "mc",
        question: "Carbon dioxide is more soluble in cold water, which means:",
        options: [
            { label: "A", text: "Polar oceans absorb more CO₂ than tropical oceans" },
            { label: "B", text: "Tropical oceans absorb more CO₂ than polar oceans" },
            { label: "C", text: "CO₂ solubility is the same everywhere" },
            { label: "D", text: "Only freshwater absorbs CO₂" }
        ],
        correctAnswer: "A",
        explanation: "CO₂ (and other gases) is more soluble in cold water. Polar oceans act as CO₂ sinks—absorbing atmospheric CO₂. When this cold, CO₂-rich water sinks in thermohaline circulation, it sequesters carbon to the deep ocean. Warming oceans absorb less CO₂ (reduced solubility) and may release CO₂ from existing reservoirs—a positive feedback to climate change."
    },
    {
        id: 195,
        topic: "seawater",
        topicName: "Seawater Properties",
        difficulty: "tough",
        type: "short",
        question: "Explain the carbonate buffering system in seawater and why it's important for ocean acidification.",
        correctAnswer: "CO₂ + H₂O ↔ H₂CO₃ ↔ HCO₃⁻ + H⁺ ↔ CO₃²⁻ + H⁺. The system resists pH changes but excess CO₂ shifts equilibrium, reducing pH and carbonate ions.",
        acceptableAnswers: ["buffer", "carbonate", "bicarbonate", "H+", "pH", "equilibrium", "CO2"],
        explanation: "The carbonate buffer system: CO₂ dissolves in seawater forming carbonic acid (H₂CO₃), which dissociates into bicarbonate (HCO₃⁻) and hydrogen ions (H⁺), and further to carbonate (CO₃²⁻). These equilibria resist pH changes—the system 'buffers' the ocean. However, with excess CO₂: (1) More H⁺ produced → lower pH (acidification). (2) Equilibrium shifts away from CO₃²⁻ → less available for shell-building organisms. (3) Buffer capacity decreases as system becomes saturated. The ocean has absorbed ~30% of anthropogenic CO₂, causing ~0.1 pH unit decline (30% increase in H⁺ concentration)."
    },

    // --- WAVES: Energy and Applications ---
    {
        id: 196,
        topic: "waves",
        topicName: "Waves",
        difficulty: "easy",
        type: "mc",
        question: "Wave energy is proportional to:",
        options: [
            { label: "A", text: "Wave height only" },
            { label: "B", text: "The square of wave height" },
            { label: "C", text: "Water temperature" },
            { label: "D", text: "Salinity" }
        ],
        correctAnswer: "B",
        explanation: "Wave energy is proportional to the SQUARE of wave height (E ∝ H²). Doubling wave height quadruples wave energy. This is why storms with slightly larger waves can cause dramatically more damage. A 6m wave has 9× the energy of a 2m wave (6²/2² = 36/4 = 9)."
    },
    {
        id: 197,
        topic: "waves",
        topicName: "Waves",
        difficulty: "medium",
        type: "mc",
        question: "Wave power devices typically convert wave energy to electricity using:",
        options: [
            { label: "A", text: "The circular motion of water particles driving turbines" },
            { label: "B", text: "Oscillating water columns, point absorbers, or surface attenuators" },
            { label: "C", text: "Nuclear fusion" },
            { label: "D", text: "Evaporating seawater" }
        ],
        correctAnswer: "B",
        explanation: "Wave energy converters include: (1) **Oscillating water columns (OWC)**: Waves compress air in a chamber, driving an air turbine. (2) **Point absorbers**: Buoys bob up and down, driving hydraulics or linear generators. (3) **Surface attenuators** (like Pelamis): Long floating structures flex with waves, pumping hydraulic fluid. (4) **Overtopping devices**: Waves fill elevated reservoirs; water drains through turbines."
    },

    // --- LARGE-SCALE: Water Mass Analysis ---
    {
        id: 198,
        topic: "large-scale-circulation",
        topicName: "Large-Scale Circulation",
        difficulty: "extra-hard",
        type: "long",
        question: `Temperature-Salinity (T-S) diagrams are essential tools for identifying water masses.

a) Explain what a T-S diagram is and how it's used to identify water masses.
b) Why do water masses form straight lines when mixing on a T-S diagram?
c) The following water masses are observed in the Atlantic:
   - NACW: T = 18°C, S = 36.5‰
   - AAIW: T = 5°C, S = 34.3‰
   - NADW: T = 3°C, S = 34.9‰
   
   At an observation point, you measure T = 11.5°C, S = 35.4‰. Which two water masses are mixing, and approximately what is the mixing ratio?`,
        correctAnswer: "T-S plots T vs S; water masses have distinct signatures. Mixing is linear on T-S. The sample is ~50% NACW and ~50% AAIW mixing.",
        explanation: `a) **T-S diagrams**:
Plot temperature (y-axis) against salinity (x-axis) for each water sample. Each water mass has a characteristic T-S signature (a point or small region). As you profile through the water column, you trace a line connecting the water masses present. Distinct water masses appear as 'elbows' or clusters on the diagram.

b) **Linear mixing**:
When two water masses mix, the resulting T and S are weighted averages: T_mix = f×T₁ + (1-f)×T₂ (and similarly for S). This traces a straight line between the two end members on a T-S plot. Non-linear curves suggest more than two water masses mixing or other processes (like evaporation).

c) **Mixing calculation**:
The measured point (11.5°C, 35.4‰) lies between NACW and AAIW.
Using temperature: 11.5 = f×18 + (1-f)×5 → f = 6.5/13 = **0.5 (50%)**
Check with salinity: 35.4 = 0.5×36.5 + 0.5×34.3 = 35.4 ✓
**Result: Approximately 50% NACW and 50% AAIW**`
    },

    // --- COASTAL: Beach Processes ---
    {
        id: 199,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "medium",
        type: "mc",
        question: "Beach cusps are:",
        options: [
            { label: "A", text: "Permanent concrete structures for erosion control" },
            { label: "B", text: "Rhythmic, crescent-shaped features formed by swash patterns on a beach" },
            { label: "C", text: "Deep channels cut by rip currents" },
            { label: "D", text: "Fossilized shells" }
        ],
        correctAnswer: "B",
        explanation: "Beach cusps are regular, crescent-shaped patterns in beach sediments with horns (points) and embayments. They form from edge wave interactions with incident swash, creating rhythmic patterns. Spacing is typically 1-50m. They're ephemeral—destroyed by storms and reformed during calm conditions. Their formation involves feedback between water flow and sediment transport."
    },
    {
        id: 200,
        topic: "coastal",
        topicName: "Coastal Features",
        difficulty: "extra-hard",
        type: "data",
        question: `A coastal engineering study provides this data for a beach:

| Season | Wave Height (m) | Wave Period (s) | Wave Direction | Beach Width (m) |
|--------|-----------------|-----------------|----------------|-----------------|
| Summer | 1.0 | 8 | SW (225°) | 50 |
| Winter | 3.0 | 12 | NW (315°) | 25 |

The beach faces west (270°). Longshore drift moves sediment southward.

a) Calculate the change in wave energy between summer and winter (use E ∝ H²).
b) Explain why the beach is narrower in winter.
c) If a groin is built on the north side of the beach, how will beach width change on either side?
d) The seasonal beach width change of 25m represents what volume of sand per meter of coastline if the active beach height is 3m?`,
        correctAnswer: "Winter waves have 9× energy. Narrow beach due to erosion by larger waves. Groin traps sand on north side, erodes south side. Volume = 75 m³/m.",
        explanation: `a) **Energy change**:
E_summer ∝ (1.0)² = 1
E_winter ∝ (3.0)² = 9
Winter waves have **9× more energy** than summer waves

b) **Narrow winter beach**:
Higher energy winter waves erode sand from the beach face and transport it offshore to form bars. This is the typical 'winter profile' with a narrow beach and offshore bars. In summer, gentler waves move sand back onshore, widening the beach.

c) **Groin effects**:
With longshore drift moving southward, a groin on the north side would:
- **North of groin**: Sand accumulates (beach widens) as drift is trapped
- **South of groin**: Beach erodes (narrows) due to 'sand starvation'—the groin intercepts sediment that would have nourished downdrift areas

d) **Volume calculation**:
Width change: 50m - 25m = 25m
Active height: 3m
Volume per meter of coastline = 25m × 3m × 1m = **75 m³/m of coastline**
(This is a simplified rectangular approximation; actual profiles are more complex)`
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTIONS;
}
