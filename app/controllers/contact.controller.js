exports.create = (req, res) => {
   res.send({ message: "create handler"});
};

exports.findALL = (req, res) => {
   res.send ({message: "findALL handler"});
};

exports.findOne = (req, res) => {
   res.send ({message: "findOne handler"});
};

exports.update = (req, res) => {
   res.send ({message: "update handler"});
};

exports.delete = (req, res) => {
   res.send ({message: "delete handler"});
};

exports.deleteALL = (req, res) => {
   res.send ({message: "deleteALL handler"});
};

exports.findALLFavorite = (req, res) => {
   res.send ({message: "findALLFavorite handler"});
};