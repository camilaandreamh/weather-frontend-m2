document.addEventListener('DOMContentLoaded', () => {
    
    const ciudades = [
    { nombre: "Antofagasta", temp: "22°C", estado: "Despejado", icono: "fas fa-sun text-warning" },
    { nombre: "La Serena", temp: "19°C", estado: "Nublado", icono: "fas fa-cloud text-secondary" },
    { nombre: "Viña del Mar", temp: "18°C", estado: "Parcial", icono: "fas fa-cloud-sun text-info" },
    { nombre: "Valparaíso", temp: "17°C", estado: "Viento", icono: "fas fa-wind text-primary" },
    { nombre: "Santiago", temp: "28°C", estado: "Soleado", icono: "fas fa-sun text-warning" },
    { nombre: "Rancagua", temp: "25°C", estado: "Despejado", icono: "fas fa-sun text-warning" },
    { nombre: "Talca", temp: "24°C", estado: "Despejado", icono: "fas fa-sun text-warning" },
    { nombre: "Concepción", temp: "16°C", estado: "Llovizna", icono: "fas fa-cloud-rain text-info" },
    { nombre: "Coronel", temp: "15°C", estado: "Nublado", icono: "fas fa-cloud text-secondary" },
    { nombre: "Temuco", temp: "14°C", estado: "Lluvia", icono: "fas fa-cloud-showers-heavy text-primary" },
    { nombre: "Puerto Montt", temp: "12°C", estado: "Chubascos", icono: "fas fa-cloud-meatball text-secondary" }
];

    const contenedor = document.getElementById('contenedor-clima');

    
    if (!contenedor) {
        console.error("No se encontró el ID 'contenedor-clima' en el HTML");
        return;
    }

    ciudades.forEach(ciudad => {
        const cardHTML = `
            <div class="col">
                <div class="card h-100 border-0 shadow-sm text-center p-3">
                    <div class="card-body">
                        <h5 class="card-title">${ciudad.nombre}</h5>
                        <div class="display-6 my-3"><i class="${ciudad.icono}"></i></div>
                        <p class="card-text h4">${ciudad.temp}</p>
                        <p class="text-muted small">${ciudad.estado}</p>
                       
<a href="detalle.html" class="btn btn-outline-primary btn-sm mt-2">Ver detalle</a>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += cardHTML;
    });
});