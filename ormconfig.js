module.exports = [
  {
    name: 'development',
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: ['src/Api/entity/**/*.js'],
    migrations: ['src/Api/migration/**/*.js'],
    subscribers: ['src/Api/subscriber/**/*.js'],
    cli: {
      entitiesDir: 'dist/entity',
      migrationsDir: 'dist/migration',
      subscribersDir: 'dist/subscriber',
    },
  },
]
