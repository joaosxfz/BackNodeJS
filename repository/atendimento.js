import Atendimento from '../model/atendimento.js'

class RepositoryAtendimento {

    async find() {
        const atendimento = await Atendimento.findAll()
        return atendimento
    }

    async findById(id) {
        const atendimentoEspecifico = await Atendimento.findByPk(id)
        return atendimentoEspecifico
    }

    async Create(dia, hora, valor, concluido) {
        const atendimentoCriar = await Atendimento.create({ dia, hora, valor, concluido })
        return atendimentoCriar
    }

    async Update(id, dia, hora, valor, concluido) {
        const atendimentoMudar = await Atendimento.findByPk(id)

        if (!atendimentoMudar) {
            throw new Error("Quem é esse neguin?")
        }

        atendimentoMudar.dia = dia
        atendimentoMudar.hora = hora
        atendimentoMudar.valor = valor
        atendimentoMudar.concluido = concluido

        await atendimentoMudar.save()
        return atendimentoMudar
    }

    async Delete(id) {
        const atendimentoDelete = await Atendimento.findByPk(id)

        if (!atendimentoDelete) {
            throw new Error("Quem é esse neguin?")
        }

        await atendimentoDelete.destroy()
        return atendimentoDelete
    }

}

export default new RepositoryAtendimento()