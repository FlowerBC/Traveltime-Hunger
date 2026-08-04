ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/flameman.json", [
        {
            "matchItems":[
                  "tconstruct:blaze_head",
                  "spartanweaponry:blaze_head"
            ],
            "resultItems": "spartanweaponry:blaze_head"
        }
    ]);
});