const Columns = require("../dao/columns");

function getColumnsByBoardsId(req,res) {
    Columns.getColumnsByBoardId(req.params.board_id,(gotColumnsErrors, gotColumns) => {
        res.status(200).json({ gotColumns });
    })
}

module.exports = { getColumnsByBoardsId };
