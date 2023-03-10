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

  tickets: [
    {
      SiteName: 'AVHADA',
      PlotNo: '09',
      BlockNo: '12',
      robot_id: '1234AVHADA',
      Fault: 'Cupling',
      DetailedIssue: 'xyz',
      ProblemSolved: false,
      PartsChanged: 'brushes',
      image: '/images/taypro1.jpg',
      status: 'Pending',
      OpenDate: Date,
      ClosedDate: Date,
    },
  ],
};

export default data;
