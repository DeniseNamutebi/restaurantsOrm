const db = require('./db')
const {Restaurant, Menu, Item} = require('./models')

describe("restaurants", () => {
    beforeAll((done) => {
        db.exec('CREATE TABLE restaurants(id INTEGER PRIMARY KEY, name TEXT, image TEXT);', done)
    })

    test("when restaurant is created it is added to the database", async() =>{
        const restaurant = await new Restaurant({name: "Padella", image: "image.url"})
        expect(restaurant.id).toBe(1)
    })

    test('create a restaurant for the data row', async() => {
        db.get('SELECT * FROM restaurants WHERE id=1;', async(err, row) => {
            expect(row.name).toBe("Padella")
            const restaurant = await new Restaurant(row)
            expect(restaurant.id).toBe(1)
            expect(restaurant.name).toEqual('Padella')
            done()
        })
    })


})

describe("menus", () => {
    beforeAll((done) => {
        db.exec('CREATE TABLE menus(id INTEGER PRIMARY KEY, title TEXT, image TEXT);', done)
    })

    test("when menu is created it is added to the database", async() =>{
        const menu = await new Menu({title: "Wine Menu", image: "image.url"})
        expect(menu.id).toBe(1)
    })

    test('create a menu for the data row', async() => {
        db.get('SELECT * FROM menus WHERE id=1;', async(err, row) => {
            expect(row.title).toBe("Wine Menu")
            const menu = await new Menu(row)
            expect(menu.id).toBe(1)
            expect(menu.title).toEqual('Wine Menu')
            done()
        })
    })


})


describe("items", () => {
    beforeAll((done) => {
        db.exec('CREATE TABLE items(id INTEGER PRIMARY KEY, name TEXT, price FLOAT, image TEXT);', done)
    })

    test("when item is created it is added to the database", async() =>{
        const item = await new Item({name: "Steak", price: 18.95, image: "image.url"})
        expect(item.id).toBe(1)
    })

    test('create a item for the data row', async() => {
        db.get('SELECT * FROM items WHERE id=1;', async(err, row) => {
            expect(row.name).toBe("Steak")
            const item = await new Item(row)
            expect(item.id).toBe(1)
            expect(item.name).toEqual('Steak')
            done()
        })
    })


})


