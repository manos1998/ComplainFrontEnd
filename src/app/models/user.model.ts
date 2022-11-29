export class User {
    id?: any;
    username?: string;
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    pincode?: string;
    address?: string;
    roles?: any;
}

// {
//     "id": 1,
//     "username": "admin",
//     "email": "admin@abccompany.com",
//     "password": "$2a$10$EtX6LfBDkUERDmyFudGUve75p2ybJ/55EY.iwJD9P7KWIShb/XJWm",
//     "firstname": "FirstName",
//     "lastname": "LastName",
//     "phone": "9833651895",
//     "pincode": "400101",
//     "address": "Address of Client",
//     "roles": [
//         {
//             "id": 1,
//             "name": "ROLE_ADMIN"
//         },
//         {
//             "id": 5,
//             "name": "ROLE_USER"
//         }
//     ]
// }