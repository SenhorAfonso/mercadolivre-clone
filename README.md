# mercadolivre-clone
This is a clone of Mercado Livre site.

# todoist

## mandatory

**features**

1. mongodb
2. typescript
3. express
4. Eslint
5. Test
6. jwt
7. hash
8. custom errors
9. front end
10. tests
11. file upload (with cloudinry)
12. email sending
13. payment

## routes
**user's routes**
1. register new user
2. login user

**ecommerce routes**
1. retrieve all public items
  1. search by:
      1. seller's name
      2. item name
      3. price
      4. company
      5. category
2. retrieve user's items
3. add new item to ecommerce
4. update item
5. delete item
6. buy item

## collections
user: {
  name,
  email
  password
}

itens-ecommerce: {
  name,
  img,
  description,
  rating,
  company,
  category,
  seller
}