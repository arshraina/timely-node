import { createPool } from "mysql";

// Create a connection pool
export const pool = createPool({
    connectionLimit: 10, // Limit to 10 concurrent connections
    host: '127.0.0.1',
    user: 'timekeeper1',
    password: '',
    database: 'timelydatabase'
});

// Function to close the pool
export const closePool = () => {
    return new Promise((resolve, reject) => {
        pool.end((err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};
