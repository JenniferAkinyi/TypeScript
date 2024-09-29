// interface Similar{
//     id: string;
//     createdAt: Date;
//   }
  
//   interface User2 {
//     name: string;
//     email: string;
//   }
  
//   interface Product1 {
//     name: string;
//     price: number;
//   }

interface User2 extends Similar {
    name: string;
    email: string;
}

interface Product1 extends Similar {
    name: string;
    price: number;
}