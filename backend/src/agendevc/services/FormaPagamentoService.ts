import FormaPagamentoModel from '../models/FormaPagamentoModel';
import { FormaPagamento } from '../types/FormaPagamento';

const FormaPagamentoService = {
    async createFormaPagamento(formaPagamentoData: FormaPagamento): Promise<FormaPagamento> {
        const formaPagamento = await FormaPagamentoModel.create(formaPagamentoData) as unknown as FormaPagamento;
        return formaPagamento;
    },

    async getFormaPagamento(formaPagamentoId: string): Promise<FormaPagamento | null> {
        const formaPagamento = await FormaPagamentoModel.get(formaPagamentoId) as unknown as FormaPagamento | null;
        return formaPagamento;
    },

    async updateFormaPagamento(formaPagamentoId: string, newData: Partial<FormaPagamento>): Promise<FormaPagamento | null> {
        const updatedFormaPagamento = await FormaPagamentoModel.update(formaPagamentoId, newData) as unknown as FormaPagamento | null;
        return updatedFormaPagamento;
    },

    async deleteFormaPagamento(formaPagamentoId: string): Promise<boolean> {
        try {
            await FormaPagamentoModel.delete(formaPagamentoId);
            return true; 
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};

export { FormaPagamentoService };