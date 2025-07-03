
const clients = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Meta', logo: 'https://pngimg.com/uploads/meta/meta_PNG5.png' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
];

const TrustedClients = () => {
    // Double the list so it loops smoothly
    const scrollingClients = clients.concat(clients);

    return (
        <>
            <section id="clients ">
                <div className="overflow-hidden bg-white py-6">
                    <div className="animate-scroll gap-12 items-center px-6">
                        {scrollingClients.map((client, index) => (
                            <div key={index} className="flex flex-col items-center mx-6">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-12 w-auto object-contain"
                                />
                                <span className="text-sm text-gray-600 mt-2">{client.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrustedClients;
