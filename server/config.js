servers: [
    {
        share_client_server: true, // ✅ ONLY THIS ONE

        host: 'localhost:3001',
        port: 3001,
        id: 'la',
        region: "Local",
        gamemode: ['tdm'],
        player_cap: 180,
        featured: false,
        unlisted: true,
        private: true,

        properties: {
            teams: 3,
            bot_cap: 150
        }
    },
    {
        share_client_server: false, // ❌ changed

        host: 'localhost:3002',
        port: 3002,
        id: 'lb',
        region: "Local",
        gamemode: ['retrograde'],
        player_cap: 80,
        featured: false,
        unlisted: true,
        private: true,

        properties: {
            teams: 4,
            bot_cap: 16
        }
    },
    {
        share_client_server: false, // ❌ changed

        host: 'localhost:3003',
        port: 3003,
        id: 'lx',
        region: "Local",
        gamemode: ['nexus'],
        player_cap: 80,
        featured: false,
        unlisted: true,
        private: true,

        properties: {
            teams: 4,
            bot_cap: 0
        }
    },
    {
        share_client_server: false, // ❌ changed

        host: 'localhost:3099',
        port: 3099,
        id: 'lz',
        region: "Local",
        gamemode: ['sandbox'],
        player_cap: 16,
        featured: false,
        unlisted: false,
        private: false,

        properties: {}
    }
]
