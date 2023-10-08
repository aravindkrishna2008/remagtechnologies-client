import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center ">
      <SignIn />
    </div>
  );
}
