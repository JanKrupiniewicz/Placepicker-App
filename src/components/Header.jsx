export default function Header() {
    return (
        <header className="text-center pt-8">
            <div className="flex justify-center mb-5">
                <img className="w-24 h-24" src="logo.png" alt="PlacePicker Logo"/>
            </div>
            <h1 className="text-5xl text-white uppercase font-bold mb-2 poppins-regular">
                P l a c e P i c k e r
            </h1>
            <p className="text-gray-400 poppins-light">
                Create your personal collection of places you would like to visid or you have visited. 
            </p>
        </header>
    );
}