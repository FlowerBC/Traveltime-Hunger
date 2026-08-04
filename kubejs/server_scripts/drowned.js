ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/drowned.json", [
        {
            "matchItems": [
                  "spartanweaponry:drowned_head",
                  "tconstruct:drowned_head"
            ],
            "resultItems": "spartanweaponry:drowned_head"
        }
    ]);
});