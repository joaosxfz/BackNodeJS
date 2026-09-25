import Atendimento from "./atendimento.js";
import Clientes from "./clientes.js";

Atendimento.hasMany(Clientes, {
    foreignKey: "atendimentoId",
    as: "clientes"
});

Clientes.belongsTo(Atendimento, {
    foreignKey: "atendimentoId",
    as: "atendimento"
});

export {
    Atendimento,
    Clientes
};