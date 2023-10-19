const connection = require ('.connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROMtasks');
    return tasks;
};

module.exports = {
    getAll,
};