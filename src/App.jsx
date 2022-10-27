import "./App.css";

const Invoice = () => {
  const invoiceData = {
    number: 1234567899,
    date: "10/10/2022",
  };
  const billingAddress = {
    firstName: "Irbaz",
    lastName: "Ahmed",
    address: "10, second floor, front office",
    street: "mosque road, frazer town,",
    city: "Bengaluru,",
    state: "Karnataka-",
    postalCode: 500006,
    country: "India.",
  };
  const shippingAddress = {
    firstName: "Irbaz",
    lastName: "Ahmed",
    address: "10, second floor, front office",
    street: "mosque road, frazer town,",
    city: "Bengaluru,",
    state: "Karnataka-",
    postalCode: 500006,
    country: "India.",
  };
  const sellerAddress = {
    soldBy: "Irbaz Industries Ltd.",
    address: "10, second floor, front office",
    street: "mosque road, frazer town,",
    city: "Bengaluru,",
    state: "Karnataka-",
    postalCode: 500006,
    country: "India.",
  };
  const sellerGST = {
    number: "27AAACO0471G1ZP",
  };
  const panNumber = {
    number: "AAACO0471G",
  };
  const orderNumber = {
    number: "405 - 8327402 - 5382744",
    date: "10/10/2022",
  };
  const totalAmount = {
    amountInNumbers : "Fifteen Thousand Nine Hundred Ninety only"
  }
  const sellerInformation = {
    companyName: "For Irbaz Industries Ltd.",
    signImage: "/images/seller_sign.jpeg"
  }
  return (

    <section>
      
      <div class="logo">
        <div>
          <img src="/images/logo.png" alt="cartibuy logo" />
        </div>
        <div>
        <h2>Tax Invoice</h2>
      </div>
        <div class="invoice">
          <div class="invoice-number">
            <h5>Invoice Number:</h5>
            <p>{invoiceData.number}</p>
          </div>
          <div class="invoice-number">
            <h5>Invoice Date:</h5>
            <p>{invoiceData.date}</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div>
          <div class="customer">
            <h4>Billing Address</h4>
            <div class="billing-address">
              <p className="customer-name">
                {billingAddress.firstName}&nbsp;
                {billingAddress.lastName}
              </p>
              <p> {billingAddress.address}</p>
              <p>{billingAddress.street}</p>
              <p>
                {billingAddress.city}&nbsp;
                {billingAddress.state}
                {billingAddress.postalCode}
              </p>
              <p></p>
              <p> {billingAddress.country}</p>
            </div>
          </div>
          <div class="customer">
            <h4>Delivery Address</h4>
            <div class="billing-address">
              <p className="customer-name">
                {shippingAddress.firstName}&nbsp;
                {shippingAddress.lastName}
              </p>
              <p> {shippingAddress.address}</p>
              <p>{shippingAddress.street}</p>
              <p>
                {shippingAddress.city}&nbsp;
                {shippingAddress.state}
                {shippingAddress.postalCode}
              </p>
              <p></p>
              <p> {shippingAddress.country}</p>
            </div>
          </div>
        </div>
        <div class="seller-detail">
          <div class="customer1">
            <h4 class="seller">Seller Detail</h4>
            <div class="seller-address">
              <p className="customer-name">{sellerAddress.soldBy}&nbsp;</p>
              <p> {sellerAddress.address}</p>
              <p>{sellerAddress.street}</p>
              <p>
                {sellerAddress.city}&nbsp;
                {sellerAddress.state}
                {sellerAddress.postalCode}
              </p>
              <p></p>
              <p> {sellerAddress.country}</p>
            </div>
          </div>
          <div class="gst">
            <div class="gst-1">
            <h3>GST Registration No:</h3>
            <p>{sellerGST.number}</p>
            </div>
            <div class="gst-1">
              <h3>PAN No:</h3>
              <p>{panNumber.number}</p>
            </div>
          </div>
          <div class="order">
            <div class="invoice-number">
              <h5>Order Number:</h5>
              <p>{orderNumber.number}</p>
            </div>
            <div class="invoice-number">
              <h5>Order Date:</h5>
              <p>{orderNumber.date}</p>
            </div>
          </div>
        </div>
      </div>
      <table>
        <tr>
          <th class="data-one">S.No.</th>
          <th class="data-two">Description</th>
          <th class="data-three">Quantity</th>
          <th class="data-four">Discount</th>
          <th class="data-five">Net Amount</th>
          <th class="data-six">Tax</th>
          <th class="data-seven">Total</th>
        </tr>
        <tr class="row-2">
          <td class="row-2-td">1</td>
          <td class="row-2-td" >
            Acer One 10 Tab 4 GB RAM 64GB ROM 10.1 Inch (25.6 cm) with Wi-Fi+4G
            Full HD Android Tablet (Rear: Rose Gold, Front: White) | B09QSYTYR2
            ( OILACERTABT8129L ) HSN:84713010
          </td>
          <td class="row-2-td">1</td>
          <td class="row-2-td">₹0.00</td>
          <td class="row-2-td">₹13,550.85</td>
          <td class="row-2-td">
            18%
            <br />
            IGST
            <br />
            ₹2,439.15
          </td>
          <td class="row-2-td">₹15,990.00</td>
        </tr>
        <tr class="row-3">
          <td class="total">TOTAL:</td>
          <td className="total-2"></td>
          <td className="total-2"></td>
          <td className="total-2"></td>
          <td className="total-2"></td>
          <td className="total-2"></td>
          <td class="totals">₹15,990.00</td>
        </tr>
      </table>
      <div className="amount">
        <tr>Amount in Words:</tr>
        <tr>{totalAmount.amountInNumbers}</tr>
      </div>
      <div className="signature">
        <tr>{sellerInformation.companyName}</tr>
        <img src={sellerInformation.signImage} alt="seller signature"/>
        <tr>Authorized Signatory</tr>
      </div>   
      <h4 className="tax">Whether tax is payable under reverse charge - No</h4>
    </section>
  );
};
export default Invoice;

