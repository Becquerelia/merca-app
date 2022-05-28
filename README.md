# Mercadona Choco - App

Mini catalog of chocolate products from Mercadona available for consult in web and mobile version.

You can visit it at: https://mercadona-choco.netlify.app

## Description:

This mini App, built as part of a technical test, show a catalog of chocolate products from Mercadona extracted from a free API of the company. The catalog shows a list of products by category whose information can be consulted in detail. Moreover, it allows creation of new categories and products, as well as their editing and deletion, outside of data provided by the API.

## Data Structure:

### Front-End Routes (React App):

| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | NavBar & HomePage    | public      | Regular home page with direct access to the list of categories |
| `/categories-list`        | CategoriesList       | public      | List of clickable categories to access their corresponding products. It also contains an option to add a new category, as well as edit and delete it.  |
| `/categories-list/:id/product-list`| ProductList | public      | List of all products by category with the information of each one available and the possibility of zooming each image by clicking on it. It also contains an option to add a new product, as well as edit and delete it. |
| `/contact`                | Contact              | public      | Contact with Mercadona company |


###  Pages:

- Home
- CategoriesList
- ProductList
- Error
- NotFound

###  Components:

- NavBar
- AddCategoryForm
- AddForm
- ProductDetails
- Footer

### API used:

https://tienda.mercadona.es/api/v1_1/categories/92

###  Available Scripts

In the project directory, you can run `npm start` to run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser; the page will reload when you make changes.
You may also see any lint errors in the console.

⚠️ To access API data from browser, you may need to enable <i>Moesif Origin & CORS Changer</i> extension in order to unlock CORS policy and fix 'Access-Control-Allow-Origin' error. If not, the app may redirect to Error 500 when trying to get the data.
