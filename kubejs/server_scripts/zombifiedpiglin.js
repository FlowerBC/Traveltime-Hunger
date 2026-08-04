ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/zombifiedpiglin.json", [
        {
            "matchItems": [
                  "spartanweaponry:zombified_piglin_head",
                  "tconstruct:zombified_piglin_head"
            ],
            "resultItems": "spartanweaponry:zombified_piglin_head"
        }
    ]);
});