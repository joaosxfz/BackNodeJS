import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {
    async Buscar(req, res) {
        try {
            console.log(req.session)
            const atendimento = await ServiceAtendimento.Buscar()
            res.status(200).send({ mensagem: atendimento })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const atendimento = await ServiceAtendimento.Detalhe(id)

            res.status(200).send({ mensagem: atendimento })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { dia, hora, valor, concluido } = req.body

            await ServiceAtendimento.Criar(dia, hora, valor, concluido)

            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { dia, hora, valor, concluido } = req.body
            const id = req.params.id

            await ServiceAtendimento.Alterar(id, dia, hora, valor, concluido)

            res.status(200).send({ mensagem: "Alterado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const identificador = req.params.id

            await ServiceAtendimento.Deletar(identificador)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerAtendimento()