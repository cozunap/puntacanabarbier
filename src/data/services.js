export const menServices = [
  {
    category: "SERVICE POUR HOMMES",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop", // Barbershop classic cut
    items: [
      "Tressage",
      "Defrisage",
      "Coupe",
      "Coloration",
      "Barbe"
    ]
  }
];

export const womenServices = [
  {
    category: "BRUSING ET COUPE",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop", // Hair brushing/cutting
    items: [
      "Coupe Ajustement",
      "Brushing Cheveux Courts",
      "Coupe Femme",
      "Brushing Cheveux Mi-Longs",
      "Brushing Cheveux Longs",
      "Coupe+Brushing Cheveux Court",
      "Brushing Cheveux Très Longs",
      "Coupe + Brushing Cheveux Mi-Long",
      "Coupe + Brushing Cheveux Long"
    ]
  },
  {
    category: "DÉFRISAGE",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop", // Hair treatment/relaxer
    items: [
      "Défrisant Protective",
      "Défrisant Affirm",
      "Défrisant Olive Oil",
      "Défrisant Motions",
      "Défrisant Mizani"
    ]
  },
  {
    category: "MÈCHES ET COLORATION",
    image: "https://images.unsplash.com/photo-1600948836101-f9ff09c1f076?q=80&w=800&auto=format&fit=crop", // Hair coloring
    items: [
      "Coloration Tête Complète",
      "Mèches Dessus Tête",
      "Coloration Racine",
      "Coloration Extra",
      "Coloration Mousse",
      "Mèches Par Papier",
      "Mèches Demi Tête",
      "Mèches Tête Complète"
    ]
  },
  {
    category: "TRAITEMENTS",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop", // Hair washing/treatment
    items: [
      "Olaplex + Brusing",
      "Traitement Keratine Long",
      "Traitement Keratine Court",
      "Traitement Kerastraight Moisture",
      "Traitement Kerastraight Proteine",
      "Traitement Moroccanoil"
    ]
  },
  {
    category: "AUTRES SERVICES",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop", // General salon
    items: [
      "Défaire Tissage",
      "Extension Rangée (Colle)",
      "Greffes Tissage",
      "Extensions de Cheveux",
      "Décoloration Cheveux Courts",
      "Coupe Enfant",
      "Shampooing",
      "Toner",
      "Coiffure Cheveux Courts",
      "Coiffure Cheveux Mi-Longs",
      "Coiffure Cheveux Longs",
      "Permanente Bouclée",
      "Forfait Mariage"
    ]
  }
];

export const allServicesFlat = [
  ...menServices.flatMap(c => c.items),
  ...womenServices.flatMap(c => c.items)
];
