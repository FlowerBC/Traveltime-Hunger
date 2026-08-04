// 禁用绯红蚊子
EntityEvents.spawned(event => {
    const banned = ['alexsmobs:crimson_mosquito', 'alexsmobs:crimson_mosquito_fly'];
    if (banned.includes(event.entity.type)) {
        event.cancel();
        event.entity.discard();
    }
});
