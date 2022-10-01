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
  const orderNumber = {
    number: "405 - 8327402 - 5382744",
    date: "10/10/2022",
  };
  return (
    <section>
      <div class="logo">
        <div>
          <img src="/images/logo.png" alt="cartibuy logo" />
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
              <p>
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
            <h4>Billing Address</h4>
            <div class="billing-address">
              <p>
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
          <div class="customer">
            <h4 class="seller">Seller Address</h4>
            <div class="seller-address">
              <p>{sellerAddress.soldBy}&nbsp;</p>
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
            <h3>GST Registration No:</h3>
            <p>{sellerGST.number}</p>
          </div>
          <div class="order">
            <div class="invoice-number">
              <h5>Invoice Number:</h5>
              <p>{orderNumber.number}</p>
            </div>
            <div class="invoice-number">
              <h5>Invoice Date:</h5>
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
        <tr className="w    ">
          <td>1</td>
          <td>
            Acer One 10 Tab 4 GB RAM 64GB ROM 10.1 Inch (25.6 cm) with Wi-Fi+4G
            Full HD Android Tablet (Rear: Rose Gold, Front: White) | B09QSYTYR2
            ( OILACERTABT8129L ) HSN:84713010
          </td>
          <td>1</td>
          <td>₹0.00</td>
          <td>₹13,550.85</td>
          <td>
            18%
            <br />
            IGST
            <br />
            ₹2,439.15
          </td>
          <td>₹15,990.00</td>
        </tr>
      </table>
    </section>
  );
};
export default Invoice;
