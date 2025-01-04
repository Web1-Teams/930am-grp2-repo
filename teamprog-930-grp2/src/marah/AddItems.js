import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import Sidebar from "./Sidebar";

const AddItems = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        image: "",
        category: "Creatine",
        rating: 1,
        quantity: 1,
        isBestSeller: false,
    });

    const [categoryData, setCategoryData] = useState({
        name: "",
        image: "",
    });

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editItemId, setEditItemId] = useState(null);
    const [filterCategory, setFilterCategory] = useState("All");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const itemsSnapshot = await getDocs(collection(db, "items"));
                const categoriesSnapshot = await getDocs(collection(db, "categories"));

                const itemsData = itemsSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    isBestSeller: doc.data().isBestSeller || false,
                }));

                const categoriesData = categoriesSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setItems(itemsData);
                setCategories(categoriesData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === "isBestSeller" ? value === "true" : value });
    };

    const handleCategoryChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...categoryData, [name]: value });
    };

    const handleAddItem = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                const itemDoc = doc(db, "items", editItemId);
                await updateDoc(itemDoc, formData);
                alert("Item updated successfully!");
                setItems((prev) =>
                    prev.map((item) =>
                        item.id === editItemId ? { ...item, ...formData } : item
                    )
                );
            } else {
                const docRef = await addDoc(collection(db, "items"), formData);
                alert("Item added successfully!");
                setItems([...items, { id: docRef.id, ...formData }]);
            }
            resetForm();
        } catch (error) {
            console.error("Error adding/updating item: ", error);
            alert("Failed to add/update item. Check console for details.");
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            await deleteDoc(doc(db, "items", id));
            alert("Item deleted successfully!");
            setItems(items.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting item: ", error);
            alert("Failed to delete item. Check console for details.");
        }
    };

    const handleAddCategory = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "categories"), categoryData);
            alert("Category added successfully!");
            setCategories([...categories, { id: docRef.id, ...categoryData }]);
            setCategoryData({
                name: "",
                image: "",
            });
        } catch (error) {
            console.error("Error adding category: ", error);
            alert("Failed to add category. Check console for details.");
        }
    };

    const handleDeleteCategory = async (id) => {
        try {
            await deleteDoc(doc(db, "categories", id));
            alert("Category deleted successfully!");
            setCategories(categories.filter((category) => category.id !== id));
        } catch (error) {
            console.error("Error deleting category: ", error);
            alert("Failed to delete category. Check console for details.");
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            price: "",
            image: "",
            category: "Creatine",
            rating: 1,
            quantity: 1,
            isBestSeller: false,
        });
        setEditMode(false);
        setEditItemId(null);
    };

    const filteredItems =
        filterCategory === "All"
            ? items
            : filterCategory === "BestSeller"
                ? items.filter((item) => item.isBestSeller)
                : items.filter((item) => item.category === filterCategory);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="container-fluid p-4 bg-dark text-white d-flex" style={{ flex: 1 }}>
                <div className="w-75 pe-4">
                    <h1 className="mt-4">{editMode ? "Edit Item" : "Add Items"}</h1>
                    <form onSubmit={handleAddItem} className="mt-3">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Rating</label>
                            <select
                                className="form-control"
                                id="rating"
                                name="rating"
                                value={formData.rating}
                                onChange={handleInputChange}
                                required
                            >
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <option key={rating} value={rating}>
                                        {rating}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select
                                className="form-control"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="isBestSeller" className="form-label">Is Best Seller</label>
                            <select
                                className="form-control"
                                id="isBestSeller"
                                name="isBestSeller"
                                value={formData.isBestSeller}
                                onChange={handleInputChange}
                                required
                            >
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {editMode ? "Update Item" : "Add Item"}
                        </button>
                    </form>
                    <h2 className="mt-5">Items</h2>
                    <div className="mb-3">
                        <label htmlFor="filterCategory" className="form-label">Filter by Category</label>
                        <select
                            className="form-control"
                            id="filterCategory"
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="BestSeller">Best Sellers</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="row">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                <div className="card bg-light text-dark">
                                    <img
                                        src={item.image || "https://via.placeholder.com/150"}
                                        className="card-img-top"
                                        alt={item.title}
                                        style={{ objectFit: "cover", height: "180px" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{item.title}</h5>
                                        <p className="card-text text-center">{item.description}</p>
                                        <p className="card-text text-center">Price: {item.price}$$</p>
                                        <p className="card-text text-center">Quantity: {item.quantity}</p>
                                        <p className="card-text text-center">Rating: {item.rating} / 5</p>
                                        <p className="card-text text-center">Category: {item.category}</p>
                                        <p className="card-text text-center">
                                            Best Seller: {item.isBestSeller ? "Yes" : "No"}
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <button
                                                className="btn btn-warning"
                                                onClick={() => {
                                                    setEditMode(true);
                                                    setEditItemId(item.id);
                                                    setFormData(item);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteItem(item.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-25">
                    <h1 className="mt-4">Add Categories</h1>
                    <form onSubmit={handleAddCategory} className="mt-3">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Category Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={categoryData.name}
                                onChange={handleCategoryChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image"
                                name="image"
                                value={categoryData.image}
                                onChange={handleCategoryChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success">
                            Add Category
                        </button>
                    </form>
                    <h2 className="mt-5">Categories</h2>
                    <div className="row">
                        {categories.map((category) => (
                            <div key={category.id} className="col-12 mb-3">
                                <div className="card bg-light text-dark">
                                    <img
                                        src={category.image || "https://via.placeholder.com/150"}
                                        className="card-img-top"
                                        alt={category.name}
                                        style={{ objectFit: "cover", height: "120px" }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{category.name}</h5>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDeleteCategory(category.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItems;
