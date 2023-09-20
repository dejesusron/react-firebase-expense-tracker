import { useAddTransaction } from "../hooks/useAddTransaction";
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useGetTransactions } from '../hooks/useGetTransactions';
import { useGetUserInfo } from '../hooks/useGetUserInfo';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';

const ExpenseTracker = () => {
    const { addTransaction } = useAddTransaction();
    const { transactions, transactionTotals } = useGetTransactions();
    const { name, profilePhoto } = useGetUserInfo();
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");

    const { balance, income, expense } = transactionTotals;

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({ 
            description, 
            transactionAmount, 
            transactionType,
        });

       setDescription("");
       setTransactionAmount(0);
    }

    const signUserOut = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
        <div className="container mx-auto px-4 pt-10">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold border border-[#333] py-3 px-6">{name} Expense Tracker</h1>

                {profilePhoto && (
                    <div className="grid gap-y-2 justify-items-center">
                        <img src={profilePhoto} alt="profile photo" className="rounded-full" />
                        <button onClick={signUserOut} className="border border-[#333] px-4 py-1">
                            Sign Out
                        </button>
                    </div>
                )}
            </div>

            <div className="border border-[#333] mt-10 p-4">
                <div className="mb-2">
                    <h3 className="font-semibold text-2xl">Balance</h3>
                    {balance >= 0 ? <p className="text-3xl">${balance}</p> : <p className="text-3xl">-${balance * -1}</p> }
                </div>

                <div className="mb-2">
                    <h3 className="font-semibold text-lg">Incomes</h3>
                    <p className="text-[green]">${income}</p>
                </div>

                <div className="mb-2">
                    <h3 className="font-semibold text-lg">Expenses</h3>
                    <p className="text-[red]">${expense}</p>
                </div>

                <form onSubmit={onSubmit} className="grid w-80 gap-y-4">
                    <input 
                        type="text" 
                        placeholder="Description" 
                        required 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                        className="border p-2"
                    />
                    <input 
                        type="number" 
                        placeholder="Amount" 
                        required 
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)} 
                        className="border p-2"
                    />
                    <label htmlFor="expense" className="flex gap-x-2 text-lg font-semibold">
                        <input 
                            type="radio" 
                            id="expense" 
                            value="expense" 
                            checked={transactionType === "expense"}
                            onChange={(e) => setTransactionType(e.target.value)} 
                        />
                        Expense
                    </label>
                    <label htmlFor="income" className="flex gap-x-2 text-lg font-semibold">
                        <input 
                            type="radio" 
                            id="income" 
                            value="income" 
                            checked={transactionType === "income"}
                            onChange={(e) => setTransactionType(e.target.value)} 
                        />
                        Income
                    </label>

                    <button type="submit" className="border border-[#333] px-6 py-2">Add Transaction</button>
                </form>
            </div>

            

            <div className="border border-[#333] mt-10 p-4">
                <h3 className="text-2xl mb-4 font-semibold">Transactions</h3>
                <ul className="grid gap-y-2">
                    {transactions.map((transaction) => {
                        const {description, transactionAmount, transactionType} = transaction;

                        return (
                            <li>
                                <h4 className="font-medium">{description}</h4>
                                <p>$ {transactionAmount} - <label className={transactionType === "expense" ? "text-[red]" : "text-[green]"}>{transactionType}</label></p>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </div>
    </>
  )
}

export default ExpenseTracker