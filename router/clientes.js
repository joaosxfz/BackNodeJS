import express from "express"
import ControllerCliente from "../controller/clientes.js"
import authMiddleware from "../middleware/auth.js"
const router = express.Router()

router.post("/login", ControllerCliente.Login)
router.get("/buscar", authMiddleware, ControllerCliente.Buscar)
router.get("/detalhe/:id", ControllerCliente.Detalhe)
router.post("/criar", ControllerCliente.Criar)
router.put("/alterar/:id", ControllerCliente.Alterar)
router.delete("/deletar/:id", ControllerCliente.Deletar)

export default router
