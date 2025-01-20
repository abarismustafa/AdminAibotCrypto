import React from 'react';

const PayoutStatement = () => {
    const handlePrint = () => {
        // window.print();
    };

    return (
        <div>
            <style>
                {`
          .payout-container {
            font-family: Arial, sans-serif;
            padding: 30px;
            border: 2px solid #ddd;
            max-width: 1000px;
            margin: 20px auto;
            background: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo {
            width: 150px;
            margin-bottom: 15px;
          }
          .header h1 {
            font-size: 24px;
            color: #333;
          }
          .details p,
          .contact p {
            margin: 5px 0;
            font-size: 14px;
            color: #555;
          }
          .details p strong,
          .contact p strong {
            color: #333;
          }
          .payout-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          .payout-table th {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            font-size: 14px;
            text-align: center;
            border: 1px solid #ddd;
          }
          .payout-table td {
            border: 1px solid #ddd;
            padding: 10px;
            font-size: 14px;
            text-align: center;
          }
          .payout-table tbody tr:nth-child(odd) {
            background-color: #f3f3f3;
          }
          .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #555;
          }
          .footer p {
            margin: 8px 0;
          }
          .footer strong {
            display: block;
            margin-top: 15px;
            font-size: 16px;
            color: #333;
          }
          .print-button {
            margin-top: 30px;
            text-align: center;
          }
          .print-button button {
            padding: 12px 25px;
            font-size: 16px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
          }
          .print-button button:hover {
            background-color: #0056b3;
          }
          @media print {
            .print-button {
              display: none;
            }
            .payout-container {
              border: none;
              box-shadow: none;
            }
          }
        `}
            </style>
            <div className="payout-container">

                <div className="details d-flex">
                    <p>Company Name: <strong>SkyOverltd</strong></p>
                    <p>Dist. ID: <strong>S000001</strong></p>
                    <p>Payout Date: <strong>23/08/2021</strong></p>
                    <p>Payout Period: <strong>23/08/2021</strong> to <strong>23/08/2021</strong></p>
                    <p>Date Issued: <strong>20/01/2025</strong></p>
                </div>
                <div className="contact">
                    <p>Contact No: <strong>8766298937</strong></p>
                </div>
                <table className="payout-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>B/F</th>
                            <th>NEW</th>
                            <th>TOTAL</th>
                            <th>PAID PV</th>
                            <th>C/F</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>LEFT</td>
                            <td>0</td>
                            <td>1,593,372.00</td>
                            <td>1,593,372</td>
                            <td>500.00</td>
                            <td>1,592,872</td>
                        </tr>
                        <tr>
                            <td>RIGHT</td>
                            <td>0</td>
                            <td>500.00</td>
                            <td>500</td>
                            <td>500.00</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex">
                    <div style={{ padding: '10px', border: '1px solid #ddd' }}>
                        <p>* Payout will not be released without PAN Number.</p>
                        <p>Matching Income: <strong>75.00</strong></p>
                        <p>Sponsor Matching Income: <strong>2,377.50</strong></p>
                    </div>
                    <div style={{ padding: '10px', border: '1px solid #ddd' }}>
                        <p>SingleLine Income: <strong>0.00</strong></p>
                        <p>Total Gross Incentives: <strong>2,452.50</strong></p>
                        <p>T.D.S (@5%): <strong>122.63</strong></p>
                    </div>
                    <div style={{ padding: '10px', border: '1px solid #ddd' }}>
                        <p>Service Charge (@10%): <strong>245.25</strong></p>
                        <p>Net Payable Incentive: <strong>2,085.00</strong></p>
                        <strong>Amount in Words: Two Thousand and Eighty Five Only</strong>
                    </div>
                </div>
                <div className="print-button">
                    <button onClick={handlePrint}>Print</button>
                </div>
            </div>
        </div>
    );
};

export default PayoutStatement;
