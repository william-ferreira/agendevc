import { Agendamento } from "../types/Agendamento";
import { Cliente } from "../types/Cliente";
import { FormaPagamento } from "../types/FormaPagamento";
import { HorarioFuncionamento } from "../types/HorarioFuncionamento";
import { Servico } from "../types/Servico";

interface PrestadorServico {
    PrestadorServicoId: string;
    AgendamentosPrestadorServico: Agendamento[];
    Clientes: Cliente[];
    FormasPagamento: FormaPagamento[];
    HorariosFuncionamento: HorarioFuncionamento[];
    NomeNegocio: string;
    NumeroWhatsappNegocio: string;
    DescricaoNegocio: string;
    Servicos: Servico[];
}

export {PrestadorServico};