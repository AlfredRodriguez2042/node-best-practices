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
    entities: ['src/Dal/Entities/**/*.ts'],
    migrations: ['src/Dal/migration/**/*.ts'],
    subscribers: ['src/Dal/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/Dal/Entities',
      migrationsDir: 'src/Dal/migration',
      subscribersDir: 'src/Dal/subscriber',
    },
  },
]
