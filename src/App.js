import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Exercises from "./components/Exercises";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);

  const [term, setTerm] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bwapi.lifeinloop.in/api/bodyweight",
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
