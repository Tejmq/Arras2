module.exports = {
    version: 'v2.0.11.3',
    devBuild: true,

    main_menu: 'index.html',
    host: process.env.RENDER_EXTERNAL_URL || 'https://arras-vpzf.onrender.com',
    port: process.env.PORT || 3000,

    visible_list_interval: 250,
    startup_logs: true,
    load_all_mockups: false,

    servers: [
        {
            share_client_server: true,

            host: '0.0.0.0',
            port: process.env.PORT || 3000,

            id: 'main',
            region: "Local",
            gamemode: ['sandbox'],   // <- keep ONE mode only
            player_cap: 180,
            featured: false,
            unlisted: false,
            private: false,

            properties: {
                teams: 4,
                bot_cap: 0
            }
        }
    ],

    allow_ACAO: false,
    map_tile_width: 420,
    map_tile_height: 420,

    spawn_message: "You have spawned!",
    token_message: "Be respectful.",

    chat_message_duration: 15000,
    popup_message_duration: 10000,
    sanitize_chat_input: true,

    game_speed: 1,
    run_speed: 1.5,

    level_cap: 45,
    skill_cap: 9,
    tier_cap: 17,

    bot_cap: 0,
    spawn_class: 'basic',

    enable_food: true,

    classic_food: false,

    enable_bosses: false,

    team_weights: {},

    gamemode_name_prefixes: [],
    arena_shape: 'rect',
    arms_race: true,
    mode: 'ffa',
    teams: 4,
    room_setup: ['room_siege_blitz'],
};
