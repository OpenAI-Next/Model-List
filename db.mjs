// PATH: /db.mjs

import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('models.db', (err) => {
    if (err) {
        console.error(new Date().toLocaleTimeString(), 'Error connecting to the models database:', err.message);
    } else {
        console.log(new Date().toLocaleTimeString(), 'Connected to the models database.');
    }
});

export const initDb = () => {
    console.log(new Date().toLocaleTimeString(), 'Initializing database');
    db.run(`
        CREATE TABLE IF NOT EXISTS models
        (
            id              INTEGER PRIMARY KEY AUTOINCREMENT,
            provider        TEXT,
            category        TEXT,
            name            TEXT UNIQUE,
            description     TEXT,
            max_tokens      INTEGER,
            max_context     INTEGER,
            max_response    INTEGER,
            max_temperature REAL,
            function_call   INTEGER,
            vision          INTEGER,
            input_price     REAL,
            output_price    REAL
        )
    `);
    console.log(new Date().toLocaleTimeString(), 'Database initialized');
};

