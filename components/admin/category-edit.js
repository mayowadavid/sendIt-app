import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../context/mainContext";
import Button from "../general/button";
import { createMutation, updateQuery, makeQuery } from "../functions/function";
import { useDataQuery } from "../functions/customHook";
import { SINGLE_CATEGORY } from "../queries/categories/categories";

const CategoryEdit = ({ handleSwitch }) => {
  const {runQuery, result} = useDataQuery(SINGLE_CATEGORY);
  const { createCategory, createSubCategory, router } = useContext(MainContext);
  const [loading, setLoading] = useState(false);
  const { id } = router.query;
  const subinitial = {
    name: "",
  };
  const initialState = {
    status: "active",
    name: "",
    description: "",
    subCategory: [],
  };
  const [open, setOpen] = useState(false);

  const [categoryState, setCategoryState] = useState(initialState);

  const [subCategoryState, setSubCategoryState] = useState(subinitial);

  useEffect(()=> {
    id && (async()=> {
      const variable = "id";
      const result = await makeQuery(runQuery, id, variable);
      if(result?.category){ 
        result?.category?.status == 'active' ? setOpen(true): setOpen(false);
        setCategoryState({categoryState, ...result?.category})};
    })();
  }, [])

  const handleAction = (e) => {
    e.preventDefault();
    setLoading(!loading);
  };

  // disable and enable category
  const handleSwitchButton = (e) => {
    e.preventDefault();
    setOpen(!open);
    if (categoryState.status == "active") {
      setCategoryState({ ...categoryState, status: "draft" });
    }
    setCategoryState({ ...categoryState, status: "active" });
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };

  const handleSubCategory = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSubCategoryState({ ...subCategoryState, [name]: value });
  };

  const editSubCategory = (e, i) => {
    e.preventDefault();
    const { subCategory } = categoryState;
    setSubCategoryState({ name: subCategory[i].name });
    const editedCategory = subCategory.filter(
      (d) => d.name !== subCategory[i].name
    );
    setCategoryState({ ...categoryState, subCategory: editedCategory });
  };

  const submitSubCategory = (e) => {
    e.preventDefault();
    const { subCategory } = categoryState;
    if (
      subCategory.some((el) => el.name == subCategoryState.name) == false &&
      subCategoryState.name !== ""
    ) {
      setCategoryState({
        ...categoryState,
        subCategory: [...subCategory, subCategoryState],
      });
      setSubCategoryState(subinitial);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    const { id, name, description, status, subCategory } = categoryState;
    const createData = {
      name,
      description,
      status 
    };
    const variableName = 'categoryParams';
    const data = await createMutation(createCategory, variableName, createData);
    if(data){
        const updateId = { categoryId: data.id };
        const updateVariableName = 'categoryParams';
        await updateQuery(updateId, updateVariableName, createCategory, subCategory);
        await setCategoryState(initialState);
        setLoading(!loading);
        handleSwitch();
    }
  };

  return (
    <div>
      <div className="create_category_header_row flex_row">
        <div className="create_category_header">
          <p>Categories</p>
        </div>
        <div className="create_category_header_button xl4 sm6 flex_row">
          <div onClick={(e) => handleAction(e)} className="button">
            <Button>Cancel</Button>
          </div>
          <div onClick={submit} className="button">
            <Button loading={loading}>Save</Button>
          </div>
        </div>
      </div>
      <div className="create_category_body">
        <div className="create_category_container_row sm10 xl10">
          <div className="create_category_top_header">
            <p>Edit: Graphics Design Category</p>
          </div>
          <div className="admin_category_active_container flex_row">
            <div
              onClick={handleSwitchButton}
              className={open ? "active_category" : "non_active"}
            >
              <div
                className={open ? "active_category_switch" : "close_switch"}
              ></div>
            </div>
            <p>Active Category</p>
          </div>
          <div className="create_category_form">
            <div className="category_name">
              <p>Category Name</p>
              <input
                type="text"
                name="name"
                value={categoryState?.name}
                onChange={handleCategoryChange}
                placeholder="Name for new category"
              />
            </div>
            <div className="category_description">
              <p>Description</p>
              <textarea
                type="text"
                name="description"
                value={categoryState?.description}
                onChange={handleCategoryChange}
                placeholder="Category description"
              ></textarea>
            </div>
            <div className="subCategory">
              <p>Sub Category</p>
              <div className="subCategory_wrapper flex_row">
                {categoryState?.subCategory?.length > 0 &&
                  categoryState?.subCategory?.map((data, i) => {
                    return (
                      <div
                        key={i}
                        onClick={(e) => editSubCategory(e, i)}
                        className="subcategory_container flex_row remove_margin"
                      >
                        <p>{data.name}</p>
                        <img src="../../svg/pen-edit.svg" alt="" />
                      </div>
                    );
                  })}
              </div>
              <form onSubmit={(e) => submitSubCategory(e)}>
                <input
                  type="text"
                  value={subCategoryState.name}
                  onChange={handleSubCategory}
                  name="name"
                  placeholder="Sub category"
                />
              </form>
            </div>
            <div
              onClick={submitSubCategory}
              className="add_other_option flex_row"
            >
              <img src="/img/plus_circle.png" alt="" /> <p>Add other</p>
            </div>
            <div className="submit_category">
              <div className="button" onClick={(e) => handleAction(e)}>
                <Button>Cancel</Button>
              </div>
              <div className="button" onClick={(e) => submit(e)}>
                <Button loading={loading}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryEdit;
