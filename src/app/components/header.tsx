import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="p-4">
        <div className="web-name flex">EduTech Insights</div>
        <ul className="container flex gap-8">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/responsive-2">About</Link></li>
          <li><Link href="/responsive">Courses</Link></li>
        </ul>
      </nav>
    </header>
  );
}