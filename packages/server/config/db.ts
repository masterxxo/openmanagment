
export default () => ({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [],
  synchronize: true,
});
