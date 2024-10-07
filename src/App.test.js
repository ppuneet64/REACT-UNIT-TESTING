import { render, screen } from '@testing-library/react';

import App from './App';
import userEvent from '@testing-library/user-event';

test("App Should add list  in table after adding ", async () => {
    render(<App/>)

    const name = screen.getByRole("textbox", {name: /name/i})
    const email = screen.getByRole("textbox", {name: /email/i})
    const submit = screen.getByRole("button", {name: /Add User/i})

    await userEvent.type(name, "Puneet")
    await userEvent.type(email, "ppuneet64@gmail.com")
    await userEvent.click(submit)
    
    const nameEl = screen.getByRole("cell", {name : 'Puneet'})
    const emailEl = screen.getByRole("cell", {name : 'ppuneet64@gmail.com'})

    expect(nameEl).toBeInTheDocument()
    expect(emailEl).toBeInTheDocument()
})