const dynamoose = require('../config/dynamoConfig');

const servicoSchema = new dynamoose.Schema({
    DescricaoServico: String,
    DuracaoServico: Number,
    NomeServico: String,
    PrecoServico: String,
    ServicoId: String
}, {
    saveUnknown: true,
    timestamps: true
});

module.exports = dynamoose.model('Servico', servicoSchema);