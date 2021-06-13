const Argonaut = require('../models/Argonaut');

const controller = {

    /**
     * middleware to get all argonauts from database
     * GET api/argonauts 
     * @param {*} _  - request object from express UNUSED
     * @param {*} res - response object from express
     */
    getArgonauts: async (_, res) => {

        try {
            const argonauts = await Argonaut.findAll();
            res.json(argonauts);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },

    addArgonaut: async (req, res) => {
        //We create a new instance of argonaut with the content of the body (data from form)
        const argonaut = new Argonaut(req.body);

        try { // We try to insert the data into the db
            await argonaut.save();

            //everything went OK, send response
            res.status(201).json("Crew Member successfully added");
        } catch (error) { // error occured - we treat it accordingly
            if (error.message.includes("existe déjà.")) {
                res.status(400).json("name already exists");
            } else {
                res.status(500).json(error.message);
            }
        }
    }

};

module.exports = controller;