const dynamoose = require('dynamoose');

const agendamentoSchema = new dynamoose.Schema({
    AgendamentoId: String,
    ClienteId: String,
    PrestadorServicoId: String,
    Data: String,
    FormaPagamentoId: String,
    Horario: String,
    ServicoId: String
}, {
    saveUnknown: true,
    timestamps: true
});

module.exports = dynamoose.model('AgendamentoModel', agendamentoSchema);