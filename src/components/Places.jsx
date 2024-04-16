export default function Places({availablePlaces, handleClick, title, subtitle}) {
    return (
        <div className="container mx-auto p-5 m-5">
            <div className="space-y-4 border rounded-md p-5">
                <h2 className="text-2xl text-center font-bold">
                    {title}
                </h2>
                <div className="space-y-4">
                    {availablePlaces.length ? availablePlaces.map(place => {
                        return (
                            <div key={place.id} onClick={() => handleClick(place.id)} className="rounded-md hover:bg-gray-100">
                                <div className="flex p-3 space-x-8">
                                    <img
                                        className="h-32 w-32 object-cover rounded-lg"
                                        src={place.image.src}
                                        alt={place.image.alt}
                                    />
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">
                                            {place.title}
                                        </h3>
                                        <p>
                                            Latitude: {place.lat}, Longitude: {place.lon}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    }) :
                    <p className="text-center">
                        {subtitle}
                    </p>}
                </div>
            </div>
        </div>
    );
}