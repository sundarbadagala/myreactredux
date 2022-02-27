import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductsRequest} from '../../redux/actions/productsActions'

function Index() {
    const dispatch = useDispatch()
    const {data, error, isLoading} = useSelector(state => state.products)
    
    useEffect(()=>{
        dispatch(fetchProductsRequest())
    },[])
    return (
        <div>
            {
                data && data.map(item => <div>{item.title}</div>)
            }
        </div>
    )
}

export default Index
