import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function Comments() {
  const comments = await getUsers();
  return (
    <>
      <h2 className="text-3xl font-semibold mt-6">Comments</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 py-6">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              officia natus nulla reprehenderit aliquid quisquam velit, hic
              corrupti facere aperiam iure vitae quidem molestias ullam! Non
              ullam quia suscipit magnam?
            </CardContent>
            <CardHeader className="flex items-center gap-x-2">
              <CardTitle>
                <Avatar>
                  <AvatarImage
                    src={"https://picsum.photos/id/" + comment.id + "00/36/36"}
                  />
                  <AvatarFallback>{comment.name} Profil Image</AvatarFallback>
                </Avatar>
              </CardTitle>
              <CardDescription className="flex flex-col">
                <span className="text-gray-900 font-semibold">
                  {comment.name}
                </span>
                <span>{comment.company.name}</span>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
