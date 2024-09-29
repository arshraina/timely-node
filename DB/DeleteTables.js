import { pool } from './Configuration.js';

// Function to drop the Students table
export const dropTableStudents = () => {
    return new Promise((resolve, reject) => {
        pool.query(`DROP TABLE IF EXISTS Students;`, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

// Function to drop the Subjects table
export const dropTableSubjects = () => {
    return new Promise((resolve, reject) => {
        pool.query(`DROP TABLE IF EXISTS Subjects;`, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

// Function to drop the Batches table
export const dropTableBatches = () => {
    return new Promise((resolve, reject) => {
        pool.query(`DROP TABLE IF EXISTS Batches;`, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

// Function to drop the Timetable table
export const dropTableTimetable = () => {
    return new Promise((resolve, reject) => {
        pool.query(`DROP TABLE IF EXISTS Timetable;`, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

export const dropTableStudentsSubjects = () => {
    return new Promise((resolve, reject) => {
        pool.query(`DROP TABLE IF EXISTS Students_Subjects;`, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};


// Function to drop all tables
export async function dropAllTables() {
    try {
        await dropTableTimetable();
        await dropTableStudentsSubjects();
        await dropTableBatches();
        await dropTableSubjects();
        await dropTableStudents();
        
        
        console.log('All tables dropped successfully.');
    } catch (error) {
        console.error('Error dropping tables: ', error);
    }
}

// Call the function to drop all tables
// dropAllTables();
