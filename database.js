import { createPool } from 'mysql2/promise';

const db = createPool({
  host: 'localhost',
  user: 'root',
  database: 'clinica', 
  password: 'admin',
  waitForConnections: true
});


export default db;
