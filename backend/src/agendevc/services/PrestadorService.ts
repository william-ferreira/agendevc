import PrestadorServicoModel from '../models/PrestadorServicoModel';
import { PrestadorServico } from '../types/PrestadorServico';

const PrestadorServicoService = {
    async createPrestadorServico(prestadorServicoData: PrestadorServico): Promise<PrestadorServico> {
        const prestadorServico = await PrestadorServicoModel.create(prestadorServicoData) as unknown as PrestadorServico;
        return prestadorServico;
    },

    async getPrestadorServico(prestadorServicoId: string): Promise<PrestadorServico | null> {
        const prestadorServico = await PrestadorServicoModel.get(prestadorServicoId) as unknown as PrestadorServico | null;
        return prestadorServico;
    },

    async updatePrestadorServico(prestadorServicoId: string, newData: Partial<PrestadorServico>): Promise<PrestadorServico | null> {
        const updatedPrestadorServico = await PrestadorServicoModel.update(prestadorServicoId, newData) as unknown as PrestadorServico | null;
        return updatedPrestadorServico;
    },

    async deletePrestadorServico(prestadorServicoId: string): Promise<boolean> {
        try {
            await PrestadorServicoModel.delete(prestadorServicoId);
            return true; 
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};

export { PrestadorServicoService };