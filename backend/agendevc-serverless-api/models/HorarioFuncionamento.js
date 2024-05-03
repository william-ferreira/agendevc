const dynamoose = require('dynamoose');

const horarioFuncionamentoSchema = new dynamoose.Schema({
    Abre1: String,
    Abre2: String,
    Dia: String,
    Fecha1: String,
    Fecha2: String
}, {
    saveUnknown: true,
    timestamps: true
});

module.exports = dynamoose.model('HorarioFuncionamento', agendamentoSchema);