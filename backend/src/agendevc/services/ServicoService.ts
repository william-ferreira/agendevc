import ServicoModel from '../models/ServicoModel';
import { Servico } from '../types/Servico';

const ServicoService = {
    async createServico(servicoData: Servico): Promise<Servico> {
        const servico = await ServicoModel.create(servicoData) as unknown as Servico;
        return servico;
    },

    async getServico(servicoId: string): Promise<Servico | null> {
        const servico = await ServicoModel.get(servicoId) as unknown as Servico | null;
        return servico;
    },

    async getAllServicosByPrestador(prestadorServicoId: string): Promise<Servico[]> {
        const servicos = await ServicoModel.query('prestadorServicoId').eq(prestadorServicoId).exec() as unknown as Servico[];
        return servicos;
    },

    async updateServico(servicoId: string, newData: Partial<Servico>): Promise<Servico | null> {
        const updatedServico = await ServicoModel.update(servicoId, newData) as unknown as Servico | null;
        return updatedServico;
    },

    async deleteServico(servicoId: string): Promise<boolean> {
        try {
            await ServicoModel.delete(servicoId);
            return true; 
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};

export { ServicoService };