import {argv} from 'process';

const [, , meth, ress] = argv

// GET PRODUCT & GET A SINGLE PRODUCT
if (meth == "GET" && ress.startsWith("products/")) {
  try {
    const response = await fetch('https://fakestoreapi.com/products/'+ ress.split('/')[1])
    const data = await response.json();
    console.log(data);
  } catch (error) {console.log(error);} 
} else if (meth == "GET"){
    try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json(); 
    console.log(data);    
    } catch (error) {console.log(error);}
}

// POST NEW PRODUCT
if (meth == "POST") {
  const title = argv[4]
  const price = argv[5]
  const category = argv[6]

  const product = { title: title, price: price, category: category };
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
    method: meth,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
    const data = await response.json();
    console.log(data);
  } catch (error) {console.log(error);} 
}

// DELETE SINGLE PRODUCT
if (meth == "DELETE" && ress.startsWith("products/")) {
  try {
    const response = await fetch('https://fakestoreapi.com/products/'+ ress.split('/')[1], {
    method: meth
  })
    const data = await response.json();
    console.log(data);
  } catch (error) {console.log(error);} 
}