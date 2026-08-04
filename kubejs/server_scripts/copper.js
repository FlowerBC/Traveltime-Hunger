ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/raw_materials.json", [
        {
            "matchItems": [
                  "create:copper_nugget",
                  "tconstruct:copper_nugget"
            ],
            "resultItems": "tconstruct:copper_nugget"
        }
    ]);
});