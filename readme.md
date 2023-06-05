# FoodZone
- FoodZone is a Node.js backend project for a food ordering platform. It offers API endpoints for user registration, login, password reset, restaurant listing, menu retrieval, menu item management, order placement, and order status updates. With FoodZone, users can easily find restaurants, browse menus, place orders, and track their order status.
- -----
| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | /api/register | This endpoint should allow users to register. Hash the password on store. | 201 |
| POST | /api/login | This endpoint should allow users to login. Return JWT token on login. | 201 |
| PUT / PATCH | /api/user/:id/reset | This endpoint should allow users to reset the password identified by user id, providing the current password and new password in the body. | 204 |
| GET | /api/restaurants | This endpoint should return a list of all available restaurants. | 200 |
| GET | /api/restaurants/:id | This endpoint should return the details of a specific restaurant identified by its ID. | 200 |
| GET | /api/restaurants/:id/menu | This endpoint should return the menu of a specific restaurant identified by its ID. | 200 |
| POST / PUT | /api/restaurants/:id/menu | This endpoint should allow the user to add a new item to a specific restaurants menu identified by it id. | 201 |
| DELETE | /api/restaurants/:id/menu/:id | This endpoint should allow the user to delete a particular menu item identified by its id from a specific restaurant. | 202 |
| POST | /api/orders | This endpoint should allow the user to place an order. | 201 |
| GET | /api/orders/:id | This endpoint should return the details of a specific order identified by its ID. | 200 |
| PUT / PATCH | /api/orders/:id | This endpoint should allow users to update the status of a specific order identified by its ID. | 204 |


## get restaurat details
```http://localhost:8080/restaurants/644cd2f8ad0195c03dd06a19 ```


## user signup
<!-- creating user -->
```
{
  "name": "chikkuuu",
  "email": "chikkuuu@gmail.com",
  "password": "12334",
  "address": {
        "street": "Lalbagh",
        "city": "Nathdwara",
        "state": "rajasthan",
        "country": "india",
        "zip": "313301"
    }
}
```

## user login
<!-- creating user -->
```
 {
  "email": "chikkuuu@gmail.com",
  "password": "1234"
 } 

```

 ## updataing order 
 {
   
        "user": "644cd2f8ad0195c03dd06a19",
        "restaurant": "644cd2f8ad0195c03dd06a19",
        "items": [{
            "name": "Strsdfaasdfasdfsdfing",
            "price":1231,
            "quantity": 2
        }],
        "totalPrice": 12323,
        "deliveryAddress": {
            "street": "Stradfasdfing",
            "city": "String",
            "state": "String",
            "country": "String",
            "zip": "String"
        }
      
    }


## creating new order
{
   
        "user": "644cd2f8ad0195c03dd06a19",
        "restaurant": "644cd2f8ad0195c03dd06a19",
        "items": [{
            "name": "Strsdfaasdfasdfsdfing",
            "price":1231,
            "quantity": 2
        }],
        "totalPrice": 12323,
        "deliveryAddress": {
            "street": "Stradfasdfing",
            "city": "String",
            "state": "String",
            "country": "String",
            "zip": "String"
        }
      
    }  



## adding restaurant
```

{
  "name": "blackhole",
  "address": {
    "street": "String",
    "city": "String",
    "state": "String",
    "country": "String",
    "zip": "String"
  },
  "menu": [
    {
      "name": "String",
      "description": "String",
      "price": 1212,
      "image": "String"
    }
  ]
}

```

## adding items in restaurants menu 
```http://localhost:8080/restaurants/644cd2f8ad0195c03dd06a19/menu```

```
    {
      "name": "burgur",
      "description": "String",
      "price": 1212,
      "image": "String"
    }
  

```

## delete any items form restaurant menu
```http://localhost:8080/restaurants/644cd2f8ad0195c03dd06a19/menu/644cd5008c36c91b0f023f2d```

