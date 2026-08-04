ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/netheriteknife.json", [
        {
            "matchItems": [
                  "farmersdelight:netherite_knife",
                  "notreepunching:netherite_knife"
            ],
            "resultItems": "farmersdelight:netherite_knife"
        }
    ]);
});