const products = [
    {
        id: "SM001",
        name: "Sillón Modular Tokyo",
        description: "Sillón modular de líneas rectas, tapizado en lino natural, con módulos personalizables para adaptarse a cualquier espacio. Ideal para hogares minimalistas.",
        stock: 12,
        price: 75000,
        image: "/img/sillon-03.png", 
        category: "sillones"
      },
      {
        id: "SM002",
        name: "Sillón Esencial Kyoto",
        description: "Sillón de una plaza, completamente modular y desmontable. Tapicería en tonos neutros, perfecta para ambientes relajados y equilibrados.",
        stock: 8,
        price: 68000,
        image: "/img/sillon-02.png",
        category: "sillones"
      },
      {
        id: "SM003",
        name: "Sillón Modular Osaka",
        description: "Sillón modular de tres plazas, con cojines rellenos de espuma de alta densidad, ideal para un confort prolongado. Disponible en gris claro y beige.",
        stock: 5,
        price: 82000,
        image: "/img/sillon-01.png",
        category: "sillones"
      },
      // Mesas
      {
        id: "MC001",
        name: "Mesa de Centro Nagoya",
        description: "Mesa de centro multifuncional con compartimientos ocultos y bandejas extraíbles. Hecha en madera de roble natural, perfecta para almacenamiento discreto.",
        stock: 15,
        price: 38000,
        image: "/img/mesa-02.png",
        category: "mesas"
      },
      {
        id: "MC002",
        name: "Mesa de Centro Zen",
        description: "Mesa de diseño bajo y compacto, con espacio para revistas y almacenamiento de objetos pequeños. Diseño minimalista en madera y metal negro mate.",
        stock: 10,
        price: 35000,
        image: "/img/mesa-01.png",
        category: "mesas"
      },
      {
        id: "MC003",
        name: "Mesa de Centro Kyoto",
        description: "Mesa con tapa deslizante que revela un compartimiento oculto, ideal para mantener el orden en espacios pequeños. Fabricada en nogal.",
        stock: 7,
        price: 40000,
        image: "/img/mesa-03.png",
        category: "mesas"
      },
      // Lámparas
      {
        id: "LP001",
        name: "Lámpara de Pie Sendai",
        description: "Lámpara de pie con estructura metálica delgada y pantalla de lino. Su luz suave crea una atmósfera relajante y acogedora, perfecta para espacios minimalistas.",
        stock: 20,
        price: 22000,
        image: "/img/lampara-02.png",
        category: "lamparas"
      },
      {
        id: "LP002",
        name: "Lámpara de Mesa Hikari",
        description: "Lámpara de mesa compacta, con base de cerámica y pantalla de algodón. Diseñada para iluminar de manera sutil, ideal para escritorios o mesitas de noche.",
        stock: 25,
        price: 14000,
        image: "/img/lampara-01.png",
        category: "lamparas"
      },
      {
        id: "LP003",
        name: "Lámpara Colgante Nara",
        description: "Lámpara colgante con diseño geométrico en metal dorado y pantalla de vidrio opaco. Perfecta para iluminar comedores o áreas comunes.",
        stock: 10,
        price: 30000,
        image: "/img/lampara-03.png",
        category: "lamparas"
      }
  
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( products)
        }, 1000)
    })
}

export { getProducts }