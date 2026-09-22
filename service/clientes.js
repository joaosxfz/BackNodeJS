import RepositoryCliente from '../repository/clientes.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const segredo = 'mimos4'

class ServiceCliente {

    async Buscar() {
        return RepositoryCliente.find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const cliente = await RepositoryCliente.findById(id)

        if (!cliente) {
            throw new Error(`ID ${id} do cliente não encontrado`)
        }

        return cliente
    }

    async Criar(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error("Favor informar todos os dados")
        }

        const senhaCripto = await bcrypt.hash(senha, 12)

        const cliente = await RepositoryCliente.Create(nome, email, senhaCripto)

        return cliente
    }

    async Alterar(id, nome, email, senha) {
        if (!id || !nome || !email || !senha) {
            throw new Error("Favor informar os dados");
        }

        const senhaCripto = await bcrypt.hash(senha, 12)

        const clienteAlterado = await RepositoryCliente.Update(id, nome, email, senhaCripto)

        return clienteAlterado
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const cliente = await RepositoryCliente.Delete(id)

        return cliente
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválido")
        }

        const cliente = await RepositoryCliente.findByEmail(email)

        if (!cliente) {
            throw new Error("Email ou senha inválido")
        }

        if (
            !(await bcrypt.compare(String(senha), cliente.senha))
        ) {
            throw new Error("Email ou senha inválido")
        }

        return jwt.sign(
            { id: cliente.id, email },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceCliente()