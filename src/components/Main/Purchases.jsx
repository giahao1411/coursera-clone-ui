import React from "react";
import { NavLink } from "react-router-dom";

const purchases = [
    {
        purchaseDate: "11/11/2023",
        purchaseNumber: "123123123",
        name: "Machine learning",
        price: "$20.00",
    },
    {
        purchaseDate: "11/14/2023",
        purchaseNumber: "113113113",
        name: "Software Engineering",
        price: "$17.99",
    },
    {
        purchaseDate: "2/20/2024",
        purchaseNumber: "456456456",
        name: "Data Analytics",
        price: "$15.49",
    },
    {
        purchaseDate: "4/1/2024",
        purchaseNumber: "111111111",
        name: "Advanced React",
        price: "$19.99",
    },
    {
        purchaseDate: "5/10/2024",
        purchaseNumber: "222222222",
        name: "Python for Beginners",
        price: "$12.50",
    },
];

const Purchases = () => {
    return (
        <main className="max-w-7xl mx-auto px-6 mb-20 pb-10">
            <div className="my-10">
                <h1 className="text-3xl font-semibold mb-10">Purchases</h1>
                <h3 className="text-xl font-semibold">Purchase history</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2 text-center">
                                Purchase date
                            </th>
                            <th className="border px-4 py-2 text-center">
                                Purchase number
                            </th>
                            <th className="border px-4 py-2 text-center">
                                Name
                            </th>
                            <th className="border px-4 py-2 text-center">
                                Price
                            </th>
                            <th className="border px-4 py-2 text-center">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchases.map((purchase, index) => (
                            <tr
                                key={index}
                                className="bg-gray-50 hover:bg-gray-100"
                            >
                                <td className="border px-4 py-2 text-center">
                                    {purchase.purchaseDate}
                                </td>
                                <td className="border px-4 py-2 text-center">
                                    {purchase.purchaseNumber}
                                </td>
                                <td className="border px-4 py-2 text-center">
                                    {purchase.name}
                                </td>
                                <td className="border px-4 py-2 text-center">
                                    {purchase.price}
                                </td>
                                <td className="border px-4 py-2 text-center">
                                    <NavLink
                                        to="/course-detail"
                                        className="text-blue-500 hover:underline"
                                    >
                                        View course
                                    </NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Purchases;
