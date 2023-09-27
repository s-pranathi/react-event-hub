import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin user',
        email: 'adminuser@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Barb Akew',
        email: 'barbakew@example.com',
        password: bcrypt.hashSync('000000', 10)
    },
    {
        name: 'Winnie Pooh',
        email: 'winniepooh@example.com',
        password: bcrypt.hashSync('333333', 10)
    },
    {
        name: 'Bob',
        email: 'bob@example.com',
        password: bcrypt.hashSync('666666', 10)
    }
]

export default users