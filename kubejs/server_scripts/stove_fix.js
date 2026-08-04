ServerEvents.recipes(event => {
    // 移除所有用营火做原料的炉灶/加热炉配方
    event.remove({id: 'farmersdelight:stove'})
    event.remove({id: 'ends_delight:end_stove'})
    event.remove({id: 'aethersdelight:holystone_stove'})
    event.remove({id: 'nethersdelight:blackstone_stove'})
    event.remove({id: 'legendarysurvivaloverhaul:heater'})

    // 炉灶 - 营火 → 熔炉或岩浆块
    event.shaped('farmersdelight:stove', [
        'iii',
        'B B',
        'BFB'
    ], {
        i: '#forge:ingots/iron',
        B: 'minecraft:bricks',
        F: ['minecraft:furnace', 'minecraft:magma_block']
    }).id('kubejs:stove')

    // 末地炉灶 - 营火 → 熔炉或岩浆块
    event.shaped('ends_delight:end_stove', [
        'PPP',
        'E E',
        'EME'
    ], {
        P: 'minecraft:popped_chorus_fruit',
        E: 'minecraft:end_stone_bricks',
        M: ['minecraft:furnace', 'minecraft:magma_block']
    }).id('kubejs:end_stove')

    // 圣石炉灶 - 营火 → 熔炉或岩浆块
    event.shaped('aethersdelight:holystone_stove', [
        'AAA',
        'B B',
        'BFB'
    ], {
        A: 'aethersdelight:arkenium_ingot',
        B: 'aether:holystone_bricks',
        F: ['minecraft:furnace', 'minecraft:magma_block']
    }).id('kubejs:holystone_stove')

    // 黑石炉灶 - 营火 → 熔炉或岩浆块
    event.shaped('nethersdelight:blackstone_stove', [
        'nnn',
        'b b',
        'bmb'
    ], {
        n: 'minecraft:nether_brick',
        b: 'minecraft:polished_blackstone_bricks',
        m: ['minecraft:furnace', 'minecraft:magma_block']
    }).id('kubejs:blackstone_stove')

    // 加热炉 - 营火 → 熔炉或岩浆块
    event.shaped('legendarysurvivaloverhaul:heater', [
        ' i ',
        'iFi',
        'iWi'
    ], {
        i: 'minecraft:iron_ingot',
        F: ['minecraft:furnace', 'minecraft:magma_block'],
        W: 'minecraft:coal_block'
    }).id('kubejs:heater')
})