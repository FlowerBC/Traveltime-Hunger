ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/endman.json", [
        {
            "matchItems": [
                  "spartanweaponry:enderman_head",
                  "tconstruct:enderman_head"
            ],
            "resultItems": "spartanweaponry:enderman_head"
        }
    ]);
});