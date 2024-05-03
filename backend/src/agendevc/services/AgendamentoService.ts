import AgendamentoModel from '../models/AgendamentoModel';
import { Agendamento } from '../types/Agendamento';

const AgendamentoService = {
    async createAgendamento(agendamentoData: Agendamento): Promise<Agendamento> {
        const agendamento = await AgendamentoModel.create(agendamentoData) as unknown as Agendamento;
        return agendamento;
    },

    async getAgendamento(agendamentoId: string): Promise<Agendamento | null> {
        const agendamento = await AgendamentoModel.get(agendamentoId) as unknown as Agendamento | null;
        return agendamento;
    },

    async getAllAgendamentosByPrestador(prestadorServicoId: string): Promise<Agendamento[]> {
        const agendamentos = await AgendamentoModel.query('prestadorServicoId').eq(prestadorServicoId).exec() as unknown as Agendamento[];
        return agendamentos;
    },

    async getAllAgendamentosByCliente(clienteId: string): Promise<Agendamento[]> {
        const agendamentos = await AgendamentoModel.query('clienteId').eq(clienteId).exec() as unknown as Agendamento[];
        return agendamentos;
    },

    async updateAgendamento(agendamentoId: string, newData: Partial<Agendamento>): Promise<Agendamento | null> {
        const updatedAgendamento = await AgendamentoModel.update(agendamentoId, newData) as unknown as Agendamento | null;
        return updatedAgendamento;
    },

    async deleteAgendamento(agendamentoId: string): Promise<boolean> {
        try {
            await AgendamentoModel.delete(agendamentoId);
            return true; 
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};

export { AgendamentoService };