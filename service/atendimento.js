import RepositoryAtendimento from '../repository/atendimento.js'

class ServiceAtendimento {

    async Buscar() {
        return RepositoryAtendimento.find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const atendimento = await RepositoryAtendimento.findById(id)

        if (!atendimento) {
            throw new Error(`ID ${id} do Atendimento não encontrado`)
        }

        return atendimento
    }

    async Criar(dia, hora, valor, concluido) {
        if (!dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar todos os dados")
        }

        const atendimento = await RepositoryAtendimento.Create(dia, hora, valor, concluido)
        return atendimento
    }

    async Alterar(id, dia, hora, valor, concluido) {
        if (!id || !dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar os dados");
        }
        const atendimentoAlterado = await RepositoryAtendimento.Update(id, dia, hora, valor, concluido)
        return atendimentoAlterado
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const atendimento = await RepositoryAtendimento.Delete(id)

        return atendimento
    }
}

export default new ServiceAtendimento()