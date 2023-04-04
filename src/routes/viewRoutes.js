const { Router } = require("express");

const { renderHomepage, renderNotespage } = require("../controllers/view");

const router = Router();

router.get("/notes", renderNotespage);
router.get("/", renderHomepage);

module.exports = router;
