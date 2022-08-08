import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Exercises from "./components/Exercises";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import Navigation from "./Navigation/Navigation";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);

  const [term, setTerm] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight",
      headers: {
        "X-RapidAPI-Key": "7a083754d4msh502bfee4838b73cp1fe6edjsn4efc8701238e",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.request(options);
      setItems(res.data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    if (term === "") {
      return item;
    } else {
      return item.target.toLowerCase().includes(term.toLowerCase());
    }
  });

  //  current Items
  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstitem = indexOfLastitem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstitem, indexOfLastitem);

  //   Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navigation />
      <Navbar handleChange={handleChange} />
      <Exercises items={currentItems} loading={loading} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredItems.length}
        paginate={paginate}
      />
      <Footer />
    </div>
  );
};

export default App;
