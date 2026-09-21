import cliente from '../model/clientes.js'

class RepositoryClientes {

    async find() {
        const clientes = await cliente.findAll()
        return clientes
    }

    async findById(id) {
        const clienteEspecifico = await cliente.findByPk(id)
        return clienteEspecifico
    }

    async Create(nome, email, senha) {
        const clienteCriar = await cliente.Create({ nome, email, senha })
        return clienteCriar
    }

    async Update(id, nome, email, senha) {
        const clienteMudar = await cliente.findByPk(id)

        if (!clienteMudar) {
            throw new Error("Quem é esse neguin?")
        }

        clienteMudar.nome = nome
        clienteMudar.email = email
        clienteMudar.senha = senha

        await clienteMudar.save()
        return clienteMudar
    }

    async Delete(id) {
        const clienteDelete = await cliente.findByPk(id)

        if (!clienteDelete) {
            throw new Error("Quem é esse neguin?")
        }

        await clienteDelete.detroy()
        return clienteDelete
    }

    async findByEmail(email) {
        return usuario.findOne({ where: { email } })
    }
}

export default new RepositoryClientes()