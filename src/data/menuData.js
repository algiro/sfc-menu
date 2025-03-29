// menuData.js
export const cafes = [
    {
        id: 1,
        name: "Cafe Expreso",
        price: "1,20"
    },
    {
        id: 2,
        name: "Expreso Doble",
        price: "1,50"
    },
    {
        id: 3,
        name: "Cortado Corto/Largo",
        price: "1,30 / 1,40"
    },
    {
        id: 4,
        name: "Café con Leche",
        price: "1,50"
    },
    {
        id: 5,
        name: "Café Mug",
        price: "2,00"
    },
    {
        id: 6,
        name: "Descafeinado Cortado corto/largo",
        price: "1,40/1,50"
    },
    {
        id: 7,
        name: "Chocolate",
        price: "1,90"
    },
    {
        id: 8,
        name: "Capuccino/descafeinado",
        price: "1,80/1,90"
    },
    {
        id: 9,
        name: "Copa Soul (chocolate,café, nata,sirope)",
        price: "4,00"
    },
    {
        id: 10,
        name: "Barraquito",
        price: "2,10"
    }
];

export const te = [
    {
        id: 1,
        name: "Manzanilla, Tila, Menta Poleo",
        price: "1,20"
    },
    {
        id: 2,
        name: "Infusiones y tés a granel",
        price: "2,20"
    },
    {
        id: 3,
        name: "Té Matcha",
        price: "2,50"
    }
];

export const bebidas = [
    {
        id: 1,
        name: "Agua con y sin gas (0,50 cl)",
        price: "1,20"
    },
    {
        id: 2,
        name: "Zumo de Naranja (0,25 cl)",
        price: "1,80"
    },
    {
        id: 3,
        name: "Zumo de Naranja (0,38 cl)",
        price: "1,40 /1,50"
    },
    {
        id: 4,
        name: "Kombucha (varios sabores disponibles)",
        price: "1,50"
    },
    {
        id: 5,
        name: "Appleteiser,Aquarius o Nestea",
        price: "1,90"
    },
    {
        id: 6,
        name: "Refrescos",
        price: "1,60"
    },
    {
        id: 7,
        name: "Tonica",
        price: "2,10"
    },
    {
        id: 8,
        name: "Malta",
        price: "1,50"
    }
];

export const tostas = [
    {
        id: 1,
        name: "Koko Taylor",
        ingredients: "Huevo Duro, Aguacate Y Sésamo Negro.",
        tostaPrice: "4,70",
        pulgaPrice: "3,00",
        alergenos: {
            huevo: true,
            gluten: true,
            sesamo: true,
            frutoSecos: false,
            lacteos: false,
            vegan: false
        }
    },
    {
        id: 2,
        name: "Lauryn Hill",
        ingredients: "Tomate, Aguacate, Yogur Y Pistacho.",
        tostaPrice: "4,80",
        pulgaPrice: "3,00",
        alergenos: {
            huevo: false,
            gluten: true,
            sesamo: false,
            frutoSecos: true,
            lacteos: true,
            vegan: false
        },
        opcionVegana: true
    },
    {
        id: 3,
        name: "Sharon Jones",
        ingredients: "Tomate, Aguacate, Yogur Y Pistacho.",
        tostaPrice: "4,90",
        pulgaPrice: "3,00",
        alergenos: {
            huevo: false,
            gluten: true,
            sesamo: false,
            frutoSecos: false,
            lacteos: true,
            vegan: false
        }
    },
    {
        id: 4,
        name: "Joss Stone",
        ingredients: "Aguacate, Queso semi curado, Almendra, Dátil Y Canela",
        tostaPrice: "5,20",
        pulgaPrice: "3,80",
        alergenos: {
            huevo: false,
            gluten: true,
            sesamo: false,
            frutoSecos: true,
            lacteos: true,
            vegan: false
        }
    },
    {
        id: 5,
        name: "Roberta Flack",
        ingredients: "Mantequilla Y Mermelada",
        tostaPrice: "3,20",
        pulgaPrice: "2,50",
        alergenos: {
            huevo: false,
            gluten: true,
            sesamo: false,
            frutoSecos: false,
            lacteos: true,
            vegan: false
        },
        opcionVegana: true
    },
    {
        id: 6,
        name: "Billie Holiday",
        ingredients: "Aove* Y Tomate",
        tostaPrice: "3,20",
        pulgaPrice: "2,70",
        alergenos: {
            huevo: false,
            gluten: true,
            sesamo: false,
            frutoSecos: false,
            lacteos: false,
            vegan: true
        },
        opcionVegana: false
    },
    {
        id: 7,
        name: "Amy Winehouse",
        ingredients: "Tomate Cherry, Pesto Casero Y Queso De Cabra.",
        tostaPrice: "4,80",
        pulgaPrice: "3,00",
        alergenos: {
            huevo: false,
            gluten: true,
            sesamo: false,
            frutoSecos: true,
            lacteos: true,
            vegan: false
        },
        opcionVegana: true
    }

];
export const arepas = [
    {
        id: 1,
        name: "Simon Dìaz",
        ingredients: "Aguacate + questo tierno de vaca y cabra",
        price: "4,70",
        alergenos: {
            lacteos: true
        }
    },
    {
        id: 2,
        name: "Reina Pepià",
        ingredients: "Proteina de soja, guacamole, veganesa, guisantes",
        price: "4,70",
        alergenos: {
            lacteos: true,
        }
    },
    {
        id: 3,
        name: "Soledad Bravo",
        ingredients: "Huevo, tomate, cebolla, ajì dulce, mantequilla o margarina",
        price: "4,70",
        alergenos: {
            lacteos: true,
            huevo: true
        }
    },
    {
        id: 4,
        name: "Billo's Caracas Boys",
        ingredients: "Questo tierno de vaca y cabra, mantequilla o margarina",
        price: "4,70",
        alergenos: {
            lacteos: true
        }
    },
    {
        id: 5,
        name: "Desorden Pùblico",
        ingredients: "Salchicha de proteina de guisantes, veganesa, guisantes, cebolla (opcional)",
        price: "4,70",
        alergenos: {
            vegan: true
        }
    },
    {
        id: 6,
        name: "Arepitas Dulces",
        ingredients: "Arepa frita, panelam matalauva",
        price: "3,00",
        alergenos: {
            vegan: true
        }
    }
];
