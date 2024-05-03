const dynamoose = require('dynamoose');

const servicoSchema = new dynamoose.Schema({
    DescricaoServico: String,
    DuracaoServico: Number,
    NomeServico: String,
    PrecoServico: String,
    ServicoId: String,
    PrestadorServicoId: String,
}, {
    saveUnknown: true,
    timestamps: true
});

module.exports = dynamoose.model('Servico', servicoSchema);