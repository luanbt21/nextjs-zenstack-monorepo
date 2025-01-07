import { prisma } from "../../server/db";
import UserAction from "./user-action";

export default async function Home() {
  // await prisma.user.createMany({
  //   data: [
  //     { name: "Alice", email: "IqBdN@example.com" },
  //     { name: "Bob", email: "q3k6y@example.com" },
  //     { name: "Charlie", email: "TqR6e@example.com" },
  //   ],
  // });
  const users = await prisma.user.findMany();

  return (
    <main className="container mx-auto">
      <ul className="list-disc">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} <UserAction user={user} />
          </li>
        ))}
      </ul>
    </main>
  );
}
