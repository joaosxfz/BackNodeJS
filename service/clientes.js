import RepositoryUsuario from '../repository/usuario.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const segredo = 'mimos4'

class ServiceUsuario {

    async Buscar() {
        return RepositoryUsuario.find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const usuario = await RepositoryUsuario.findById(id)

        if (!usuario) {
            throw new Error(`ID ${id} do usuario não encontrado`)
        }

        return usuario
    }

    async Criar(email, senha) {
        if (!email || !senha) {
            throw new Error("Favor informar todos os dados")
        }

        const senhaCripto = await bcrypt.hash(senha, 12)

        const usuario = await RepositoryUsuario.Create(email, senhaCripto)

        return usuario
    }

    async Alterar(id, email, senha) {
        if (!id || !email || !senha) {
            throw new Error("Favor informar os dados");
        }

        const senhaCripto = await bcrypt.hash(senha, 12)

        const usuarioAlterado = await RepositoryUsuario.Update(id, email, senhaCripto)

        return usuarioAlterado
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const usuario = await RepositoryUsuario.Delete(id)

        return usuario
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválido")
        }

        const usuario = await RepositoryUsuario.findByEmail(email)

        if (!usuario) {
            throw new Error("Email ou senha inválido")
        }

        if (
            !(await bcrypt.compare(String(senha), usuario.senha))
        ) {
            throw new Error("Email ou senha inválido")
        }

        return jwt.sign(
            { id: usuario.id, email },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceUsuario()