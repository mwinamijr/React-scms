import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Breadcrumb, Table } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { receiptDetails } from "../../features/finance/financeSlice"; // Update to import from financeSlice

function ReceiptsDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Access receipt details from the finance slice
  const { loading, error, receipt } = useSelector(
    (state) => state.finance.receiptDetails
  );

  useEffect(() => {
    dispatch(receiptDetails(id)); // Replace with the appropriate thunk from the slice
  }, [dispatch, id]);

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          <Link to="/finance/receipts/">Receipts</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Details</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="p-4 p-md-5 mb-4 text-black rounded bg-light">
            <Card>
              <Card.Header className="text-center">
                <div className="receipt-bg">
                  <h3>
                    Hayatul Islamiya Secondary <br />
                    P.O. Box 507, Babati - Manyara; Phone: 0788 030052, 0752
                    506523 <br />
                    A/C Number:- NMB: , NBC:
                  </h3>
                </div>
              </Card.Header>
              <Card.Body className="text-left col-md-8">
                <Card.Title className="pb-3">PAYMENT RECEIPT</Card.Title>
                <Table>
                  <tbody>
                    <tr>
                      <td>Date</td>
                      <td>{receipt.date}</td>
                      <td>Receipt number</td>
                      <td>{receipt.receipt_no}</td>
                    </tr>
                    <tr>
                      <td>Payer</td>
                      <td>{receipt.payer}</td>
                    </tr>
                    <tr>
                      <td>Student</td>
                      <td>{receipt.student}</td>
                    </tr>
                    <tr>
                      <td>Paid for</td>
                      <td>{receipt.paid_for}</td>
                    </tr>
                    <tr>
                      <td>Amount</td>
                      <td>{receipt.amount}</td>
                    </tr>
                    <tr>
                      <td>Received by</td>
                      <td>{receipt.received_by}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReceiptsDetails;
