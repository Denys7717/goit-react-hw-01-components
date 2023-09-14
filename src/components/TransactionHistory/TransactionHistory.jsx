import { TransactionData } from './TransactionData/TransactionData';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          <TransactionData items={items} />
        </tbody>
      </table>
    </>
  );
};
