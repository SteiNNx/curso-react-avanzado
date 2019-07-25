import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

import { categories } from '../../../api/db.json';

export const ListOfCategories = () => {
    return (
        <List>
            {
                categories.map((cate, index) =>
                    <Item key={cate.id}>
                        <Category {...cate} />
                    </Item>
                )
            }
        </List>
    )
}
