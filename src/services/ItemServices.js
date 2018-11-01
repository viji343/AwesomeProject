import { db } from '../config/Firebase';

export const addItem =  (item) => {
    db.ref('/items').push({
        name: item
    });
}