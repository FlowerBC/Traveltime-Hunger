ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/diamondknife.json", [
        {
            "matchItems": [
                  "notreepunching:diamond_knife",
                  "farmersdelight:diamond_knife"
            ],
            "resultItems": "farmersdelight:diamond_knife"
        }
    ]);
});