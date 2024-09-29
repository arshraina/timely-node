import { closePool } from './DB/Configuration.js';
import { createTables }  from './DB/CreateTables.js';
import { dropAllTables } from './DB/DeleteTables.js';
import { addSampleData } from './DB/InsertSampleData.js';
import { getWeeklyTimetable } from './DB/Queries.js';


async function interact(){
    try{
        await dropAllTables();
        await createTables();
        await addSampleData();
        await getWeeklyTimetable(2021700067)
            .then(timetable => {
                console.log("Weekly Timetable: ", timetable);
            })
            .catch(error => {
                console.error('Error retrieving timetable:', error);
            });
    }
    catch (error) {
        console.error('Error: ', error);
    } finally{
        closePool();
    }
}

interact();

process.on('SIGINT', async () => {
    console.log('Closing database connection pool...');
    await closePool();
    console.log('Database connection pool closed. Exiting...');
    process.exit(0);
});