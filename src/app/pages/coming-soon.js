const ComingSoon = () => {
    return (
        <div
            className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
            style={{
                backgroundImage: "url('/images/coming-soon-bg.jpg')", // Arka plan görseli
                backgroundPosition: "center", // Görselin merkezi
                backgroundSize: "cover", // Görselin ekranı tamamen kaplamasını sağla
                backgroundAttachment: "fixed", // Görselin sabit kalmasını sağla
            }}
        >
            <div className="text-center px-4">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight drop-shadow-lg">
                    Çok Yakında

                </h1>
            </div>
        </div>
    );
};

export default ComingSoon;