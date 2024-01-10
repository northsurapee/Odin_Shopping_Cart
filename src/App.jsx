import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import { useState } from "react";
import Bag from "./component/Bag.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
    // Control flow
    const [isBagOpen, SetBagOpen] = useState(false);
    const [bagItem, setBagItem] = useState([]);

    function handleAddItem(item) {
      if (!bagItem.some(existingItem => existingItem.name === item.name)) {
          const newShoppingBagItem = [...bagItem, item];
          setBagItem(newShoppingBagItem);
          console.log("Done add item!")
      } else {
          console.log("Item already exists in the shopping bag");
      }
    }
  
    function handleDeleteItem(itemName) {
        const updatedShoppingBagItem = bagItem.filter(item => item.name !== itemName);
        setBagItem(updatedShoppingBagItem);
    }

    return (
        <>
            <Header onOpen={() => SetBagOpen(true)}/>
            <Bag 
                initialBagItem={bagItem}
                isOpen={isBagOpen}
                onClose={() => SetBagOpen(false)}
                onDelete={handleDeleteItem}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />}>
                <Route index />
                <Route path="category/:category" />
                </Route>
                <Route path="/product/:id" element={<SingleProduct onAdd={handleAddItem}/>} />
            </Routes>
            <Footer />
        </>
    );
}





// import React from "react";
// import { createBrowserRouter, RouterProvider} from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Shop from "./pages/Shop/Shop.jsx";
// import SingleProduct from "./pages/SingleProduct/SingleProduct";
// import Header from "./component/Header.jsx";
// import Footer from "./component/Footer.jsx";
// import { useState } from "react";
// import Bag from "./component/Bag.jsx";

// export default function App() {
//     // Control flow
//     const isBlack = !useLocation().pathname.startsWith("/shop");
//     const [isBagOpen, SetBagOpen] = useState(false);
//     const [bagItem, setBagItem] = useState([]);

//     function handleAddItem(item) {
//       if (bagItem.some(existingItem => existingItem.id === item.id)) {
//           const newShoppingBagItem = [...bagItem, item];
//           setBagItem(newShoppingBagItem);
//       } else {
//           console.log("Item already exists in the shopping bag");
//       }
//     }
  
//     function handleDeleteItem(itemName) {
//         const updatedShoppingBagItem = bagItem.filter(item => item.name !== itemName);
//         setBagItem(updatedShoppingBagItem);
//     }

//     // Create Browser Router
//     const router = createBrowserRouter([
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/shop",
//         element: <Shop />,
//         children: [
//           {
//             path: "category/:category"
//           }
//         ]
//       },
//       {
//         path: "/product/:id",
//         element: <SingleProduct onAdd={handleAddItem}/>
//       }
//     ]);

//     return (
//         <React.StrictMode>
//           <Header onOpen={() => SetBagOpen(true)}/>
//           <Bag 
//             bagItem={bagItem}
//             isOpen={isBagOpen}
//             onClose={() => SetBagOpen(false)}
//             onDelete={handleDeleteItem}
//           />
//           <RouterProvider router={router} />
//           <Footer />
//         </React.StrictMode>
//     );
// }


