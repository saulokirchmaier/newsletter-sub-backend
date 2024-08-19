import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const masterConnection = new DataSource({
  type: 'postgres',
  database: 'postgres',
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD || 'senha',
  port: process.env.DATABASE_PORT
    ? parseInt(process.env.DATABASE_PORT, 10)
    : undefined,
  username: process.env.DATABASE_PASSWORD || 'usuario',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/db/migrations/*.js'],
  logging: false,
  name: 'master',
  migrationsRun: false,
});

const databaseName = 'test_db';

const connection = new DataSource({
  ...(masterConnection.options as PostgresConnectionOptions),
  database: databaseName,
  migrationsRun: true,
  name: 'test',
});

export async function databaseIntegrationSetup() {
  try {
    await masterConnection.initialize();
    await masterConnection.query(`CREATE DATABASE "${databaseName}"`);
  } catch (err) {
    process.stderr.write(
      `${err instanceof Error ? err.stack : JSON.stringify(err)}\n`,
    );
  }

  return connection;
}

export async function closeDatabaseIntegrationConnections() {
  try {
    await masterConnection.query(`DROP DATABASE "${databaseName}"`);
    await masterConnection.destroy();
  } catch (err) {
    process.stderr.write(
      `${err instanceof Error ? err.stack : JSON.stringify(err)}\n`,
    );
  }
}
