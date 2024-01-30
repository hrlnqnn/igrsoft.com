import React, { useState } from "react";
import Product from "../../Data/Product.json";
import 'utils/18n';
import { useTranslation } from 'react-i18next';
import css from "components/ProductFilter/ProductFilter.module.css";
import All from "assets/Poftfolio/icon_all.png"
import Mac from "assets/Poftfolio/icon-product-mac.png";
import Phone from "assets/Poftfolio/icon-product-iphone.png";
import Tv from "assets/Poftfolio/icon-product-tv.png";
import Other from "assets/Poftfolio/icon_other.png";
import Spinner from "assets/Poftfolio/spinner.gif";
import { TfiSearch } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useEffect } from "react";
import { useMemo } from "react";

const CATEGORIES = {
    all: 0,
    desktop: 1,
    mobile: 2,
    tv: 3,
    other: 4
};

export const ProductFilter = () => {

    const { t } = useTranslation();
    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 0,
          margin: 2,
          transitionDuration: "300ms",
          "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
              backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
              opacity: 1,
              border: 0
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.5
            }
          },
          "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff"
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            color:
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[600]
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3
          }
        },
        "& .MuiSwitch-thumb": {
          boxSizing: "border-box",
          width: 22,
          height: 22
        },
        "& .MuiSwitch-track": {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
          opacity: 1,
          transition: theme.transitions.create(["background-color"], {
            duration: 500
          })
        }
    }));

    // const [items, setItems] = useState(Product);
    const[isLoading, setIsLoading] = useState(false);
    const [showArchive, setShowArchive] = useState(false);
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");

    const items = useMemo (() => {
        let chooseCategory;

        let prepareProducts = Product;

        if(!showArchive) {
            prepareProducts = prepareProducts.filter((product) => !product.isArchive)
        }
    
        switch (category) {
            case CATEGORIES.all:
                break;
            case CATEGORIES.desctop:
                chooseCategory = "Desktop";
                break;
            case CATEGORIES.mobile:
                chooseCategory = "Mobile";
                break;
            case CATEGORIES.tv:
                chooseCategory = "Mobile / TV";
                break;
            case CATEGORIES.other:
                chooseCategory = "Library / Script";
                break;
            default:
                break;
        }

        if(chooseCategory) {
            prepareProducts = prepareProducts.filter((product) => product.category === chooseCategory);
        }

        if(search) {
            prepareProducts = prepareProducts
            .filter((product) => product.name.toLowerCase().includes(search) ||(product.tags && product.tags.some((tag) => tag && tag.toLowerCase().includes(search))))
        }

        return prepareProducts;
    }, [showArchive, category, search])

    useEffect ( () => {
        setIsLoading(true);

    const idTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {
            clearTimeout(idTimeout);
        }
    }, [items]);

    // const filterItems = (catItem) => {
    //     const updateItems = Product.filter((curItem) => {
    //         return curItem.category === catItem
    //     });
    //     setItems(updateItems);
    // }
    // const filterNames = e => {
    //     const search = e.target.value.toLowerCase()
    //     const filteredNames = Product.filter(item => item.name.toLowerCase().includes(search) || (item.tags && item.tags.some((tag) => tag && tag.toLowerCase().includes(search))))
    //     setItems(filteredNames)
    // }


    return (
        <section className={css.products}>
            <div className={css.products_content}>
                <h2 className={css.products_title}>Find the app you're looking for.</h2>
                <div className={css.products_form}>
                    <button className={css.form_button} disabled>
                        <TfiSearch size={18} className={css.form_icon} />
                    </button>
                    <input className={css.form_text} type="text" placeholder="Search app here..." onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className={css.products_block}>
                    <ul className={css.products_filter}>
                        <li onClick={() => setCategory(CATEGORIES.all)} className={css.filter_item}>
                            <div className={css.filter_icon}>
                                <img className={css.filter_img} src={All} alt="All" />
                            </div>
                            {t("portfolio_filter.all")}
                        </li>
                        <li onClick={() => setCategory(CATEGORIES.desktop)} className={css.filter_item}>
                            <div className={css.filter_icon}>
                                <img className={css.filter_img} src={Mac} alt="Mac" />
                            </div>
                            {t("portfolio_filter.desktop")}
                        </li>
                        <li onClick={() => setCategory(CATEGORIES.mobile)} className={css.filter_item}>
                            <div className={css.filter_icon} >
                                <img className={css.filter_img} src={Phone} alt="Phone" />
                            </div>
                            {t("portfolio_filter.mobile")}
                        </li>
                        <li onClick={() => setCategory(CATEGORIES.tv)} className={css.filter_item}>
                            <div className={css.filter_icon}>
                                <img className={css.filter_img} src={Tv} alt="Tv" />
                            </div>
                            {t("portfolio_filter.tv")}
                        </li>
                        <li onClick={() => setCategory(CATEGORIES.other)} className={css.filter_item}>
                            <div className={css.filter_icon} >
                                <img className={css.filter_img} src={Other} alt="Other" />
                            </div>
                            {t("portfolio_filter.other")}
                        </li>
                    </ul>
                    <div className={css.products_toggle}>
                        <p className={css.products_toggle_text}>{t("portfolio_filter.archive")}</p>
                        <FormGroup>
                            <FormControlLabel
                                    control={
                                        <IOSSwitch 
                                            sx={{ m: 1 }} 
                                            defaultChecked checked={showArchive}
                                            onChange = {(e) => {
                                                setShowArchive(e.target.checked)
                                            }}
                                        />
                                    }
                            />
                        </FormGroup>
                    </div>
                </div>
                <ul className={css.products_list}>
                        {
                            !isLoading ? items.map((value) => (           
                                <li key={value.id} className={css.products_item} >
                                    <Link to={value.link} className={css.products_link}>
                                            <img src={require(`../../assets/Poftfolio/${value.icon}`)} alt={value.title} className={css.products_image}></img>
                                            <h3>{value.name}</h3>
                                    </Link>
                                </li>
                            )) : (<img src={Spinner} alt={"Loading..."} className={css.products_spinner}></img>)
                        }
                </ul>
            </div>
        </section>
    )
}