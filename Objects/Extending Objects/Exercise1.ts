type Similar = {
    id: string;
    createdAt: Date;
};

type User1 = {
    name: string;
    email: string;
} & Similar;

type Product = {
    name: string;
    price: number;
} & Similar;

