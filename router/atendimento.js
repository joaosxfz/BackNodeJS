import express from "express"
import ControllerAtendimento from "../controller/atendimento.js"
import authMiddleware from "../middleware/auth.js"
const router = express.Router()

router.post("/login", ControllerAtendimento.Login)
router.get("/buscar", authMiddleware, ControllerAtendimento.Buscar)
router.get("/detalhe/:id", ControllerAtendimento.Detalhe)
router.post("/criar", ControllerAtendimento.Criar)
router.put("/alterar/:id", ControllerAtendimento.Alterar)
router.delete("/deletar/:id", ControllerAtendimento.Deletar)

export default router