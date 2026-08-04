ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/spider.json", [
        {
            "matchItems": [
                  "tconstruct:spider_head",
                  "spartanweaponry:spider_head"
            ],
            "resultItems": "spartanweaponry:spider_head"
        }
    ]);
});