ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/dough.json", [
        {
            "matchItems": [
                  "create:dough",
                  "farmersdelight:wheat_dough"
            ],
            "resultItems": "farmersdelight:wheat_dough"
        }
    ]);
});