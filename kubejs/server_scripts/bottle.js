ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/bottle.json", [
        {
            "matchItems": [
                 "legendarysurvivaloverhaul:canteen",
                 "legendarysurvivaloverhaul:large_canteen"
            ],
            "resultItems": "legendarysurvivaloverhaul:canteen"
        }
    ]);
});