import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    address: [
      {
        _id: uuid(),
        name: "Adarsh Balika",
        street: "H. No. 21/4 , 100ft Ring Road, Vaishali Nagar",
        city: "Bangalore",
        state: "Karnataka ",
        country: "India",
        zipCode: "530068",
        mobile: "9829124431",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Toufiq",
    lastName: "Choudhari",
    email: "toufiq@gmail.com",
    password: "toufiq1234",
    address: [
      {
        _id: uuid(),
        name: "Toufiq Choudhari",
        street: "Sagar Plaza , Naigaon",
        city: "Bhiwandi",
        state: "Maharashtra",
        country: "India",
        zipCode: "421302",
        mobile: "9359550208",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
