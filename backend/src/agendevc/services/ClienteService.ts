import ClienteModel from '../models/ClienteModel';
import { Cliente } from '../types/Cliente';

const ClienteService = {
    async createCliente(clienteData: Cliente): Promise<Cliente> {
        const cliente = await ClienteModel.create(clienteData) as unknown as Cliente;
        return cliente;
    },

    async getCliente(clienteId: string): Promise<Cliente | null> {
        const cliente = await ClienteModel.get(clienteId) as unknown as Cliente | null;
        return cliente;
    },

    async updateCliente(clienteId: string, newData: Partial<Cliente>): Promise<Cliente | null> {
        const updatedCliente = await ClienteModel.update(clienteId, newData) as unknown as Cliente | null;
        return updatedCliente;
    },

    async deleteCliente(clienteId: string): Promise<boolean> {
        try {
            await ClienteModel.delete(clienteId);
            return true; 
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};

export { ClienteService };