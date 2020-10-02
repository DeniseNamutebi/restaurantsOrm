const db = require('./db')

class Restaurant {
    constructor(data){
    const restaurant = this
      restaurant.id = data.id
      restaurant.name = data.name
      restaurant.image = data.image

        if(restaurant.id){
            return Promise.resolve(restaurant)
        }else{
            return new Promise((resolve, reject) => {
                db.run('INSERT INTO restaurants(name, image) VALUES(?,?);', [restaurant.name, restaurant.image], 
                function(err){
                if (err) return reject(err)
                restaurant.id = this.lastID
                return resolve(restaurant)
                })
            })
        }
    }
}

class Menu {
    constructor(data){
    const menu = this
      menu.id = data.id
      menu.title = data.title
      menu.image = data.image

        if(menu.id){
            return Promise.resolve(menu)
        }else{
            return new Promise((resolve, reject) => {
                db.run('INSERT INTO menus(title, image) VALUES(?,?);', [menu.title, menu.image], 
                function(err){
                if (err) return reject(err)
                menu.id = this.lastID
                return resolve(menu)
                })
            })
        }
    }
}


class Item {
    constructor(data){
        const item = this
        item.id = data.id
        item.name = data.name
        item.price = data.price
        item.image = data.image

        if(item.id){
            return Promise.resolve(item)
        }else{
            return new Promise((resolve, reject) => {
                db.run('INSERT INTO items(name, price, image) VALUES(?,?,?);', [item.name, item.price, item.image], 
                function(err){
                    if (err) return reject(err)
                    item.id= this.lastID
                    return resolve(item)
                })
            })
           
        }
    }
}


module.exports = {Restaurant, Menu, Item}
