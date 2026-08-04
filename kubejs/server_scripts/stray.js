ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/stray.json", [
        {
            "matchItems": [
                  "spartanweaponry:stray_skull",
                  "tconstruct:stray_head"
            ],
            "resultItems": "spartanweaponry:stray_skull"
        }
    ]);
});