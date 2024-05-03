import HorarioFuncionamentoModel from '../models/HorarioFuncionamentoModel';
import { HorarioFuncionamento } from '../types/HorarioFuncionamento';

const HorarioFuncionamentoService = {
    async createHorarioFuncionamento(horarioFuncionamentoData: HorarioFuncionamento): Promise<HorarioFuncionamento> {
        const horarioFuncionamento = await HorarioFuncionamentoModel.create(horarioFuncionamentoData) as unknown as HorarioFuncionamento;
        return horarioFuncionamento;
    },

    async getHorarioFuncionamento(horarioFuncionamentoId: string): Promise<HorarioFuncionamento | null> {
        const horarioFuncionamento = await HorarioFuncionamentoModel.get(horarioFuncionamentoId) as unknown as HorarioFuncionamento | null;
        return horarioFuncionamento;
    },

    async updateHorarioFuncionamento(horarioFuncionamentoId: string, newData: Partial<HorarioFuncionamento>): Promise<HorarioFuncionamento | null> {
        const updatedHorarioFuncionamento = await HorarioFuncionamentoModel.update(horarioFuncionamentoId, newData) as unknown as HorarioFuncionamento | null;
        return updatedHorarioFuncionamento;
    },

    async deleteHorarioFuncionamento(horarioFuncionamentoId: string): Promise<boolean> {
        try {
            await HorarioFuncionamentoModel.delete(horarioFuncionamentoId);
            return true; 
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};

export { HorarioFuncionamentoService };