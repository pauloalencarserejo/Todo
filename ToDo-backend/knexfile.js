module.exports = {
    client: 'postgresql',
    connection:{
        host: '127.0.0.1',
        database: 'tasks',
        user: 'postgres',
        password: '123456'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'kenx_migration'
    }
}