ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/flintknife.json", [
        {
            "matchItems": [
                  "notreepunching:flint_knife",
                  "farmersdelight:flint_knife"
            ],
            "resultItems": "notreepunching:flint_knife"
        }
    ]);
});