import { doc, deleteDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./Firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  async function getProducts() {
    try {
      const q = query(collection(db, "products"));

      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        const temp = {
          id: doc.id,
          ...doc.data(),
        };
        data.push(temp);
      });

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteDocument(id) {
    try {
      await deleteDoc(doc(db, "products", id));
      toast.success("document removed");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Memory</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.memory}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => deleteDocument(product.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
