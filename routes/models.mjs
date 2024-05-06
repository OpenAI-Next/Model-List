import express from 'express';
import {MODELS_MAP, MODELS_OPTIONS, TREE_MODELS_OPTIONS} from "../constant.mjs";
import {db} from "../db.mjs";

const router = express.Router();

/* GET models listing. */
router.get('/', function (req, res) {
    res.json(MODELS_MAP);
});

router.get("/tree-option", function (req, res) {
    res.json(TREE_MODELS_OPTIONS);
});

router.get("/option", function (req, res) {
    res.json(MODELS_OPTIONS);
});

export default router;