// menuData.js
export const cafes = [
    {
        id: 1,
        name: "Cafe Expreso",
        price: "1,30"
    },
    {
        id: 2,
        name: "Expreso Doble",
        price: "2,50"
    },
    {
        id: 3,
        name: "Cortado Corto/Largo",
        price: "1,40 / 1,50"
    },
    {
        id: 4,
        name: "Café con Leche",
        price: "1,80"
    },
    {
        id: 5,
        name: "Café Mug",
        price: "2,10"
    },
    {
        id: 6,
        name: "Cafe Americano",
        price: "1,70"
    },
    {
        id: 7,
        name: "Leche y Leche corto/largo",
        price: "1,50 / 1,60"
    },
    {
        id: 8,
        name: "Café bombón corto/largo",
        price: "1,40 / 1,50"
    },
    {
        id: 9,
        name: "Chocolate",
        price: "2,00"
    },
    {
        id: 10,
        name: "Capuccino",
        price: "2,00"
    },
    {
        id: 11,
        name: "Copa Soul (chocolate,café, nata,sirope)",
        price: "4,10"
    },
    {
        id: 12,
        name: "Barraquito",
        price: "2,20"
    },
    {
        id: 14,
        name: "Flat White",
        price: "3,00"
    },
    {
        id: 15,
        name: "Affogato",
        price: "4,50"
    },
    {
        id: 16,
        name: "Babyccino",
        price: "2,00"
    }
];

export const te = [
    {
        id: 1,
        name: "Manzanilla, Tila, Menta Poleo",
        price: "1,30"
    },
    {
        id: 2,
        name: "Infusiones y tés a granel",
        price: "pregunta por nuestros sabores 2,30"
    },
    {
        id: 3,
        name: "Té Matcha",
        price: "2,60"
    },
    {
        id: 4,
        name: "Leche dorada (Golden Milk)",
        price: "2,60"
    },
    {
        id: 5,
        name: "Té Chai",
        price: "2,60"
    }
];

export const bebidas = [
    {
        id: 1,
        name: "Agua con y sin gas (0,50 cl)",
        price: "1,30"
    },
    {
        id: 2,
        name: "Zumo de Naranja (0,25 cl)",
        price: "2,80"
    },
    {
        id: 3,
        name: "Zumo de Naranja (0,38 cl)",
        price: "3,80"
    },
    {
        id: 4,
        name: "Kombucha (varios sabores disponibles)",
        price: "3,00"
    },
    {
        id: 5,
        name: "Appleteiser,Aquarius o Nestea",
        price: "2,00"
    },
    {
        id: 6,
        name: "Refrescos",
        price: "1,70"
    },
    {
        id: 7,
        name: "Tonica",
        price: "2,20"
    },
    {
        id: 8,
        name: "Malta",
        price: "1,60"
    },
    {
        id: 9,
        name: "Bebida refrescante del dia (0,38 cl)",
        price: "3,00"
    }
];

export const tostas = [
    {
        id: 1,
        name: "Koko Taylor",
        ingredients: "Huevo Duro, Aguacate Y Sésamo Negro.",
        tostaPrice: "6,00",
        pulgaPrice: "4,20",
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
        tostaPrice: "5,80",
        pulgaPrice: "4,00",
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
        ingredients: "Aguacate, Tomate Cherry y Mozzarella.",
        tostaPrice: "5,80",
        pulgaPrice: "4,00",
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
        tostaPrice: "6,45",
        pulgaPrice: "4,65",
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
        tostaPrice: "4,75",
        pulgaPrice: "3,00",
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
        tostaPrice: "4,50",
        pulgaPrice: "3,00",
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
        tostaPrice: "6,00",
        pulgaPrice: "4,20",
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
        id: 8,
        name: "Edith Piaf",
        ingredients: "Aove*, Tomate, Tortilla Francesa Y Canónigos",
        tostaPrice: "5,80",
        pulgaPrice: "4,00",
        alergenos: {
            huevo: true,
            gluten: true,
            sesamo: false,
            frutoSecos: false,
            lacteos: false,
            vegan: false
        }
    },
    {
        id: 9,
        name: "Nina Simone",
        ingredients: "Pesto Casero, Canónigos, Queso Crema (disponible opción sin lactosa) Y Sésamo Negro.",
        tostaPrice: "5,80",
        pulgaPrice: "4,00",
        alergenos: {
            huevo: false,
            gluten: true,
            sesamo: true,
            frutoSecos: true,
            lacteos: true,
            vegan: false
        }
    },
    {
        id: 10,
        name: "Ella Fitzgerald",
        ingredients: "Pesto Casero, Tomate Seco, Hummus Casero, Cebolla Roja Y Mozzarella.",
        tostaPrice: "6,70",
        pulgaPrice: "4,90",
        alergenos: {
            huevo: false,
            gluten: true,
            sesamo: false,
            frutoSecos: true,
            lacteos: true,
            vegan: false
        },
        opcionVegana: false
    }

];
export const arepas = [
    {
        id: 1,
        name: "Simon Dìaz",
        ingredients: "Aguacate + queso tierno de vaca y cabra",
        price: "4,80",
        alergenos: {
            lacteos: true
        }
    },
    {
        id: 2,
        name: "Reina Pepià",
        ingredients: "Proteina de soja, guacamole, veganesa, guisantes",
        price: "4,80",
        alergenos: {
            vegan: true
        }
    },
    {
        id: 3,
        name: "Soledad Bravo",
        ingredients: "Huevo, tomate, cebolla, ajì dulce, mantequilla o margarina",
        price: "4,80",
        alergenos: {
            lacteos: true,
            huevo: true
        }
    },
    {
        id: 4,
        name: "Franco de Vita",
        ingredients: "Queso tierno de vaca y cabra, plátano frito",
        price: "4,70",
        alergenos: {
            lacteos: true
        }
    },
    {
        id: 5,
        name: "Billo's Caracas Boys",
        ingredients: "queso tierno de vaca y cabra, mantequilla o margarina",
        price: "4,80",
        alergenos: {
            lacteos: true
        }
    },
    {
        id: 6,
        name: "Desorden Pùblico",
        ingredients: "Salchicha de proteina de guisantes, veganesa, guisantes, cebolla (opcional)",
        price: "4,80",
        alergenos: {
            vegan: true
        }
    },
    {
        id: 7,
        name: "Arepitas Dulces",
        ingredients: "Arepa frita, panela, matalauva",
        price: "2,50",
        alergenos: {
            vegan: true
        }
    },
    {
        id: 8,
        name: "Arepitas Dulces con queso",
        ingredients: "Arepa frita, Panela, queso tierno de vaca y cabra , Matalauva",
        price: "2,75",
        alergenos: {
            vegan: false
        }
    }

];
