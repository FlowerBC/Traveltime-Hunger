ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/ironknife.json", [
        {
            "matchItems": [
                  "notreepunching:iron_knife",
                  "farmersdelight:iron_knife"
            ],
            "resultItems": "farmersdelight:iron_knife"
        }
    ]);
});