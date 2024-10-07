import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

const users = [
  { name: 'jane', email: 'jane@jane.com' },
  { name: 'sam', email: 'sam@sam.com' },
];

test('render one row per user', () => {
  // Render the component
  
  render(<UserList users={users} />);

  // Find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  render(<UserList users={users} />);
  for (const value of users) {
    const name = screen.getByRole("cell", {name : value.name})
    const email = screen.getByRole("cell", {name : value.email})
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }
});
