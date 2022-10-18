export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 9000,
  DATABASE: {
    HOST: process.env.DB_HOST || 'localhost',
    PORT: parseInt(process.env.DB_PORT, 10) || 3306,
    USERNAME: process.env.DB_USERNAME || 'root',
    PASSWORD: process.env.DB_PASSWORD || 'root',
    DATABASE: process.env.DATABASE || 'project-manager',
  },
});
