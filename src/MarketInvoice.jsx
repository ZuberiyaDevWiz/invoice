import "./App1.css";


const Invoice2 = () => {
    const invoiceData = {
        number: 1234567899,
        date: "10/10/2022",
        referenceNumber: "a35dda670aae9f4fc38681a056de7ca0843f3bc1da1940830731e54d5cdc4f29"
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
      const bankDetail = {
        bankName : "SBI Bank",
        accountHolder : "Irbaz Ahmed",
        accountNumber : "32455567291890",
        IFSCNumber : "SBI0022446",
        panNumber : "AACCDD0099",
        cinNumber : "U8483900286PTCF5674",
        gstInNumber : "29AACCTTRR87544DSUZ" 
      }
    return (
        <section className="invoice-2">
         <div className="tax-invoice">
            <h3>Tax Invoice</h3>
         </div>
         <div className="logo">
          <img src="/images/logo.png" alt="cartibuy logo" />
        </div>
        <div className="container">
        <div className="left-content">
        <div className="company">
            <p className="company-name">CARTIBUY PRIVATE LIMITED</p>
            <p className="company-address">No. 10 Second Floor, Mosque Road, Frazer Town, Pulikeshi Nagar, Bengaluru, Karnataka-500006</p>
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
          <div class="invoice-number">
            <h5>Invoice Date:</h5>
            <p>{invoiceData.referenceNumber}</p>
          </div>
        </div>
        </div>
        <div className="right-content">
        <div class="customer">
            <h4 class="seller">Bill To:</h4>
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
        </div>
        </div>
        <table>
        <tr>
          <th class="data-one">S.No.</th>
          <th class="data-two">Item</th>
          {/* <th class="data-three"></th> */}
          <th class="data-four">HSN</th>
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
          {/* <td class="row-2-td">1</td> */}
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
        <tr class="row-2">
          <td class="row-2-td">2</td>
          <td class="row-2-td" >
            Acer One 10 Tab 4 GB RAM 64GB ROM 10.1 Inch (25.6 cm) with Wi-Fi+4G
            Full HD Android Tablet (Rear: Rose Gold, Front: White) | B09QSYTYR2
            ( OILACERTABT8129L ) HSN:84713010
          </td>
          {/* <td class="row-2-td">1</td> */}
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
        <tr class="row-2">
          <td class="row-2-td">3</td>
          <td class="row-2-td" >
            Acer One 10 Tab 4 GB RAM 64GB ROM 10.1 Inch (25.6 cm) with Wi-Fi+4G
            Full HD Android Tablet (Rear: Rose Gold, Front: White) | B09QSYTYR2
            ( OILACERTABT8129L ) HSN:84713010
          </td>
          {/* <td class="row-2-td">1</td> */}
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
          {/* <td className="total-2"></td> */}
          <td className="total-2"></td>
          <td className="total-2"></td>
          <td className="total-2"></td>
          <td class="totals">₹15,990.00</td>
        </tr>
      </table>
      <div className="bank-details">
        <div className="bank">
        <h3>Name of the Bank:</h3>
        <h4>{bankDetail.bankName}</h4>
        </div>
        <div className="bank">
        <h3>Name:</h3>
        <h4>{bankDetail.accountHolder}</h4>
        </div>
        <div className="bank">
        <h3>A/C No.:</h3>
        <h4>{bankDetail.accountNumber}</h4>
        </div>
        <div className="bank">
        <h3>IFSC Number</h3>
        <h4>{bankDetail.IFSCNumber}</h4>
        </div>
        <div className="bank">
        <h3>PAN Number</h3>
        <h4>{bankDetail.panNumber}</h4>
        </div>
        <div className="bank">
        <h3>CIN Number</h3>
        <h4>{bankDetail.cinNumber}</h4>
        </div>
        <div className="bank">
        <h3>GST Number</h3>
        <h4>{bankDetail.gstInNumber}</h4>
        </div>
      </div>
    </section>
    )
}

export default Invoice2