export const createCarBodyMock = {
    name: "carro 1",
    description: "carro esportivo" || null ,
    brand: "Fiat",
    year: 2024,
    km: 1000
}

export const carBodyMock = {
    id: "9f8363c9-1b85-47fd-8463-59edbff57437",
    name: "carro",
    description: "carro economico",
    brand: "carro passeio",
    year: 2024,
    km: 1500,
};

export const carBodyInvalidMock = {
    name: 2222,
    description: "carro esportivo" || null ,
    brand: "Fiat",
    year: "2024",
    km: "1000"
}

export const updateCarBodyMock = {
    name: "Carro atualizado",
    description: "Descrição atualizada" || null,
    brand: "marca atualizada",
    year: 2030,
    km: 4321,
 };



export const getListCarsMock = [
    {
        id: "9f8363c9-1b85-47fd-8463-59edbff57437",
        name: "carro",
        description: "carro economico" || null,
        brand: "carro passeio",
        year: 2024,
        km: 1500,
    },

    {
        id: "9f8363c9-1b85-47fd-8463-59edbff57437",
        name: "carro",
        description: "carro esportivo" || null,
        brand: "carro passeio",
        year: 2024,
        km: 1500,
    }

];

export const createListCarsMock = [
    {
        name: "carro",
        description: "carro economico",
        brand: "carro passeio",
        year: 2024,
        km: 1500,
    },

    {
        name: "carro",
        description: "carro economico",
        brand: "carro passeio",
        year: 2024,
        km: 1500,
    }

]