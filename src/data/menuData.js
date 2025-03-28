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
        price: "1,80"
    },
    {
        id: 3,
        name: "Cortado Corto/Largo",
        price: "1,40 /1,50"
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
        name: "Refrescos",
        price: "2,00"
    },
];

export const tostas = [
    {
        id: 1,
        name: "Koko Taylor",
        ingredients: "Huevo Duro, Aguacate Y Sésamo Negro.",
        tostaPrice: "4,70",
        pulgaPrice: "3,00",
        alergenos: {
            frutoSecos: true,
            gluten: true,
            sesamo: false
        }
    },
    {
        id: 2,
        name: "Lauryn Hill",
        ingredients: "Tomate, Aguacate, Yogur Y Pistacho.",
        tostaPrice: "4,70",
        pulgaPrice: "3,00"
    },
    {
        id: 3,
        name: "Sharon Jones",
        ingredients: "Tomate, Aguacate, Yogur Y Pistacho.",
        tostaPrice: "4,70",
        pulgaPrice: "3,00"
    }
];
export const arepas = [
    {
        id: 1,
        name: "Simon Dìaz",
        ingredients: "Aguacate + questo tierno de vaca y cabra",
        price: "4,70",
        alergenos: {
            frutoSecos: true,
            gluten: true,
            sesamo: false
        }
    },
    {
        id: 1,
        name: "Reina Pepià",
        ingredients: "Proteina de soja, guacamole, veganesa, guisantes",
        price: "4,70",
        alergenos: {
            frutoSecos: true,
            gluten: true,
        }
    },
    {
        id: 3,
        name: "Soledad Bravo",
        ingredients: "Huevo, tomate, cebolla, ajì dulce, mantequilla o margarina",
        price: "4,70",
        alergenos: {
            frutoSecos: true,
            gluten: true,
            huevo: true
        }
    }
];
