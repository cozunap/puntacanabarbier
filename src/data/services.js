export const menServices = [
  {
    categoryKey: "services.men.category",
    image: "/cut_executive.webp",
    itemKeys: [
      "services.men.tressage",
      "services.men.defrisage",
      "services.men.coupe",
      "services.men.coloration",
      "services.men.barbe"
    ]
  }
];

export const womenServices = [
  {
    categoryKey: "services.women.brushing_cut.category",
    image: "/cut_waves.webp",
    itemKeys: [
      "services.women.brushing_cut.cut_adjustment",
      "services.women.brushing_cut.brushing_short",
      "services.women.brushing_cut.cut_women",
      "services.women.brushing_cut.brushing_medium",
      "services.women.brushing_cut.brushing_long",
      "services.women.brushing_cut.cut_brushing_short",
      "services.women.brushing_cut.brushing_very_long",
      "services.women.brushing_cut.cut_brushing_medium",
      "services.women.brushing_cut.cut_brushing_long"
    ]
  },
  {
    categoryKey: "services.women.relaxer.category",
    image: "/cut_blowout.webp",
    itemKeys: [
      "services.women.relaxer.protective",
      "services.women.relaxer.affirm",
      "services.women.relaxer.olive_oil",
      "services.women.relaxer.motions",
      "services.women.relaxer.mizani"
    ]
  },
  {
    categoryKey: "services.women.color.category",
    image: "/cut_undercut.webp",
    itemKeys: [
      "services.women.color.full_head",
      "services.women.color.top_highlights",
      "services.women.color.root_touchup",
      "services.women.color.extra",
      "services.women.color.mousse",
      "services.women.color.foil_highlights",
      "services.women.color.half_highlights",
      "services.women.color.full_highlights"
    ]
  },
  {
    categoryKey: "services.women.treatments.category",
    image: "/cut_urban_texture.webp",
    itemKeys: [
      "services.women.treatments.olaplex",
      "services.women.treatments.keratin_long",
      "services.women.treatments.keratin_short",
      "services.women.treatments.kerastraight_moisture",
      "services.women.treatments.kerastraight_protein",
      "services.women.treatments.moroccanoil"
    ]
  },
  {
    categoryKey: "services.women.other.category",
    image: "/cut_twists.webp",
    itemKeys: [
      "services.women.other.weave_removal",
      "services.women.other.glued_row",
      "services.women.other.weave_sewin",
      "services.women.other.extensions",
      "services.women.other.short_bleach",
      "services.women.other.kids_cut",
      "services.women.other.shampoo",
      "services.women.other.toner",
      "services.women.other.styling_short",
      "services.women.other.styling_medium",
      "services.women.other.styling_long",
      "services.women.other.curly_perm",
      "services.women.other.wedding"
    ]
  }
];

export const allServicesFlat = [
  ...menServices.flatMap(c => c.itemKeys),
  ...womenServices.flatMap(c => c.itemKeys)
];
