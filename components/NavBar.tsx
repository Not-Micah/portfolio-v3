import { twMerge } from "tailwind-merge"

interface NavBarProps {
    className?: string
}

const NavBarLinks = [
    {label: "Hero"},
    {label: "Projects"},
    {label: "Skills"},
    {label: "Contact"}
]

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <nav
    className="
    w-[100vw]
    px-8 py-4
    flex justify-between items-center">
        <p>m.dev</p>
        <div className="flex items-center gap-x-4">
            {NavBarLinks.map((link, index) => (
                <a 
                key={index}
                className=""
                href="">
                    {link.label}
                </a>
            ))}
        </div>
    </nav>
  )
}

export default NavBar