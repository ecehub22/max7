:root {
  --primary: #22d3ee;
  --primary-glow: rgba(34, 211, 238, 0.3);
  --bg-dark: #020617;
  --card-bg: rgba(255, 255, 255, 0.03);
  --border-color: rgba(255, 255, 255, 0.1);
  --text-main: #ffffff;
  --text-muted: #c5deff;
  --font-main: 'Plus Jakarta Sans', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-main);
}

body {
  background: var(--bg-dark);
  color: var(--text-main);
}

canvas {
  position: fixed;
  inset: 0;
  z-index: -1;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 8%;
}

.logo span { color: var(--primary); }

nav a {
  margin: 0 14px;
  color: var(--text-main);
  text-decoration: none;
}

/* HERO */
.hero {
  text-align: center;
  padding: 120px 10%;
}

.hero-actions {
  margin-top: 30px;
}

/* SECTIONS */
.section {
  padding: 80px 10%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

/* TEXT */
h1, h2, h3 { font-weight: 800; }
.muted { color: var(--text-muted); }

.gradient-text {
  background: linear-gradient(135deg, #fff 30%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.underline {
  width: 60px;
  height: 4px;
  background: var(--primary);
  margin: 14px 0 30px;
  border-radius: 4px;
}

/* BUTTONS */
button {
  padding: 14px 30px;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary);
  border: none;
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
}

/* GLASS CARD */
.glass-card {
  position: relative;
  padding: 28px;
  border-radius: 16px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.glass-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    300px circle at var(--mouse-x) var(--mouse-y),
    var(--primary-glow),
    transparent 40%
  );
  opacity: 0;
}

.glass-card:hover::before {
  opacity: 1;
}

/* PARTNER */
.partner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.partner-right form {
  display: flex;
  flex-direction: column;
}

.partner-right input,
.partner-right select {
  margin-bottom: 14px;
  padding: 12px;
}

/* FOOTER */
.footer {
  text-align: center;
  padding: 40px;
  border-top: 1px solid var(--border-color);
}

/* REVEAL */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}