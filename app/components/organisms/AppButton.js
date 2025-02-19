function AppButton({ onClick, children, dir, white }) {
    return (
        <div onClick={onClick} className={`cursor-pointer flex items-center justify-center ${white ? "bg-white text-black" : dir === "tl" ? "bg-gradient-to-r text-white" : "bg-gradient-to-b text-white"} from-blue to-pink rounded-lg px-6 py-2`}>
            {children}
        </div>
    )
}

export default AppButton