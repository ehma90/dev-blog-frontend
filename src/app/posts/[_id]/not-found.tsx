import Link from "next/link";
import { Button } from "../../../components";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#22223b] mb-4">
          Post Not Found
        </h1>
        <p className="text-[#4a4e69] mb-6">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
