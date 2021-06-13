const controller = {

    getArgonauts: (req, res) => {
        res.json(" GET argonauts list");
    },

    addArgonaut: (req, res) => {
        res.json("POST argonaut");
    }

};

module.exports = controller;