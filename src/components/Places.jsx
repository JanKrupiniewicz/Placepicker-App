export default function Places({availablePlaces, handleClick, title, subtitle}) {
    return (
        <div className="container mx-auto p-5 m-5">
            <div className="space-y-4 border-2 border-cyan-400 rounded-md p-5">
                <h2 className="text-2xl text-cyan-400 text-center font-bold poppins-regular">
                    {title}
                </h2>
                <div className="space-y-4">
                    {availablePlaces.length ? availablePlaces.map(place => {
                        return (
                            <div key={place.id} onClick={() => handleClick(place.id)} className="rounded-md text-gray-500 hover:bg-gray-800 hover:text-gray-300">
                                <div className="flex p-3 space-x-8">
                                    <img
                                        className="h-32 w-32 object-cover rounded-lg"
                                        src={place.image.src}
                                        alt={place.image.alt}
                                    />
                                    <div className="space-y-2">
                                        <h3 className="text-xl poppins-regular font-bold">
                                            {place.title}
                                        </h3>
                                        <p className="poppins-light">
                                            Latitude: {place.lat}, Longitude: {place.lon}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    }) :
                    <p className="text-center text-gray-500">
                        {subtitle}
                    </p>}
                </div>
            </div>
        </div>
    );
}