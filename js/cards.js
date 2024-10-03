const productLevels = ["Basic", "Standard", "Silver", "Classic", "Gold", "Platinum", "Premium"];
const productType = ["Prepaid", "Debit", "Credit"];
const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "India",
    "South Africa",
    "Mexico",
    "Singapore",
    "Hong Kong",
    "South Korea",
    "Thailand",
    "Taiwan",
    "Italy",
    "Spain",
    "Netherlands",
    "Argentina"
];

const banks = [
    // United States
    "Bank of America", "JPMorgan Chase", "Citibank", "Wells Fargo", "U.S. Bank",
    "PNC Bank", "Capital One", "TD Bank", "American Express Bank", "Regions Bank",
    // Canada
    "Royal Bank of Canada (RBC)", "Toronto-Dominion Bank (TD)", "Bank of Nova Scotia (Scotiabank)",
    "Bank of Montreal (BMO)", "Canadian Imperial Bank of Commerce (CIBC)", "National Bank of Canada",
    "HSBC Canada", "Laurentian Bank of Canada", "ATB Financial", "Desjardins Group",
    // United Kingdom
    "HSBC UK", "Lloyds Bank", "Barclays", "Royal Bank of Scotland (RBS)", "NatWest",
    "Santander UK", "TSB Bank", "Nationwide Building Society", "Virgin Money", "Metro Bank",
    // Australia
    "Commonwealth Bank of Australia", "Westpac Banking Corporation", "ANZ Banking Group",
    "National Australia Bank (NAB)", "Macquarie Bank", "Bank of Queensland", "Bendigo Bank",
    "Suncorp Bank", "ING Australia", "Heritage Bank",
    // Germany
    "Deutsche Bank", "Commerzbank", "KfW Bank", "DZ Bank", "Unicredit Bank (HypoVereinsbank)",
    "Landesbank Baden-Württemberg (LBBW)", "NordLB", "DKB (Deutsche Kreditbank)", "ING-DiBa", "Targobank",
    // France
    "BNP Paribas", "Société Générale", "Crédit Agricole", "Crédit Mutuel", "La Banque Postale",
    "Banque Populaire", "HSBC France", "Caisse d'Épargne", "AXA Banque", "LCL (Le Crédit Lyonnais)",
    // Japan
    "Mitsubishi UFJ Financial Group (MUFG)", "Sumitomo Mitsui Banking Corporation", "Mizuho Financial Group",
    "Resona Bank", "Japan Post Bank", "Shinsei Bank", "Citibank Japan", "Acom",
    "SBI Sumishin Net Bank", "Seven Bank",
    // Brazil
    "Banco do Brasil", "Itaú Unibanco", "Bradesco", "Santander Brasil", "Caixa Econômica Federal",
    "BTG Pactual", "Banco Safra", "Banrisul", "Banco Votorantim", "B3 (São Paulo Stock Exchange)",
    // India
    "State Bank of India (SBI)", "HDFC Bank", "ICICI Bank", "Axis Bank", "Punjab National Bank (PNB)",
    "Bank of Baroda", "Kotak Mahindra Bank", "Canara Bank", "Union Bank of India", "Yes Bank",
    // South Africa
    "Standard Bank", "Absa Group", "Nedbank", "FirstRand Bank", "Capitec Bank",
    "Investec Bank", "Sasfin Bank", "African Bank", "Mercantile Bank", "Bank of Athens",
    // Mexico
    "BBVA Mexico", "Citibanamex", "Santander Mexico", "HSBC Mexico", "Banorte",
    "Scotiabank Inverlat", "Banco del Bajío", "Banco Azteca", "Banco Santander", "Banregio",
    // Singapore
    "DBS Bank", "OCBC Bank", "United Overseas Bank (UOB)", "Citibank Singapore", "HSBC Singapore",
    "Standard Chartered Bank", "Maybank Singapore", "Bank of China Singapore", "CIMB Bank Singapore", "RHB Bank Singapore",
    // Hong Kong
    "HSBC Hong Kong", "Standard Chartered Bank Hong Kong", "Bank of China Hong Kong", "Hang Seng Bank",
    "DBS Bank (Hong Kong)", "China CITIC Bank International", "Wing Hang Bank", "Chiyu Banking Corporation",
    "Bank of East Asia", "Shanghai Commercial Bank",
    // South Korea
    "Kookmin Bank", "Shinhan Bank", "Woori Bank", "Hana Bank", "NH Nonghyup Bank",
    "Korea Development Bank", "Industrial Bank of Korea", "Citibank Korea", "SC First Bank", "Busan Bank",
    // Thailand
    "Bangkok Bank", "Kasikornbank", "Krungthai Bank", "Siam Commercial Bank (SCB)", "TMBThanachart Bank",
    "Government Savings Bank", "Bangkok Bank of Commerce", "UOB Thailand", "Kiatnakin Bank", "CIMB Thai Bank",
    // Taiwan
    "Taiwan Cooperative Bank", "CTBC Bank", "E.SUN Commercial Bank", "Hua Nan Commercial Bank", "Mega International Commercial Bank",
    "Land Bank of Taiwan", "First Commercial Bank", "Taipei Fubon Bank", "Bank of Taiwan", "Cathay United Bank",
    // Italy
    "UniCredit", "Intesa Sanpaolo", "Banca Nazionale del Lavoro (BNL)", "Cassa Depositi e Prestiti",
    "Banco BPM", "Mediobanca", "Credito Emiliano (Credem)", "UBI Banca", "Banca Popolare", "Banca Carige",
    // Spain
    "Banco Santander", "BBVA", "CaixaBank", "Banco Sabadell", "Bankia (merged with CaixaBank)",
    "Banco de Crédito Social Cooperativo", "Unicaja Banco", "Abanca", "Kutxabank", "Ibercaja Banco",
    // Netherlands
    "ING Bank", "Rabobank", "ABN AMRO", "SNS Bank", "Van Lanschot Kempen",
    "Triodos Bank", "Friesland Bank", "ASN Bank", "NIBC Bank", "Deutsche Bank Netherlands",
    // Argentina
    "Banco de la Nación Argentina", "Banco Santander Río", "BBVA Banco Francés", "Banco Provincia",
    "HSBC Argentina", "Citibank Argentina", "Banco Macro", "Banco Patagonia", "Banco de la Ciudad de Buenos Aires", "Banco Supervielle"
];

const prices = [10.99, 15.99, 25.99, 5.99, 30.99];

// Function to generate a random credit card number
function generateCreditCardNumber() {
    const cardTypes = [
        { prefix: "4", length: 16, type: "Visa" },
        { prefix: "51", length: 16, type: "MasterCard" },
        { prefix: "52", length: 16, type: "MasterCard" },
        { prefix: "53", length: 16, type: "MasterCard" },
        { prefix: "54", length: 16, type: "MasterCard" },
        { prefix: "55", length: 16, type: "MasterCard" },
        { prefix: "34", length: 15, type: "American Express" },
        { prefix: "37", length: 15, type: "American Express" },
        { prefix: "6011", length: 16, type: "Discover" },
        { prefix: "622126", length: 16, type: "Discover" },
        { prefix: "622925", length: 16, type: "Discover" },
        { prefix: "644", length: 16, type: "Discover" },
        { prefix: "645", length: 16, type: "Discover" },
        { prefix: "3528", length: 16, type: "JCB" },
        { prefix: "3589", length: 16, type: "JCB" },
    ];

    const cardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    let cardNumber = cardType.prefix;

    while (cardNumber.length < cardType.length - 2) {
        cardNumber += Math.floor(Math.random() * 10);
    }

    cardNumber += Math.floor(Math.random() * 10);
    cardNumber += Math.floor(Math.random() * 10);

    // Mask the middle 8 digits
    const maskedNumber = `${cardNumber.slice(0, 6)}******${cardNumber.slice(-2)}`;

    return { number: maskedNumber, type: cardType.type };
}

// Function to generate a random product
function generateRandomProduct() {
    const { number, type } = generateCreditCardNumber();
    const level = productLevels[Math.floor(Math.random() * productLevels.length)];
    const classType = productType[Math.floor(Math.random() * productType.length)];
    const cvv = Math.floor(Math.random() * 900) + 100; // Random CVV (3 digits)

    // Generate an expiration date 6 months to 10 years ahead
    const currentDate = new Date();
    const minExpirationDate = new Date(currentDate);
    minExpirationDate.setMonth(currentDate.getMonth() + 6); // At least 6 months ahead
    const maxExpirationDate = new Date(currentDate);
    maxExpirationDate.setFullYear(currentDate.getFullYear() + 10); // Up to 10 years ahead

    // Randomly select a date within the range
    const randomExpirationDate = new Date(minExpirationDate.getTime() + Math.random() * (maxExpirationDate.getTime() - minExpirationDate.getTime()));
    const expMonth = String(randomExpirationDate.getMonth() + 1).padStart(2, '0'); // MM
    const expYear = String(randomExpirationDate.getFullYear()).slice(-2); // YY

    const country = countries[Math.floor(Math.random() * countries.length)];
    const bank = banks[Math.floor(Math.random() * banks.length)];

    // Price generation based on level
    let basePrice;
    switch (level) {
        case "Basic":
            basePrice = 20;
            break;
        case "Standard":
            basePrice = 40;
            break;
        case "Silver":
            basePrice = 60;
            break;
        case "Classic":
            basePrice = 80;
            break;
        case "Gold":
            basePrice = 100;
            break;
        case "Platinum":
            basePrice = 120;
            break;
        case "Premium":
            basePrice = 150;
            break;
        default:
            basePrice = 20; // Fallback
    }

    const price = parseFloat((Math.random() * (150 - basePrice) + basePrice).toFixed(2)); // Ensure price is a number

    return {
        number,
        type,
        level,
        classType,
        cvv,
        expDate: `${expMonth}/${expYear}`,
        country,
        bank,
        price, // This should now be a number
    };
}

// Function to handle checkbox changes
function handleCheckboxChange(event) {
    const cartCountElement = document.getElementById('cart-number');
    
    // Check if the element exists
    if (!cartCountElement) {
        console.error("Element with ID 'cart-number' not found");
        return;
    }

    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

    if (event.target.checked) {
        cartCount += 1; // Increase count
    } else {
        cartCount = Math.max(0, cartCount - 1); // Decrease count but not below 0
    }

    localStorage.setItem('cartCount', cartCount); // Update local storage
    cartCountElement.innerText = cartCount; // Update the displayed cart count
}

// Update the populate function to add event listeners to checkboxes
function populateProductTable() {
    const tableBody = document.getElementById("product-table-body");
    tableBody.innerHTML = ""; // Clear existing rows

    const productCount = Math.floor(Math.random() * (50 - 30 + 1)) + 30; // Random number between 30 and 50

    for (let i = 0; i < productCount; i++) { // Generate random products
        const product = generateRandomProduct();
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="checkbox" onchange="handleCheckboxChange(event)" /></td>
            <td>${product.number}</td>
            <td>${product.type}</td>
            <td>${product.level}</td>
            <td>${product.classType}</td>
            <td>${product.cvv}</td>
            <td>${product.expDate}</td>
            <td>${product.country}</td>
            <td>${product.bank}</td>
            <td>$${product.price.toFixed(2)}</td>
        `;

        tableBody.appendChild(row);
    }
}

// Call the function to populate the table on page load
window.onload = populateProductTable;