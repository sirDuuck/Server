const connection = require ('.connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROMuser');
    return tasks;
};

module.exports = {
    getAll,
};