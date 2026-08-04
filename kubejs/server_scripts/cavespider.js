ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/cavespider.json", [
        {
            "matchItems": [
                  "tconstruct:cave_spider_head",
                  "spartanweaponry:cave_spider_head"
            ],
            "resultItems": "spartanweaponry:cave_spider_head"
        }
    ]);
});