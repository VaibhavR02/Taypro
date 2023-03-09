import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Taypro',
      email: 'admin@taypro.in',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Vaibhav',
      email: 'user@taypro.in',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  // tickets:[
  //   {
  //     robot_id:
  //   },

  // ]
};

export default data;
