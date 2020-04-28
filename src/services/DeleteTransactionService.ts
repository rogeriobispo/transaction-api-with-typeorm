import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepostiory = getCustomRepository(TransactionRepository);
    const transaction = await transactionRepostiory.findOne(id);
    if (!transaction) throw new AppError('Transaction não existe');

    await transactionRepostiory.remove(transaction);
  }
}

export default DeleteTransactionService;
