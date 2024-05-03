const dynamoose = require('../config/dynamoConfig');

const formaPagamentoSchema = new dynamoose.Schema({
    FormaPagamentoId: String,
    NomeFormaPagamento: String
}, {
    saveUnknown: true,
    timestamps: true
});

module.exports = dynamoose.model('FormaPagamento', formaPagamentoSchema);