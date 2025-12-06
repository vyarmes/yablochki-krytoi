fjskfkwsekfw
#<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yablochki</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
    <nav class="nav">
        <div class="logo">YABLOCHKI</div>
    </nav>

    <div class="hero">
        <h1>Потужні відеокарти для потужних геймерів та професіоналів</h1>
        <p>Ми пропонуємо найпотужніші відеокарти на ринку. Якість, швидкість, потужність.</p>
    </div>

    </header>
    <section class="cards-container" id="cards-container"></section>
    <footer class="footer">
        <p>© 2025 YABLOCHKI</p>
        <p>Контакти: info@yablochki.com</p>
    </footer>
</body>
<script src="script.js"></script>
</html>
#* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background: #0e0e0e;
    color: #eaeaea;
}

.nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 28px;
    font-weight: 700;
    color: #00e5ff;
    letter-spacing: 2px;
}

header {
    background: url('https://images.unsplash.com/photo-1593642634524-b40b5baae6aa?auto=format&fit=crop&w=1600&q=80')
        center/cover no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.hero {
    margin-top: auto;
    padding: 70px 40px;
    max-width: 650px;
}

.hero h1 {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.2;
}

.hero p {
    margin-top: 20px;
    font-size: 20px;
    opacity: 0.85;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 60px 20px;
    background: #111;
}

.card {
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 10px;
    width: 300px;
    padding: 20px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 229, 255, 0.4);
}

.card img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
}

.card h3 {
    color: #00e5ff;
    margin-bottom: 10px;
}

.card p {
    font-size: 16px;
    margin-bottom: 15px;
}

.card .btn {
    display: inline-block;
    padding: 10px 20px;
    background: #00e5ff;
    color: #000;
    border-radius: 6px;
    font-weight: 700;
    text-decoration: none;
    transition: 0.2s;
}

.card .btn:hover {
    background: #00b3cc;
}

.footer {
    background: #111;
    color: #777;
    text-align: center;
    padding: 30px 20px;
    margin-top: 40px;
    border-top: 1px solid #333;
}

.footer p {
    margin: 5px 0;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 32px;
    }

    .hero p {
        font-size: 16px;
    }

    .nav {
        padding: 15px 20px;
    }

    .logo {
        font-size: 22px;
    }

    .cards-container {
        gap: 15px;
    }

    .card {
        width: 90%;
    }
}
