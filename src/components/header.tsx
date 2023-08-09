import Image from "next/image";
import Link from "next/link";

export function Header() {
    return <header className="bg-slate-700 w-screen p-4 flex gap-4 items-center text-lg">
        <Image src="/images/gw.png" alt="GEWALTIG entertainment" height="0" width="0" sizes="100vw" className="h-12 w-auto" />
        <Link href="/" className="text-white hover:text-blue-600 transition-all">Cultris II</Link>
        <Link href="/c1" className="text-white hover:text-blue-600 transition-all">Cultris I</Link>
        <Link href="/about" className="text-white hover:text-blue-600 transition-all">About</Link>
    </header>
}