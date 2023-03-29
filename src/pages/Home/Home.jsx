import React, { useEffect, useState } from 'react';

const accountHoldersMock = [
    {
        id: 1,
        firstName: 'Test',
        lastName: 'User',
    },
    {
        id: 2,
        firstName: 'Second',
        lastName: 'User',
    },
];

const Home = () => {
    const [accountHolders, setAccountHolders] = useState([]);

    useEffect(() => {
        setAccountHolders(accountHoldersMock);
    }, []);

    return (
        <div className="home-page">
            <h1>Welcome to Digital Accounts!</h1>
            <h2>Account Holders</h2>
            <ul>
                {accountHolders.length > 0 &&
                    accountHolders.map((accountHolder) => (
                        <li key={accountHolder.id}>
                            {accountHolder.firstName} {accountHolder.lastName}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Home;
