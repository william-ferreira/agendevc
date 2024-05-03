const dynamoose = require('../config/dynamoConfig');

const prestadorServicoSchema = new dynamoose.Schema({
    PrestadorServicoId: {
        type: String,
        hashKey: true
    },
    AgendamentosPrestadorServico: {
        type: Array,
        schema: [agendamentoSchema]
    },
    Clientes: {
        type: Array,
        schema: [clienteSchema]
    },
    FormasPagamento: {
        type: Array,
        schema: [formaPagamentoSchema]
    },
    HorariosFuncionamento: {
        type: Array,
        schema: [horarioFuncionamentoSchema]
    },
    NomeNegocio: String,
    NumeroWhatsappNegocio: String,
    DescricaoNegocio: String,
    Servicos: {
        type: Array,
        schema: [servicoSchema]
    }
}, {
    saveUnknown: true,
    timestamps: true
});

module.exports = dynamoose.model('PrestadorServicoModel', prestadorServicoSchema);