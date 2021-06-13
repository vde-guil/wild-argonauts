const { query } = require('../database');
const db = require('../database');


/**
 * An entity representing an crew member
 * @typedef Argonaut
 * @property {number} id
 * @property {string} name
 */

/**
 * A model representing a crew member
 */
class Argonaut {
    /**
     * The Argonaut constructor
     * @param {Object} obj - a litteral object with properties that will be copied in the instance 
     */
    constructor(obj = {}) {
        for (const prop in obj) {
            this[prop] = obj[prop];
        }
    }

    /**
     * Fetches every crew Member from the database
     * @returns {Array<Argonaut>}
     * @async
     * @static
     */
    static async findAll() {
        const myQuery = 'SELECT * FROM argonaut;';
        // We query the database to get an array of all the entries
        const { rows } = await db.query(myQuery);

        // We return an array of instances of Argonauts - corresponding to all the argonauts present in db
        return rows.map((argonaut) => new Argonaut(argonaut));
    }

    async save() {
        if (this.id) {
            // for update
        } else { // to add new entry in db

            // prepared query for insertion using the SQL function made
            const myQuery = 'SELECT * FROM add_argonaut($1);';
            try {
                // executing the query passing the data to insert
                const {rows} = await db.query(myQuery, [this]);
                // feed the id of the newly inserted Row into the instance
                this.id = +rows[0].id;

            } catch (error) { // if an exception is raised, throw a new error for the controller to handle
                throw new Error(error.detail);
            }
        }
    }
}

module.exports = Argonaut;