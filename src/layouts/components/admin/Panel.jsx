import "./Panel.css";
const Panel = () => {
  return (
    <div className="admin-panel">
      <aside className="sidebar">
        <h2>Menú</h2>
        <ul>
          <li>Dashboard</li>
          <li>Clientes</li>
          <li>Productos</li>
          <li>Órdenes</li>
          <li>Configuración</li>
        </ul>
      </aside>
      <main className="main-content">
        <header>
          <h1>Panel de Administrador</h1>
          <button>Salir</button>
        </header>
        <section className="content">
          {/* Aquí iría el contenido dinámico */}
        </section>
      </main>
    </div>
  );
};

export default Panel;
