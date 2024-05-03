const dynamoose = require('../config/dynamoConfig');

const agendamentoSchema = new dynamoose.Schema({
    AgendamentoId: String,
    ClienteId: String,
    Data: String,
    FormaPagamentoId: String,
    Horario: String,
    ServicoId: String
}, {
    saveUnknown: true,
    timestamps: true
});

module.exports = dynamoose.model('AgendamentoModel', agendamentoSchema);