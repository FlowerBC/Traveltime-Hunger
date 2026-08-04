ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/husk.json", [
        {
            "matchItems": [
                  "spartanweaponry:husk_head",
                  "tconstruct:husk_head"
            ],
            "resultItems": "spartanweaponry:husk_head"
        }
    ]);
});