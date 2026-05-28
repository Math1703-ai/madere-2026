export const meta = {
  title: 'Madère 2026',
  subtitle: 'Mathieu & Melvin',
  dateRange: '30 mai → 6 juin 2026',
  start: '2026-05-30',
  end: '2026-06-06',
}

export const categoryMeta = {
  lodging: { label: 'Hébergement', color: '#f59e0b', emoji: '🛏️' },
  activity: { label: 'Activité', color: '#2dd4bf', emoji: '⛰️' },
  viewpoint: { label: 'Point de vue / photo', color: '#a78bfa', emoji: '📸' },
  nature: { label: 'Nature / plage / piscine', color: '#38bdf8', emoji: '🌊' },
  village: { label: 'Village / visite', color: '#fb7185', emoji: '🏘️' },
  food: { label: 'Resto / sortie', color: '#f5c451', emoji: '🍽️' },
  transport: { label: 'Transport', color: '#94a3b8', emoji: '✈️' },
}

export const places = {
  // Hébergements
  contralis: { name: 'Appartamento Contralis by Homie', cat: 'lodging', lat: 32.6471, lng: -16.9007, note: 'Funchal, Zona Velha' },
  jolie: { name: 'The Jolie', cat: 'lodging', lat: 32.8652, lng: -17.1711, note: 'Porto Moniz' },
  orquidea: { name: 'Hotel Orquidea', cat: 'lodging', lat: 32.648, lng: -16.91, note: 'Funchal' },
  // Activités
  arieiro: {
    name: 'Pico do Arieiro', cat: 'activity', lat: 32.7356, lng: -16.9289, note: 'Sunrise · 1818m · 2 min à pied · gratuit',
    tips: [
      'Parking du sommet petit et vite plein : arrive ~1h avant le lever pour une place, sinon parking de terre 1,3 km plus bas.',
      'Mer de nuages fréquente : checke la webcam Pico do Arieiro la veille au soir. Si les nuages sont trop hauts, ils masquent les couleurs.',
      'Spot photo sans rando : miradouro Ninho da Manta, ~10 min à pied sur le sentier du départ.',
      'Le PR1 vers Pico Ruivo = longues descentes + escaliers : à éviter pour ton genou. Préfère le PR1.2 (voie facile) côté Achada do Teixeira.',
    ],
  },
  canyoning: {
    name: 'Canyoning Vallée des Nonnes', cat: 'activity', lat: 32.7208, lng: -16.967, note: 'Curral das Freiras · Niveau 2',
    tips: [
      'Au programme : plusieurs rappels (jusqu’à ~18 m), sauts, toboggan naturel et nage en vasques. ~2,5-3 h d’activité.',
      'Combinaison, casque, baudrier et chaussures fournis. Apporte maillot, serviette et une tenue de rechange.',
      'Genou ITB : les sauts tapent à la réception. Préviens le guide, saute moins, descends en rappel à la place — garde du souple pour la fête du soir.',
    ],
  },
  croisiere: {
    name: 'Croisière dauphins (Marina do Funchal)', cat: 'activity', lat: 32.6455, lng: -16.9102, note: 'Lobosonda / VIP Dolphins',
    tips: [
      '~3 h en mer ; en été beaucoup de sorties incluent un arrêt baignade/snorkeling sous Cabo Girão.',
      'Choisis le matin : mer plus calme et meilleur taux d’observation. Début juin = très bonne saison.',
      'Mal de mer : cachet avant le départ, reste sur le pont haut, fixe l’horizon. Sortie sans dauphins = 2e souvent offerte.',
      'Opérateurs réputés : Lobosonda (éco, petits bateaux), VMT, VIP Dolphins.',
    ],
  },
  fontes: {
    name: 'PR6 25 Fontes — parking Rabaçal', cat: 'activity', lat: 32.7616, lng: -17.1343, note: 'Permis SIMplifica + navette',
    tips: [
      'Permis SIMplifica obligatoire : créneau d’arrivée de 30 min, ~4,50€/pers, à réserver 3+ jours avant — prends un créneau tôt. (à vérifier)',
      'Navette minibus depuis le parking de Rabaçal (~1,8 km) : t’épargne la route goudronnée en descente/remontée — précieux pour le genou.',
      'Combine avec la cascade do Risco (PR6.1) à l’embranchement : court aller-retour, +2 km faciles.',
      'Rochers glissants près des cascades : bonnes chaussures + bâtons. Peu de points d’eau, emporte la tienne.',
    ],
  },
  // Points de vue
  eira: {
    name: 'Miradouro Eira do Serrado', cat: 'viewpoint', lat: 32.711, lng: -16.958, note: 'Vue cratère Curral',
    tips: [
      'Parking et accès gratuits. Café et terrasse panoramique sur place.',
      'Tôt le matin la vallée est dégagée ; l’après-midi les nuages montent du cratère.',
      'Sentier vers le village (~2 km) = escaliers raides en descente, dur pour le genou : remonte plutôt en bus/voiture.',
      'En bas, goûte le gâteau de châtaigne, spécialité de Curral das Freiras.',
    ],
  },
  cabogirao: {
    name: 'Cabo Girão (plateforme verre)', cat: 'viewpoint', lat: 32.6555, lng: -17.0042, note: '580m · skywalk gratuit',
    tips: [
      'Le skywalk (plateforme de verre) est gratuit ; le ~5€ correspond au parking/téléphérique do Rancho. (à vérifier)',
      'Parking ~50 places : viens avant 10h ou après 15h, sinon les bus de Funchal saturent.',
      'Pour la photo de la falaise sans le vertige ni la foule, place-toi sur le côté du miradouro.',
    ],
  },
  anjos: {
    name: 'Cascata dos Anjos', cat: 'viewpoint', lat: 32.6866, lng: -17.1138, note: 'Cascade sur la route',
    tips: [
      'Spot : ancienne route E.R.101, gare-toi près du panneau « exceto moradores » puis ~200 m à pied (pas de parking aménagé).',
      'Le shot Reel : l’eau tombe direct sur la chaussée — passe en voiture dessous ou filme d’au-dessus / drone.',
      'Débit abondant après la pluie ; en fin d’été ça peut n’être qu’un filet. Viens tôt (lumière + éviter la file).',
    ],
  },
  ribeirajanela: {
    name: 'Miradouro Ilhéus da Ribeira da Janela', cat: 'viewpoint', lat: 32.843, lng: -17.162, note: 'Rochers dans l’océan',
    tips: [
      'Arrête-toi au miradouro côté ouest, sur la route côtière en arrivant vers Porto Moniz.',
      'Photo au soleil bas (lever ou fin de journée) pour le contraste des aiguilles rocheuses en mer.',
    ],
  },
  fanal: {
    name: 'Fanal Forest', cat: 'viewpoint', lat: 32.8096, lng: -17.1439, note: 'Forêt de lauriers · brume',
    tips: [
      'Le mauvais temps = le bon : viens tôt le matin quand la brume est dense. Par grand soleil, c’est joli mais banal.',
      'Parking gratuit le long de l’ER209, plein dès ~10h30 — arrive 8h30-9h pour l’avoir pour toi.',
      'Sol souvent boueux, chaussures fermées. Photo culte : une vache émergeant de la brume près de la Lagoa do Fanal.',
    ],
  },
  veudanoiva: {
    name: 'Véu da Noiva (cascade)', cat: 'viewpoint', lat: 32.824, lng: -17.075, note: 'Depuis le miradouro',
    tips: [
      'Miradouro au bord de la route, parking ample et gratuit, accessible 24h/24. Compte 15-30 min.',
      'Débit max oct-avril : début juin le voile peut être plus fin. Lumière idéale au lever ou en fin de journée.',
    ],
  },
  saocristovao: {
    name: 'Miradouro de São Cristóvão', cat: 'viewpoint', lat: 32.829, lng: -17.015, note: 'Boaventura',
    tips: [
      'Vue panoramique sur la vallée verdoyante de Boaventura et l’Atlantique — superbe et bien moins fréquenté que les classiques.',
      'Resto/bar sur place bien noté, portions généreuses : parfait pour s’attarder au calme / au coucher du soleil.',
      'Parking limité en contrebas et manœuvres délicates quand le resto est plein ; accès en voiture, aucun effort.',
    ],
  },
  cristorei: {
    name: 'Cristo Rei do Garajau', cat: 'viewpoint', lat: 32.639, lng: -16.8489, note: 'Sunset + snorkeling Ponta de Garajau',
    tips: [
      'Sunset superbe depuis la statue, parking gratuit mais vite plein.',
      'Réserve marine de Garajau = un des meilleurs spots snorkeling de l’île : eau claire, mérous, bancs de poissons.',
      'Le téléphérique vers la plage ne tourne que 10h-18h → impossible d’y descendre pour le sunset, il ferme avant. (à vérifier)',
      'Galets glissants : des chaussures d’eau aident.',
    ],
  },
  santamaria: {
    name: 'Rua de Santa Maria (portes peintes)', cat: 'viewpoint', lat: 32.6485, lng: -16.905, note: 'Spot photo',
    tips: [
      '200+ portes peintes (projet « Arte de Portas Abertas »), gratuit. Photographie tôt le matin (dimanche idéal) : lumière douce, peu de monde, tables de resto pas encore sorties.',
      'Évite midi (lumière dure) et le rush du soir. Tu peux discuter avec les artistes qui vendent prints/cartes.',
      'Watch-out : les serveurs rabattent agressivement devant chaque resto de la rue — ne te laisse pas happer.',
    ],
  },
  // Nature / plages
  pmpiscines: {
    name: 'Piscines naturelles Porto Moniz', cat: 'nature', lat: 32.8679, lng: -17.1663, note: 'Tôt = calme',
    tips: [
      'Complexe payant ~3€ : douches chaudes, casiers, transats, surveillance — confort pour rester longtemps. (à vérifier)',
      'Juste à côté, les piscines sauvages gratuites (Cachalote / Piscinas Velhas) : plus brutes et photogéniques, mais zéro surveillance.',
      'Va tôt (mer calme) ou après 16h (bus partis). Par houle, les vagues débordent dans les bassins : danger.',
    ],
  },
  seixal: {
    name: 'Seixal — piscines + plage sable noir', cat: 'nature', lat: 32.8273, lng: -17.111, note: 'Espaço Infinito',
    tips: [
      'Praia do Seixal : sable noir, cascade qui tombe sur la plage et falaises vertes type Hawaï. Parking gratuit près du port.',
      'Piscines naturelles Poças das Lesmas (près de Laje) : gratuites, avec une arche de lave photogénique.',
      'Accès très raide (escaliers + zigzag) : descends lentement, dur pour le genou. Pas de surveillance, protège l’appareil des vagues.',
    ],
  },
  calheta: {
    name: 'Praia da Calheta', cat: 'nature', lat: 32.7203, lng: -17.1783, note: 'Sable jaune importé · baignade',
    tips: [
      'Sable doré importé du Maroc (rare ici) + eau calme protégée par 2 digues : top pour nager peinard.',
      'Marina, bars/cafés sur la promenade, douches, vestiaires, maîtres-nageurs en saison. Parking payant limité : arrive tôt.',
      'Ambiance détente/baignade + déjeuner, pas pour la fête.',
    ],
  },
  formosa: {
    name: 'Praia Formosa', cat: 'nature', lat: 32.6383, lng: -16.9498, note: 'Plage Funchal',
    tips: [
      'Plus grande plage de Madère (~2 km), galets + sable noir, gratuite, à 2 pas de Funchal.',
      'Chaussures d’eau conseillées (galets durs). Baignade surveillée en saison, mais prudence avec les vagues/courants.',
      'Superbes couchers de soleil face à Cabo Girão : viens en fin de journée.',
    ],
  },
  achadascruz: {
    name: 'Téléphérique Achadas da Cruz', cat: 'nature', lat: 32.8417, lng: -17.2058, note: 'Falaise 450m · vertige',
    tips: [
      'Tarif ~3€ aller / 5€ A-R, descente ~5 min. (à vérifier)',
      'Fermeture le midi (~11h30-12h30) : n’arrive pas pile à ce moment-là. (à vérifier)',
      'Un des téléphériques les plus raides d’Europe (~450 m, pente ~98%) : sensations garanties.',
      'En bas (Fajã da Quebrada) : galets, vignes, paysage brut, mer non baignable. ~45 min-1h. Remonte en téléphérique, pas à pied (genou).',
    ],
  },
  // Villages
  camaralobos: {
    name: 'Câmara de Lobos', cat: 'village', lat: 32.6472, lng: -16.9743, note: 'Port pittoresque',
    tips: [
      'Poncha de référence : Taberna da Poncha, repaire de locaux. Goûte la poncha de pescador (citron).',
      'Spot photo : le port et ses barques colorées (xavelhas), scène peinte par Churchill. Lumière top tôt le matin ou en fin de journée.',
      'À manger : espada com banana (poisson-sabre / banane). Village encore authentique, peu piège à touristes.',
    ],
  },
  pontadosol: {
    name: 'Ponta do Sol', cat: 'village', lat: 32.6797, lng: -17.1003, note: 'Village arty, ensoleillé',
    tips: [
      'Le coin le plus ensoleillé de l’île, orienté plein ouest : top pour la golden hour sur la plage de galets.',
      'Resto sur l’eau : Sol Poente, posé sur le promontoire à côté du vieux quai (Cais). Réserve une table balcon. (à vérifier)',
      'Le Cais (vieux quai en basalte) abrite un bar sous l’arche = spot sunset du village ; ambiance digital nomad, cafés branchés pour sortir.',
    ],
  },
  pauldomar: {
    name: 'Paul do Mar / Jardim do Mar', cat: 'village', lat: 32.7506, lng: -17.2378, note: 'Villages falaises · surf',
    tips: [
      'Route en lacets vertigineuse depuis Prazeres : panoramas fous mais conduite engagée.',
      'GENOU : la rando PR19 reliant les 2 villages = ~95% d’escaliers raides (~550 m de dénivelé). À éviter. Flâne plutôt sur les fronts de mer plats.',
      'Surf sérieux (reef breaks, droites tubulaires de Paul) — pour confirmés. Parking : grand à Jardim, petits le long du front de mer à Paul.',
    ],
  },
  saovicente: {
    name: 'São Vicente', cat: 'village', lat: 32.7986, lng: -17.0445, note: 'Grottes volcaniques',
    tips: [
      'Grutas + Centre du Volcanisme : ~8€, parcours 700 m / ~30 min, pente douce (peu d’impact genou). (à vérifier)',
      'Vérifie l’ouverture AVANT d’y aller : grottes fermées un temps après un séisme, réouvertes depuis — confirme par tél. (à vérifier)',
      'Centre du village très joli : église du XVIIe à plafonds peints, petite chapelle de 1694 au bord de mer (spot photo).',
    ],
  },
  santana: {
    name: 'Santana (maisons toit de chaume)', cat: 'village', lat: 32.8055, lng: -16.8826, note: 'Côte nord',
    tips: [
      'Casas de colmo (maisons triangulaires) = gratuites à voir, le long de l’Avenida 25 de Maio, jardinets fleuris autour.',
      'Franchement un peu touristique et vite vu : à combiner avec un autre arrêt nord-est, pas un détour à part entière.',
      'Saute le Parque Temático (payant, kitsch). Meilleure photo tôt le matin, fleurs au premier plan, avant les bus.',
    ],
  },
  monte: {
    name: 'Monte (téléphérique Funchal)', cat: 'village', lat: 32.668, lng: -16.9015, note: 'Monte Palace + toboggan osier',
    tips: [
      'Téléphérique ~20€ A/R (~14,50€ aller simple), 15 min, vues sur la baie. Côté mer pour les photos. (à vérifier)',
      'Carros de cesto (luge en osier) : 35€ pour 2, cash uniquement, ~10 min / 2 km jusqu’au Livramento. (à vérifier)',
      'La luge finit au Livramento, pas à Funchal : reprends un Bolt (~5-6€) ou le bus #19 pour récupérer la voiture.',
      'Vas-y avant 11h : files énormes l’après-midi et les jours de croisière. Touristique et court, mais à faire une fois.',
    ],
  },
  mercado: {
    name: 'Mercado dos Lavradores', cat: 'village', lat: 32.6487, lng: -16.9041, note: 'PAS d’achat au 1er étage',
    tips: [
      'Arnaque connue : les vendeurs de fruits exotiques font goûter du fruit de la passion puis facturent un prix gonflé au kilo. Marche sans t’arrêter, ne goûte pas.',
      'Si tu achètes : demande le prix au kilo AVANT, choisis et pèse toi-même, vérifie le total.',
      'Le clou : la halle aux poissons en bas (espada, thon frais). Étage : fleurs et balcons photogéniques. Vas-y tôt le matin, vendredi = plus animé.',
    ],
  },
  se: {
    name: 'Sé Catedral', cat: 'village', lat: 32.6477, lng: -16.9082, note: '+ Forte de São Tiago',
    tips: [
      'La Sé (gothique-manuélin) : visite express gratuite en plein centre, beau plafond bois. 15-20 min.',
      'Forte de São Tiago : le fort jaune iconique de la Zona Velha, entrée gratuite, mar-ven 9h30-17h30 (fermé week-end). (à vérifier)',
      'Monte sur les remparts pour les meilleures vues mer + toits colorés. Lumière top au lever ou en fin de journée.',
    ],
  },
  // Resto / sortie
  zonavelha: {
    name: 'Zona Velha — restos & sorties', cat: 'food', lat: 32.6489, lng: -16.9035, note: 'Vieille ville · dîner + fête',
    tips: [
      'À goûter : espada com banana, espetada (brochette sur laurier), lapas grillées ail-citron, bolo do caco au beurre d’ail.',
      'Restos authentiques : Londres, Mozart, Já Fui (plats souvent <20€). La VRAIE espetada = à Câmara de Lobos (ex. O Polar). (à vérifier)',
      'Évite les restos à rabatteurs de la Rua de Santa Maria (menus identiques, prix gonflés « spécial touristes »).',
      'Poncha : Madeira Rum House (homemade + énorme choix de rhums, vrais locaux), Rei da Poncha (parfums originaux), Venda Velha sur Santa Maria.',
      'Sortir : Revolucion Rock Bar (cocktails + musique) et Barreirinha Bar Café (vue mer, DJ). Ça démarre tard, vers minuit.',
      'Boîtes : Vespas (le classique) et Copacabana (Casino da Madeira) — ça ne décolle vraiment que vers 2h.',
    ],
  },
  // Transport
  fnc: { name: 'Aéroport FNC', cat: 'transport', lat: 32.6979, lng: -16.7745, note: 'Santa Cruz' },
}

export const days = [
  {
    id: 'J1', date: 'SAM 30 MAI', title: 'Arrivée Funchal', zone: 'Sud / Funchal',
    stops: [
      { time: '12h00', type: 'FIXE', label: 'Atterrissage FNC + récupération voiture', place: 'fnc' },
      { time: '14h00', type: 'FIXE', label: 'Check-in Contralis by Homie', place: 'contralis', note: 'Après récup voiture + route (~25 min depuis FNC).' },
      { time: '15h30', type: 'FLEX', label: 'Rua de Santa Maria (portes peintes)', place: 'santamaria' },
      { time: '16h00', type: 'FLEX', label: 'Mercado dos Lavradores', place: 'mercado', note: 'Ne PAS acheter au 1er étage (arnaque fruits).' },
      { time: '16h45', type: 'FLEX', label: 'Sé Catedral + Forte de São Tiago', place: 'se' },
      { time: '19h30', type: 'FLEX', label: 'Apéro rooftop + golden hour marina', note: 'Coucher de soleil ~21h00 : lumière dorée de 20h à 21h, reste pour les photos.' },
      { time: 'Soir', type: 'FLEX', label: 'Dîner Zona Velha (au feeling)', place: 'zonavelha' },
    ],
    tip: 'Récup voiture après l’atterrissage = 60-90 min (bagages + comptoir loueur). Garde une carte de crédit avec plafond dispo : RentX peut bloquer une empreinte même en « zéro caution ».',
  },
  {
    id: 'J2', date: 'DIM 31 MAI', title: 'Sunrise + Croisière', zone: 'Montagne + Funchal',
    stops: [
      { time: '05h30', type: 'FLEX', label: 'Départ vers Pico do Arieiro', place: 'arieiro', note: 'Lever ~07h00 : partir 05h30 laisse la marge (45-60 min de route depuis Funchal).' },
      { time: '06h45-07h30', type: 'FLEX', label: 'SUNRISE Pico do Arieiro', place: 'arieiro', note: 'Lever du soleil ~07h00. Polaire + coupe-vent OBLIGATOIRES (5-10°C).' },
      { time: '08h00', type: 'FLEX', label: 'Retour Funchal + petit-déj / repos' },
      { time: '11h-14h30', type: 'FIXE', label: 'CROISIÈRE dauphins / baleines', place: 'croisiere', note: 'Ancre du jour. À RÉSERVER (~40€/pers).' },
      { time: '15h30', type: 'FLEX', label: 'Miradouro Eira do Serrado ou repos', place: 'eira' },
      { time: 'Soir', type: 'FLEX', label: 'Soirée Funchal', place: 'zonavelha' },
    ],
    tip: 'Nuages bas le matin ? Monte quand même : l’Arieiro perce souvent la mer de nuages. Check Windy par zone avant de te lever à 4h30 pour rien.',
  },
  {
    id: 'J3', date: 'LUN 1 JUIN', title: 'Rando 25 Fontes + Ouest', zone: 'Ouest', active: true,
    stops: [
      { time: '07h00', type: 'FIXE', label: 'Départ vers Rabaçal', place: 'fontes', note: 'Trajet 55-70 min + navette obligatoire depuis le parking de Rabaçal.' },
      { time: '09h-13h', type: 'FIXE', label: 'PR6 Levada das 25 Fontes + Risco (11 km)', place: 'fontes', note: 'Permis SIMplifica obligatoire. Frein moteur en descente.' },
      { time: '13h30', type: 'FLEX', label: 'Déjeuner Estreito da Calheta' },
      { time: '14h30', type: 'FLEX', label: 'Praia da Calheta (baignade)', place: 'calheta' },
      { time: '16h30', type: 'FLEX', label: 'Cabo Girão (plateforme verre 580m)', place: 'cabogirao', note: 'Le skywalk est gratuit ; ~5€ = le parking.' },
      { time: '17h30', type: 'FLEX', label: 'Câmara de Lobos (port pittoresque)', place: 'camaralobos' },
      { time: 'Soir', type: 'FLEX', label: 'Soirée Funchal', place: 'zonavelha' },
    ],
    tip: 'Réserve le permis SIMplifica AU MOINS 3 jours avant — quota journalier, c’est le sentier le plus demandé de l’île : simplifica.madeira.gov.pt (~4,50€/pers).',
  },
  {
    id: 'J4', date: 'MAR 2 JUIN', title: 'Transit Funchal → Porto Moniz', zone: 'Sud-ouest → Nord-ouest',
    stops: [
      { time: '10h00', type: 'FIXE', label: 'Check-out Contralis', place: 'contralis' },
      { time: '11h00', type: 'FLEX', label: 'Ponta do Sol (village arty)', place: 'pontadosol' },
      { time: '12h30', type: 'FLEX', label: 'Cascata dos Anjos (Reels)', place: 'anjos' },
      { time: '14h00', type: 'FLEX', label: 'Paul do Mar / Jardim do Mar', place: 'pauldomar' },
      { time: '15h30', type: 'FLEX', label: 'Miradouro Ilhéus da Ribeira da Janela', place: 'ribeirajanela' },
      { time: '17h00', type: 'FIXE', label: 'Check-in The Jolie (Porto Moniz)', place: 'jolie' },
      { time: '18h00', type: 'FLEX', label: 'Piscines naturelles Porto Moniz + soir', place: 'pmpiscines', note: 'Coucher de soleil ~21h : large marge pour profiter et dîner après.' },
    ],
    tip: 'Journée linéaire ouest puis nord = zéro aller-retour. Paul do Mar / Jardim do Mar = descente raide jusqu’à la mer puis remontée, compte 20-30 min de détour.',
  },
  {
    id: 'J5', date: 'MER 3 JUIN', title: 'Côte Nord (nature libre)', zone: 'Nord-ouest',
    stops: [
      { time: 'Matin', type: 'FLEX', label: 'Piscines naturelles Porto Moniz (tôt = calme)', place: 'pmpiscines' },
      { time: '11h00', type: 'FLEX', label: 'Téléphérique Achadas da Cruz (vertige)', place: 'achadascruz' },
      { time: '13h00', type: 'FLEX', label: 'Déjeuner Porto Moniz (Cantina Esmeralda ~10€)' },
      { time: '14h30', type: 'FLEX', label: 'Fanal Forest (forêt mystique, brume)', place: 'fanal' },
      { time: '17h00', type: 'FLEX', label: 'Seixal (piscines + plage sable noir)', place: 'seixal' },
      { time: '18h30', type: 'FLEX', label: 'Véu da Noiva (cascade)', place: 'veudanoiva' },
      { time: '19h00', type: 'FLEX', label: 'Miradouro de São Cristóvão', place: 'saocristovao' },
      { time: 'Soir', type: 'FLEX', label: 'Dîner Porto Moniz + jacuzzi rooftop' },
    ],
    tip: 'Fanal est magique SOUS la brume — si grand soleil partout, garde-le pour un jour nuageux et fonce aux piscines/plages. 4 climats en même temps sur l’île, adapte au feeling.',
  },
  {
    id: 'J6', date: 'JEU 4 JUIN', title: 'Nord-Est + retour Funchal', zone: 'Nord-est → Sud',
    stops: [
      { time: '09h00', type: 'FIXE', label: 'Check-out The Jolie', place: 'jolie', note: 'Charge les bagages tôt : tu roules ensuite d’ouest en est (São Vicente → Santana → Funchal), aucun retour possible à Porto Moniz.' },
      { time: '09h30', type: 'FLEX', label: 'São Vicente (village + grottes volcaniques)', place: 'saovicente' },
      { time: '11h00', type: 'FLEX', label: 'Santana (maisons toit de chaume)', place: 'santana' },
      { time: '12h00', type: 'FLEX', label: 'Descente vers Funchal', note: 'Encumeada = bon depuis São Vicente, pas depuis Santana. Choisis l’un OU l’autre.' },
      { time: '14h00', type: 'FIXE', label: 'Check-in Hotel Orquidea (Funchal)', place: 'orquidea' },
      { time: '15h30', type: 'FLEX', label: 'Téléphérique Monte + Palace + Toboggan', place: 'monte', note: 'Budget ~80-90€/2 (téléphérique + jardins + toboggan). Le toboggan finit au Livramento → taxi/bus pour récupérer la voiture.' },
      { time: '20h00', type: 'FLEX', label: 'Snorkeling Ponta de Garajau + sunset Cristo Rei', place: 'cristorei', note: 'Coucher de soleil ~21h05 : snorkeling vers 20h puis sunset au Cristo Rei.' },
      { time: '21h00', type: 'FLEX', label: 'Soirée fête Funchal', place: 'zonavelha' },
    ],
    tip: 'PR1 « Stairway to Heaven » ? Pas ce jour : 15 km point-à-point, 2e permis, 2 voitures + dur pour le genou avant le canyoning. Si tu veux le sommet, fais l’aller-retour court PR1.2 Achada do Teixeira → Pico Ruivo (~6 km, juste à côté de Santana).',
  },
  {
    id: 'J7', date: 'VEN 5 JUIN', title: 'Canyoning + dernière fête', zone: 'Centre + Funchal', active: true,
    stops: [
      { time: '08h30', type: 'FIXE', label: 'Pickup près de l’hôtel', place: 'canyoning' },
      { time: '09h-13h', type: 'FIXE', label: 'CANYONING Vallée des Nonnes Niveau 2', place: 'canyoning', note: '4 rappels (max 15m) + sauts + slides. Apporter maillot, serviette, chaussures sport eau, permis B/ID.' },
      { time: '14h00', type: 'FLEX', label: 'Retour Funchal, douche, déjeuner tardif' },
      { time: '16h00', type: 'FLEX', label: 'Repos / plage Praia Formosa / spa', place: 'formosa' },
      { time: '20h00', type: 'FLEX', label: 'DÎNER MÉMORABLE (dernière soirée)', place: 'zonavelha' },
      { time: '23h00', type: 'FLEX', label: 'DERNIÈRE NUIT FÊTE Zona Velha', place: 'zonavelha' },
    ],
    tip: 'Combinaison/casque/harnais fournis. Le canyoning tape sur les genoux (sauts, désescalade) — vu ton ITB, échauffe-toi bien et garde du souple pour la fête du soir.',
  },
  {
    id: 'J8', date: 'SAM 6 JUIN', title: 'Retour', zone: 'Funchal → Aéroport',
    stops: [
      { time: '10h00', type: 'FLEX', label: 'Souvenirs + balade marina (Mercearia dos Açores)' },
      { time: '12h00', type: 'FIXE', label: 'Check-out Orquidea', place: 'orquidea' },
      { time: '12h30', type: 'FLEX', label: 'Déjeuner Câmara de Lobos', place: 'camaralobos', note: 'Câmara de Lobos est à l’OUEST, l’aéroport à l’EST (~45 min) : c’est un détour, pas « sur la route ».' },
      { time: '14h30', type: 'FIXE', label: 'Restitution voiture FNC', place: 'fnc' },
      { time: '15h00', type: 'FIXE', label: 'Check-in vol', place: 'fnc' },
      { time: '17h00', type: 'FIXE', label: 'Décollage', place: 'fnc' },
    ],
    tip: 'Si la dernière nuit finit tard, évite le détour ouest : mange plutôt côté est / près de l’aéroport pour ne pas stresser sur l’horaire du vol.',
  },
]

export const reservations = [
  { name: 'Voiture Peugeot 208', status: 'reserved', detail: 'RentX via DiscoverCars · zéro caution + assurance complète', cost: '~540€' },
  { name: 'Hôtel Contralis by Homie', status: 'reserved', detail: 'Funchal · nuits 1-3 (30/05 → 02/06)' },
  { name: 'Hôtel The Jolie', status: 'reserved', detail: 'Porto Moniz · nuits 4-5 (02/06 → 04/06)' },
  { name: 'Hôtel Orquidea', status: 'reserved', detail: 'Funchal · nuits 6-7 (04/06 → 06/06)' },
  { name: 'Canyoning Vallée des Nonnes N2', status: 'reserved', detail: 'Ven 05/06 · 9h-13h · pickup 8h30' },
  { name: 'Permis SIMplifica PR6 25 Fontes', status: 'todo', urgent: true, detail: 'Lun 01/06 créneau 9h · ~4,50€/pers · 3j avant min', link: 'https://simplifica.madeira.gov.pt' },
  { name: 'Croisière dauphins / baleines', status: 'todo', urgent: true, detail: 'Dim 31/05 ~11h · Marina do Funchal · ~40€/pers', link: 'https://www.lobosonda.com' },
]

export const packing = [
  'Polaire + coupe-vent (sunrise Arieiro, 5-10°C)',
  'Maillot de bain + serviette',
  'Chaussures de sport pour l’eau (canyoning)',
  'Chaussures de rando',
  'Permis B + carte d’identité',
  'Carte de crédit avec plafond (caution voiture)',
  'Crème solaire + lunettes',
  'Batterie externe (photos / GPS)',
]

export const apps = [
  { name: 'SIMplifica', why: 'permis sentiers PR' },
  { name: 'Windy', why: 'météo par zone' },
  { name: 'Google Maps hors-ligne', why: 'navigation sans réseau' },
  { name: 'Bolt', why: 'taxis' },
]

export const weatherZones = [
  { name: 'Funchal (sud)', lat: 32.6471, lng: -16.9092 },
  { name: 'Pico Arieiro (montagne)', lat: 32.7356, lng: -16.9289 },
  { name: 'Porto Moniz (nord-ouest)', lat: 32.8652, lng: -17.1711 },
  { name: 'Fanal', lat: 32.8096, lng: -17.1439 },
]

export const pieges = [
  'Microclimats : 4 climats en même temps. Vérifie la météo PAR ZONE (Windy). Nuages bas → monte (Arieiro) ou descends au sud (Funchal). Brumeux → Fanal magique. Grand soleil → côte est / plages.',
  'Mercado dos Lavradores : ne PAS acheter au 1er étage (arnaque aux fruits).',
  'Sunrise Pico Arieiro : polaire + coupe-vent obligatoires (5-10°C même en été).',
  'Permis SIMplifica obligatoire sur tous les sentiers PR depuis janvier 2026.',
  'Routes sinueuses + côtes à 20% : frein moteur en descente, prévois le mal des transports.',
  'Coucher de soleil ~21h début juin — Madère est à l’extrême ouest de son fuseau horaire.',
]
