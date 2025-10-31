const logger = require("../logger/logger.js");


class UnoController {
    async get(req, res) {
        try {
            let message = "Hello!!!";

            res.status(200).json({
                message
            })
            logger.info({
                "path": req.path,
                "ip": req.ip
            })
        } catch (error) {
            res.status(400).json({
                "error": error.message
            });
            logger.error({
                "error": error.message,
                "path": req.path,
                "ip": req.ip
            }) 
        }
    };
}

module.exports = new UnoController();