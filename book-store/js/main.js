// ===== Earning Supporters - Book Data =====
// Replace the WhatsApp number below with the real one

const WHATSAPP_NUMBER = "+12294070741"; // ← CHANGE THIS to the real number (no + sign)

const books = [
    {
        id: 1,
        title: "$100 will grant you $5000 Check",
        author: "Earning Supporters",
        price: "$100",
        priceRaw: 100,
        description: "A digital check that allows you to receive $5000 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
        cover: "./assets/images/$5000.png",
        coverFallback: "https://picsum.photos/seed/architect/400/600"
    },
    {
        id: 2,
        title: "$165 will grant you $8,250 Check",
        author: "Earning Supporters",
        price: "$165",
        priceRaw: 165,
        description: "A digital check that allows you to receive $8,250 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
        cover: "./assets/images/$8250.jpeg",
        coverFallback: "https://picsum.photos/seed/kingdom/400/600"
    },
    {
        id: 3,
        title: "$200 will grant you $10,000 Check",
        author: "Earning Supporters",
        price: "$200",
        priceRaw: 200,
        description: "A digital check that allows you to receive $10,000 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
        cover: "./assets/images/$10000.jpeg",
        coverFallback: "https://picsum.photos/seed/digital/400/600"
    },
    {
        id: 4,
        title: "$250 will grant you $12,500 Check",
        author: "Earning Supporters",
        price: "$250",
        priceRaw: 250,
        description: "A digital check that allows you to receive $12,500 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
        cover: "./assets/images/$12500.jpeg",
        coverFallback: "https://picsum.photos/seed/dust/400/600"
    },
    {
        id: 5,
        title: "$300 will grant you $15,000 Check",
        author: "Earning Supporters",
        price: "$300",
        priceRaw: 300,
        description: "A digital check that allows you to receive $15,000 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
        cover: "./assets/images/$15000.jpeg",
        coverFallback: "https://picsum.photos/seed/algorithm/400/600"
    },
    {
        id: 6,
        title: "$400 will grant you $20,000 Check",
        author: "Earning Supporters",
        price: "$400",
        priceRaw: 400,
        description: "A digital check that allows you to receive $20,000 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
        cover: "./assets/images/$20000.jpeg",
        coverFallback: "https://picsum.photos/seed/soil/400/600"
    },
    {
        id: 7,
        title: "$500 will grant you $25,000 Check",
        author: "Earning Supporters",
        price: "$500",
        priceRaw: 500,
        description: "A digital check that allows you to receive $25,000 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
        cover: "./assets/images/$25000.jpeg",
        coverFallback: "https://picsum.photos/seed/neon/400/600"
    },
    {
        id: 8,
        title: "$600 will grant you $30,000 Check",
        author: "Earning Supporters",
        price: "$600",
        priceRaw: 600,
        description: "A digital check that allows you to receive $30,000 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
        cover: "./assets/images/$30000.jpeg",
        coverFallback: "https://picsum.photos/seed/map/400/600"
    },
    // {
    //     id: 9,
    //     title: "$700 will grant you $35,000 Check",
    //     author: "Earning Supporters",
    //     price: "$700",
    //     priceRaw: 700,
    //     description: "A digital check that allows you to receive $35,000 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
    //     cover: "assets/images/book9.jpg",
    //     coverFallback: "https://picsum.photos/seed/roots/400/600"
    // },
    // {
    //     id: 10,
    //     title: "$800 will grant you $40,000 Check",
    //     author: "Earning Supporters",
    //     price: "$800",
    //     priceRaw: 800,
    //     description: "A digital check that allows you to receive $40,000 instantly. This is a secure and verified digital check for financial transactions. Perfect for those looking to boost their income quickly and safely.",
    //     cover: "assets/images/book10.jpg",
    //     coverFallback: "https://picsum.photos/seed/quantum/400/600"
    // }
];

// Render books on homepage
function renderBooks() {
    const grid = document.getElementById('books-grid');
    if (!grid) return;

    grid.innerHTML = books.map(book => `
        <a href="book-details.html?id=${book.id}" class="book-card">
            <img 
                src="${book.cover}" 
                alt="${book.title}" 
                class="book-cover"
                onerror="this.src='${book.coverFallback}'"
            >
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <p class="price">${book.price}</p>
            </div>
        </a>
    `).join('');
}

// Load book details page
function loadBookDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const book = books.find(b => b.id === id);

    if (!book) {
        document.getElementById('details-content').innerHTML = `
            <h1>Book not found</h1>
            <p><a href="index.html" class="btn btn-primary">Back to Store</a></p>
        `;
        return;
    }

    // Update page title
    document.title = `${book.title} | Earning Supporters`;

    // Cover
    const coverImg = document.getElementById('book-cover');
    coverImg.src = book.cover;
    coverImg.onerror = () => { coverImg.src = book.coverFallback; };
    coverImg.alt = book.title;

    // Content
    document.getElementById('book-title').textContent = book.title;
    document.getElementById('book-author').textContent = `by ${book.author}`;
    document.getElementById('book-price').textContent = book.price;
    document.getElementById('book-description').textContent = book.description;

    // WhatsApp Buy button
    const message = encodeURIComponent(
        `Hello Admin,\n\nI want to buy the book:\n📖 *${book.title}*\n👤 Author: ${book.author}\n💰 Price: ${book.price}\n\nPlease let me know how to complete the payment and get full access.`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    document.getElementById('buy-btn').href = whatsappUrl;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('books-grid')) {
        renderBooks();
    }
    if (document.getElementById('details-content')) {
        loadBookDetails();
    }
});