ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/goldenknife.json", [
        {
            "matchItems": [
                  "farmersdelight:golden_knife",
                  "notreepunching:gold_knife"
            ],
            "resultItems": "farmersdelight:golden_knife"
        }
    ]);
});