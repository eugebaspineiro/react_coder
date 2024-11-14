const products = [
    {
        id: "SM001",
        name: "Sillón Amalfi",
        description: "Este sillón fusiona elegancia y confort en cada detalle. Su tapizado suave y acogedor invita a relajarse, mientras que la estructura de madera natural aporta un toque cálido y orgánico al espacio. Con líneas simples y una base robusta, esta pieza se adapta perfectamente a cualquier ambiente, aportando equilibrio y sofisticación a la decoración de tu hogar. Ideal para quienes buscan un refugio de calma en medio del día a día.",
        stock: 12,
        price: 750000,
        imagecover: "/img/sillon_amalfi_cover.webp", 
        images: [ "/img/sillon_amalfi_01.webp", "/img/sillon_amalfi_02.webp", "/img/sillon_amalfi_03.webp", "/img/sillon_amalfi_04.webp"],
        category: "sillones"
      },
      {
        id: "SM002",
        name: "Sillón Florencia",
        description: "Este sillón aporta una calidez natural a cualquier ambiente. Su tapizado suave al tacto invita a descansar, mientras que la estructura sólida ofrece soporte y durabilidad para el uso diario. Con un diseño que mezcla elegancia y confort, esta pieza versátil complementa cualquier estilo de decoración, añadiendo carácter y creando un rincón acogedor para relajarse.",
        stock: 8,
        price: 680000,
        imagecover: "/img/sillon_florencia_cover.webp",
        images: ["/img/sillon_florencia_01.webp", "/img/sillon_florencia_02.webp", "/img/sillon_florencia_03.webp", "/img/sillon_florencia_04.webp"],
        category: "sillones"
      },
      {
        id: "SM003",
        name: "Sillón Positano",
        description: "Este sofá de líneas limpias y elegantes está diseñado para integrarse perfectamente en cualquier espacio moderno. Su suave tapizado y sus cojines acolchados invitan a relajarse mientras ofrecen un soporte cómodo. Con patas de madera que aportan calidez y un toque natural, este sofá es ideal para crear una atmósfera acogedora y sofisticada en tu hogar. Perfecto para una sala de estar minimalista o como el complemento ideal en un ambiente más decorado, este sofá realza el espacio sin esfuerzo.",
        stock: 5,
        price: 820000,
        imagecover: "/img/sillon_positano_cover.webp",
        images: ["/img/sillon_positano_01.webp", "/img/sillon_positano_02.webp", "/img/sillon_positano_03.webp", "/img/sillon_positano_04.webp"],
        category: "sillones"
      },

      // Mesas
      {
        id: "MC001",
        name: "Mesa Mika",
        description: "Una mesa de escritorio minimalista y moderna, ideal para espacios de trabajo contemporáneos. Cuenta con una estructura de metal resistente, con patas finas pero robustas que aportan un toque industrial al diseño. La superficie de la mesa es amplia y lisa, perfecta para colocar una computadora, documentos y otros elementos esenciales para el trabajo diario. En uno de los laterales, se encuentran dos cajones funcionales con un diseño simple y elegante, ideales para organizar artículos de oficina como papeles, bolígrafos y pequeños objetos. La combinación del metal con los cajones de madera o un acabado liso en tonos neutros como blanco, negro o gris aporta armonía y versatilidad, adaptándose a diferentes estilos decorativos.",
        stock: 15,
        price: 380000,
        imagecover: "/img/mesa_mika_cover.webp",
        images: ["/img/mesa_mika_01.webp", "/img/mesa_mika_02.webp", "/img/mesa_mika_03.webp", "/img/mesa_mika_04.webp"],
        category: "mesas"
      },
      {
        id: "MC002",
        name: "Mesa Park",
        description: "Una mesa ratona de diseño elegante y contemporáneo, perfecta para salas de estar modernas. Su estructura rectangular está hecha de madera de alta calidad, con un acabado suave y pulido que resalta la belleza natural del material. Las patas tienen una inclinación sutil, creando un efecto visual dinámico y único que combina estilo y funcionalidad. Este diseño de patas inclinadas aporta una sensación de ligereza y modernidad, al mismo tiempo que garantiza estabilidad y resistencia. Ideal para complementar sofás y otros muebles, esta mesa ratona es el punto focal perfecto para cualquier ambiente, con una estética que se adapta tanto a espacios minimalistas como más cálidos y acogedores.",
        stock: 10,
        price: 350000,
        imagecover: "/img/mesa_park_cover.webp",
        images: ["/img/mesa_park_01.webp", "/img/mesa_park_02.webp", "/img/mesa_park_03.webp", "/img/mesa_park_04.webp"],
        category: "mesas"
      },
      {
        id: "MC003",
        name: "Mesa Baek",
        description: "Un escritorio rectangular con un diseño industrial y moderno, ideal para espacios de trabajo que combinan funcionalidad y estilo. La superficie del escritorio está hecha de madera de tono cálido, con un acabado natural que resalta las vetas del material y aporta calidez al ambiente. El escritorio cuenta con tres cajones que ofrecen un amplio espacio de almacenamiento para organizar documentos y otros objetos esenciales. Las patas de metal negro, en forma de X, proporcionan una base robusta y estable, al mismo tiempo que añaden un toque contemporáneo y estilizado al diseño. Esta mesa es perfecta para aquellos que buscan un escritorio con carácter y versatilidad, que se adapta a diferentes estilos de decoración.",
        stock: 7,
        price: 400000,
        imagecover: "/img/mesa_baek_cover.webp",
        images: ["/img/mesa_baek_01.webp", "/img/mesa_baek_02.webp", "/img/mesa_baek_03.webp", "/img/mesa_baek_04.webp"],
        category: "mesas"
      },
      // Lámparas
      {
        id: "LP001",
        name: "Lámpara Tidy",
        description: "Una lámpara de escritorio con un diseño industrial y robusto, ideal para espacios de trabajo modernos y creativos. Su estructura metálica, con acabados en tonos oscuros, aporta un toque vintage y funcional al mismo tiempo. La base es sólida, proporcionando estabilidad, mientras que el brazo ajustable permite dirigir la luz con precisión, adaptándose a las necesidades del usuario. La pantalla, también metálica, está diseñada para enfocar la luz de manera eficiente, creando una iluminación perfecta para tareas detalladas. Esta lámpara es ideal para escritorios, estudios o áreas de trabajo, combinando estilo y practicidad en un solo accesorio.",
        stock: 20,
        price: 220000,
        imagecover: "/img/lampara_tidy_cover.webp",
        images: ["/img/lampara_tidy_01.webp", "/img/lampara_tidy_02.webp", "/img/lampara_tidy_03.webp", "/img/lampara_tidy_04.webp"],
        category: "lamparas"
      },
      {
        id: "LP002",
        name: "Lámpara Tokio",
        description: "Una lámpara colgante de diseño moderno y elegante, fabricada en chapa moldeada con una estructura suave y curvada. Su superficie refleja la luz de manera cálida y difusa, creando un ambiente acogedor y lleno de estilo. Esta lámpara es ideal para espacios como comedores, cocinas o áreas de trabajo, aportando una iluminación funcional y contemporánea que complementa perfectamente cualquier decoración.",
        stock: 25,
        price: 140000,
        imagecover: "/img/lampara_tokio_cover.webp",
        images: ["/img/lampara_tokio_01.webp", "/img/lampara_tokio_02.webp", "/img/lampara_tokio_03.webp", "/img/lampara_tokio_04.webp"],
        category: "lamparas"
      },
      {
        id: "LP003",
        name: "Lámpara Kyoto",
        description: "Una lámpara de escritorio con un diseño minimalista y sofisticado, perfecta para quienes buscan simplicidad sin sacrificar estilo. Su estructura metálica de líneas limpias y finas, en tonos neutros, crea una estética elegante y moderna. La base compacta ofrece estabilidad, mientras que la pantalla, de forma sencilla y funcional, emite una luz suave y focalizada, ideal para crear un ambiente de trabajo cómodo y sereno. Esta lámpara es perfecta para escritorios modernos, estudios o áreas de trabajo que requieran una iluminación eficiente y discreta.",
        stock: 10,
        price: 200000,
        imagecover: "/img/lampara_kyoto_cover.webp",
        images: ["/img/lampara_kyoto_01.webp", "/img/lampara_kyoto_02.webp", "/img/lampara_kyoto_03.webp", "/img/lampara_kyoto_04.webp"],
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