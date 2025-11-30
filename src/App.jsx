// src/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// 🔗 Base WhatsApp e Instagram
const BASE_WHATSAPP = "https://wa.me/573196359601";
const INSTAGRAM_URL =
  "https://www.instagram.com/re4lworld1?igsh=MWlreWg4dWlwbWdzdQ==";

// Helper para armar URLs de WhatsApp
const createWhatsAppUrl = (text) =>
  `${BASE_WHATSAPP}?text=${encodeURIComponent(text)}`;

// 👉 NAVBAR (desktop + celular) con enlace Carrito
function NavBar({ cartCount }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const go = (path) => {
    navigate(path);
    setIsOpen(false); // cerrar menú mobile
  };

  return (
    <header className="nav">
      <div
        className="nav-brand"
        onClick={() => go("/")}
        style={{ cursor: "pointer" }}
      >
        Re4lworld
      </div>

      {/* Botón hamburguesa */}
      <button
        className="nav-toggle"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <nav className={`nav-links ${isOpen ? "nav-links--open" : ""}`}>
        <button className="nav-link" onClick={() => go("/ropa")}>
          Ropa
        </button>
        <button className="nav-link" onClick={() => go("/gorras")}>
          Gorras
        </button>
        <button className="nav-link" onClick={() => go("/zapatos")}>
          Zapatos
        </button>
        <button className="nav-link" onClick={() => go("/gallery")}>
          Street Gallery
        </button>
        <button className="nav-link" onClick={() => go("/vapers")}>
          Vapers
        </button>
        <button className="nav-link" onClick={() => go("/carrito")}>
          Carrito{cartCount > 0 ? ` (${cartCount})` : ""}
        </button>
      </nav>

      <a
        href={`${BASE_WHATSAPP}?text=Hola,%20vi%20la%20tienda%20Re4lworld%20y%20quiero%20hablar%20contigo`}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        💬 WhatsApp
      </a>
    </header>
  );
}

// 🏠 HOME
function HomePage() {
  const TITLE = "Re4lworld";
  const frases = [
    "Estilo callejero hecho en Bogotá.",
    "Prendas para quienes viven real.",
    "Sin carrito, directo con el vendedor.",
    "Flow urbano, atención cercana.",
  ];

  const [fraseIndex, setFraseIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setFraseIndex((prev) => (prev + 1) % frases.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <main className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">
          {TITLE.split("").map((c, i) => (
            <span
              key={i}
              className="hero-letter"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              {c}
            </span>
          ))}
        </h1>
        <p className="hero-subtitle">
          Streetwear, gorras y accesorios urbanos.
        </p>
        <p style={{ color: "#9ca3af", marginTop: "0.4rem" }}>
          {frases[fraseIndex]}
        </p>
        <div className="hero-buttons">
          <a
            href={`${BASE_WHATSAPP}?text=Hola,%20vi%20la%20tienda%20Re4lworld%20y%20quiero%20hablar%20contigo`}
            target="_blank"
            className="btn btn-whatsapp"
          >
            💬 WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" className="btn btn-instagram">
            📷 Instagram
          </a>
        </div>
      </div>
    </main>
  );
}

// 📦 Estilos base
const pageBaseStyle = {
  paddingTop: "6rem",
  minHeight: "100vh",
  background: "#020617",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingInline: "1.5rem",
};

const cardStyle = {
  borderRadius: "1rem",
  border: "0.5px solid #1f2937",
  background: "#020617",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.4)",
};

// 🔧 helper para convertir precio "$200.000" → 200000
function parsePrecio(precioTexto) {
  if (!precioTexto) return 0;
  const limpio = precioTexto.replace(/[^\d]/g, "");
  return Number(limpio) || 0;
}

// 🔴 Badge SOLD OUT reutilizable
function SoldBadge() {
  return (
    <div
      style={{
        position: "absolute",
        top: "8px",
        right: "8px",
        background: "#b91c1c",
        color: "#ffffff",
        padding: "4px 10px",
        borderRadius: "4px",
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      SOLD OUT
    </div>
  );
}

// 👕 ROPA
const ropaItems = [
  {
    id: 1,
    nombre: "Indians",
    descr: "Talla única.",
    precio: "$200.000",
    imagen: ["/img/INDIANS.jpg", "/img/INDIANS1.jpg"],
    // vendido: true,
  },
  {
    id: 2,
    nombre: "Chaqueta sudadera Adidas",
    descr: "Talla S",
    precio: "$65.000",
    imagen: ["/img/sudadera.jpg", "/img/sudadera1.jpg"],
  },
  {
    id: 3,
    nombre: "Camiseta Nike",
    descr: "Talla S",
    precio: "$75.000",
    imagen: ["/img/camiseta2.jpg", "/img/camiseta1.jpg"],
  },
  {
    id: 4,
    nombre: "Camisa PA",
    descr: "Talla S",
    precio: "$40.000",
    imagen: ["/img/camisa.jpg", "/img/camisa1.jpg"],
  },
  {
    id: 5,
    nombre: "Beisbolera Blue",
    descr: "Talla S",
    precio: "$85.000",
    imagen: ["/img/beisbolera.jpg", "/img/besibolera1.jpg"],
  },
  {
    id: 6,
    nombre: "Chaqueta MZ",
    descr: "Talla S",
    precio: "$95.000",
    imagen: ["/img/mz.jpg", "/img/mz1.jpg"],
  },
];

// 🧢 GORRAS
const gorrasItems = [
  {
    id: 1,
    nombre: "Mighty Ducks",
    precio: "$150.000",
    imagenes: [
      "/img/mighty_ducks.jpg",
      "/img/mighty_ducks1.jpg",
      "/img/mighty_ducks2.jpg",
    ],
  },
  {
    id: 2,
    nombre: "Oakland Athletics",
    precio: "$50.000",
    vendido: true,
    imagenes: ["/img/oakland.jpg", "/img/oakland1.jpg", "/img/oakland2.jpg"],
  },
  {
    id: 3,
    nombre: "Toronto Blue",
    precio: "$60.000",
    imagenes: [
      "/img/Toronto_blue1.jpg",
      "/img/Toronto_blue2.jpg",
      "/img/Toronto_blue3.jpg",
    ],
  },
  {
    id: 4,
    nombre: "Chicago Bulls 97",
    precio: "$60.000",
    vendido: true,
    imagenes: [
      "/img/Chicago_bulls_97_1.jpg",
      "/img/Chicago_bulls_97_2.jpg",
      "/img/Chicago_bulls_97_3.jpg",
    ],
  },
  {
    id: 5,
    nombre: "Georgetown Hoyas",
    precio: "$100.000",
    imagenes: [
      "/img/georgetown.jpg",
      "/img/georgetown1.jpg",
      "/img/georgetown2.jpg",
    ],
  },
  {
    id: 6,
    nombre: "Expos Cooperstown",
    precio: "$50.000",
    vendido: true,
    imagenes: ["/img/Expos.jpg", "/img/Expos1.jpg", "/img/Expos2.jpg"],
  },
  {
    id: 7,
    nombre: "Pirates MLB",
    precio: "$35.000",
    imagenes: ["/img/Pirates.jpg", "/img/Pirates1.jpg", "/img/Pirates2.jpg"],
  },
  {
    id: 8,
    nombre: "New York Yankees",
    precio: "$70.000",
    imagenes: ["/img/New.jpg", "/img/New1.jpg", "/img/New2.jpg"],
  },
  {
    id: 9,
    nombre: "New York Yankees azul rey",
    precio: "$70.000",
    imagenes: ["/img/azul2.jpg", "/img/azul.jpg", "/img/azul1.jpg"],
  },
  {
    id: 10,
    nombre: "Nike",
    precio: "$50.000",
    vendido: true,
    imagenes: ["/img/NIKE.jpg", "/img/NIKE1.jpg"],
  },
  {
    id: 11,
    nombre: "Nike Wolf Series",
    precio: "$80.000",
    vendido: true,
    imagenes: ["/img/nike_wolf_series1.jpg", "/img/nike_wolf_series2.jpg"],
  },
];

// 👟 ZAPATOS
const zapatosItems = [
  {
    id: 1,
    nombre: "Jordan 11",
    precio: "$---",
    imagenes: ["/img/j1.jpg"],
    vendido: true,
  },
  {
    id: 2,
    nombre: "Jordan 4",
    precio: "$---",
    imagenes: ["/img/j4.jpg"],
    vendido: true,
  },
  {
    id: 3,
    nombre: "Campus",
    precio: "$110.000",
    imagenes: ["/img/campus.jpg", "/img/campus1.jpg"],
    vendido: false,
  },
  {
    id: 4,
    nombre: "Dunk Low",
    precio: "$---",
    imagenes: ["/img/duck.jpg"],
    vendido: true,
  },
];

//
// 🔍 CARD GENÉRICA "BUSCO ESTO"
//
function BuscoEstoCard({ mensaje, onClick }) {
  return (
    <article
      style={{
        ...cardStyle,
        padding: "1rem",
        background: "rgba(15,23,42,0.9)",
        backdropFilter: "blur(10px)",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "160px",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#e5e7eb",
            marginBottom: "0.4rem",
          }}
        >
          ¿No encontraste lo que buscabas?
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            color: "#9ca3af",
          }}
        >
          Escríbeme por WhatsApp y cuéntame qué estás buscando. Te ayudo a
          encontrar algo con tu flow. 🔥
        </p>
      </div>

      <button
        onClick={onClick}
        className="btn btn-whatsapp"
        style={{
          marginTop: "0.8rem",
          alignSelf: "flex-start",
          fontSize: "0.85rem",
          padding: "0.45rem 0.9rem",
          borderRadius: "999px",
        }}
      >
        🔍 Busco algo diferente
      </button>
    </article>
  );
}

// 🔥 ROPA – Página
function RopaPage({ onAddToCart }) {
  const handleBuscoEsto = () => {
    const texto = "Hola, busco esto (ropa):\n\nBusco esto";
    window.open(
      `${BASE_WHATSAPP}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <main
      style={{
        ...pageBaseStyle,
        backgroundImage:
          "linear-gradient(to bottom, rgba(15,23,42,0.25), rgba(15,23,42,0.6), rgba(15,23,42,0.9)), url('/img/ropa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="hero-title" style={{ fontSize: "2.8rem" }}>
        Ropa
      </h1>
      <p
        style={{
          color: "#e5e7eb",
          marginBottom: "0.8rem",
          maxWidth: "520px",
        }}
      >
        Prendas urbanas originales. Escríbeme para detalles o disponibilidad.
      </p>

      <div
        style={{
          display: "grid",
          gap: "1.2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {ropaItems.map((item) => (
          <RopaCard
            key={item.id}
            item={item}
            onAddToCart={() => {
              if (item.vendido) return;
              onAddToCart({
                nombre: item.nombre,
                precioTexto: item.precio,
                precioNumero: parsePrecio(item.precio),
                categoria: "Ropa",
                imagen: Array.isArray(item.imagen)
                  ? item.imagen[0]
                  : item.imagen,
              });
            }}
          />
        ))}

        <BuscoEstoCard
          key="busco-ropa"
          mensaje="¿No encontraste la prenda que querías?"
          onClick={handleBuscoEsto}
        />
      </div>
    </main>
  );
}

// 🔁 Tarjeta Ropa
function RopaCard({ item, onAddToCart }) {
  const imagenes = Array.isArray(item.imagen) ? item.imagen : [item.imagen];
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const total = imagenes.length;
  const esVendido = item.vendido === true;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const cardHoverStyle = {
    ...cardStyle,
    padding: "1rem",
    textAlign: "left",
    background: "rgba(0,0,0,0.85)",
    backdropFilter: "blur(10px)",
    transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
    boxShadow: hovered
      ? "0px 12px 28px rgba(0,0,0,0.8)"
      : "0px 5px 15px rgba(0,0,0,0.4)",
    transition: "all 0.25s ease-out",
    ...(esVendido && {
      transform: hovered
        ? "translateY(-3px) scale(1.01)"
        : "translateY(0) scale(1)",
      boxShadow: "0px 5px 15px rgba(185,28,28,0.25)",
    }),
  };

  return (
    <article
      style={cardHoverStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "0.9rem",
          overflow: "hidden",
          height: "220px",
        }}
      >
        <img
          src={imagenes[index]}
          alt={item.nombre}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {esVendido && <SoldBadge />}

        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="gallery-arrow"
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              ‹
            </button>
            <button
              onClick={next}
              className="gallery-arrow"
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              ›
            </button>
          </>
        )}
      </div>

      <h2 style={{ marginTop: "0.6rem", color: "#f9fafb" }}>{item.nombre}</h2>
      <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>{item.descr}</p>
      <p
        style={{
          marginTop: "0.4rem",
          fontWeight: "bold",
          color: "#fbbf24",
        }}
      >
        {item.precio}
      </p>

      {esVendido ? (
        <p
          style={{
            marginTop: "0.8rem",
            fontSize: "0.85rem",
            color: "#9ca3af",
          }}
        >
          Esta prenda ya fue vendida. Si quieres algo similar, escríbeme por
          WhatsApp desde el inicio de la página. 💬
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginTop: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() =>
              window.open(
                `${BASE_WHATSAPP}?text=Hola,%20me%20interesa%20la%20prenda%20${encodeURIComponent(
                  item.nombre
                )}`,
                "_blank"
              )
            }
            className="btn btn-whatsapp"
            style={{ flex: 1, minWidth: "140px" }}
          >
            💬 WhatsApp
          </button>
          <button
            onClick={onAddToCart}
            className="btn"
            style={{
              flex: 1,
              minWidth: "140px",
              background: "#111827",
              color: "#e5e7eb",
              border: "1px solid #374151",
            }}
          >
            ➕ Agregar al carrito
          </button>
        </div>
      )}
    </article>
  );
}

// 🔁 Tarjeta Gorra
function GorraCard({ item, onAddToCart }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const total = item.imagenes.length;
  const esVendido = item.vendido === true;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const cardHoverStyle = {
    ...cardStyle,
    padding: "1rem",
    textAlign: "left",
    background: "rgba(15,23,42,0.9)",
    backdropFilter: "blur(14px)",
    transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
    boxShadow: hovered
      ? "0px 15px 30px rgba(0,0,0,0.85)"
      : "0px 8px 20px rgba(0,0,0,0.6)",
    transition: "all 0.25s ease-out",
    ...(esVendido && {
      transform: hovered
        ? "translateY(-3px) scale(1.01)"
        : "translateY(0) scale(1)",
      boxShadow: "0px 4px 12px rgba(185,28,28,0.25)",
    }),
  };

  return (
    <article
      style={cardHoverStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "#fbbf24",
          marginBottom: "0.4rem",
        }}
      >
        Street cap · Re4lworld
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
          borderRadius: "0.9rem",
          overflow: "hidden",
        }}
      >
        <img
          src={item.imagenes[index]}
          alt={item.nombre}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {esVendido && <SoldBadge />}

        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="gallery-arrow"
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              ‹
            </button>
            <button
              onClick={next}
              className="gallery-arrow"
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              ›
            </button>
          </>
        )}

        {total > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "6px",
              right: "8px",
              fontSize: "0.75rem",
              background: "rgba(0,0,0,0.7)",
              color: "#e5e7eb",
              padding: "2px 8px",
              borderRadius: "999px",
            }}
          >
            {index + 1}/{total}
          </div>
        )}
      </div>

      <h2
        style={{
          marginTop: "0.7rem",
          fontSize: "1rem",
          color: "#f9fafb",
        }}
      >
        {item.nombre}
      </h2>

      <p
        style={{
          marginTop: "0.25rem",
          fontWeight: 600,
          fontSize: "0.96rem",
          color: "#fbbf24",
        }}
      >
        {item.precio}
      </p>

      {esVendido ? (
        <p
          style={{
            marginTop: "0.8rem",
            fontSize: "0.85rem",
            color: "#9ca3af",
          }}
        >
          Esta gorra ya fue vendida. Si quieres algo similar, escríbeme por
          WhatsApp desde el inicio de la página. 💬
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginTop: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-whatsapp"
            style={{ flex: 1, minWidth: "140px" }}
            onClick={() =>
              window.open(
                `${BASE_WHATSAPP}?text=Hola,%20me%20interesa%20la%20gorra%20${encodeURIComponent(
                  item.nombre
                )}`,
                "_blank"
              )
            }
          >
            💬 WhatsApp
          </button>
          <button
            className="btn"
            style={{
              flex: 1,
              minWidth: "140px",
              background: "#111827",
              color: "#e5e7eb",
              border: "1px solid #374151",
            }}
            onClick={onAddToCart}
          >
            ➕ Agregar al carrito
          </button>
        </div>
      )}
    </article>
  );
}

// 🧢 GORRAS – Página
function GorrasPage({ onAddToCart }) {
  const handleBuscoEsto = () => {
    const texto = "Hola, busco esto (gorra):\n\nBusco esto";
    window.open(
      `${BASE_WHATSAPP}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <main
      style={{
        ...pageBaseStyle,
        backgroundImage:
          "linear-gradient(to bottom, rgba(15,23,42,0.35), rgba(15,23,42,0.55), rgba(15,23,42,0.9)), url('/img/gorras.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1
        className="hero-title"
        style={{
          fontSize: "2.8rem",
          marginBottom: "0.4rem",
          textShadow: "0 6px 25px rgba(0,0,0,0.9)",
        }}
      >
        Gorras
      </h1>

      <p
        style={{
          color: "#e5e7eb",
          marginBottom: "0.8rem",
          maxWidth: "520px",
          fontSize: "0.95rem",
          textShadow: "0 4px 18px rgba(0,0,0,0.85)",
        }}
      >
        Colección urbana de gorras. Desliza las fotos y escríbeme para preguntar
        por la que más te guste.
      </p>

      <section
        style={{
          display: "grid",
          gap: "1.6rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {gorrasItems.map((item) => (
          <GorraCard
            key={item.id}
            item={item}
            onAddToCart={() => {
              if (item.vendido) return;
              onAddToCart({
                nombre: item.nombre,
                precioTexto: item.precio,
                precioNumero: parsePrecio(item.precio),
                categoria: "Gorra",
                imagen: item.imagenes[0],
              });
            }}
          />
        ))}

        <BuscoEstoCard
          key="busco-gorra"
          mensaje="¿No encontraste la gorra que querías?"
          onClick={handleBuscoEsto}
        />
      </section>
    </main>
  );
}

// 👟 ZAPATOS – Página
function ZapatosPage({ onAddToCart }) {
  const handleBuscoEsto = () => {
    const texto = "Hola, busco esto (zapatos/tenis):\n\nBusco esto";
    window.open(
      `${BASE_WHATSAPP}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <main
      style={{
        ...pageBaseStyle,
        backgroundImage:
          "linear-gradient(to bottom, rgba(15,23,42,0.35), rgba(15,23,42,0.7), rgba(15,23,42,0.95)), url('/img/zapatos.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1
        className="hero-title"
        style={{
          fontSize: "2.8rem",
          marginBottom: "0.4rem",
          textShadow: "0 6px 25px rgba(0,0,0,0.9)",
        }}
      >
        Zapatos
      </h1>

      <p
        style={{
          color: "#e5e7eb",
          marginBottom: "0.8rem",
          maxWidth: "520px",
          fontSize: "0.95rem",
          textShadow: "0 4px 18px rgba(0,0,0,0.85)",
        }}
      >
        Jordans y sneakers seleccionados. Mira las fotos y escríbeme directo
        para más info.
      </p>

      <section
        style={{
          display: "grid",
          gap: "1.6rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {zapatosItems.map((item) => (
          <ZapatoCard
            key={item.id}
            item={item}
            onAddToCart={() => {
              if (item.vendido) return;
              onAddToCart({
                nombre: item.nombre,
                precioTexto: item.precio,
                precioNumero: parsePrecio(item.precio),
                categoria: "Zapato",
                imagen: item.imagenes[0],
              });
            }}
          />
        ))}

        <BuscoEstoCard
          key="busco-zapato"
          mensaje="¿No encontraste los tenis que querías?"
          onClick={handleBuscoEsto}
        />
      </section>
    </main>
  );
}

// Tarjeta Zapato
function ZapatoCard({ item, onAddToCart }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const total = item.imagenes.length;
  const esVendido = item.vendido === true;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const cardStyleZapato = {
    ...cardStyle,
    padding: "1rem",
    textAlign: "left",
    background: "rgba(0,0,0,0.9)",
    backdropFilter: "blur(12px)",
    transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
    boxShadow: hovered
      ? "0px 15px 30px rgba(0,0,0,0.85)"
      : "0px 8px 20px rgba(0,0,0,0.6)",
    transition: "all 0.25s ease-out",
    ...(esVendido && {
      transform: hovered
        ? "translateY(-3px) scale(1.01)"
        : "translateY(0) scale(1)",
      boxShadow: "0px 4px 12px rgba(185,28,28,0.25)",
    }),
  };

  return (
    <article
      style={cardStyleZapato}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "#a5b4fc",
          marginBottom: "0.4rem",
        }}
      >
        Sneaker · Re4lworld
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "230px",
          borderRadius: "0.9rem",
          overflow: "hidden",
        }}
      >
        <img
          src={item.imagenes[index]}
          alt={item.nombre}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {esVendido && <SoldBadge />}

        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="gallery-arrow"
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              ‹
            </button>
            <button
              onClick={next}
              className="gallery-arrow"
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              ›
            </button>
          </>
        )}

        {total > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "6px",
              right: "8px",
              fontSize: "0.75rem",
              background: "rgba(0,0,0,0.7)",
              color: "#e5e7eb",
              padding: "2px 8px",
              borderRadius: "999px",
            }}
          >
            {index + 1}/{total}
          </div>
        )}
      </div>

      <h2
        style={{
          marginTop: "0.7rem",
          fontSize: "1rem",
          color: "#f9fafb",
        }}
      >
        {item.nombre}
      </h2>

      <p
        style={{
          marginTop: "0.25rem",
          fontWeight: 600,
          fontSize: "0.96rem",
          color: "#fbbf24",
        }}
      >
        {item.precio}
      </p>

      {esVendido ? (
        <p
          style={{
            marginTop: "0.8rem",
            fontSize: "0.85rem",
            color: "#9ca3af",
          }}
        >
          Este par ya fue vendido. Si quieres algo similar, escríbeme por
          WhatsApp desde el inicio de la página. 💬
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginTop: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-whatsapp"
            style={{ flex: 1, minWidth: "140px" }}
            onClick={() =>
              window.open(
                `${BASE_WHATSAPP}?text=Hola,%20me%20interesan%20los%20zapatos%20${encodeURIComponent(
                  item.nombre
                )}`,
                "_blank"
              )
            }
          >
            💬 WhatsApp
          </button>
          <button
            className="btn"
            style={{
              flex: 1,
              minWidth: "140px",
              background: "#111827",
              color: "#e5e7eb",
              border: "1px solid #374151",
            }}
            onClick={onAddToCart}
          >
            ➕ Agregar al carrito
          </button>
        </div>
      )}
    </article>
  );
}

// 📸 STREET GALLERY – fullscreen
function StreetGalleryPage() {
  const fotos = ["/img/ejemplo2.jpg"];

  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState("fade");
  const totalSlides = fotos.length + 1; // último slide = mensaje

  const ANIMATIONS = ["fade", "slide-left", "slide-right", "zoom", "slide-down"];

  const pickNextAnimation = (prevAnim) => {
    const opciones = ANIMATIONS.filter((a) => a !== prevAnim);
    const random = opciones[Math.floor(Math.random() * opciones.length)];
    return random || "fade";
  };

  useEffect(() => {
    if (totalSlides <= 1) return;

    const id = setInterval(() => {
      setAnimation((prev) => pickNextAnimation(prev));
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(id);
  }, [totalSlides]);

  const isMessageSlide = index === fotos.length;

  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: "4.5rem",
        backgroundColor: "#020617",
        color: "#f9fafb",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "calc(100vh - 4.5rem)",
        }}
      >
        {!isMessageSlide && (
          <>
            <img
              src={fotos[index]}
              alt=""
              className={`street-gallery-img street-gallery-img--${animation}`}
              style={{ userSelect: "none" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 40%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
          </>
        )}

        {isMessageSlide && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "0 1.5rem",
              background:
                "radial-gradient(circle at top, #020617 0%, #020617 35%, #000 80%)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                textAlign: "center",
                textShadow: "0 18px 45px rgba(0,0,0,0.95)",
              }}
            >
              PRÓXIMAMENTE MODELOS DE LA MARCA
            </h1>
            <p
              style={{
                marginTop: "0.7rem",
                fontSize: "clamp(1.2rem, 2.4vw, 1.6rem)",
                fontWeight: 600,
                textAlign: "center",
                color: "#fbbf24",
                textShadow: "0 14px 35px rgba(0,0,0,0.95)",
              }}
            >
              podrías ser tú.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

// 🚫 VAPERS – sección "Próximamente"
function VapersPage() {
  const opciones = [
    {
      id: 1,
      nombre: "SNOOPY SMOKE (15.000 PUFF)",
      imagen: "/img/SNOOPY_SMOKE.jpg",
      estado: "En pruebas",
    },
    {
      id: 2,
      nombre: "PRIV BAR (15.000 PUFF)",
      imagen: "/img/PRIV_BAR.jpg",
      estado: "Lanzamiento pronto",
    },
    {
      id: 3,
      nombre: "NICKY JAM VAPE (10.000 PUFF)",
      imagen: "/img/NICKY_JAM_VAPE.jpg",
      estado: "Por confirmar sabores",
    },
  ];

  return (
    <main
      style={{
        ...pageBaseStyle,
        backgroundImage:
          "linear-gradient(to bottom, rgba(15,23,42,0.25), rgba(15,23,42,0.6), rgba(15,23,42,0.9)), url('/img/vaper.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="hero-title" style={{ fontSize: "2.8rem" }}>
        Vapers
      </h1>

      <p
        style={{
          color: "#e5e7eb",
          marginBottom: "1rem",
          maxWidth: "520px",
          textShadow: "0 4px 16px rgba(0,0,0,0.85)",
        }}
      >
        Esta categoría todavía no está disponible en la tienda. 🧪
      </p>

      <p
        style={{
          color: "#9ca3af",
          marginBottom: "1.8rem",
          maxWidth: "520px",
          fontSize: "0.9rem",
        }}
      >
        Estamos definiendo referencias, sabores y stock. Síguenos en Instagram
        para enterarte cuando se activen los vapers en Re4lworld.
      </p>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-instagram"
        style={{ marginBottom: "2rem" }}
      >
        📷 Ver novedades en Instagram
      </a>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.2rem",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {opciones.map((op) => (
          <article
            key={op.id}
            style={{
              ...cardStyle,
              padding: "1rem",
              textAlign: "left",
              flex: "1 1 260px",
              maxWidth: "280px",
              background: "rgba(0,0,0,0.82)",
              backdropFilter: "blur(10px)",
              border: "1px dashed rgba(148,163,184,0.6)",
              opacity: 0.9,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "200px",
                borderRadius: "0.9rem",
                overflow: "hidden",
                marginBottom: "0.6rem",
                filter: "grayscale(0.3)",
              }}
            >
              <img
                src={op.imagen}
                alt={op.nombre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  left: "8px",
                  background: "rgba(59,130,246,0.9)",
                  color: "#f9fafb",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Próximamente
              </div>
            </div>

            <h3
              style={{
                color: "#f9fafb",
                fontSize: "0.98rem",
                marginBottom: "0.2rem",
              }}
            >
              {op.nombre}
            </h3>

            <p
              style={{
                marginTop: "0.2rem",
                color: "#9ca3af",
                fontSize: "0.85rem",
              }}
            >
              {op.estado}
            </p>

            <p
              style={{
                marginTop: "0.4rem",
                color: "#fbbf24",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              Solo habrá 10 unidades por referencia. 🚨
            </p>

            <button
              className="btn btn-whatsapp"
              style={{
                marginTop: "0.8rem",
                fontSize: "0.8rem",
                padding: "0.45rem 0.9rem",
                width: "100%",
                borderRadius: "999px",
              }}
              onClick={() =>
                window.open(
                  createWhatsAppUrl(
                    `Hola, quiero apartar una unidad (cuando estén disponibles) de ${op.nombre}. Vi que la preventa es por tan solo $20.000 y que solo hay 10 unidades.`
                  ),
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              🔒 Apartar una unidad (próximamente) — $20.000
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}

// 🛒 CARRITO – Sección
function CarritoPage({ cart, onRemoveItem, onClear }) {
  const cantidad = cart.length;
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.precioNumero || 0),
    0
  );

  let descuento = 0;
  if (cantidad === 2) descuento = 10000;
  else if (cantidad >= 3) descuento = 15000;

  if (descuento > subtotal) descuento = subtotal;
  const total = subtotal - descuento;

  const formato = (n) =>
    "$" + n.toLocaleString("es-CO", { minimumFractionDigits: 0 });

  const crearMensajeWhatsApp = () => {
    if (cantidad === 0) {
      return "Hola, vi la tienda Re4lworld y quiero conocer los productos.";
    }

    const lineas = cart.map(
      (item, idx) =>
        `${idx + 1}. ${item.nombre} - ${item.precioTexto || "$---"} (${
          item.categoria
        })`
    );

    const texto = `Hola, vi la tienda Re4lworld y quiero reservar estos productos:\n\n${lineas.join(
      "\n"
    )}\n\nSubtotal: ${formato(subtotal)}\nDescuento combos: ${
      descuento > 0 ? "-" + formato(descuento) : "No aplica aún"
    }\nTotal: ${formato(
      total
    )}\n\n(Envíame este mensaje para confirmar la reserva 👟🧢👕)`;

    return texto;
  };

  const urlWhatsApp = `${BASE_WHATSAPP}?text=${encodeURIComponent(
    crearMensajeWhatsApp()
  )}`;

  const hayDescuento = descuento > 0;
  const combo2Activo = cantidad === 2;
  const combo3Activo = cantidad >= 3;

  return (
    <main style={pageBaseStyle}>
      <h1
        className="hero-title"
        style={{ fontSize: "2.4rem", marginBottom: "0.6rem" }}
      >
        Carrito
      </h1>

      {cantidad === 0 ? (
        <p style={{ color: "#9ca3af", marginTop: "1rem", maxWidth: "420px" }}>
          Tu carrito está vacío. Agrega prendas desde{" "}
          <span style={{ fontWeight: 600 }}>Ropa, Gorras o Zapatos</span> y
          luego reserva todo por WhatsApp. 💬
        </p>
      ) : (
        <>
          <p style={{ color: "#9ca3af", marginBottom: "1.2rem" }}>
            Tienes {cantidad} {cantidad === 1 ? "producto" : "productos"} en el
            carrito.
          </p>

          {/* Lista de productos */}
          <section
            style={{
              width: "100%",
              maxWidth: "800px",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              marginBottom: "1.5rem",
            }}
          >
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  ...cardStyle,
                  padding: "0.9rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.8rem",
                  background: "rgba(15,23,42,0.95)",
                }}
              >
                {item.imagen && (
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "0.6rem",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                )}

                <div style={{ flex: 1, textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#9ca3af",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {item.categoria}
                  </div>
                  <div style={{ fontSize: "1rem", color: "#f9fafb" }}>
                    {item.nombre}
                  </div>
                  <div
                    style={{
                      marginTop: "0.2rem",
                      color: "#fbbf24",
                      fontWeight: 600,
                    }}
                  >
                    {item.precioTexto || "$---"}
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(index)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#ef4444",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                  }}
                >
                  ✕ Quitar
                </button>
              </div>
            ))}
          </section>

          {/* Resumen + combos */}
          <section
            style={{
              ...cardStyle,
              padding: "1rem",
              width: "100%",
              maxWidth: "800px",
              background: "rgba(15,23,42,0.98)",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "220px" }}>
                <h2
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.4rem",
                    color: "#f9fafb",
                  }}
                >
                  Resumen
                </h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.9rem",
                    marginBottom: "0.2rem",
                    color: "#e5e7eb",
                  }}
                >
                  <span>Subtotal</span>
                  <span>{formato(subtotal)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.9rem",
                    marginBottom: "0.4rem",
                    color: hayDescuento ? "#22c55e" : "#9ca3af",
                  }}
                >
                  <span>Descuento combos</span>
                  <span>
                    {hayDescuento
                      ? `- ${formato(descuento)}`
                      : "No aplica aún"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginTop: "0.3rem",
                    color: "#f9fafb",
                  }}
                >
                  <span>Total</span>
                  <span>{formato(total)}</span>
                </div>
              </div>

              {/* Info combos */}
              <div
                style={{
                  flex: 1,
                  minWidth: "220px",
                  fontSize: "0.8rem",
                  color: "#9ca3af",
                  borderLeft: "1px solid rgba(31,41,55,0.9)",
                  paddingLeft: "0.8rem",
                }}
              >
                <p
                  style={{
                    marginBottom: "0.3rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontSize: "0.75rem",
                    color: "#e5e7eb",
                  }}
                >
                  Combos activos
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.25rem 0.5rem",
                      borderRadius: "999px",
                      background: combo2Activo
                        ? "rgba(34,197,94,0.12)"
                        : "rgba(15,23,42,0.9)",
                      border: combo2Activo
                        ? "1px solid rgba(34,197,94,0.7)"
                        : "1px solid rgba(31,41,55,0.9)",
                      color: combo2Activo ? "#bbf7d0" : "#9ca3af",
                    }}
                  >
                    • Llevando <strong>2 productos</strong> tienes{" "}
                    <strong>-$10.000</strong> {combo2Activo && <span>✅</span>}
                  </div>
                  <div
                    style={{
                      padding: "0.25rem 0.5rem",
                      borderRadius: "999px",
                      background: combo3Activo
                        ? "rgba(34,197,94,0.12)"
                        : "rgba(15,23,42,0.9)",
                      border: combo3Activo
                        ? "1px solid rgba(34,197,94,0.7)"
                        : "1px solid rgba(31,41,55,0.9)",
                      color: combo3Activo ? "#bbf7d0" : "#9ca3af",
                    }}
                  >
                    • Llevando <strong>3 o más productos</strong> tienes{" "}
                    <strong>-$15.000</strong> {combo3Activo && <span>🔥</span>}
                  </div>
                </div>

                {!combo3Activo && (
                  <div style={{ marginTop: "0.6rem" }}>
                    <div
                      style={{
                        height: "6px",
                        borderRadius: "999px",
                        background: "#111827",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${Math.min(
                            (cantidad / 3) * 100,
                            100
                          )}%`,
                          background:
                            "linear-gradient(to right, #22c55e, #a3e635, #facc15)",
                          transition: "width 0.3s ease-out",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        marginTop: "0.25rem",
                        fontSize: "0.78rem",
                        color: "#e5e7eb",
                      }}
                    >
                      {cantidad === 0 &&
                        "Agrega productos para activar los combos 💸"}
                      {cantidad === 1 &&
                        "Agrega 1 producto más para desbloquear -$10.000."}
                      {cantidad === 2 &&
                        "Si agregas 1 más, subes el combo a -$15.000."}
                    </p>
                  </div>
                )}

                {!hayDescuento && (
                  <p style={{ marginTop: "0.4rem", color: "#fbbf24" }}>
                    Agrega 1 o 2 productos más para activar un combo. 💸
                  </p>
                )}
              </div>
            </div>

            {/* Botones de acción */}
            <div
              style={{
                display: "flex",
                gap: "0.6rem",
                marginTop: "0.4rem",
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn btn-whatsapp"
                style={{ flex: 2, minWidth: "180px" }}
                onClick={() =>
                  window.open(urlWhatsApp, "_blank", "noopener,noreferrer")
                }
              >
                📲 Reservar todo por WhatsApp
              </button>
              <button
                className="btn btn-instagram"
                style={{ flex: 1, minWidth: "120px" }}
                onClick={onClear}
              >
                🧹 Vaciar carrito
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

// 🚀 APP PRINCIPAL
function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (producto) => {
    setCart((prev) => [...prev, producto]);
  };

  const handleRemoveItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => setCart([]);

  return (
    <div className="page">
      <NavBar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/ropa"
          element={<RopaPage onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/gorras"
          element={<GorrasPage onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/zapatos"
          element={<ZapatosPage onAddToCart={handleAddToCart} />}
        />
        <Route path="/gallery" element={<StreetGalleryPage />} />
        <Route path="/vapers" element={<VapersPage />} />
        <Route
          path="/carrito"
          element={
            <CarritoPage
              cart={cart}
              onRemoveItem={handleRemoveItem}
              onClear={handleClearCart}
            />
          }
        />
      </Routes>

      {/* 📍 BOTONES FLOTANTES DE CONTACTO + CARRITO */}
      <div
        style={{
          position: "fixed",
          right: "16px",
          bottom: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          zIndex: 9999,
        }}
      >
        {/* 🛒 Carrito flotante */}
        <button
          onClick={() => navigate("/carrito")}
          className="btn btn-cart-floating"
        >
          🛒
          {cart.length > 0 && (
            <span className="cart-badge">{cart.length}</span>
          )}
        </button>

        {/* WhatsApp */}
        <a
          href={`${BASE_WHATSAPP}?text=Hola,%20vi%20la%20tienda%20Re4lworld%20y%20quiero%20hablar%20contigo`}
          target="_blank"
          className="btn btn-whatsapp"
          style={{
            padding: "0.6rem 0.8rem",
            fontSize: "0.75rem",
            borderRadius: "999px",
          }}
        >
          💬
        </a>

        {/* Instagram */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          className="btn btn-instagram"
          style={{
            padding: "0.6rem 0.8rem",
            fontSize: "0.75rem",
            borderRadius: "999px",
          }}
        >
          📷
        </a>
      </div>
    </div>
  );
}

export default App;
