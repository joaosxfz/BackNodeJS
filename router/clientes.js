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


// travou tanto que eu esqueci o que ia te falar ,-,
// a lembrie, a resposta depois pra esse cara aqui, vai estar no meu github na ultima branch, se te interessar (=