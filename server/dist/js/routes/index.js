"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DrummersController_1 = require("../controller/DrummersController");
const router = (0, express_1.Router)();
router.get('/drummers', DrummersController_1.getDrummers);
router.get('/drummers/:id', DrummersController_1.getDrummerById);
exports.default = router;
