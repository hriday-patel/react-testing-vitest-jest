import { screen, render } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("testing userlist component", () => {
  it("no users", () => {
    render(<UserList users={[]} />);
    const msg = screen.getByText(/no users/i);
    expect(msg).toBeInTheDocument();
  });
  it("have users", () => {
    const users: User[] = [
      {
        id: 1,
        name: "Hriday",
      },
      {
        id: 2,
        name: "Kulin",
      },
    ];
    render(<UserList users={users} />);

    users.map((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
