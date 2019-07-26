import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

import { categories as mockCategories } from '../../../api/db.json';

export const ListOfCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(function () {
        window.fetch('https://petgram-server-backend-kailalkalil-ge2t2j0ib.now.sh/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
            })
    }, [])

    return (
        <List>
            {
                mockCategories.map((cate, index) =>
                    <Item key={cate.id}>
                        <Category {...cate} />
                    </Item>
                )
            }
        </List>
    )
}
