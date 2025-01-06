import React, { useEffect, useState, useContext } from 'react'
import { useDataQuery } from "../functions/customHook";
import { GET_CATEGORIES } from "../queries/categories/categories";
import { MainContext } from '../../components/context/mainContext';

const CategoryButton = ({handleSwitch, displaySwitch, setSwitch}) => {
    const {runQuery, result} = useDataQuery(GET_CATEGORIES);
    const [allCategory, setAllCategory] = useState([]);
    const [option, setOption] = useState(false);
    const {router} = useContext(MainContext);
    useEffect(() =>{
        (async() => {
            const res = await runQuery();
            res?.data?.allCategories.length > 0 && setAllCategory([...res?.data?.allCategories])
        })();
    }, []);

    
  return (
    <div>
        <div className="all_category_button">
                    <div className="all_category_button_header_row flex_row">
                    <div className="all_category_header ordering">
                        <p>Category</p>
                    </div>
                    <div className="admin_search ordering category_search">
                        <img src="/img/Search.png" alt=""/>
                        <input type="text" name="search" placeholder="Search Categories"/>
                    </div>
                    <div className="admin_create_category_button ordering">
                        <p onClick={handleSwitch}>Create new category</p>
                    </div>
                    </div>
        </div>
        <div className="category_button_card_container">
        {
            allCategory.length > 0 && allCategory?.map((tags, indx)=>{
                return(
                    <CategoryTag 
                    key = {indx} 
                    tags = {tags} 
                    setSwitch = {setSwitch}
                    displaySwitch = {displaySwitch} />
                )
            })
        }
        </div>
    </div>
  )
}

const CategoryTag = ({tags, setSwitch, displaySwitch}) => {
    const [option, setOption] = useState(false);
    const {router} = useContext(MainContext);

    const handleOPtion = (e, id) => {
        e.preventDefault();
        let { display, create } = displaySwitch;
        setSwitch({
          display: !display,
          create: !create,
        });
        
        router.replace({
          pathname: "category",
          query: { view: "update", id: id },
        });
    };
    
    const handleDelete = (e, indx) => {
        e.preventDefault();
    }

    const {name, id, subCategory} = tags;
    return (
        <div className="category_button_card">
                        <div className="category_button_card_header_row flex_row">
                        <div className="flex_row mbw-jsty-btw mbw10">
                            <div className="category_button_card_header mbw8 remove_margin">
                                <p>{name}</p>
                            </div>
                            <div className="blog_card_option mbw-fi-e" onClick={() => setOption(!option)}>
                                <div className="category_edit_more">
                                    <img src="/img/more_horizontal.png" alt=""/>
                                </div>
                                {option && (
                                    <div className="category_card_option_drop mbw7">
                                    <div
                                        onClick={(e)=>handleOPtion(e, id)}
                                        className="blog_card_edit flex_row remove_margin"
                                    >
                                        <img src="/img/Edit Square.png" alt="" />
                                        <p>Update Category</p>
                                    </div>
                                    <div 
                                    onClick={(e)=>handleDelete(e, id)}
                                    className="blog_card_edit flex_row remove_margin">
                                        <img src="/img/redDelete.png" alt="" />
                                        <p>Delete Category</p>
                                    </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="category_button_card_body flex_row mbw10">
                        {subCategory?.length > 0 && subCategory?.map(({name}, i)=>{
                            return (
                                <p key={i}>{name}</p>
                            )
                        })}
                        </div>
                        </div>
                    </div>
    )
}

export default CategoryButton

