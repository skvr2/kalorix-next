import { Recipe } from "./types";

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: "rec-protein-oats",
    title: "Proteinowa owsianka z bananem i masłem orzechowym",
    category: "Wysokobiałkowe",
    timeMinutes: 10,
    servings: 1,
    image: "oats",
    description: "Sycące, zbilansowane śniadanie dające energię na wiele godzin. Wysoka zawartość białka i węglowodanów złożonych.",
    kcal: 510,
    protein: 38.5,
    fat: 14.2,
    carbs: 58.0,
    tags: ["Wysokobiałkowe", "Szybkie", "Śniadanie", "Wegetariańskie"],
    ingredients: [
      { name: "Płatki owsiane górskie", grams: 60, kcal: 225, protein: 8.1, fat: 4.2, carbs: 37.2 },
      { name: "Odżywka białkowa WPC wanilia", grams: 30, kcal: 118, protein: 23.4, fat: 1.8, carbs: 2.1 },
      { name: "Banan świeży", grams: 100, kcal: 89, protein: 1.1, fat: 0.3, carbs: 22.8 },
      { name: "Masło orzechowe 100%", grams: 15, kcal: 89, protein: 4.0, fat: 7.0, carbs: 1.9 },
      { name: "Mleko 2.0% / Woda", grams: 150, kcal: 75, protein: 5.0, fat: 3.0, carbs: 7.2 },
    ],
    instructions: [
      "Płatki owsiane zalej mlekiem lub wodą i gotuj na małym ogniu przez ok. 4-5 minut aż zgęstnieją.",
      "Zdejmij z ognia, odczekaj minutę i wymieszaj z odżywką białkową.",
      "Przełóż do miski, dodaj pokrojonego banana oraz łyżkę masła orzechowego."
    ]
  },
  {
    id: "rec-curry-chicken",
    title: "Fit Kurczak Curry z ryżem jaśminowym i warzywami",
    category: "Obiady",
    timeMinutes: 20,
    servings: 1,
    image: "chicken",
    description: "Soczysty filet z piersi kurczaka z chrupiącymi warzywami w delikatnym, aromatycznym sosie curry.",
    kcal: 590,
    protein: 51.0,
    fat: 11.5,
    carbs: 68.0,
    tags: ["Obiad", "Wysokobiałkowe", "Meal Prep"],
    ingredients: [
      { name: "Pierś z kurczaka", grams: 200, kcal: 220, protein: 45.0, fat: 2.6, carbs: 0.0 },
      { name: "Ryż Jaśminowy (suchy)", grams: 75, kcal: 266, protein: 5.6, fat: 0.6, carbs: 58.5 },
      { name: "Papryka czerwona i brokuł", grams: 150, kcal: 48, protein: 2.5, fat: 0.5, carbs: 8.5 },
      { name: "Mleczko kokosowe light / Jogurt", grams: 60, kcal: 45, protein: 1.2, fat: 3.5, carbs: 2.0 },
      { name: "Oliwa z oliwek do smażenia", grams: 5, kcal: 44, protein: 0.0, fat: 5.0, carbs: 0.0 },
    ],
    instructions: [
      "Ugotuj ryż według instrukcji na opakowaniu.",
      "Pierś z kurczaka pokrój w kostkę, dopraw curry, solą i pieprzem. Podsmaż na małej ilości oliwy.",
      "Dodaj pokrojone warzywa, podlej 50ml wody i duś pod przykryciem ok. 6-8 minut.",
      "Wymieszaj z mleczkiem kokosowym light i podawaj z ryżem."
    ]
  },
  {
    id: "rec-banana-omelet",
    title: "Puszysty Omlet bananowo-proteinowy ze Skyrem",
    category: "Śniadania",
    timeMinutes: 12,
    servings: 1,
    image: "egg",
    description: "Wysokobiałkowy omlet bez dodatku cukru ze świeżymi owocami i chłodnym skyrem.",
    kcal: 445,
    protein: 34.0,
    fat: 12.0,
    carbs: 48.0,
    tags: ["Śniadanie", "Szybkie (<15 min)", "Wegetariańskie"],
    ingredients: [
      { name: "Jajka kurze (2 sztuki)", grams: 110, kcal: 157, protein: 13.8, fat: 10.5, carbs: 0.8 },
      { name: "Banan dojrzały", grams: 100, kcal: 89, protein: 1.1, fat: 0.3, carbs: 22.8 },
      { name: "Skyr naturalny (na wierzch)", grams: 150, kcal: 97, protein: 18.0, fat: 0.3, carbs: 6.0 },
      { name: "Płatki owsiane mielone", grams: 25, kcal: 94, protein: 3.4, fat: 1.8, carbs: 15.5 },
      { name: "Borówki amerykańskie", grams: 50, kcal: 28, protein: 0.4, fat: 0.2, carbs: 7.2 },
    ],
    instructions: [
      "Rozgnieć banana widelcem i wymieszaj z 2 jajkami oraz mielonymi płatkami.",
      "Wylej masę na rozgrzaną patelnię i smaż na małym ogniu pod przykryciem po ok. 3 minuty z każdej strony.",
      "Wyłóż na talerz, posmaruj skyrem i posyp świeżymi borówkami."
    ]
  },
  {
    id: "rec-salmon-bowl",
    title: "Fit Poke Bowl z pieczonym łososiem i awokado",
    category: "Obiady",
    timeMinutes: 15,
    servings: 1,
    image: "fish",
    description: "Bogaty w zdrowe kwasy tłuszczowe Omega-3 bowl z pieczonym łososiem, ryżem i awokado.",
    kcal: 620,
    protein: 42.0,
    fat: 24.0,
    carbs: 56.0,
    tags: ["Obiad", "Kolacje", "Zdrowe Tłuszcze"],
    ingredients: [
      { name: "Łosoś atlantycki pieczony", grams: 150, kcal: 312, protein: 30.0, fat: 21.0, carbs: 0.0 },
      { name: "Ryż Basmati ugotowany", grams: 150, kcal: 195, protein: 4.2, fat: 0.5, carbs: 43.0 },
      { name: "Awokado Hass", grams: 50, kcal: 80, protein: 1.0, fat: 7.5, carbs: 4.2 },
      { name: "Ogórek świeży i pomidorki", grams: 120, kcal: 22, protein: 1.0, fat: 0.2, carbs: 4.5 },
      { name: "Sos sojowy + sok z cytryny", grams: 15, kcal: 15, protein: 1.5, fat: 0.0, carbs: 1.5 },
    ],
    instructions: [
      "Łososia upiecz w 180°C przez 12-14 minut.",
      "W misce ułóż porcję ciepłego ryżu, upieczonego łososia, pokrojone awokado i warzywa.",
      "Skrop sosem sojowym oraz świeżo wyciśniętym sokiem z cytryny."
    ]
  },
  {
    id: "rec-tuna-salad",
    title: "Ekspresowa sałatka z tuńczykiem, jajkiem i warzywami",
    category: "Szybkie (<15 min)",
    timeMinutes: 8,
    servings: 1,
    image: "salad",
    description: "Błyskawiczny, lekki posiłek bogaty w białko. Gotowy w mniej niż 10 minut.",
    kcal: 380,
    protein: 41.0,
    fat: 14.5,
    carbs: 19.0,
    tags: ["Szybkie (<15 min)", "Kolacje", "Wysokobiałkowe"],
    ingredients: [
      { name: "Tuńczyk w sosie własnym", grams: 130, kcal: 143, protein: 32.5, fat: 1.0, carbs: 0.0 },
      { name: "Jajko ugotowane na twardo", grams: 55, kcal: 78, protein: 6.9, fat: 5.2, carbs: 0.4 },
      { name: "Kukurydza i ogórek kiszony", grams: 100, kcal: 65, protein: 2.2, fat: 0.8, carbs: 13.0 },
      { name: "Jogurt grecki naturalny", grams: 30, kcal: 35, protein: 2.0, fat: 2.5, carbs: 1.2 },
      { name: "Chleb żytni (1 kromka)", grams: 35, kcal: 79, protein: 2.1, fat: 0.5, carbs: 15.8 },
    ],
    instructions: [
      "Odsącz tuńczyka z zalewy i przełóż do miski.",
      "Dodaj pokrojone jajko, ogórka kiszonego oraz kukurydzę.",
      "Wymieszaj z łyżką jogurtu greckiego, dopraw pieprzem i zjedz z kromką żytniego pieczywa."
    ]
  },
  {
    id: "rec-cheesecake-fit",
    title: "Fit Serniczek jednoporcjowy ze Skyrem i owocami",
    category: "Desery Fit",
    timeMinutes: 5,
    servings: 1,
    image: "dessert",
    description: "Kremowy deser bez cukru z dużą porcją białka. Doskonały jako słodka przekąska.",
    kcal: 295,
    protein: 36.0,
    fat: 3.5,
    carbs: 29.0,
    tags: ["Desery Fit", "Wysokobiałkowe", "Szybkie (<15 min)"],
    ingredients: [
      { name: "Twaróg chudy", grams: 150, kcal: 129, protein: 27.0, fat: 0.7, carbs: 5.2 },
      { name: "Skyr waniliowy", grams: 100, kcal: 82, protein: 10.5, fat: 0.2, carbs: 9.5 },
      { name: "Biszkopty bezcukrowe", grams: 15, kcal: 56, protein: 1.2, fat: 0.8, carbs: 11.0 },
      { name: "Borówki świeże / Maliny", grams: 50, kcal: 28, protein: 0.4, fat: 0.2, carbs: 7.2 },
    ],
    instructions: [
      "Na dnie pucharka pokrusz biszkopt.",
      "Zblenduj twaróg ze skyrem waniliowym na gładki krem.",
      "Wyłóż masę na spód i udekoruj świeżymi owocami."
    ]
  }
];
