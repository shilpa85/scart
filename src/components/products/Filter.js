import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectBrands, selectColors } from "../../actions/products";
import axios from 'axios';


function Filter (props) {

    const dispatch = useDispatch();

    const [minPrice, setMinPrice] = useState([]);
    const [maxPrice, setMaxPrice] = useState([]);

    const [colours, setColours] = useState([]);
    const [brands, setBrands] = useState([]);
    const [discounts, setDiscounts] = useState([]);

    const { productList, selectedColors, selectedBrands } = useSelector(state => state.products);

    useEffect(()=>{
        const _colours = {};
        const _brands = [];
        const _disounts = [];
        let _maxDisount = 0;
        productList.forEach((element) => {
            _brands.push(element.brand);
            _colours[element.colour.color] = element.colour.title;
            if(_maxDisount < element.discount){
                _maxDisount = element.discount;
            }
        });

        setBrands([...new Set(_brands)]);
        setColours(Object.entries(_colours));
        
        //Min and Max discounts
        for(let i= 10; i < _maxDisount+10; i+=10){
            _disounts.push(i);
        }
        setDiscounts(_disounts);

    }, [productList]);


    useEffect(()=>{
        axios.get('https://xebiascart.herokuapp.com/filters')
                    .then(res => {
                       if(res.data.length && res.data[2]){
                            const _minPrice =  res.data[2].values.filter(item=> item.key !== 'Max');
                            const _maxPrice =  res.data[2].values.filter(item=> item.key !== 'Min');
                            setMinPrice(_minPrice);
                            setMaxPrice(_maxPrice);
                       }
                     })

    }, []);


   const onChangeBrand = (brandName) => event => {

        const _selectedBrands = selectedBrands;
        const index = _selectedBrands.indexOf(brandName);
        if(index === -1){  
            _selectedBrands.push(brandName); 
        } else {
            _selectedBrands.splice( index, 1 );
        }

        dispatch(selectBrands([...new Set(_selectedBrands)]));

    }

    const onChangeColor = (color) => event => {

        const _selectedColors = selectedColors;
        const index = _selectedColors.indexOf(color);
        if(index === -1){  
            _selectedColors.push(color); 
        } else {
            _selectedColors.splice( index, 1 );
        }
        
        dispatch(selectColors([...new Set(_selectedColors)]));


    }
    
    
    
    return(
        <div className="filters-container">	
             <div className="filters-header"><h3>Filters</h3></div>				
             <form>					
                <div className="filters-item"><h4>Colour</h4>
                    <ul>
                        {colours &&
                            colours.map(([key, value]) =>
                                <li key={key}>
                                    <label>                                      
                                        <input 
                                            type="checkbox" 
                                            value={key}
                                            onChange={onChangeColor(value)}  
                                            checked={selectedColors && selectedColors.indexOf(value) !== -1?true:false}
                                       />
                                        <span>{value}</span>
                                    </label>
                                </li>
                            )
                        }
                    </ul> 
                    </div>

                    <div className="filters-item"><h4>Brand</h4>
                        <ul>
                            {brands &&
                                brands.map((brand) =>
                                    <li key={brand}>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value={brand}
                                                onChange={onChangeBrand(brand)} 
                                                checked={selectedBrands && selectedBrands.indexOf(brand) !== -1?true:false}
                                            />
                                            <span>{brand}</span>
                                        </label>
                                    </li>
                                )
                            }
                        </ul> 
                    </div>

                    <div className="filters-item">
                         <h4>Price</h4>
                        <div className="dropldown-filters">
                            <select name="min_price" aria-label="minimum price">
                                {minPrice.map(item =>
                                        <option value={item.key}  key={`min-${item.key}`}>{item.displayValue}</option>
                                    )
                                }
                            </select>
                            <select name="max_price" aria-label="maximum price">
                                <option value="Max" key="max">Max</option>
                                {maxPrice.map(item =>
                                        <option value={item.key} key={`max-${item.key}`}>{item.displayValue}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>

                    <div className="filters-item dropldown-filters">
                       <h4>Discount</h4>
                            <div className="dropldown-filters">
                                <select name="min_price" aria-label="minimum discount">
                                    <option value="0" key="min">Min</option>
                                    {discounts.map(item =>
                                            <option value={item} key={`min-${item}`}>{item}%</option>
                                        )
                                    }
                                </select>
                                <select name="max_price" aria-label="maximum discount">
                                    <option value={discounts[discounts.length-1]} key="max">Max</option>
                                    {discounts.map(item =>
                                            <option value={item} key={`max-${item}`}>{item}%</option>
                                        )
                                    }
                                </select>
                            </div>
                    </div>
            </form>
        </div>
    )
}

export default Filter;